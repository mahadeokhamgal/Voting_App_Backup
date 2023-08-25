export default function candidateCtrl($scope,crudFactory,$rootScope){
  var choice = $rootScope.selection;
  console.log('choice is '+choice);
  $scope.candidate = {};
  crudFactory.getCandidate.get({id:choice},(data)=>{
    $scope.candidate = data;
  },(err)=>{
    console.log(err);
  })
}
