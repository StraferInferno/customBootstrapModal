(function() {

    var customersFactory = function($http) {

        var factory = {};

        factory.getPeople = function() {
            console.log("get called from factory");
            return $http.get('/people');
        };



        factory.getPeoples = function(customerId) {
            return $http.get('/people/' + customerId);
        };



        factory.getOrders = function(){
            return  $http.get('/allorders');          
        };


        factory.deletePeople = function(personId){

            return $http.delete('/people/'+ personId); 
        }


        return factory;

    };


    customersFactory.$inject = ['$http'];

    angular.module('myApp').factory('customersFactory', customersFactory);

}());
