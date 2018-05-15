export default class LoginController {
  constructor($scope,loginService,$state) {
    const self = this;
    $scope.data = {
      username:'zhouquan',
      password:'123456'
    }


    $('.submit-btn').on('click',function(){
      self.login($scope,loginService,$state);
    })

  }

  login($scope,loginService,$state) {
    var prom = loginService.checkLogin($scope.data);
    prom.then(function(response){
      $state.go('useradmin',{username:$scope.data.username});
    })
  }
}
