let loginService = function loginServiceFn ($http) {
  return {
    checkLogin: function(data){
      var promise1 = $http({
        method: 'POST',
        url: '//192.168.199.119:8080/api/login',
        data: JSON.stringify(data),
        ContentType: 'application/json'
      })
      return promise1;
    }
  };
};

export default loginService;
