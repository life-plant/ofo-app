export default class UserAdminController {
  constructor(usersService,$scope,$timeout) {
    this.name = 'userAdmin';
    var promise = usersService.getUsers();
    promise.then(function(response){
      $scope.users = response.data.data;
      $timeout(function(){
        $('table').footable();
        $('#change-page-size').change(function (e) {
          e.preventDefault();
          var pageSize = $(this).val();
          $('.footable').data('page-size', pageSize);
          $('.footable').trigger('footable_initialized');
        });

        $('#change-nav-size').change(function (e) {
          e.preventDefault();
          var navSize = $(this).val();
          $('.footable').data('limit-navigation', navSize);
          $('.footable').trigger('footable_initialized');
        });
      })
      

    },function(response2){
      console.log('kk');
    })
  }
}
