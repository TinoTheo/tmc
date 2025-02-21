import { module, test } from 'qunit';
import { setupRenderingTest } from 'tmc/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | recent-sermons,ember', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<RecentSermons,ember />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <RecentSermons,ember>
        template block text
      </RecentSermons,ember>
    `);

    assert.dom().hasText('template block text');
  });
});
