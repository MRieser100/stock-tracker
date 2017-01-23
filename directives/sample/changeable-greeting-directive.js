import template from './changeable-greeting.html';

function ChangeableGreetingDirective() {
  'ngInject';

  return {
    template,
    restrict: 'E',
    scope: {},
    controllerAs: 'vm',
    bindToController: {},
    controller: () => {},
    link: (scope) => {
      const {vm} = scope;

      const names = ['Directives', 'Modules', 'ES6', 'Tools'];
      let index = 0;

      vm.sectionName = 'Directives';
      vm.changeSubject = () => {
        vm.sectionName = names[++index % names.length];
      };
    }
  };
}

export default ChangeableGreetingDirective;
