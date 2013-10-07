## Testing Directives

```javascript
describe("Greet Directive", function () {
  var element;

  beforeEach(function () {
    module('greeting');
    module('app/views/greet.html');
    inject(function ($rootScope, $compile) {
      element = angular.element('<greet name="World" />');
      $compile(element)($rootScope);
      $rootScope.$digest();
    });
  });

  it("says hello", function () {
    expect(element.text()).toMatch("Hello World!");
  });
});
```
