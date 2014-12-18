using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace FYP.Models
{
    public class RandomStringGenerator
    {
        public static string GetRandomString()
        {
            string path = Path.GetRandomFileName();
            path = path.Replace(".", ""); // Remove period.
            return path;
        }
    }
}