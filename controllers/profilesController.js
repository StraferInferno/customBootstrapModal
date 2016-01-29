(function() {

        var profilesController = function($scope, shareData) {

            var userFlag = "on";
            var adminFlag = "off";

            $scope.btnId = 'btn1';
            $scope.btnID = 'btn2';
            $scope.isActive = false;
            $scope.isDisabled = false;
            // $scope.alertFlag = shareData.getString;
            
            $scope.activeButton = function(ID) {
                var id = ID;
                console.log(id);

                if (id === 'btn2') {
                    if (adminFlag === "off" && userFlag === "on") {
                        console.log(adminFlag);
                        $scope.isActive = !$scope.isActive;
                        adminFlag = "on";
                        userFlag = "off";
                    } else {
                        $scope.setString("admin");

                    }
                } else if (id === 'btn1') {
                    if (userFlag === "off" && adminFlag === "on") {
                        $scope.isActive = !$scope.isActive;
                        userFlag = "on";
                        adminFlag = "off";
                    } else {
                        
                        $scope.setString("user");
                    }
                } else {
                    alert("something wrong");
                }
            }

            $scope.switchEdit = function() {
                $scope.isDisabled = !$scope.isDisabled
            }

            $scope.todo = function(data) {
                var fID = data;
                console.log(fID);

            }


            /* Service call call to set data for the  other controller*/
            $scope.setString = function(newValue) {
                  console.log(newValue);
                  shareData.setString(newValue);
           };

            /*$scope.toggleModal = function (msg) {
              
              var m=msg;
              console.log(m + "from toggleModal");
              if(m === "admin") {
                $scope.message="Already on Admin Profile";
                $scope.showModal = !$scope.showModal;
              } 
              else if(m="user") {
                $scope.message="Already on user Profile";
                $scope.showModal = !$scope.showModal;
              } 
              else {
                alert("something wrong in toggleModal function");
              }
              
            };
*/

            //randon data

            $scope.shoppingList = [{
                name: 'Milk'
            }, {
                name: 'Eggs'
            }, {
                name: 'Bread'
            }, {
                name: 'Cheese'
            }];


            // My test Function 

            $scope.selectItem = function(selectedItem) {
                console.log(selectedItem);
                _($scope.shoppingList).each(function(item) {
                    item.selected = false;
                    if (selectedItem === item) {
                        selectedItem.selected = true;
                    }

                });
            };
  }




    profilesController.$inject = ['$scope','shareData'];


    angular.module('myApp').controller('profilesController', profilesController);

}());
