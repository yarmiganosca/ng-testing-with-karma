## Writing A Filter

```javascript
angular.module('userPresenter', [])
  .filter('UserPresenter', function () {
    return function (user) {
      user.fullName = user.firstName + " " + user.lastName;
      return user;
    };
  });
```
