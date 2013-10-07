## Testing A Page

the command
```bash
node_modules/.bin/protractor protractorConf.js
```
checks
```html
<div ng-controller="MainController" ng-init='setup()'>
  <p>{{finishedSetup}}</p>
</div>
```
for
```javascript
describe("Homepage", function () {
  beforeEach(function () {
    protractor.getInstance().get('/');
  });

  it("displays the setup status", function () {
    var element = protractor.getInstance().findElement(
      protractor.By.binding("{{finishedSetup}}"));

    expect(element.getText()).toEqual('true');
  });
});
```
