/** userController.js
* author  norosa@programmer.net
* version 2017/04
* main js to manage user entity
*/
(function (){
	angular.module('ajaxApp').controller("UserController", ['$http','$scope', '$window', '$cookies','accessService', 'userConnected',function ($http, $scope, $window, $cookies, accessService, userConnected){

		//scope variables
		if(userConnected.user != undefined) {
			$scope.user = userConnected.user;
		}
		else {
			$scope.user = new User();
		}

		$scope.userOption=0;

		$scope.passwordValid = true;
		$scope.nickValid = true;
		$scope.master = 0;
		$scope.slave = 0;
		$scope.showError=false;

		$scope.action = function(action){
			if(action==1) $scope.master=1;
			else if(action==2) $scope.slave=1;
			else { $scope.slave=0; $scope.master=0;}
		}

		this.connection = function () {
			//copy
			$scope.user = angular.copy($scope.user);

			//Server conenction to verify user's data
			var promise = accessService.getData("php/controllers/MainController.php",
      true, "POST", {controllerType: 0, action: 10000, jsonData: JSON.stringify($scope.user)});

			promise.then(function (outputData) {
				if(outputData[0] === true) {
          //User correcte, mainWindow is opened
					$scope.user.setTypeUser(outputData[1][0].typeUser);
					$scope.user.setId(outputData[1][0].id);
					//window.open("mainWindow.html", "_self");
					$scope.userOption=1;
				}
				else {
					if(angular.isArray(outputData[1])) {
						console.log(outputData);
						$scope.showError=true;
					}
					else {alert("There has been an error in the server, try later");}
				}
			});
		}

}]);

})();
