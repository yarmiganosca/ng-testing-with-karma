## Writing an API Service Service

```javascript
angular.module('randomNumberGenerator', ['qrngApi'])
  .service('RandomNumberGenerator', function (QrngApi) {
    return {
      backend: QrngApi,
      numbers: [],
      generate: function (n) {
        return this.backend.call({quantity: n, type: 'uint8'})
          .success(this.handleSuccess);
      },
      handleSuccess: function (response) {
        this.numbers = response.data;
      }
    };
  });
```
