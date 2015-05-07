angular.module( 'vlasni.faq', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'faq', {
    url: '/faq',
    views: {
      "main": {
        controller: 'FaqCtrl',
        templateUrl: 'faq/faq.tpl.html'
      }
    },
    data:{ pageTitle: 'Faq' }
  });
})

.controller( 'FaqCtrl', function FaqCtrl( $scope ) {

})

;
