## Jasmine Spec Structure

```javascript
describe("A Thing", function () {
  beforeEach(setup());
  afterEach(teardown());
  it("does a thing", function () {
    expect(result).matcher(specifiedValue);
  });
});
```
