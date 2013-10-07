## Writing Directives

usage
```html
<greet name="World"></greet>
```

template
```html
<div>Hello {{name}}!</div>
```

code
```javascript
angular.module('greeting', [])
  .directive('greet', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/views/greet.html',
      scope: {
        name: '@'
      }
    };
  });
```
