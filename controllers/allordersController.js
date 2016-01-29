(function() {

    var allordersController = function($scope, customersFactory) {
        $scope.orderList = null;
        $scope.ordersTotal = 0.0;
        $scope.totalType;


        function init() {

            customersFactory.getOrders()
                .success(function(orderList) {
                    $scope.orderList = orderList;
                    getOrdersTotal();
                })
                .error(function(data, status, headers, config) {
                    //handle error
                });
        }

        function getOrdersTotal() {
        	console.log("function called for total");	
            var total = 0;
            for (var i = 0, len = $scope.orderList.length; i < len; i++) {
                total += $scope.orderList[i].total;
            }
            $scope.ordersTotal=total;
            console.log($scope.ordersTotal);
            $scope.totalType = ($scope.ordersTotal > 100) ? 'success' : 'danger';

        }

        init();

    };


    allordersController.$inject = ['$scope', 'customersFactory'];


    angular.module('myApp').controller('allordersController', allordersController);

}());
