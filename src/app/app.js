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
  'vlasni.contact'
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

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $modal, $location, $translate ) {
  $scope.activeLang = $translate.preferredLanguage();

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

