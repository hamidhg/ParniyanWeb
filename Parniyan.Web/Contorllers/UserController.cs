using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Parniyan.Web.Contorllers
{
    public class UserController : Controller
    {
        //[Route("Register")]
        //public IActionResult Register()
        //{
        //    return View();
        //}
        //public string register()
        //{
        //    return "Regsiter";
        //}
       [Route("Register")]
        public IActionResult Register()
        {
            return View();
        }
    }
}
