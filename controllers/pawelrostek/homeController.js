 
angular.module('routerApp')
	.controller('homeController', homeController);

function homeController($scope, $timeout, blockUI, cfpLoadingBar, pageService) {
    pageService.setTitle("Paweł Rostek - Strona domowa");
	// loadingBar($scope, $timeout, blockUI, cfpLoadingBar);
}

function loadingBar($scope, $timeout, blockUI, cfpLoadingBar)
{
   var myBlockUI = blockUI.instances.get('homeBlockUi');

   myBlockUI.start();
// $scope.start();
   $scope.hideIntro = true;
   $timeout(function() {
      // $scope.complete();
       myBlockUI.stop();
      $scope.hideIntro = false;
    }, 1150);
}