using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CmsApp.API.Data;    //  Import data
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CmsApp.API.Controllers
{
    //http:locahosL500/api/values
    [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;

        public ValuesController(DataContext context)
        {
            _context = context;

        }

        // GET: api/value
        [HttpGet]
        public IActionResult Getvalues()
        {
            var values = _context.Values.ToList();
            return Ok(values);
        }

        // GET api/<values>/5
        [HttpGet("{id}")]
        public IActionResult Getvalue(int id)
        {
            var value = _context.Values.FirstOrDefault(x => x.Id == id);
            return Ok(value);
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
