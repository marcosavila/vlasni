describe( 'AppCtrl', function() {
    describe( 'isCurrentUrl', function() {
        var AppCtrl, $location, $scope;

        beforeEach( module( 'vlasni' ) );

        beforeEach( inject( function ( $controller, _$location_, _$translate_, $rootScope ) {
            $location = _$location_;
            $scope = $rootScope.$new();
            $translate = _$translate_;
            AppCtrl = $controller( 'AppCtrl', { $location: $location, $scope: $scope });
        }));

        it( 'should exists AppCtrl', inject( function() {
            expect( AppCtrl ).toBeTruthy();
        }));

        it('should exists activeLang', inject(function () {
            expect($scope.activeLang).toBeTruthy();
        }));

        it('should exists changeLanguage', inject(function () {
            expect($scope.changeLanguage).toBeTruthy();
        }));
    });
});
