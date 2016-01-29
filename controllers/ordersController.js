(function() {

    var ordersController = function($scope, customersFactory, $stateParams ) {

        var customerId = $stateParams.customerId;

        console.log(customerId);

        $scope.custData = null;


        function init() {

            customersFactory.getPeoples(customerId)
                .success(function(peoples) {
                    $scope.custData = peoples;

                })
                .error(function(data, status, headers, config) {
                    alert("Error in ordersController");
                })

        }

        init();

    };

    ordersController.$inject = ['$scope', 'customersFactory','$stateParams'];


    angular.module('myApp').controller('ordersController', ordersController);

}());
