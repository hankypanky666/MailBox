(function() {
    'use strict';
    angular
        .module('app')
        .config(function($urlRouterProvider, $httpProvider) {

            $urlRouterProvider.otherwise('/inbox');

            $httpProvider.interceptors.push('APIInterceptor');
        })
})();