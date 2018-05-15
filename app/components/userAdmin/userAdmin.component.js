import template from './userAdmin.html';
import controller from './userAdmin.controller';

let userAdminComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'userAdminCtrl',
    bindToController: true
  };
};

export default userAdminComponent;
