var app = angular.module('MainModule');

app.directive('mobileNav',function(){
   return {
       restrict: 'A',
       replace: true,
       templateUrl: 'nav.html',
       link: function(scope,elem,attr){
           var unorderedList = elem.find('ul'),
               mobile;

           scope.closeNav = function(){
               if(mobile){
                unorderedList.slideUp('fast');
               }
           }

           if(window.innerWidth <= 767){
               unorderedList.hide();
               mobile = true;
           }

           $(window).resize(function(){
              if(window.innerWidth > 767){
                  unorderedList.show();
                  mobile = false;
              }else{
                  unorderedList.hide();
                  mobile = true;
              }
           });



           scope.showNav = function(){
            unorderedList.slideToggle('fast');

           };
       }
   }
});