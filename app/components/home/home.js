import homeComponent from './home.component';

export default app => {
  app.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/home',
        template: '<home></home>' ,//Essentially Treats the Home Directive as the Route View.
        params: {username:null},
        cache: false
      });
  }).directive('home', homeComponent);

  if (ENVIRONMENT === 'test') {
    console.log($);
    require('./home.test.js');
  }
}
