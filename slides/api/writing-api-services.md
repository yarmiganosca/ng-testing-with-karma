## Writing An API Service

<pre><code data-trim class='javascript stretch'>
angular.module('qrngApi', [])
  .service('QrngApi', function ($http) {
    return {
      defaultParams: {quantity: 1, type: 'uint8'},
      baseUrl: 'https://qrng.anu.edu.au/API/jsonI.php',
      urlvars: function (params) {
        return "type=" + params.type + "&length=" + params.quantity;
      },
      url: function (params) {
        return this.baseUrl + "?" + this.urlvars(params);
      },
      call: function (params) {
        var params = (params == null) ? {} : params;
        return $http.get(this.url(
          angular.extend(params, this.defaultParams)));
      }
    };
  });
</code></pre>
