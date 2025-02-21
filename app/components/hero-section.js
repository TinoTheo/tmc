import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class HeroSectionComponent extends Component {
  @action
  scrollToLocations() {
    document.getElementById('locations')?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
