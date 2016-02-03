const app = angular.module('MailBox', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("mail/inbox");
    $urlRouterProvider.when('/mail', 'mail/inbox');
    //
    // Now set up the states
    $stateProvider
        .state('contacts', {
            url: '/contacts',
            templateUrl: "partials/contacts/index.html"
        })
        .state('mail', {
            url: '/mail',
            abstract: true,
            redirectTo: 'mail.inbox',
            template: '<ui-view/>'
        })
        .state('mail.inbox', {
            resolve: {
                getLetters: function($http) {
                    return $http.get('http://jsonplaceholder.typicode.com/comments')
                        .then(function success(data) {
                            return data;
                        }, function error(data) {
                            return data;
                        })
                }
            },

            controller: function(getLetters) {
                if(getLetters.status !== 200){
                    this.error = getLetters.statusText;
                }
                this.letters = getLetters.data;
            },

            url: '/inbox',
            controllerAs: 'inbox',
            templateUrl: "partials/mail/inbox.html"
        })
        .state('mail.outbox', {
            url: '/outbox',
            templateUrl: "partials/mail/outbox.html"
        })
        .state('mail.spam', {
            url: '/spam',
            templateUrl: "partials/mail/spam.html"
        })
        .state('mail.deleted', {
            url: '/deleted',
            templateUrl: "partials/mail/deleted.html"
        })
});

//главное меню(шапка)
app.directive('navBar', function() {
   return {
       scope: {},
       restrict: 'E',
       templateUrl: 'navbar.html'
   }
});

//левое меню
app.directive('sideBar', function(){
   return {
       scope: {},
       restrict: 'E',
       templateUrl: 'sidebar.html'
   }
});

//блок для отображения контента
app.directive('mainContent', function(){
   return {
       scope: {},
       restrict: 'E',
       templateUrl: 'maincontent.html'
   }
});



app.controller('inbox', function($http, getLetters) {
    var self = this; // это правильно?
    self.error = "qwerty";
    $http.get('http://jsonplaceholder.typicode.com/comments')
        .then(function successCallback(response) {
            self.list = response.data;
    }, function errorCallback(response) {
            self.error = response.statusText;
    });
});

app.controller('outboxList', function($http) {
    var self = this; // это правильно?

    $http.get('http://jsonplaceholder.typicode.com/comments')
        .then(function successCallback(response) {
            self.list = response.data;
        }, function errorCallback(response) {
            self.error = response.statusText;
        });
});