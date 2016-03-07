(function() {
    'use strict';
    angular
        .module('app')
        .config(function($urlRouterProvider, $httpProvider) {

            $urlRouterProvider.otherwise('/login');

            $httpProvider.interceptors.push('APIInterceptor');
        });
})();