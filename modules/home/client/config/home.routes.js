(function(){
    'use strict';

    angular.module('home.routes').config(HomeRoutesConfig);

    HomeRoutesConfig.$inject = ['$stateProvider'];

    function HomeRoutesConfig($stateProvider){
        $stateProvider
        .state('home', {
            url:'/',
            templateUrl:'modules/home/client/views/index.html',
            controller:'HomeController',
            controllerAs:'vm'
        })
        .state('home.login', {

        })
        .state('home.logout', {

        });

    }

})();
