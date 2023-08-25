export default function sidemenuCtrl($scope){
  $scope.isAdmin = localStorage.getItem('role') === 'admin';
}
