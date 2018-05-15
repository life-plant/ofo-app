export default class HomeController {
  constructor($scope,$stateParams,commonService,$rootScope) {
    commonService.username=$stateParams.username;
  }
}

