(function () {
  angular.module('loc8rApp')
    .controller('aboutCtrl', aboutCtrl);

  function aboutCtrl () {
    var vm = this;

    vm.pageHeader = {
      title: 'About'
    };
    vm.main = { 
      content: 'Loc8r was created to help people find places to sit down and get a bit of work done. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi dignissim accumsan.'
    };
  }
})();