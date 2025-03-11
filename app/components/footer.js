import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class SiteFooterComponent extends Component {
  @tracked currentYear = new Date().getFullYear();

  footerLinks = [
    { label: 'Our Beliefs', url: '#beliefs' },
    { label: 'Ministries', url: '#ministries' },
    { label: 'Sermons', url: '#sermons' },
    { label: 'Events', url: '#events' }
  ];

  socialLinks = [
    { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/share/1A1ybDUQD7/' },
    { name: 'YouTube', icon: 'youtube', url: '#' },
  ];
}