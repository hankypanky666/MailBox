(function() {
    'use strict';

    angular
        .module('shared.module')
        .directive('nav', sharedNavbar);

    function sharedNavbar(){
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'shared/navbar.html'
        };
    }

})();