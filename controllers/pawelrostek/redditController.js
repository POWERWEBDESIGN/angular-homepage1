 
angular.module('routerApp')
	.controller('redditController', redditController);


function redditController($scope, $http, $timeout, blockUI, cfpLoadingBar, redditModel) {
    
    $scope.posts = [];
    $scope.params = {limit: 150, category: 'aww'};
    $scope.categorys = redditModel.categorys;
    $scope.itemsByPage=4;
    
    $scope.start = function() {
      cfpLoadingBar.start();
    };

    $scope.complete = function () {
      cfpLoadingBar.complete();
    }

    $scope.fetch = function () {
      //$scope.params.category = redditModel.getRandomSubreddit($scope.params.category);
      redditModel.getResource($scope.params.category, $scope.params.limit).get(function(data){
          
          $scope.posts = data.data.children;
          $scope.displayedCollection = [].concat($scope.posts);
        });
    }

    $scope.fetch();

    //add to the real data holder
    $scope.addRow = function(row) {
      console.log(row);
        // $scope.posts.push(row);
    };

    //remove to the real data holder
    $scope.removeRow = function (row) {
      console.log(row);
        // var index = $scope.posts.indexOf(row);
        // if (index !== -1) {
        //     $scope.posts.splice(index, 1);
        // }

      // johnRemoved = someArray
      //          .filter(function (el) {
      //                   return el.name !== "John";
      //                  });
    }



	// var myBlockUI = blockUI.instances.get('prodExBlockUi');

 //    // fake the initial load so first time users can see it right away:
 //    myBlockUI.start();
 //    // $scope.start();
 //    $scope.fakeIntro = true;
 //    $timeout(function() {
 //    	myBlockUI.stop();
	// 	// $scope.complete();
	// 	$scope.fakeIntro = false;
 //    }, 150);
}