(function() {
    'use strict';

    angular
        .module('app.auth')
        .service('UserService', user)
        .service('APIInterceptor', runInterceptor)
        .service('LoginService', login)
        .constant('ENDPOINT_URI', 'https://simple-rest-api.herokuapp.com/api/');


    function user(store) {

        var service = this,
            currentUser = null;

        service.setCurrentUser = function(user) {
            currentUser = user;
            store.set('user', user);
            return currentUser;
        };

        service.getCurrentUser = function() {
            if (!currentUser) {
                currentUser = store.get('user');
            }
            return currentUser;
        };
    }

    function login($http, ENDPOINT_URI) {
        var service = this,
            path = 'Users/';

        function getUrl() {
            return ENDPOINT_URI + path;
        }

        function getLogUrl(action) {
            return getUrl() + action;
        }

        service.login = function(credentials) {
            return $http.post(getLogUrl('login'), credentials);
        };

        service.logout = function() {
            return $http.post(getLogUrl('logout'));
        };

        service.register = function(user) {
            return $http.post(getUrl(), user);
        };
    }

    function runInterceptor($rootScope, UserService) {
        var service = this;

        console.log("interceptor", UserService);

        service.request = function(config) {
            var currentUser = UserService.getCurrentUser(),
                access_token = currentUser ? currentUser.access_token : null;

            if (access_token) {
                config.headers.authorization = access_token;
            }
            return config;
        };

        service.responseError = function(response) {
            if (response.status === 401) {
                $rootScope.$broadcast('unauthorized');
            }
            return response;
        };
    }

})();