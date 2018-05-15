import template from './userInfo.html';
import controller from './userInfo.controller';

let userInfoComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'userInfoCtrl',
    bindToController: true
  };
};

export default userInfoComponent;
