(function() {
  'use strict';

  angular
    .module('viteee')
    .controller('NavbarController', NavbarController);

  /** @ngInject */
  function NavbarController() {
    var vm = this;

    vm.date = new Date();
  }
})();
