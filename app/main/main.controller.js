(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('MainCtrl', MainController);


    function MainController($rootScope, $injector, LoginService, UserService){

        var ctrl = this;

        ctrl.isIssetUser = function(){
          if(UserService.isAuth()){
              return true;
          }
        };


    }
})();