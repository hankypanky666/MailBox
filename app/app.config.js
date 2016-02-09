(function() {
    'use strict';

    angular
        .module('MailBox')
        .config(function ($stateProvider, $urlRouterProvider) {
            //
            // For any unmatched url, redirect to /login
            $urlRouterProvider.otherwise("/login");
            //$urlRouterProvider.when('index.html', "/login");

        });
})();