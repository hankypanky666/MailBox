(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'angular-storage',
            'ngCookies',
            'blocks.module',
            'app.auth',
            'app.mail',
            'app.main',
            'shared.module'
        ]);

})();
