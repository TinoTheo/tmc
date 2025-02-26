import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | information-section', function(hooks) {
  setupTest(hooks);

  test('preachingPoints array is defined and not empty', function(assert) {
    let component = this.owner.factoryFor('component:information-section').create();
    assert.ok(component.preachingPoints.length, 'preachingPoints has items');
  });

  test('scrollToLocations calls scrollIntoView on the #locations element', function(assert) {
    let component = this.owner.factoryFor('component:information-section').create();
    let scrollCalled = false;
    document.getElementById = function(id) {
      return {
        scrollIntoView() {
          scrollCalled = true;
        }
      };
    };

    component.scrollToLocations();
    assert.ok(scrollCalled, 'scrollIntoView was called');
  });
});
