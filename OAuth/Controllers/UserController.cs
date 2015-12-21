using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Threading.Tasks;

using System.Security.Claims;

namespace OAuth.Controllers
{
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        [Route("")]
        public IHttpActionResult Get()
        {
            ClaimsPrincipal principal = Request.GetRequestContext().Principal as ClaimsPrincipal;

            var Name = ClaimsPrincipal.Current.Identity.Name;
            var Name1 = User.Identity.Name;

            //var userName = principal.Claims.Where(c => c.Type == "sub").Single().Value;

            if (!User.Identity.IsAuthenticated)
            {
                return Ok();
            }

            return Ok(new UserInfo()
            {
                UserName = Name,
                IsAuthenticated = User.Identity.IsAuthenticated
            });

            //return Ok(Order.CreateOrders());
        }
    }

    public class UserInfo
    {
        public string UserName { get; set; }

        public bool IsAuthenticated { get; set; }
    }

  

}
