(function () {
    'use strict';

    angular
        .module('app.auth')
        .controller('LoginCtrl', LoginController);


    function LoginController($rootScope, $state, LoginService, UserService){

        var ctrl = this;

        ctrl.submit = function(user){
            if(LoginService.login(user)){
                //$rootScope.$broadcast('authorized');
                $state.go('inbox');
            }
        };

        if (UserService.isAuth()){
            $state.go('inbox');
        }
    }
})();