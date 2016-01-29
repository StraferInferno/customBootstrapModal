(function() {

var AlertModalController = function($scope,modals) {

 // Setup default values using modal params.
                $scope.message = ( modals.params().message || "Whoa!" );
                // ---
                // PUBLIC METHODS.
                // ---
                // Wire the modal buttons into modal resolution actions.
                $scope.close = modals.resolve;

}

AlertModalController.$inject = ['$scope','modals'];


angular.module('myApp').controller('AlertModalController', AlertModalController);

}());
