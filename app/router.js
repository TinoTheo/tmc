import EmberRouter from '@ember/routing/router';
import config from 'tmc/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home');
  this.route('about');
  this.route('locations');
  this.route('community ');
  this.route('contact');
});
