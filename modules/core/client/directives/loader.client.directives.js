(function(){
    'use strict';

    angular.module('core').directive('gdLoader', LoaderDirective);

    LoaderDirective.$inject = [];

    function LoaderDirective(){
        return {
            restrict:'A',
            replace:true,
            templateUrl:'/modules/core/client/views/directives/loader.directive.html',
            link:function(scope, elem, attrs){
                scope.isVisible = false;

                scope.$on('loader:show', function(){
                    scope.isVisible = true;
                });

                scope.$on('loader:hide', function(){
                    scope.isVisible = false;
                });
            }
        }
    }
})();
