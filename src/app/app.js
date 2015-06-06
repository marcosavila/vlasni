/*jshint smarttabs:true */
angular.module( 'vlasni', [
  'templates-app',
  'templates-common',
  'vlasni.home',
  'vlasni.how-works',
  'ui.router',
  'pascalprecht.translate',
  'vlasni.pricing',
  'vlasni.quick-view',
  'vlasni.about-us',
  'vlasni.faq',
  'vlasni.contact',
  'angular-ladda',
  'navbarHide'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $translateProvider ) {
  $urlRouterProvider.otherwise( '/home' );

  $translateProvider.useStaticFilesLoader({
    'prefix': 'assets/languages/',
    'suffix': '.json'
  });

  // Languages must follow the patter from ISO 3166-1-alpha-2 country code
  $translateProvider.translations('us');
  $translateProvider.translations('ar');
  $translateProvider.preferredLanguage('ar');

})

.config(['$httpProvider', function ($httpProvider) {
  // Intercept POST requests, convert to standard form encoding
  $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  $httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
    var key, result = [];
    for (key in data) {
      if (data.hasOwnProperty(key)) {
        result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
      }
    }
    return result.join("&");
  });
}])

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $modal, $location, $translate ) {
  $scope.activeLang = $translate.preferredLanguage();
  $scope.menuCollapsed = true;

  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
    $scope.activeLang = langKey;
  };

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Vlasni' ;
    }

    $scope.state_name = toState.name;
  });

  $scope.openTermsModal = function() {
    var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'termsModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg'
    });
  };

  $scope.openPolicyModal = function() {
    var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'policyModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg'
    });
  };

})

.controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
  $scope.ok = function () {
    $modalInstance.close();
  };

})

;

