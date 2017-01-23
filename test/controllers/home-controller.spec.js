/* @wip **/
import angular from 'angular';
import 'angular-mocks';
import lab11App from '../../src/app';

const {inject, module} = angular.mock;
const mockProfile = {
  username: 'mewdriller',
  lastQuery: 'angular',
};

describe('HomeController', () => {
  let $state;
  let vm;

  beforeEach(module(lab11App));

  beforeEach(inject((_$state_, $controller) => {
    $state = _$state_;
    spyOn($state, 'go');

    vm = $controller('HomeController', {
      $state,
      profile: mockProfile,
    });
  }));

  xit('should be registered', () => {
    // TODO: Assert that the controller is registered on the module
  });

  xit('should set the username property', () => {
    // TODO: Assert that the `username` property was set on the vm
  });

  xit('should set the query property', () => {
    // TODO: Assert that the `query` property was set on the vm
  });

  describe('.handleKeyup()', () => {
    xit('should trigger search when Enter is released', () => {
      // TODO: Assert that if the Enter key is released, the `handleSearch` method is called
    });

    xit('should not trigger search when another key is released', () => {
      // TODO: Assert that if another key is released, the `handleSearch` method is not called
    });
  });

  describe('.handleSearch()', () => {
    xit('should transition to the `search` state', () => {
      // TODO: Assert that the `$state.go` method is called with the correct parameters
    });
  });
});
