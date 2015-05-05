angular.module( 'vlasni.pricing', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'pricing', {
    url: '/pricing',
    views: {
      "main": {
        controller: 'PricingCtrl',
        templateUrl: 'pricing/pricing.tpl.html'
      }
    },
    data:{ pageTitle: 'Pricing' }
  });
})

.controller( 'PricingCtrl', function PricingCtrl( $scope ) {

})

;
