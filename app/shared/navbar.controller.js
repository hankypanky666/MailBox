(function() {
    'use strict';

    angular
        .module('shared.module')
        .controller('NavCtrl', NavbarController);

    function NavbarController($location, LoginService){
        var ctrl = this;

        ctrl.logout = function () {
            if (!LoginService.logout()) {
                console.log('true');
                $location.url('/login');
            }
        };
    }
})();