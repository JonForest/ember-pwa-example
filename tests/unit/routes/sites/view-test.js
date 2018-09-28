import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sites/view', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sites/view');
    assert.ok(route);
  });
});
