export default function voteCtrl($scope,crudFactory,$rootScope,$location){
  $scope.isVoted = localStorage.getItem('isVoted');
  $scope.isVoted = $scope.isVoted !== 'no';
  $scope.showCandidate = function(selected){
    console.log('Showcandidate fired'  + selected);
    $rootScope.selection = selected;
    $location.path('home/candidate')
  }
  console.log($scope.isVoted);
  if($scope.isVoted === 'no'){
    console.log("isVoted is false");
  }
  $scope.poll = (choice)=>{
    console.log(choice);
    localStorage.setItem('isVoted',"yes");
    $scope.isVoted = true;
    var obj = crudFactory.putUser.get({id:localStorage.getItem('id')});
    obj.$promise.then(function(){
      obj.isVoted = "yes";
      crudFactory.putUser.update(obj);
    })
    var obj2 = crudFactory.putResult.get({id:choice});
    obj2.$promise.then(function(){
      obj2.votes = obj2.votes + 1;
      crudFactory.putResult.update(obj2);
    })
  }
}
