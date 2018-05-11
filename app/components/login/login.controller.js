export default class LoginController {
  constructor($scope,loginService,$state) {
    const self = this;
    $scope.data = {
      username:'',
      password:''
    }


    $('.submit-btn').on('click',function(){
      self.login($scope,loginService,$state);
    })

  }

  login($scope,loginService,$state) {
    var prom = loginService.checkLogin($scope.data);
    prom.then(function(response){
      console.log(response);
      if(response.data.status==200){
        $state.go('home');
      }
    })
  }
}
