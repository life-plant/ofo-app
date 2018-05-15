import template from './station.html';
import controller from './station.controller';

let stationComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'stationCtrl',
    bindToController: true
  };
};

export default stationComponent;
