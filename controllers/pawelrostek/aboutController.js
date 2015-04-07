 
angular.module('routerApp')
	.controller('aboutController', aboutController);

function aboutController($scope, $timeout, blockUI, cfpLoadingBar, pageService) {
  // pageService.setTitle("Paweł Rostek - o mnie");
  // loadingBar($scope, $timeout, blockUI, cfpLoadingBar);
    var certList = [
      {name:'UML',                                                          number:'1', date:'1360413309421', class:'purple', ico: 'public/img/cert/uml.jpg', img: '', category: 'programing'}
      ,{name:'Zend Framework',                                              number:'2', date:'1360213309421', class:'orange', ico: 'public/img/cert/zf.jpg', img: 'public/img/cert/orginal/d_zend.gif', category: 'programing'}
      ,{name:'Novell - 560 Administrowanie Systemem NetWare 5',             number:'3', date:'1360113309421', class:'blue', ico: 'public/img/cert/novell.jpg', img: '', category: 'system'}
      ,{name:'Microsft Windows Server 2003 Network Infrastructure (2277)',  number:'4', date:'1360113309421', class:'green', ico: 'public/img/cert/ms.jpg', img: 'public/img/cert/orginal/ms2279.jpg', category: 'system'}
      ,{name:'Windows Server 2003 Active Directory Infrastructure (2279)',  number:'5', date:'1350613309421', class:'green', ico: 'public/img/cert/ms.jpg', img: 'public/img/cert/orginal/ms2279.jpg', category: 'system'}
      ,{name:'Certyfikat CCNA 1 Metworking Basic',                          number:'6', date:'1350613309421', class:'orange', ico: 'public/img/cert/ccna_main.png', img: 'public/img/cert/orginal/2010-04-14 20_28_46.JPG', category: 'networking'}
      ,{name:'Certyfikat CCNA 2 Router and Routing Basics',                 number:'7', date:'1340613309421', class:'blue', ico: 'public/img/cert/ccna_main.png', img: 'public/img/cert/orginal/2010-04-14 20_30_04.JPG', category: 'networking'}
      ,{name:'Certyfikat CCNA 3 Switching Basics and Intermediate Routing', number:'8', date:'1330613309001', class:'purple', ico: 'public/img/cert/ccna_main.png', img: 'public/img/cert/orginal/2010-04-14 20_31_00.JPG', category: 'networking'}
      ,{name:'Certyfikat CCNA 4 WAN Technologies',                          number:'9', date:'1360412309421', class:'blue', ico: 'public/img/cert/ccna_main.png', img: 'public/img/cert/orginal/2010-04-14 20;32;01.JPG', category: 'networking'}
      ];
      $scope.certList = angular.copy(certList);;
}

function loadingBar($scope, $timeout, blockUI, cfpLoadingBar)
{
   var myBlockUI = blockUI.instances.get('aboutBlockUi');

   myBlockUI.start();
// $scope.start();
   $scope.hideIntro = true;
   $timeout(function() {
      // $scope.complete();
       myBlockUI.stop();
      $scope.hideIntro = false;
    }, 1150);
}