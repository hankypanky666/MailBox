const app = angular.module('MailBox', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/inbox");
    //
    // Now set up the states
    $stateProvider
        .state('mail', {
            url: "/inbox",
            templateUrl: "partials/inboxlist.html"
        })
        .state('outbox', {
            url: "/outbox",
            templateUrl: "partials/outboxlist.html",
        })
        .state('inbox', {
            url: "/inbox",
            templateUrl: "partials/inboxlist.html"
        })
        .state('state2.list', {
            url: "/list",
            templateUrl: "partials/state2.list.html",
            controller: function($scope) {
                $scope.things = ["A", "Set", "Of", "Things"];
            }
        });
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


//
app.controller('inboxList', function($http) {
    var self = this; // это правильно?

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