using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrocodileAPI.Models
{
    public class Item
    {
        public int ItemKey { get; set; }
        public int Item_ID { get; set; }
        public string Item_name { get; set; }
        public string Item_type { get; set; }
        public string Maker { get; set; }
        public string Material { get; set; }
        public string Size_Dimension_Weight { get; set; }
        public string Condition { get; set; }
        public string Accesion_date { get; set; }
        public string Collector { get; set; }
        public string Item_narrative { get; set; }
        public string Item_Provenance { get; set; }
        public string Cross_references { get; set; }


    }
}
