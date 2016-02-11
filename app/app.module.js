(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'blocks.module',
            'app.auth',
            'app.mail'
        ]);

})();
