// app/components/location-section.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class LocationSectionComponent extends Component {
  

   @tracked locations = [
    {
      id: "tshwane",
      name: "TMC Tshwane",
      address: "376 Steve Biko Road, Acardia Centre, Acardia",
      serviceTimes: "Sun: 9:30 AM & 12:00 AM",
      directions: "https://maps.app.goo.gl/tdn6t8rAY5FQc2Rr9",
      phone: "+27 2071 4567",
      email: "tshwane@methodist.tmc",
      facebookUrl: "https://www.facebook.com/share/18FmjXtkwv/"
    },
    {
      name: "TMC Northrand",
      address: "46 2nd Street Maraisburg, Johhannesburg",
      serviceTimes: "Sun: 9:00 AM | Thu: 7:00 PM Prayer",
      directions: "https://goo.gl/maps/example2",
      phone: "+27 2076 543 210",
      email: "northrand@methodist.tmc",
      facebookUrl: "https://facebook.com/tmc"
    },
    {
        name: "TMC Eastrand",
        address: "456 Grace Street, London E1 6AN",
        serviceTimes: "Sun: 9:00 AM | Thu: 7:00 PM Prayer",
        directions: "https://goo.gl/maps/example2",
        phone: "+27 7654 3210",
        email: "eastrand@methodist.tmc",
        facebookUrl: "https://facebook.com/tmc-eastchapel"
      },
      {
        name: "TMC Limpopo",
        address: "123 Limpopo Road, Limpopo",
        serviceTimes: "Sun: 9:00 AM | Thu: 7:00 PM Prayer",
        directions: "https://goo.gl/maps/example2",
        phone: "+27 2076 543 210",
        email: "limpopo@methodist.tmc",
        facebookUrl: "https://facebook.com/tmc"
      },
      {
        name: "TMC Free State",
        address: "58 Portia Street Bedelia, Welkom 9459",
        serviceTimes: "Sun: 9:30 AM | Thu: 12:30 PM Prayer",
        directions: "https://goo.gl/maps/example2",
        phone: "+27 67 030 9355",
        email: "freestate@methodist.tmc",
        facebookUrl: "https://facebook.com/tmc"
      },
      {
        name: "TMC Mafikeng",
        address: "34a Church Hill Ave, Golfview, Mafikeng",
        serviceTimes: "Sun: 9:00 AM | Thu: 12:30 PM Prayer",
        directions: "https://goo.gl/maps/example2",
        phone: "+27 83 748 3419",
        email: "platinum@methodist.tmc",
        facebookUrl: "https://facebook.com/tmc"
      },
      {
        name: "TMC Rustenburg",
        address: "180 Klopper Street, Rusternburg",
        serviceTimes: "Sun: 9:00 AM | Thu: 7:00 PM Prayer",
        directions: "https://goo.gl/maps/example2",
        phone: "+27 78 653 5078",
        email: "platinum@methodist.tmc",
        facebookUrl: "https://facebook.com/tmc"
      },
      {
        name: "TMC Vaal Triangle",
        address: "123 Limpopo Road, Limpopo",
        serviceTimes: "Sun: 9:00 AM | Thu: 7:00 PM Prayer",
        directions: "https://goo.gl/maps/example2",
        phone: "+27 2076 543 210",
        email: "vaaltriangle@methodist.tmc",
        facebookUrl: "https://facebook.com/tmc"
      },
      {
        name: "TMC Southrand",
        address: "123 Limpopo Road, Limpopo",
        serviceTimes: "Sun: 9:00 AM | Thu: 7:00 PM Prayer",
        directions: "https://goo.gl/maps/example2",
        phone: "+27 2076 543 210",
        email: "southrand@methodist.tmc",
        facebookUrl: "https://facebook.com/tmc"
      },  

    
  ];
}