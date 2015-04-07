 
angular.module('routerApp')
	.controller('portfolioController', portfolioController);

function portfolioController($scope, $timeout, blockUI, cfpLoadingBar) {
	  
  // loadingBar($scope, $timeout, blockUI, cfpLoadingBar);
}

function loadingBar($scope, $timeout, blockUI, cfpLoadingBar)
{
   var myBlockUI = blockUI.instances.get('portfolioBlockUi');

   myBlockUI.start();
// $scope.start();
   $scope.hideIntro = true;
   $timeout(function() {
      // $scope.complete();
       myBlockUI.stop();
      $scope.hideIntro = false;
    }, 1150);
}