(function(){
  var ajaxApp = angular.module('ajaxApp', ['ng-currency', 'ui.bootstrap', 'ngCookies', 'angularUtils.directives.dirPagination', 'configurations']);

  ajaxApp.factory('userConnected', function(){
      // I know this doesn't work, but what will?
      var user = new User();
      return user;
  });

  ajaxApp.directive('validFile',function(){
      return {
          require:'ngModel',
          link:function(scope,el,attrs,ctrl){
              ctrl.$setValidity('validFile', el.val() != '');
              //change event is fired when file is selected
              el.bind('change',function(){
                  ctrl.$setValidity('validFile', el.val() != '');
                  scope.$apply(function(){
                      ctrl.$setViewValue(el.val());
                      ctrl.$render();
                  });
              });
          }
      }
  });

  ajaxApp.factory('accessService', function($http, $log, $q) {
  	return {
  		getData: function(url, async, method, params, data) {
  			var deferred = $q.defer();
  			$http({
  				url: url,
  				method: method,
  				asyn: async,
  				params: params,
  				data: data
  			})
  			.success(function(response, status, headers, config)  {
  				deferred.resolve(response);
  			})
  			.error(function(msg, code) {
  				deferred.reject(msg);
  				$log.error(msg, code);
  				alert("There has been an error in the server, try later");
  			});

  			return deferred.promise;
  		}
  	}
  });

  angular.module('configurations', [])
.config(function ($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
})
})();
