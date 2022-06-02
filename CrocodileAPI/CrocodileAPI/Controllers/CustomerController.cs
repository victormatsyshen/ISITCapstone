using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using CrocodileAPI.Models;

namespace CrocodileAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public CustomerController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                           select CustomerKey,First_name,Last_name,Email,Password from
                           dbo.Customers

                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ItemAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

            

            [HttpPost]
            public JsonResult Post(Customer cus)
            {
                string query = @"
                            insert into dbo.Customers
                            (First_name,Last_name,Email,Password)
                     values (@First_name,@Last_name,@Email,@Password)

                            ";
                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("ItemAppCon");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@First_name", cus.First_name);
                        myCommand.Parameters.AddWithValue("@Last_name", cus.Last_name);
                        myCommand.Parameters.AddWithValue("@Email", cus.Email);
                        myCommand.Parameters.AddWithValue("@Password", cus.Password);
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        myCon.Close();
                    }
                }
                return new JsonResult("Post Successful");
            }

        [HttpGet("{email}")]
        public JsonResult GetByEmail(string email)
        {
            string query = @"
                           select CustomerKey,First_name,Last_name,Email,Password from
                           dbo.Customers
                           where Email = @Email

                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ItemAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Email", email);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }


    }
}
