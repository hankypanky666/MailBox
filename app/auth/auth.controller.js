(function () {
    'use strict';

    angular
        .module('app.auth')
        .controller('LoginCtrl', LoginController);


    function LoginController($rootScope, $state, LoginService, UserService){
        var login = this;

        function signIn(user) {
            console.log("sig: ", user);
            LoginService.login(user)
                .then(function(response) {
                    user.access_token = response.data.id;
                    UserService.setCurrentUser(user);
                    $rootScope.$broadcast('authorized');
                    $state.go('inbox');
                });
        }

        function register(user) {
            console.log("reg: ",user);
            LoginService.register(user)
                .then(function(response) {
                    login(user);
                });
        }

        function submit(user) {
            login.newUser ? register(user) : signIn(user);
        }

        login.newUser = false;
        login.submit = submit;
    }
})();