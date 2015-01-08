(function(){
    var app = angular.module('MainModule', ['ui.router','HomeModule']);

    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'home/home.html',
                controller: 'homeController'
            })
            .state('about',{
                url: '/about',
                templateUrl: 'about/about.html'
            })
            .state('FAQ', {
                url:'/faq',
                templateUrl: 'faq/faq.html'
            });
    });
}());

