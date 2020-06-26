using System;
using System.Collections.Generic;

using System.ComponentModel.DataAnnotations;
using System.Text;
namespace Parniyan.DataLayer.Entities.User
{
   public class Role
    {
        [Key]
        public int RoleId { get; set; }
        [Display(Name = "نام نقش")]
        [Required(ErrorMessage = "لطفاً {0}را وارد نمایید")]
        [MaxLength(200,ErrorMessage = "تعداد کاراکتر برای  {1} بیشتر از حد مجاز است")]
        public string RoleName { get; set; }

        [Display(Name = "عنوان نقش")]
        [Required(ErrorMessage = "لطفاً {0}را وارد نمایید")]
        [MaxLength(200, ErrorMessage = "تعداد کاراکتر برای  {1} بیشتر از حد مجاز است")]
        public string RoleTiltle { get; set; }
        public bool IsDelete { get; set; }


        #region Realtion  

        public List<UserRole> UserRoles { get; set; }
#endregion

    }
}
