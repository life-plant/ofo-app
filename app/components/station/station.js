import stationComponent from './station.component';

export default app => {
  app.config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('station', {
        parent: 'home',
        url: '/station',
        template: '<station></station>' ,//Essentially Treats the Home Directive as the Route View.
        cache: false
      });
  }).directive('station', stationComponent);

  if (ENVIRONMENT === 'test') {
    require('./station.test.js');
  }
}
