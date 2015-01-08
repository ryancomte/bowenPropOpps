(function(){
var app = angular.module('HomeModule', ['ngResource']);
    app.controller('homeController', function($scope,emailAPI){

        $scope.aboutPage = false;


        var allRequired = function(owner){
            if(!owner){
                return false;
            }else{
                return !!(owner.name && owner.email && owner.phone && owner.street1 && owner.city && owner.zipcode && owner.reason);
            }
        }

        $scope.sendInfo = function(owner){
            if(allRequired(owner)){
                var notification = {title:'Thank you for submitting your info!',message:'We will be contacting you in the next few days.'};
                $scope.$emit('fire notification', notification);
                emailAPI.send(owner,function(resp){
                    console.log(resp);
                });
                $scope.owner = null;
            }else{
                var notification = {title: 'You forgot some required information', message: 'It looks like you didn\'t fill out all the fields in the form. All fields are required to send a request.'}
                $scope.$emit('fire notification', notification);
            }
        };
    });

    app.factory('emailAPI', function($resource) {
        return $resource('http://localhost:8080', {},
            {
                'send': { method: 'POST'}
            });
    });
}());