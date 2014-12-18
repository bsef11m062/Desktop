using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Lucene.Net.QueryParsers;
using Lucene.Net.Documents;
using Lucene.Net.Analysis;
using Lucene.Net.Util;
using Lucene.Net.Store;
using Lucene.Net.Search;
using Lucene.Net.Index;
using System.IO;
using Lucene.Net.Analysis.Standard;
using System.Data.Entity;

namespace FYP.Models
{
    public class Ninject : INInject
    {

        DatabaseEntities entities = new DatabaseEntities();

        public void AddSearchInfo(Search s)
        {
            entities.Searches.Add(s);
            entities.SaveChanges();
        }

        public Boolean CheckEmailAvailability(String Email)
        {
            Entities e = new Entities();
            var user=e.AspNetUsers.FirstOrDefault(x=>x.Email.Equals(Email));
            if(user!=null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        public Boolean SearchResultExists(String uName, String query)
        {
            Search s = entities.Searches.FirstOrDefault(x => x.UserName == uName && x.SearchQuery == query);
            if (s != null)
            {
                s.Time = DateTime.Now.ToString("h:mm:ss tt");
                s.Date = DateTime.Now.ToString("d/MM/yyyy");
                entities.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }


        private void AddQueryToLucene(String path, String query)
        {
            Lucene.Net.Store.Directory dir = FSDirectory.Open(path);
            Analyzer analyzer = new StandardAnalyzer(Lucene.Net.Util.Version.LUCENE_21);
            IndexWriter writer = new IndexWriter(dir, analyzer, true, IndexWriter.MaxFieldLength.UNLIMITED);
            var a = entities.LuceneDatas.Find(query);
            if (a == null)
            {
                entities.LuceneDatas.Add(new LuceneData { Search = query });
                entities.SaveChanges();
            }
            foreach (LuceneData ld in entities.LuceneDatas)
            {
                Document doc = new Document();
                doc.Add(new Field("Leo", ld.Search,
                                Field.Store.YES, Field.Index.ANALYZED, Field.TermVector.YES));
                writer.AddDocument(doc);

            }
            writer.Optimize();
            writer.Dispose();
        }

        public List<String> SearchAutoCompleteData(String querytxt)
        {
            List<String> list = entities.LuceneDatas.Where(x => x.Search.Contains(querytxt)).Select(x => x.Search).ToList();
            if (list.Count >= 10)
                list.RemoveRange(10, list.Count);
            return list;

        }
        private ScoreDoc[] SearchAll(String Query, Searcher searcher, Lucene.Net.Store.Directory dir, String path)
        {
            Analyzer analyzer = new StandardAnalyzer(Lucene.Net.Util.Version.LUCENE_21);
            QueryParser parser = new QueryParser(Lucene.Net.Util.Version.LUCENE_29, "Leo", analyzer);
            Lucene.Net.Search.Query query = parser.Parse(Query);
            TopScoreDocCollector collector = TopScoreDocCollector.Create(100, true);
            searcher.Search(query, collector);
            ScoreDoc[] hits = collector.TopDocs().ScoreDocs;
            hits = hits.OrderBy(x => x.Score).ToArray();
            return hits;
        }
        public List<Search> SearchData(String Query, String User, String path)
        {
            AddQueryToLucene(path, Query);
            List<Search> list = new List<Search>();
            Lucene.Net.Store.Directory dir = FSDirectory.Open(path);
            IndexReader reader = IndexReader.Open(dir, true);
            int numberOfDocs = reader.MaxDoc;
            Searcher searcher = new IndexSearcher(reader);
            ScoreDoc[] hits = SearchAll(Query, searcher, dir, path);
            for (int i = 0; i < hits.Length; i++)
            {
                int docId = hits[i].Doc;
                float score = hits[i].Score;
                Document d = searcher.Doc(docId);
                String q = d.Get("Leo");
                list.AddRange(entities.Searches.Where(x => x.SearchQuery.Equals(q) && (!x.UserName.Equals(User))).ToList());
            }
            return list;
        }
        public void AddUser(String user)
        {
            entities.OnlineUsers.Add(new OnlineUser { IsOnline = false, UserName = user });
            entities.SaveChanges();
        }

        public bool IsOnline(String UserName)
        {
            OnlineUser user=entities.OnlineUsers.Find(UserName);
            return user.IsOnline;
        }

        public void MarkOnline(String UserName)
        {
            OnlineUser user = entities.OnlineUsers.Find(UserName);
            user.IsOnline = true;
            entities.Entry(user).State = EntityState.Modified;
            entities.SaveChanges();
        }

        public void MarkOffline(String UserName)
        {
            OnlineUser user = entities.OnlineUsers.Find(UserName);
            user.IsOnline = false;
            entities.Entry(user).State = EntityState.Modified;
            entities.SaveChanges();
        }
    }
}