import userAdminComponent from './userAdmin.component';

export default app => {
  app.config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('useradmin', {
        parent: 'home',
        url: '/useradmin',
        template: '<user-admin></user-admin>', //Essentially Treats the Home Directive as the Route View.
        cache: false
      });
  }).directive('userAdmin', userAdminComponent);

  if (ENVIRONMENT === 'test') {
    require('./userAdmin.test.js');
  }
}
