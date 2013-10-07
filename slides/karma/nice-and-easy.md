### Getting / Setting Up Karma

```bash
npm install -g karma
karma init
```

```javascript
module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',

      'app/scripts/**/*.coffee',
      'test/spec/**/*.coffee'
    ],
    browsers: ['Chrome']
  });
};
```

```bash
karma start # OR karma run
```
