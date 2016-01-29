(function() {

    var shareData = function() {

        var stringValue = "Original Value";


        return {
            getString: function() {
                return stringValue;
            },
            setString: function(value) {
                console.log(value);
                stringValue = value;
            },
        }
    };


    angular.module('myApp').service('shareData', shareData);

}());
