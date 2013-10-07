## Using A Filter

```html
<ul>
  <li ng-repeat="user in users | filter:UserPresenter">
    <p>{{user.fullName}}</p>
  </li>
</ul>
```
