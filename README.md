# Subject part directive of [lit-html]
<p align="center">
  <img alt="Export format: ESM" src="https://img.shields.io/badge/fomat-esm-yellowgreen" />
  <img alt="Distribution: Npm, Unpackage" src="https://img.shields.io/badge/%F0%9F%93%A6-npm%20unpk-yellowgreen" />
  <img alt="License: GPL 3.0" src="https://img.shields.io/badge/GPL 3.0-license-yellowgreen" />
</p>

This is a directive of [lit-html](https://lit-html.polymer-project.org/) for update (async mode) [parts](https://lit-html.polymer-project.org/api/interfaces/_lit_html_.part.html) of your template. Change any part of your template without re-rendering.

[🔗 See the demo](https://stackblitz.com/edit/lit-directive-subject-demo?file=index.js)

## Installation

Install from [NPM](https://www.npmjs.com/package/lit-directive-subject) or use from [Unpkg](https://unpkg.com/lit-directive-subject) CDN

**Npm**
```sh
npm install --save lit-directive-subject
```

**Unpkg**
```javascript
import {SubjetPartial} from 'https://unpkg.com/lit-directive-subject?module'
```

## API

## SubjetPartial

This is a class for create new partial context for updating in async mode.

### Methods:

* __part()__: directive for rendering values in you template
* __setValue(value)__: Set any value for rendering in your template
* __commit()__: Commit the current value and force to update template.

## Example:

```javascript
import {render, html} from 'lit-html'
import {SubjectPartial} from 'lit-directive-subject';

const partial = new SubjectPartial();

render(html`
  <h1>Demo</h1>
  <div>
    ${partial.part()}
  </div>
  `, window.container);


// Async updating
(function update() {
  partial.setValue(Math.random())
  partial.commit();
  setTimeout(update, 1000);
})();
```
