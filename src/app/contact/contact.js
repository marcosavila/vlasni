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

.controller( 'ContactCtrl', function ContactCtrl( $scope ) {

})

;
