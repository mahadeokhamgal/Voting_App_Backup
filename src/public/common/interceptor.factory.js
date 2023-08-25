export default function interceptorFactory(){
    return {
      request: function(config) {
        console.log(config);
        return config;
      },

      requestError: function(config) {
        console.log(config);
        return config;
      },

      response: function(res) {
        console.log(config);
        return res;
      },

      responseError: function(res) {
        console.log(config);
        return res;
      }
    }
}
