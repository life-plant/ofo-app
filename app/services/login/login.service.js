let loginService = function loginServiceFn ($http) {
  return {
    checkLogin: function(data){
      var promise = $http({
        method: 'POST',
        url: '/api/login',
        data: JSON.stringify(data),
        ContentType:'application/json'
      })
      return promise;
    }
  };
};

export default loginService;
