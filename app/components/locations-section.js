// app/components/location-section.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class LocationSectionComponent extends Component {
  

   @tracked locations = [
    {
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
    
  ];
}