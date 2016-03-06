(function() {
    'use strict';

    angular
        .module('app.auth')
        .service('UserService', userService)
        .service('APIInterceptor', runInterceptor)
        .service('LoginService', loginService);


    function userService($cookies) {

        var service = this;

        service.setCurrUser = function(user) {
            $cookies.put('user', user.email);
        };

        service.getCurrUser = function(){
            if($cookies.get('user') !== null) {
                return $cookies.get('user');
            }
        };

        service.deleteCurrUser = function () {
            return $cookies.remove('user');
        };

    }

    function loginService($http, $state, UserService) {
        var service = this,
            isLogin = false;

        service.login = function(userCred) {
            console.log('Service: ',userCred);
            if(userCred.email == 'test@test.com' && userCred.password == 'test') {
                isLogin = true;
                UserService.setCurrUser(userCred);
                return isLogin;
            } else {
                isLogin = false;
                return isLogin;
            }
        };

        service.logout = function () {
            isLogin = false;
            return UserService.deleteCurrUser();
        }
    }

    function runInterceptor($rootScope, UserService) {
        var service = this;

        service.request = function(config) {
            var currentUser = UserService.getCurrUser();
            console.log();
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