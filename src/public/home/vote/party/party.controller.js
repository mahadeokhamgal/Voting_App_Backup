export default function partyCtrl($scope,$rootScope,crudFactory){
  var choice = $rootScope.selection;
  $scope.partySource = "";
  crudFactory.getParty.get({id:choice},(data)=>{
    console.log(JSON.stringify(data));
    $scope.partySource = data.site;
  },(err)=>{
    console.log(err);
  })
  console.log(choice);
}
