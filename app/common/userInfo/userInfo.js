import userInfoComponent from './userInfo.component';

export default app => {
  app.directive('userInfo', userInfoComponent);

  if (ENVIRONMENT === 'test') {
    require('./userInfo.test.js');
  }
}
