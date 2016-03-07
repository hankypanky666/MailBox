(function () {
  'use strict';

    angular
        .module('shared.module')
        .directive('footer', sharedFooter);

    function sharedFooter() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'shared/footer.html'
        };
    }

})();