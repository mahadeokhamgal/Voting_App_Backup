export default function headerCtrl($scope,$timeout,$location){
  $scope.user = localStorage.getItem('name');
  $scope.successMessage = "You are now Logged in";
  $scope.success = true;
  $scope.logout = ()=>{
    console.log("logout called");
    localStorage.clear();
    $scope.successMessage = "Logging out taking you to login";
    $scope.success = true;
    $timeout(function(){
      $scope.success = false;
      $location.path('login');
    },2000)
  }

  $timeout(function(){
    $scope.success = false;
  },1200)
}
