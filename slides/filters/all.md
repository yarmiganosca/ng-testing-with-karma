### All Together Now

```javascript
angular.module('userPresenter', [])
  .filter('UserPresenter', function () {
    return function (user) {
      user.fullName = user.firstName + " " + user.lastName;
      return user;
    };
  });
```

```html
<ul>
  <li ng-repeat="user in users | filter:UserPresenter">
    <p>{{user.fullName}}</p>
  </li>
</ul>
```

<pre><code data-trim class='javascript stretch'>
describe("UserPresenter", function () {
  var user = {firstName: 'Chris', lastName: 'Hoffman'};

  beforeEach(module('userPresenter'));

  it("adds a fullName attribute",
     inject(function (UserPresenterFilter) {
       var presentedUser = UserPresenterFilter(user);
       expect(presentedUser.fullName).toEqual("Chris Hoffman");
     })
    );
});
</code></pre>
