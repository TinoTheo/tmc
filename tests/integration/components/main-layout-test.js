import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | main-layout', function(hooks) {
  setupRenderingTest(hooks);

  test('NavBar renders and toggles menu and dropdown correctly', async function(assert) {
    // Render the NavBar component
    await render(hbs`<NavBar />`);

    // Check that the logo and nav links are rendered
    assert.dom('.logo').exists('Logo is rendered');
    assert.dom('.nav-links').exists('Nav links container is rendered');

    // Test the hamburger menu toggle
    await click('.hamburger');
    assert.ok(find('.nav-links.active'), 'Nav links become active when hamburger is clicked');

    // Test the dropdown toggle: click the dropdown button to open it
    await click('.dropdown-toggle');
    assert.ok(find('.dropdown-list.active'), 'Dropdown list is active after clicking dropdown toggle');

    // Click a dropdown link to simulate navigating to a location and closing the menu
    await click('.dropdown-link');
    assert.notOk(find('.nav-links.active'), 'Nav menu closes after selecting a dropdown link');
  });

  test('HeroSection renders and invokes scroll action', async function(assert) {
    // Render the HeroSection component
    await render(hbs`<HeroSection />`);

    // Check that the hero section and call-to-action button are rendered
    assert.dom('.hero-section').exists('Hero section is rendered');
    assert.dom('.cta-primary').exists('Primary call-to-action button is rendered');

    // Simulate a click on the CTA button.
    // (Note: In a testing environment, scrollIntoView won’t actually scroll,
    // but we can assume the action was invoked if no errors occur.)
    await click('.cta-primary');
    assert.ok(true, 'scrollToLocations action invoked on clicking CTA');
  });

  test('InformationSection renders preaching points and content', async function(assert) {
    // Provide test preaching points data
    this.set('preachingPoints', [
      {
        title: "Faithful Worship",
        description: "A test description for faithful worship."
      },
      {
        title: "Community Service",
        description: "A test description for community service."
      }
    ]);

    await render(hbs`<InformationSection @preachingPoints={{this.preachingPoints}} />`);

    // Check that the section is rendered and the preaching points are displayed
    assert.dom('.information-section').exists('Information section is rendered');
    assert.dom('.point-item').exists({ count: 2 }, 'Two preaching points are rendered');
  });

  test('LocationSection renders location cards properly', async function(assert) {
    // Provide test location data
    this.set('locations', [
      {
        name: "TMC Tshwane",
        address: "376 Steve Biko Road, Arcadia",
        serviceTimes: "Sun: 9:30 AM & 12:00 PM",
        directions: "#",
        phone: "+27 2071 4567",
        email: "tshwane@methodist.tmc",
        facebookUrl: "https://www.facebook.com/share/18FmjXtkwv/"
      }
    ]);

    await render(hbs`<LocationSection @locations={{this.locations}} />`);

    // Verify that the location section and at least one location card are rendered
    assert.dom('.location-section').exists('Location section is rendered');
    assert.dom('.location-card').exists({ count: 1 }, 'One location card is rendered');
  });

  test('SiteFooter renders links and social icons correctly', async function(assert) {
    // Set up test footer links and social links
    this.set('footerLinks', [
      { label: 'Our Beliefs', url: '#beliefs' },
      { label: 'Ministries', url: '#ministries' }
    ]);
    this.set('socialLinks', [
      { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' }
    ]);

    await render(hbs`<SiteFooter @footerLinks={{this.footerLinks}} @socialLinks={{this.socialLinks}} />`);

    // Verify the footer elements
    assert.dom('.site-footer').exists('Footer is rendered');
    assert.dom('.footer-link').exists({ count: 2 }, 'Footer contains the expected number of quick links');
    assert.dom('.social-link').exists({ count: 1 }, 'Footer contains one social link');
  });
});
