'use strict';

angular.module('klamottenApp.shops', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/shops', {
    templateUrl: 'app/shops.html',
    controller: 'ShopsCtrl'
  });
}])

.controller('ShopsCtrl', [function() {

}]);