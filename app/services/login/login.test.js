import LoginModule from './login'
import LoginService from './login.service';

describe('Login', () => {
  let $rootScope, makeController;

  beforeEach(window.module('app'));

  describe('Service', () => {
    // component/directive specs
    let service = LoginService();

    it('has property: name' ,() => {
      expect(service).to.have.property('name');
    });

    it('the name property has the correct value', () => {
      expect(service.name).to.equal('login');
    });
  });
});
