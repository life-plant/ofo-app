import loginService from './login.service';

export default app => {
  app.factory('loginService', loginService);

  if (ENVIRONMENT === 'test') {
    require('./login.test.js');
  }
}
