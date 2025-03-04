// app/components/location-section.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class LocationSectionComponent extends Component {
  

   @tracked locations = [
    {
      id: "tshwane",
      name: "TMC Tshwane",
      address: "376 Steve Biko Road, Acardia Centre, Acardia",
      serviceTimes: "Sun: 9:30 AM & 12:00 AM | Mid Week: 18:30",
      directions: "https://maps.app.goo.gl/tdn6t8rAY5FQc2Rr9",
      phone: "+27 2071 4567",
      facebookUrl: "https://www.facebook.com/share/18FmjXtkwv/"
    },
    {
      name: "TMC Northrand",
      address: "46 2nd Street Maraisburg, Johhannesburg",
      serviceTimes: "Sun: 9:00 AM | Mid Week: 18:30 PM",
      directions: "https://maps.app.goo.gl/4duqXhkZWvuHdgmT6",
      phone: "+27 72 221 2524 | +27 76 593 6458",
      facebookUrl: "https://www.facebook.com/share/1AfYcC52xF/"
    },
    {
      name: "TMC Mafikeng",
      address: "34a Church Hill Ave, Golfview, Mafikeng",
      serviceTimes: "Sun: 9:00 AM | Thu: 12:30 PM Prayer",
      directions: "https://maps.app.goo.gl/PGwcSAqnttzAy7Pq7",
      phone: "+27 83 748 3419 | 27 78 924 5772",
      facebookUrl: "https://www.facebook.com/share/156W7zPP4m/?mibextid=wwXIfr"
    },
    {
      name: "TMC Rustenburg",
      address: "180 Klopper Street, Rusternburg",
      serviceTimes: "Sun: 9:00 AM | Thu: 12:30 PM Prayer",
      directions: "https://maps.app.goo.gl/PGwcSAqnttzAy7Pq7",
      phone: "+27 83 619 3336 | +27 78 653 5078",
      facebookUrl: "https://www.facebook.com/share/156W7zPP4m/?mibextid=wwXIfr"
    },
    {
      name: "TMC Free State",
      address: "58 Portia Street Bedelia, Welkom 9459",
      serviceTimes: "Sun: 9:30 AM | Thu: 12:30 PM Prayer",
      directions: "https://maps.app.goo.gl/fSSJnr5jShfBUeFDA",
      phone: "+27 63 759 6627 | +27 74 775 8118",
      facebookUrl: "https://facebook.com/tmc"
    },
    {
      name: "TMC Limpopo",
      address: "123 Limpopo Road, Limpopo",
      serviceTimes: "Sun: 9:00 AM | Thu: 7:00 PM Prayer",
      directions: "https://goo.gl/maps/example2",
      phone: "+27 2076 543 210",
      facebookUrl: "https://www.facebook.com/share/1AFMK7J4iu/"
    },
      {
        name: "TMC Southrand",
        address: "123 Limpopo Road, Limpopo",
        serviceTimes: "Sun: 9:00 AM | Thu: 7:00 PM Prayer",
        directions: "https://goo.gl/maps/example2",
        phone: "+27 2076 543 210",
        facebookUrl: "#"
      },  
      {
        name: "TMC Eastrand",
        address: "456 Grace Street, London E1 6AN",
        serviceTimes: "Sun: 9:00 AM | Thu: 7:00 PM Prayer",
        directions: "https://goo.gl/maps/example2",
        phone: "+27 7654 3210",
        facebookUrl: "https://facebook.com/tmc-eastchapel"
      },


      {
        name: "TMC Vaal Triangle",
        address: "123 Limpopo Road, Limpopo",
        serviceTimes: "Sun: 9:00 AM | Thu: 7:00 PM Prayer",
        directions: "https://goo.gl/maps/example2",
        phone: "+27 2076 543 210",
        facebookUrl: "https://facebook.com/tmc"
      },

    
  ];
}