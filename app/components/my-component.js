import Ember from 'ember';

export default Ember.Component.extend({
  showWelcome: true,

  willDestroyElement() {
    Ember.run(() => {
      this.set('showWelcome', false);
    });
    this._super(...arguments);
  }
});
