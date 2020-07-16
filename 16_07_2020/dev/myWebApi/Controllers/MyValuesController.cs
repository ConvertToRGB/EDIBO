using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace myWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class MyValuesController : ControllerBase
    {
        //Get api/myvalues
        [HttpGet]

        public ActionResult<IEnumerable<string>>Get()
        {
            return new string[]{"July", "2020", "EDIBO", "RTU", "Eugene"};
        }
    }
}
