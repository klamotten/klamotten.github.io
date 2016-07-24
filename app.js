'use strict';

// Declare app level module which depends on views, and components
angular.module('klamottenApp', [
  'ngRoute',
  'klamottenApp.shops'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/shops'});
}]);
