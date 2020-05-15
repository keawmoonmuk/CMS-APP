using CmsApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CmsApp.API.Data
{
    public class DataContext:DbContext
    {
        
        public DataContext(DbContextOptions<DataContext> option) : base(option){}

        public DbSet<Value> Values {get;set;}
    }
}