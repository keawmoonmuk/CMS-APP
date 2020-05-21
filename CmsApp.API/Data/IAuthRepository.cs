using System.Threading.Tasks;
using CmsApp.API.Models;

namespace CmsApp.API.Data
{
    public interface IAuthRepository
    {
        Task<User> Resiger(User user,string password);
         Task<User> Login(string username,string password);
         Task<bool> UserExists(string username);
    }
}