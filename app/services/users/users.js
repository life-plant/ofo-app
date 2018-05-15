import usersService from './users.service';

export default app => {
  app.factory('usersService', usersService);

  if (ENVIRONMENT === 'test') {
    require('./users.test.js');
  }
}
