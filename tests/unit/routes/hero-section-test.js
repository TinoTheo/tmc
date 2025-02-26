import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | hero-section', function(hooks) {
  setupTest(hooks);

  test('scrollToLocations calls scrollIntoView on the #locations element', function(assert) {
    let component = this.owner.factoryFor('component:hero-section').create();
    let scrollCalled = false;

    // Stub document.getElementById to simulate scrolling
    document.getElementById = function(id) {
      return {
        scrollIntoView({ behavior }) {
          scrollCalled = true;
          assert.equal(behavior, 'smooth', 'Scroll behavior is smooth');
        }
      };
    };

    component.scrollToLocations();
    assert.ok(scrollCalled, 'scrollIntoView was called');
  });
});
