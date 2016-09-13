import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('my-component', 'Integration | Component | my component', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{my-component}}`);
  assert.equal(this.$().text().trim(), 'Welcome!');
});
