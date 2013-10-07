## Getting / Setting Up Protractor

```bash
npm install protractor --save-dev
node_modules/protractor/bin/install_selenium_standalone
cp node_modules/protractor/referenceConf.js protractorConf.js
```
```javascript
exports.config = {
  seleniumServerJar:
    './selenium/selenium-server-standalone-2.35.0.jar',
  chromeDriver: './selenium/chromedriver',

  specs: [
    "test/e2e/**/*_spec.js"
  ],

  capabilities: {'browserName': 'chrome'},
  baseUrl: 'http://localhost:9000',
  rootElement: 'body',
};
```
