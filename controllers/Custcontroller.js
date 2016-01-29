(function() {

    var Custcontroller = function($scope, $log, $window, customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.people = [];
        $scope.appSettings = appSettings;


         
        function initi() {

            customersFactory.getPeople()
                .success(function(people) {
                    console.log("get called from controller");
                    $scope.people = people;
                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                    console.log("get called from controller but error");
                });
        }

        initi();

        $scope.doSort = function(paramName) {
            console.log(paramName);
            $scope.sortBy = paramName;
            $scope.reverse = !$scope.reverse;

        };

        $scope.rmPerson = function(personId) {

            customersFactory.deletePeople(personId)
                .success(function(status) {

                    if (status) {

                        for (var i = 0, len = $scope.people.length; i < len; i++) {
                            if ($scope.people[i].id === personId) {
                                $scope.people.splice(i, 1);
                                break;
                            }
                        }

                    } else {
                        $window.alert('Unable to delete customer');
                    }

                })


            .error(function(data, status, headers, config) {
                $log.log(data.error + ' ' + status);
            });


        };

    };



    Custcontroller.$inject = ['$scope', '$log', '$window', 'customersFactory', 'appSettings'];

    angular.module('myApp').controller('Custcontroller', Custcontroller);

}());
