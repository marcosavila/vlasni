angular.module( 'vlasni.how-works', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'how-works', {
    url: '/how-it-works',
    views: {
      "main": {
        controller: 'HowWorksCtrl',
        templateUrl: 'how-works/how-it-works.tpl.html'
      }
    },
    data:{ pageTitle: 'How it works' }
  });
})

.controller( 'HowWorksCtrl', function AboutCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
