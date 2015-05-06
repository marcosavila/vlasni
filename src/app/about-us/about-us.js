angular.module( 'vlasni.about-us', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'about-us', {
    url: '/about-us',
    views: {
      "main": {
        controller: 'AboutUsCtrl',
        templateUrl: 'about-us/about-us.tpl.html'
      }
    },
    data:{ pageTitle: 'About Us' }
  });
})

.controller( 'AboutUsCtrl', function AboutUsCtrl( $scope ) {

})

;
