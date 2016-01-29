

(function() {

var profilesitemController = function($scope,$stateParams) {

console.log($stateParams.itemName);
$scope.item= $stateParams.itemName;

}

profilesitemController.$inject = ['$scope','$stateParams'];


angular.module('myApp').controller('profilesitemController', profilesitemController);

}());
