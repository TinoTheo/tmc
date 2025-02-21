import { module, test } from 'qunit';
import { setupTest } from 'tmc/tests/helpers';

module('Unit | Route | sermons', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:sermons');
    assert.ok(route);
  });
});
