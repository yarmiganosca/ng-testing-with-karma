## Testing A Filter

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
