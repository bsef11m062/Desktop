using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace FYP.Models
{
    public class MyIdentityUser : IdentityUser
    {
        public string Email { get; set; }
        public Boolean EmailConfirmed { get; set; }
    }
}