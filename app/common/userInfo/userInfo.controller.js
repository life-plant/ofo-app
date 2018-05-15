export default class UserInfoController {
  constructor($scope, commonService) {
    this.name = 'userInfo';
    $scope.username=commonService.username;
    console.log('commonService');
    console.log(commonService)
  }
}
