/*jshint smarttabs:true */
angular.module( 'vlasni.contact', [
  'ui.router',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'contact', {
    url: '/contact',
    views: {
      "main": {
        controller: 'ContactCtrl',
        templateUrl: 'contact/contact.tpl.html'
      }
    },
    data:{ pageTitle: 'Contact' }
  });
})

.controller( 'ContactCtrl', function ContactCtrl( $scope, $http ) {
	$scope.sendContact = function(val) {
		$scope.loginLoading = true;
		$http({
			method: 'GET',
			url: 'http://45.56.122.213:9090/com.develance.vlastni.api-0.0.1-SNAPSHOT/auth',
			params: {
				key: 'a045aaca-93bb-4beb-873d-6e70ba6ce6c5'
			}
		}).success(function(token){
			$http({
				method: 'POST',
				url: 'http://45.56.122.213:9090/com.develance.vlastni.api-0.0.1-SNAPSHOT/rest/v1/contactInfo',
				data: {
					name: $scope.name,
					email: $scope.email,
					phone: $scope.phone,
					comment: $scope.comment
				},
				headers: {
					authToken: token
				}
			}).success(function(response){
				if (response.status === "OK"){
					$scope.success = true;
				} else {
					$scope.error = true;
				}
				$scope.loginLoading = false;
			});
		});
	};
})

;
