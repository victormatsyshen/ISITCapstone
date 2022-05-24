using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrocodileAPI.Models
{
    public class Customer
    {
        public int CustomerKey { get; set; }
        public string First_name { get; set; }
        public string Last_name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
