/** SessionController.js
* author  norosa@programmer.net
* version 2017/04
* main js to manage sessions
*/
(function (){

	angular.module('ajaxApp').controller("SessionController", ['$http','$scope', '$window', '$cookies','accessService', 'userConnected', function ($http, $scope, $window, $cookies, accessService, userConnected){

		//scope variables
		$scope.user = new User();
		$scope.userAction=0;
    $scope.sessionOpened=true;

		this.sessionControl = function ()
		{
			switch ($scope.userAction)
			{
				//Index.html is executed
				case 0:
					break;
				//mainWindow.html is executed
				case 1:

					break;
				default:
					console.log("user action not correct: "+$scope.userAction);
					break;
			}
		}

		this.logOut = function ()
		{
			//Local session destroy

		}
	}]);
})();
