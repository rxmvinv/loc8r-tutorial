(function () {
  angular.module('loc8rApp')
    .controller('homeCtrl', homeCtrl);
  
  function homeCtrl ($scope, loc8rData, geolocation) {
    var vm = this;
    vm.pageHeader = {
      title: 'Loc8r',
      strapline: 'Find places to work with wi-fi near you!'
    };
    vm.sidebar = { 
      content: "Looking for wi-fi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you\'re looking for."
    };
    vm.message = "Checking your location";

    vm.getData = function (position) {
      var lng = position.coords.longitude,
          lat = position.coords.latitude;
      vm.message = "Searching for nearby places";
      loc8rData.locationByCoords(lng, lat)
        .then(function (success) {
          vm.message = success.data > 0 ? "No locations found" : "";
          vm.data = { locations: success.data };
        }, function (error) {
          vm.message = "Sorry something is gone wrong";
          console.log(error);
        });
    };

    vm.showError = function (error) {
      $scope.$apply(function () {
        vm.message = error.message
      });
    };

    vm.noGeo = function () {
      $scope.$apply(function () {
        vm.message = "Geolocation not supported by this browser."
      });
    };

    geolocation.getPosition(vm.getData, vm.showError, vm.noGeo);
  }
})();