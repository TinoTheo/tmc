// app/components/location-section.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class LocationSectionComponent extends Component {
  

   @tracked locations = [
    {
      
      name: "TMC Tshwane",
      address: "376 Steve Biko Road, Acardia Centre, Acardia",
      serviceTimes: "Sun: 9:30 AM | Mid Week: 6:30 PM",
      directions: "https://maps.app.goo.gl/DXDbqZ5GcQ3NX6bF7",
      phone_a: "+27 78 277 1027",
      phone_b: "+27 78 775 5814",
      facebookUrl: "https://www.facebook.com/share/18FmjXtkwv/"
    },
    {
      name: "TMC Northrand",
      address: "46 2nd Street Maraisburg, Johhannesburg",
      serviceTimes: "Sun: 9:00 AM | Mid Week: 6:30 PM",
      directions: "https://maps.app.goo.gl/sV2Ndg6zdY47ij9i6",
      phone_a: "+27 72 221 2524",
      phone_b: "+27 76 593 6458",
      facebookUrl: "https://www.facebook.com/share/1AfYcC52xF/"
    },
    {
      name: "TMC Mafikeng",
      address: "34 Church Hill Ave, Golfview, Mafikeng",
      serviceTimes: "Sun: 9:00 AM | Mid Week: 6:30 PM",
      directions: "https://maps.app.goo.gl/8cW5w6xJ9y1oNKQ66",
      phone_a: "+27 83 748 3419",
      phone_b: "+27 78 924 5772",
      facebookUrl: "https://www.facebook.com/share/156W7zPP4m/?mibextid=wwXIfr"
    },
    {
      name: "TMC Rustenburg",
      address: "180 Klopper Street, Rusternburg",
      serviceTimes: "Sun: 9:00 AM | Mid Week: 6:30 PM",
      directions: "https://maps.app.goo.gl/TdKRoj4B7wAnQTDi9",
      phone_a: "+27 83 619 3336",
      phone_b: "+27 78 653 5078",
      facebookUrl: "https://www.facebook.com/share/156W7zPP4m/?mibextid=wwXIfr"
    },
    {
      
      name: "TMC Free State",
      address: "58 Portia Street Bedelia, Welkom 9459",
      serviceTimes: "Sun: 9:30 AM | Mid Week: 6:30 PM",
      directions: "https://maps.app.goo.gl/AAfdYb7Zrp1ZaxBC8",
      phone_a: "+27 63 759 6627",
      phone_b: "+27 74 775 8118",
      facebookUrl: "https://www.facebook.com/share/15oLBBNexz/"
    },
    {
      name: "TMC Limpopo",
      address: "92 Schoeman street, Polokwane, Rostec College Building ",
      serviceTimes: "Sun: 9:00 AM | Mid Week: 6:30 PM",
      directions: "https://maps.app.goo.gl/1QtSA2PkMwzrUf1v7",
      phone_a: "+27 2076 543 210",
      phone_b: "+27 78 924 5772",
      facebookUrl: "https://www.facebook.com/share/1AFMK7J4iu/"
    },
      {
        name: "TMC Southrand",
        address: "123 Limpopo Road, Limpopo",
        serviceTimes: "Sun: 9:00 AM | Mid Week: 6:30 PM",
        directions: "https://goo.gl/maps/example2",
        phone_a: "+27 2076 543 210",
        facebookUrl: "#"
      },  
      {
        name: "TMC Eastrand",
        address: "10 Top Road, Anderbolt, Boksburg",
        serviceTimes: "Sun: 9:00 AM | Mid Week: 6:30 PM",
        directions: "https://maps.app.goo.gl/uctmm28voBGs6WjAA",
        phone_a: "+27 78 277 1027",
        phone_b: "+27 2071 4567",
        facebookUrl: "https://www.facebook.com/share/1ZNGEQapGt/"
      },


      {
        name: "TMC Vaal Triangle",
        address: "Academy at Vaal Triangle 20 Voortrekker Street, CBD, Vereeniging, 1939",
        serviceTimes: "Sun: 9:00 AM | Mid Week: 6:30 PM",
        directions: "https://maps.app.goo.gl/HGb8thbvSkvuFEMT8",
        phone_a: "+27 76 948 5618",
        phone_b: "+27 76 593 6458",
        facebookUrl: "https://www.facebook.com/share/18k7UitSsL/"
      },

    
  ];
}