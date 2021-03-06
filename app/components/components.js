import stationComponent from './station/station';
import userAdminComponent from './userAdmin/userAdmin';
import loginComponent from './login/login';
import homeComponent from './home/home';
import heroComponent from './hero/hero';

export default app => {
  INCLUDE_ALL_MODULES([homeComponent, heroComponent, loginComponent, userAdminComponent, stationComponent], app);
}
