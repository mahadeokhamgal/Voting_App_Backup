export default function chartCtrl($scope){
  console.log("chart controller");
    $scope.labels = ['java', 'C', 'C++', 'Angular', 'React', 'Spring'];
    $scope.data = [65, 59, 80, 81, 56, 55];
    console.log($scope.data)
}
