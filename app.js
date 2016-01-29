(function(){
var app=angular.module('myApp',['ui.router','ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {

 $urlRouterProvider.otherwise('/');

$stateProvider
                .state('home', {

                    url:'/',
                    controller:'Custcontroller',
                    templateUrl:'views/customers.html'   
                })

                .state('thisCustomer', {

                    url:'/orders/:customerId',
                    controller:'ordersController',
                    templateUrl:'views/orders.html'   
                })

                .state('allorders', {

                    url:'/allorders',
                    controller:'allordersController',
                    templateUrl:'views/allorders.html'   
                })

                .state('settings', {

                    url:'/settings',
                    templateUrl:'views/settings.html'   
                })   

                .state('settings.profiles', {

                    url:'/profiles',
                    controller:'profilesController',
                    templateUrl: "views/profiles.html"

                  })   

                .state('profiles.item1', {

                    url:'/:itemName',
                    templateUrl:'views/item.html',
                    controller:'profilesitemController'
                })

                .state('settings.accounts', {

                    url:'/accounts',
                    templateUrl: "views/accounts.html"
                })


        });

}());
