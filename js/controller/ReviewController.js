/** reviewController.js
* author  norosa@programmer.net
* version 2017/04
* main js to manage review entity
*/
(function (){
	//Application module
	angular.module('ajaxApp').controller("ReviewController", ['$http','$scope', '$window', '$cookies','accessService','$filter', function ($http, $scope, $window, $cookies, accessService, $filter){
		//scope variables
		$scope.showForm=0;
		$scope.reviewsArray = new Array();
		$scope.usersArray = new Array();
		$scope.filmsArray = new Array();

		//Pagination variables
		$scope.pageSize = 2;
		$scope.currentPage = 1;


		$scope.loadInitData = function (){
      //Server conenction to verify user's data
      var promise = accessService.getData("php/controllers/MainController.php",
      true, "POST", {controllerType: 1, action: 10000, jsonData: ""});

      promise.then(function (outputData) {
        if(outputData[0] === true) {
					console.log(outputData[1]);
					console.log(outputData[2]);
					//id,idUser,dateReview, rate,description
          for (var i = 0; i < outputData[2].length; i++) {
            var user = new User();
            user.setId(outputData[2][i].id);
						user.setName(outputData[2][i].name);
						user.setSurname1(outputData[2][i].surname1);
            $scope.usersArray.push(user);
          }
        }
        else {
          if(angular.isArray(outputData[1])) {
            alert(outPutData[1]);
          }
          else {
            alert("There has been an error in the server, try later");
          }
        }
      });
			$scope.loadReviews();
    }

    $scope.addReview = function () {
			var film = new Review();
			film.construct(0,$scope.reviewsArray[0].getId(),$scope.usersArray[0].getId(),"",0,"",false,false, []);
			$scope.filmsArray.push(film);
		}

		$scope.removeReview = function (indexReview)
		{
			if($scope.filmsArray.length ==1) {alert("At least one film must be inserted")}
			else {
				var conf=confirm("Are you sure you want to remove this rate with id "+$scope.reviewsModArray[indexReview].getId()+"?");
				if (conf){
					var toRemove=new Review();
					toRemove=angular.copy($scope.reviewsModArray[indexReview]);
					$scope.reviewsModArray.splice(indexReview,1);

					var promise = accessService.getData("php/controllers/MainController.php",
		      true, "POST", {controllerType: 1, action: 10040, jsonData: JSON.stringify(toRemove)});
					promise.then(function (outputData) {
						console.log(outputData);
						if(outputData[0] === true) {
							alert("Removed succesfully");
							}
						else {
							if(angular.isArray(outputData[1])) {
								alert(outPutData[1]);
							}
							else {
								alert("There has been an error in the server, try later");
							}
						}
					});
				}
			}
		}

		$scope.modReviews = function () {
      $scope.reviewsModArray = angular.copy($scope.reviewsModArray);
			console.log($scope.reviewsModArray);
			var promise = accessService.getData("php/controllers/MainController.php", true, "POST", {controllerType:1, action:10030 ,jsonData: JSON.stringify($scope.reviewsModArray)});
			promise.then(function (outPutData) {
				if(outPutData[0]=== true)
				{
          //Form Initialize
					$scope.modReviewsForm.$setPristine();

					$scope.shomForm=0;

					alert("Reviews modfied correctly");
				}
				else
				{
					if(angular.isArray(outPutData[1]))
					{
            alert(outPutData[1]);
					}
					else {alert("There has been an error in the server, try later");}
				}

			});
			//alert("hello");
		}

		$scope.loadReviews = function () {
      // Load all the films
      $scope.reviewsModArray = [];

      var promise = accessService.getData("php/controllers/MainController.php", true, "POST",
      {controllerType:1, action:10000 ,jsonData: ""});

      promise.then(function (outPutData) {
        if(outPutData[0]=== true)
        {
          for (var i = 0; i < outPutData[1].length; i++)
          {
						var review = new Review();
						review.construct(outPutData[1][i].id, outPutData[1][i].idUser, outPutData[1][i].dateReview, outPutData[1][i].rate, outPutData[1][i].description );

            $scope.reviewsModArray.push(review);
          }

          $scope.filteredData = $scope.reviewsModArray;
					console.log($scope.filteredData);

        }
        else
        {
          if(angular.isArray(outPutData[1]))
          {
            alert(outPutData[1]);
          }
          else {alert("There has been an error in the server, try later");}
        }

      });
		}

		$scope.$watch("userSearch+rateSearch", function (){
	                $scope.filteredData = $filter('filter')
	                        ($scope.reviewsModArray,
	                                {idUser: $scope.userSearch,
																		rate: $scope.rateSearch}
	                        );
	});

	}]);


	angular.module('ajaxApp').directive("reviewModForm", function (){
		return {
			restrict: 'E',
			templateUrl:"view/templates/review-mod-form.html",
			controller:function(){

			},
			controllerAs: 'reviewModForm'
		};
	});
})();
