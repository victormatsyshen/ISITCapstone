using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrocodileAPI.Models
{
    //This model can call the values from the Customer table based on its name, these are then used in the controller to communicate with the SQL database
    public class Customer
    {
        public int CustomerKey { get; set; }
        public string First_name { get; set; }
        public string Last_name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
