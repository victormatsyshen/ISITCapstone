using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace CrocodileAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        //Reads the connections string of ItemAppCon into the controller
        private readonly IConfiguration _configuration;
        public ItemController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        //gets all the Items from the Item table from the online Crocodile Database
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                           select Item_ID, Item_name,Item_type,Maker,Size_Dimension_Weight,Condition,Accesion_date,Collector,Item_narrative,QR_Code,Image_url,Video_url from
                           dbo.Item

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
        //Gets a specific item by ID from the Corcodile Database
        [HttpGet("{id}")]
        public JsonResult GetID(int id)
        {
            string query = @"
                            select Item_ID, Item_name,Item_type,Maker,Size_Dimension_Weight,Condition,Accesion_date,Collector,Item_narrative,QR_Code,Image_url,Video_url from
                            dbo.Item
                            where Item_ID=@Item_ID

                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ItemAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Item_ID", id);
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
