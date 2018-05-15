import CommonModule from './common'
import CommonService from './common.service';

describe('Common', () => {
  let $rootScope, makeController;

  beforeEach(window.module('app'));

  describe('Service', () => {
    // component/directive specs
    let service = CommonService();

    it('has property: name' ,() => {
      expect(service).to.have.property('name');
    });

    it('the name property has the correct value', () => {
      expect(service.name).to.equal('common');
    });
  });
});
