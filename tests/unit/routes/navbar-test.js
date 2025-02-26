import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | nav-bar', function(hooks) {
  setupTest(hooks);

  test('toggleDropdown toggles isLocationsOpen for "locations"', function(assert) {
    let component = this.owner.factoryFor('component:nav-bar').create();
    assert.notOk(component.isLocationsOpen, 'isLocationsOpen is false by default');
    component.toggleDropdown('locations');
    assert.ok(component.isLocationsOpen, 'isLocationsOpen becomes true');
    component.toggleDropdown('locations');
    assert.notOk(component.isLocationsOpen, 'isLocationsOpen toggles back to false');
  });

  test('toggleMenu toggles isMenuOpen', function(assert) {
    let component = this.owner.factoryFor('component:nav-bar').create();
    assert.notOk(component.isMenuOpen, 'isMenuOpen is false by default');
    component.toggleMenu();
    assert.ok(component.isMenuOpen, 'isMenuOpen becomes true');
    component.toggleMenu();
    assert.notOk(component.isMenuOpen, 'isMenuOpen toggles back to false');
  });

  test('closeMenu sets isMenuOpen to false', function(assert) {
    let component = this.owner.factoryFor('component:nav-bar').create({ isMenuOpen: true });
    component.closeMenu();
    assert.notOk(component.isMenuOpen, 'closeMenu sets isMenuOpen to false');
  });

  test('navigateToLocation closes dropdown and scrolls to location', function(assert) {
    let component = this.owner.factoryFor('component:nav-bar').create({ isLocationsOpen: true });
    let scrollCalled = false;

    // Stub document.getElementById to simulate scrollIntoView
    document.getElementById = function(id) {
      return {
        scrollIntoView() {
          scrollCalled = true;
        }
      };
    };

    let fakeEvent = { preventDefault() {} };
    component.navigateToLocation('tshwane', fakeEvent);
    assert.notOk(component.isLocationsOpen, 'navigateToLocation closes the locations dropdown');
    assert.ok(scrollCalled, 'scrollIntoView was called');
  });
});
