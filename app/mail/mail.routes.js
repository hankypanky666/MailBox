(function() {
    'use strict';

    angular
        .module('app.mail')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'inbox',
                config: {
                    templateUrl: 'mail/inbox.html',
                    url: '/inbox'
                }
            }
        ];
    }
})();