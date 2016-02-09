(function() {
    'use strict';

    angular
        .module('MailBox')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'login',
                config: {
                    templateUrl: 'auth/login.html',
                    url: '/login'
                }
            }
        ];
    }
})();