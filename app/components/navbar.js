// app/components/nav-bar.js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class NavBarComponent extends Component {
  @tracked isMenuOpen = false;
  @tracked isScrolled = false; // NEW tracked property for scroll state
  @tracked isLocationsOpen = false;

  locationItems = [
    { id: 'tshwane', name: 'Tshwane TMC' },
    { id: 'north-rand', name: 'North Rand TMC' },
    { id: 'platinum', name: 'Platinum TMC' },
    { id: 'free-state', name: 'Free State TMC' },
    { id: 'limpopo', name: 'Limpopo TMC' },
    { id: 'south-rand', name: 'South Rand TMC' },
    { id: 'east-rand', name: 'East Rand TMC' },
    { id: 'vaal-triangle', name: 'Vaal Triangle TMC' }
  ];

  @action
  toggleDropdown(dropdownType) {
    if (dropdownType === 'locations') {
      this.isLocationsOpen = !this.isLocationsOpen;
    }
  }

  @action
  navigateToLocation(locationId, event) {
    event.preventDefault();
    this.isMobileMenuOpen = false;
    this.isLocationsOpen = false;
    document.getElementById('locations')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    // Add logic to highlight specific location if needed
  }
  constructor() {
    super(...arguments);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleScroll = this.handleScroll.bind(this); // bind the scroll handler
    document.addEventListener('click', this.handleClickOutside);
    window.addEventListener('scroll', this.handleScroll); // add scroll event listener
  }

  willDestroy() {
    super.willDestroy();
    document.removeEventListener('click', this.handleClickOutside);
    window.removeEventListener('scroll', this.handleScroll); // remove scroll listener
  }

  handleClickOutside(event) {
    const navElement = document.querySelector('.nav-container');
    if (this.isMenuOpen && !event.target.closest('.nav-container')) {
      this.isMenuOpen = false;
    }
  }

  // NEW scroll handler: toggles isScrolled based on scroll position
  handleScroll() {
    if (window.scrollY > 0 && !this.isScrolled) {
      this.isScrolled = true;
    } else if (window.scrollY === 0 && this.isScrolled) {
      this.isScrolled = false;
    }
  }

  @action
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @action
  closeMenu() {
    this.isMenuOpen = false;
  }
}
