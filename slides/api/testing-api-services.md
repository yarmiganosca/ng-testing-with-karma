## Testing An API Service

<pre><code data-trim class='javascript stretch'>
describe("Quantum Random Number Generator API", function () {
  var urlRegex = new RegExp("^https://qrng.anu.edu.au/API/jsonI.php");
  var response = {data: [1, 2, 3]};

  beforeEach(module('qrngApi'));
  beforeEach(inject(function ($httpBackend) {
    $httpBackend.when('GET', urlRegex).respond(response);
  }));

  afterEach(inject(function ($httpBackend) {
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));

  describe(".call", function () {
    it("makes a call to the api",
      inject(function (QrngApi, $httpBackend) {
        $httpBackend.expectGET(urlRegex);
        QrngApi.call();
      })
    );
  });
});
</code></pre>
