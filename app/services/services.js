import loginService from './login/login';
import usersService from './users/users';

export default app => {
  INCLUDE_ALL_MODULES([usersService, loginService], app);
}
