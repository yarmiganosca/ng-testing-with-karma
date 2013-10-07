### All Together Now

```javascript
angular.module('mainController', [])
  .controller('MainController', function ($scope) {
    $scope.setup = function () {
      $scope.finishedSetup = true;
    };
  });
```

```javascript
describe('Controller: MainController', function() {
  beforeEach(module('mainController'));

  it("should finish setup", inject(function($controller, $rootScope) {
    $controller("MainController",
      {$scope: $rootScope});

    $rootScope.setup();

    expect($rootScope.finishedSetup).toEqual(true);
  }));
});
```
