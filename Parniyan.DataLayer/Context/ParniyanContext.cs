using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Parniyan.DataLayer.Entities.User;

namespace Parniyan.DataLayer.Context
{
   public class ParniyanContext:DbContext
    {
        public ParniyanContext(DbContextOptions<ParniyanContext> options):base(options)
        {
            
        }

        #region User
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }


        #endregion


    }
}
