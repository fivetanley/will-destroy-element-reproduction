# Will-destroy-element-reproduction

## The basic problem

This is a reproduction of an Ember issue.

You used to be able to set properties in `willDestroyElement` and
have them work before Ember 2.8. This mostly works, except when you
have an `{{#if}}` helper in your template. On Ember 2.8.0, this
results in an error:

```
TypeError: Cannot read property 'push' of null
    at cleanupRenderNode (http://localhost:7357/assets/vendor.js:20703:47)
    at destroyNode (http://localhost:7357/assets/vendor.js:57340:9)
    at Object.visitChildren (http://localhost:7357/assets/vendor.js:56988:7)
    at Object.clearMorph (http://localhost:7357/assets/vendor.js:57357:29)
    at RenderResult.destroy (http://localhost:7357/assets/vendor.js:56666:32)
    at Renderer.remove (http://localhost:7357/assets/vendor.js:25025:18)
    at Object.destroy (http://localhost:7357/assets/vendor.js:54237:21)
    at Class.destroy (http://localhost:7357/assets/vendor.js:53203:26)
    at Class.superWrapper [as destroy] (http://localhost:7357/assets/vendor.js:35186:22)
    at Object.run (http://localhost:7357/assets/vendor.js:10681:25)
```

This error mainly seems to occur in tests when components are being
torn down.

Component definition:

```javscript
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
```

Component Template:

```handlebars
{{#if showWelcome}}
  Welcome!
{{/if}}
```

Interestingly enough, this error does *not* occur if you have an
`{{else}}` case, like so:

```handlebars
{{#if showWelcome}}
  Welcome!
{{else}}
  Goodbye
{{/if}}
```

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd will-destroy-element-reproduction`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

