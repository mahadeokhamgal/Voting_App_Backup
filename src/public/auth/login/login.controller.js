export default function loginCtrl($scope, crudFactory, $location, authFact, $timeout) {
  ($scope.user = {
    id: "",
    password: "",
  }),
    ($scope.submit = () => {
      crudFactory.getUser.get(
        { id: $scope.user.id },
        function (res) {
          console.log("successfull fetched -> " + JSON.stringify(res.name));
          if (res.password != $scope.user.password) {
            $scope.err = true;
            $scope.errMessage = "Incorrect Password";
          } else {
            authFact.setAccessToken(res);
            $location.path("home");
          }
        },
        (err) => {
          if (err.status === 404) {
            $scope.err = true;
            $scope.errMessage = "User Not found yoU may want to register first";
            $timeout(function(){
              $scope.close();
            },2000)
          } else {
            $scope.err = true;
            $scope.errMessage = "Some error occured Try logging again or try loggin again";
            $timeout(function(){
              $scope.close();
            },2000)
            console.log("err occured + -> " + JSON.stringify(err));
          }
        }
      );
    });
    $scope.close = () => {
      $scope.err = !$scope.err;
    };
}
