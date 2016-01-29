(function() {

    var MainCtrl = function($scope, $interval, shareData) {
        $scope.showModal = false;
        $scope.message = "False Alert";
        $scope.myValue = 'initial';

        $interval(function() {
            console.log("interval running....");
            $scope.myValue = shareData.getString();
        }, 100)

        var myValue = $scope.myValue;

        console.log(myValue);

        $scope.$watch('myValue', function(newValue,oldValue) {
            console.log("New Value" + newValue);

            if (newValue === 'admin') {
                $scope.message = "Already on Admin Profile";
                $scope.toggleModal();
            }  else if (newValue === 'user') {
                $scope.message = "Already on User Profile";
                $scope.toggleModal();

            } else {
                $scope.message = "False Alert";
                console.log("Something wrong from Main Ctrl");
            }


        });




        $scope.toggleModal = function() {

            console.log("toggleModal called in Main Ctrl");

            $scope.showModal = !$scope.showModal;

            console.log($scope.showModal + " from Main Ctrl");
        }
    }

    MainCtrl.$inject = ['$scope', '$interval', 'shareData'];


    angular.module('myApp').controller('MainCtrl', MainCtrl);

}());
