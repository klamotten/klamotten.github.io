'use strict';

angular.module('klamottenApp.shops', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/shops', {
    templateUrl: 'app/shops.html',
    controller: 'ShopsCtrl'
  });
}])

.controller('ShopsCtrl', ['$scope', '$http', '$log', '$location', function($scope, $http, $log, $location) {
    $scope.navbarIsCollapsed = true;

    $scope.navbarIsActive = function (viewLocation) {
        return $location.path().indexOf(viewLocation) == 0;
    };

    $scope.shops = [
        { 'shop': 'galeria', 'name': 'Galeria Kaufhof' },
        { 'shop': 'goertz', 'name': 'Görtz' },
        { 'shop': 'henschel', 'name': 'Henschel' },
        { 'shop': 'loop5', 'name': 'Loop 5' },
        { 'shop': 'peek&cloppenburg', 'name': 'Peek & Cloppenburg' },
        { 'shop': 'roemer', 'name': 'Roemer' },
        { 'shop': 'zalando', 'name': 'Zalando' }
    ];

    $scope.selectedFirst = 0;
    $scope.selectedSecond = $scope.shops.length - 1;

    for (var i = 0; i < $scope.shops.length; ++i) {
        (function(idx) {
            $http.get('shops/' + $scope.shops[i].shop + '.json').success(function (data, status, headers, config) {
                $log.log(idx);
                $scope.shops[idx]['data'] = data;
            }).error(function (data, status, headers, config) {
                $log.error('Error fetching data: ' + $scope.shops[idx].name);
                $scope.shops[idx]['data'] = null;
            });
        })(i);
    }

    $scope.setSelectedFirst = function(idx) {
        $scope.selectedFirst = idx;
    };
    $scope.setSelectedSecond = function(idx) {
        $scope.selectedSecond = idx;
    };

    $scope.commonLabels = function() {
        var s1 = $scope.shops[$scope.selectedFirst].data;
        var s2 = $scope.shops[$scope.selectedSecond].data;

        var result = [];
        for (var i = 0; i < s1.length; ++i)
            for (var j = 0; j < s2.length; ++j)
                if (s1[i] == s2[j])
                    result.push(s1[i]);

        return result;
    }
}]);

