## Testing An API Service Service

<pre><code data-trim class='javascript stretch'>
describe('RandomNumberGenerator', function () {
  var response = {data: [1, 2, 3]};
  var mockApi = {
    call: function (params) {
      return {
        success: function (fn) {
          return fn(response);
        }
      };
    }
  };

  beforeEach(function () {
    module('randomNumberGenerator');
    module(function ($provide) {
      $provide.value('QrngApi', mockApi);
    });
  });

  describe(".generate", function () {
    it("generates numbers", inject(function(RandomNumberGenerator) {
      RandomNumberGenerator.generate(3);
      expect(RandomNumberGenerator.numbers).toBe(response.data);
    }));
  });
});
</code></pre>
