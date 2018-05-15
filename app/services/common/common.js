import commonService from './common.service';

export default app => {
  app.factory('commonService', commonService);

  if (ENVIRONMENT === 'test') {
    require('./common.test.js');
  }
}
