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
        { 'shop': 'goertz', 'name': 'Goertz' },
        { 'shop': 'henschel', 'name': 'Henschel Darmstadt' },
        { 'shop': 'loop5', 'name': 'Loop5' },
        { 'shop': 'peek-cloppenburg', 'name': 'Peek & Cloppenburg' },
        { 'shop': 'roemer', 'name': 'Römer Darmstadt' },
        { 'shop': 'zalando', 'name': 'Zalando' }
    ];

    $scope.selectedFirst = 0;
    $scope.selectedSecond = $scope.shops.length - 1;

    var normalizeShop = function(shop) {
        return shop.toLowerCase().replace(/[^0-9a-z]/gi, '')
    };

    for (var i = 0; i < $scope.shops.length; ++i) {
        (function(idx) {
            $http.get('shops/' + $scope.shops[i].shop + '.json').success(function (data, status, headers, config) {
                $scope.shops[idx]['data'] = data;

                var normalized = [];
                for (var j = 0; j < data.length; ++j)
                    normalized.push(normalizeShop(data[j]))

                $scope.shops[idx]['normalized'] = normalized;

            }).error(function (data, status, headers, config) {
                $log.error('Error fetching data: ' + $scope.shops[idx].name);
                $scope.shops[idx]['data'] = null;
                $scope.shops[idx]['normalized'] = null;
            });
        })(i);
    }

    $scope.setSelectedFirst = function(idx) {
        $scope.selectedFirst = idx;
    };
    $scope.setSelectedSecond = function(idx) {
        $scope.selectedSecond = idx;
    };

    $scope.filter = '';

    $scope.commonLabels = function() {
        var n1 = $scope.shops[$scope.selectedFirst].normalized;
        var n2 = $scope.shops[$scope.selectedSecond].normalized;
        var s2 = $scope.shops[$scope.selectedSecond].data;

        var result = [];
        if (typeof n1 != 'undefined' && typeof n2 != 'undefined')
        for (var i = 0; i < n1.length; ++i) {
            for (var j = 0; j < n2.length; ++j) {
                if (n1[i] == n2[j]) {
                    if ($scope.filter === '' || $scope.filter in s2[j]) {
                        result.push(s2[j]);
                        break;
                    }
                }
            }
        }

        // var alphabetical = [];
        // if (result.length > 0) {
        //     var currentGroup = [];
        //     var currentLetter = result[0][0];
        //
        //     for (var i = 1; i < result.length; ++i) {
        //         if (result[i][0] != result[i-1][0] {
        //             alphabetical.push({ 'letter' : currentLetter, 'shops' : })
        //         }
        //     }
        //
        // }

        return result;
    }
}]);

