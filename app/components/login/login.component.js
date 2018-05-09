import template from './login.html';
import controller from './login.controller';

let loginComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'loginCtrl',
    bindToController: true
  };
};

export default loginComponent;
