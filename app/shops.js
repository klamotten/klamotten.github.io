'use strict';

angular.module('klamottenApp.shops', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/shops', {
    templateUrl: 'app/shops.html',
    controller: 'ShopsCtrl'
  });
}])

.controller('ShopsCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.navbarIsCollapsed = true;

    $scope.navbarIsActive = function (viewLocation) {
        return $location.path().indexOf(viewLocation) == 0;
    };
}]);

