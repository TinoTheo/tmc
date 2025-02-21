// app/components/information-section.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class InformationSectionComponent extends Component {
  @tracked preachingPoints = [
    {
      title: "Faithful Worship",
      description: "Maintaining the integrity and reverence of our worship practices"
    },
    {
      title: "Community Service",
      description: " Continuing our strong tradition of outreach and support within our local community and beyond."
    },
    {
      title: "Spiritual Growth",
      description: "Fostering an environment that encourages personal and collective spiritual development"
    },
    {
      title:"Biblical Teaching:",
      description:" Upholding the teachings of the Bible as the cornerstone of our faithand practice."

    }
  ];

  @action
  scrollToLocations() {
    document.getElementById('locations')?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
