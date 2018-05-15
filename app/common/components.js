import userInfoComponent from './userInfo/userInfo';
import navbarComponent from './navbar/navbar';
import buttonComponent from './button/button';

export default app => {
  INCLUDE_ALL_MODULES([navbarComponent, buttonComponent, userInfoComponent], app);
}
