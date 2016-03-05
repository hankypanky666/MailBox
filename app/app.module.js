(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'angular-storage',
            'blocks.module',
            'app.auth',
            'app.mail',
            'shared.module'
        ]);

})();
