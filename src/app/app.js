angular.module( 'vlasni', [
  'templates-app',
  'templates-common',
  'vlasni.home',
  'vlasni.how-works',
  'ui.router',
  'pascalprecht.translate',
  'vlasni.pricing'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $translateProvider ) {
  $urlRouterProvider.otherwise( '/home' );

  $translateProvider.useStaticFilesLoader({
    'prefix': 'assets/languages/',
    'suffix': '.json'
  });

  $translateProvider.translations('en');
  $translateProvider.translations('es');
  $translateProvider.preferredLanguage('en');

})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $translate ) {
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
})

;

