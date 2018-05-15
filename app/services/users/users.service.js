let usersService = function usersServiceFn ($http) {
  return {
    getUsers: function(){
      console.log('users')
      var promise = $http({
        method: 'GET',
        url: 'api/users',
        ContentType:'application/json',
      })
      return promise;
    }
  };
};

export default usersService;
