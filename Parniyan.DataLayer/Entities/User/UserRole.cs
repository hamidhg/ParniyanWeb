using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;


namespace Parniyan.DataLayer.Entities.User
{
    public class UserRole
    {
        [Key]
        public int UserRoleId { get; set; }
        public int UserId { get; set; }
        public int RoleId { get; set; }


        #region Relation

        public User User { get; set; }
        public Role Role { get; set; }


        #endregion
    }
}
