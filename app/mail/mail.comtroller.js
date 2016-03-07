(function(){
    'use strict';

    angular
        .module('app.mail')
        .controller('MailCtrl', MailController);

    function MailController($rootScope){

        var ctrl = this;
        $rootScope.title = "Inbox";


    }
})();