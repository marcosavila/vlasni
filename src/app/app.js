angular.module( 'vlasni', [
  'templates-app',
  'templates-common',
  'vlasni.home',
  'vlasni.about',
  'ui.router',
  'pascalprecht.translate'
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
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Vlasni' ;
    }
  });
})

;

