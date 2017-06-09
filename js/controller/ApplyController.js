
/** applyController.js
* author  norosa@programmer.net
* version 2017/04
* main js to manage apply entity
*/
(function (){
	angular.module('ajaxApp').controller("ApplyController", ['$http','$scope', '$window', '$cookies','accessService', 'userConnected',function ($http, $scope, $window, $cookies, accessService, userConnected){

		$scope.vacantsArray=[];
		$scope.apply= new Apply();
		$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
		$scope.format = $scope.formats[0];
		$scope.dateOptions = {
			dateDisabled: "",
			formatYear: 'yyyy',
			maxDate: '',
			minDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
			startingDay: 1
		};

		$scope.hobbies= ["Programming", "SQLDump", "Defacement", "DDOSing", "Hardening"];

		$scope.birthDate = {
			opened: false
		};

		$scope.openBirthDate = function() {
			$scope.birthDate.opened = true;
		};

		$scope.loadInitData = function (){
			//Server conenction to verify user's data
			var promise = accessService.getData("php/controllers/MainController.php",
			true, "POST", {controllerType: 2, action: 10000, jsonData: ""});

			promise.then(function (outputData) {
				if(outputData[0] === true) {
					//console.log(outputData[1]);
					//id,idUser,dateReview, rate,description
					for (var i = 0; i < outputData[1].length; i++) {
						var vacant = new Vacant();
						vacant.setId(outputData[1][i].id);
						vacant.setName(outputData[1][i].name);
						vacant.setDescription(outputData[1][i].description);
						$scope.vacantsArray.push(vacant);
						//console.log($scope.vacantsArray[i]);
					}
					$scope.apply.setIdVacant($scope.vacantsArray[0].getId());
				}
				else {
					if(angular.isArray(outputData[1])) {
						alert(outputData[1]);
					}
					else {
						alert("There has been an error in the server, try later");
					}
				}
				$scope.apply.setStartDate(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
				$scope.apply.setRelocate("YES");
				//$scope.apply.setSalary("10000");
			});

			$scope.hobbyMng = function (indexChecked) {
				if($("#hobby"+indexChecked).is(":checked")) {
					$scope.apply.addHobbies($scope.hobbies[indexChecked]);
				}
				else {
					$scope.apply.removeHobbies($scope.hobbies[indexChecked]);
				}
			}

			$scope.applyManagement = function(){
				$scope.apply.setIdUser($scope.$parent.user.getId());
				$scope.apply = angular.copy($scope.apply);
				var promise = accessService.getData("php/controllers/MainController.php",
				true, "POST", {controllerType: 3, action: 10010, jsonData: JSON.stringify($scope.apply)});
				console.log($scope.apply);
				promise.then(function (outputData) {
					if(outputData[0] === true) {
						console.log($scope.apply);
						alert("Your apply was inserted succesfully! Good luck!");
						//id,idUser,dateReview, rate,description
					}
					else {
						if(angular.isArray(outputData[1])) {
							alert(outputData[1]);
						}
						else {
							alert("There has been an error in the server, try later");
						}
					}
				});
			}

		}


}]);

angular.module('ajaxApp').directive("applyForm", function (){
	return {
		restrict: 'E',
		templateUrl:"view/templates/user-data-management.html",
	};
});

})();
