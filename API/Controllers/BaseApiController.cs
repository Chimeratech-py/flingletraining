using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using API.Helpers;

namespace API.Controllers
{
    [ServiceFilter(typeof(LogUserActivity))]
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        
    }
}
