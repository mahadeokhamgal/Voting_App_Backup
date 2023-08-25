export default function resultCtrl($scope,crudFactory,$location){
  $location.path('home/result/table')
  crudFactory.getResult.query((res)=>{
    $scope.candidates = res;
    $scope.labels = [];
    $scope.data = [];
    for(let i=0;i < 4;i++){
      $scope.labels[i] = res[i].party;
      $scope.data[i] = res[i].votes;
    }
  })
}
