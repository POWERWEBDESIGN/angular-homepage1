

angular.module('routerApp')
    .controller('signinController', signinController);


function signinController($scope) {

    $scope.hide = "test";
    $scope.loginFormSubmit = function() {

        // check to make sure the form is completely valid
        if ($scope.loginForm.$valid) {
            alert('Login form success');
        }
    }

    $scope.registryFormSubmit = function() {

        // check to make sure the form is completely valid
        if ($scope.registryForm.$valid) {
            alert('Registry form success');
        }
    }
}