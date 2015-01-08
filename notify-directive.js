var app = angular.module('MainModule');

app.directive('notify',function($timeout,$rootScope){
   return{
       restrict: 'A',
       replace: true,
       templateUrl: 'notify.html',
       link: function(scope,elem,attr){
           scope.$on('fire notification', function(event, notif){
               scope.title = notif.title;
               scope.message = notif.message;
               elem.slideDown('fast');
               $timeout(function(){
                   elem.slideUp('fast');
               },3000);
           });
       }
   }
});