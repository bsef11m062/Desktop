using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYP.Models
{
    public interface INInject
    {
        void AddSearchInfo(Search s);
        Boolean SearchResultExists(String uName, String query);
        List<String> SearchAutoCompleteData(String query);
        List<Search> SearchData(String query,String User,String path);
        void AddUser(String name);
        Boolean CheckEmailAvailability(String Email);

        bool IsOnline(String UserName);

        void MarkOnline(String UserName);

        void MarkOffline(String UserName);
    }
}
