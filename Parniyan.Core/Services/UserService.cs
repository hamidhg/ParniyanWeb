using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore.Internal;
using Parniyan.Core.Services.Interface;
using Parniyan.DataLayer.Context;

namespace Parniyan.Core.Services
{
   public class UserService:IUserService
   {
       private ParniyanContext DB;

       public UserService(ParniyanContext context)
       {
           DB = context;
       }

        public bool IsExistEmail(string email)
        {
           return DB.Users.Any(e => e.Email == email);
        }

        public bool IsExistMobileNumber(string mobile)
        {
         return DB.Users.Any(m => m.Mobile == mobile);

        }
    }
}
