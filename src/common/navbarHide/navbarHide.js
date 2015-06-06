angular.module('navbarHide', [] )
    .directive('navbarHide', function () {
        return function () {

            $('.navbar a.navbar-link').click(function() {
                var navbar_toggle = $('.navbar-toggle');
                if (navbar_toggle.is(':visible')) {
                    navbar_toggle.trigger('click');
                }
            });
        };
    })
;