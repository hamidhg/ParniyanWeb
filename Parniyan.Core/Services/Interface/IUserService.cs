using System;
using System.Collections.Generic;
using System.Text;
using Parniyan.DataLayer.Entities.User;

namespace Parniyan.Core.Services.Interface
{
    public interface IUserService
    {
        bool IsExistEmail(string email);
        bool IsExistMobileNumber(string mobile);
    }

}
