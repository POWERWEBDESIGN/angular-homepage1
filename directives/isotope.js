var app = angular.module('isotopeApp', []);

app.directive('isoRepeat', function ($timeout) {
    return {
        scope: {
            items: '=isoRepeat'
        },
        template:'<div><article ng-click="logHello()" ng-repeat="item in items | orderBy:\'title\'"><h2>{{item.title}}</h2></article></div>',
        link: function (scope, element, attrs) {
            
            var options = {
                animationEngine : 'jquery',
                itemSelector: 'article',
                layoutMode: 'fitRows',
                sortAscending: true
            };
            
            element.isotope(options);
            
            scope.$watch('items', function(newVal, oldVal){
               $timeout(function(){
                    element.isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' }); 
               });
            },true);
            
            scope.logHello = function(){
              console.log("hello world")
            }
        }
    };
});
