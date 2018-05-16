import loginComponent from './login.component';

export default app => {
  app.config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('login', {
        url: '/login',
        template: '<login></login>', //Essentially Treats the Home Directive as the Route View.
        cache: false
      });
  }).directive('login', loginComponent);

  if (ENVIRONMENT === 'test') {
    require('./login.test.js');
  }
}
