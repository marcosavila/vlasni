angular.module( 'vlasni.quick-view', [
  'ui.router',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'quick-view', {
    url: '/quick-view',
    views: {
      "main": {
        controller: 'QuickViewCtrl',
        templateUrl: 'quick-view/quick-view.tpl.html'
      }
    },
    data:{ pageTitle: 'Quick View' }
  });
})

.controller( 'QuickViewCtrl', function QuickViewCtrl( $scope ) {

})

;
