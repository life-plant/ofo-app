import stationService from './station.service';

export default app => {
  app.factory('stationService', stationService);

  if (ENVIRONMENT === 'test') {
    require('./station.test.js');
  }
}
