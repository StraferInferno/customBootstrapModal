

var myApp = angular.module('myApp',[]);

myApp.controller('custControllerWithAs',['$scope', function(){

var dirList = this;

dirList.people = [{
        joined: '2000-12-02',
        name: 'John Legend',
        city: 'Chandler Bing',
        orderTotal: 9.9956
    }, {
        joined: '1965-01-25',
        name: 'Zed Zapplin',
        city: 'Las Vegas',
        orderTotal: 19.99
    }, {
        joined: '1944-06-15',
        name: 'Tina christopher',
        city: 'New York',
        orderTotal: 44.99
    }, {
        joined: '1995-03-28',
        name: 'Dave matthews',
        city: 'Seattle',
        orderTotal: 101.50
    }];


dirList.doSort = function(paramName){
    console.log(paramName);
   dirList.sortBy = paramName;
   dirList.reverse = !dirList.reverse;

};

}]);