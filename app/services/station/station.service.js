let stationService = function stationServiceFn ($http) {
  return {
    getStations: function(){
      console.log('users')
      var promise = $http({
        method: 'GET',
        url: 'api/stations',
        ContentType:'application/json',
      })
      return promise;
    }
  };
};

export default stationService;
