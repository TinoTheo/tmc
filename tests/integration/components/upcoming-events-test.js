import { module, test } from 'qunit';
import { setupRenderingTest } from 'tmc/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | upcoming-events', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<UpcomingEvents />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <UpcomingEvents>
        template block text
      </UpcomingEvents>
    `);

    assert.dom().hasText('template block text');
  });
});
