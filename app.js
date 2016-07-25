'use strict';

// Declare app level module which depends on views, and components
angular.module('klamottenApp', [
  'ngRoute',
  'ui.bootstrap',
  'klamottenApp.shops'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/shops'});
}]);
