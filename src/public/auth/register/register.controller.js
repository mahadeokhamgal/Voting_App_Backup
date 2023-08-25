export default function registerCtrl($scope,crudFactory,voterFactory,$location,$timeout) {
  console.log($scope);
  $scope.user = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
  };
  $scope.submit = () => {
    console.log("submit called");
    let voterId = voterFactory.getId();
    console.log("Succesfully registered with" + voterId);
    $scope.user.id = voterId;
    $scope.user.role = "user";
    $scope.user.isVoted = "no";
    crudFactory.postUser.save(
      $scope.user,
      (response) => {
        console.log("done with response" + JSON.stringify(response));
        $scope.success = true;
        $scope.successMessage =
          "Registered successfully with id " + response.id;
      },
      (err) => {
        console.log("Error ocured while registering try again" + err);
        $scope.err = true;
        $scope.errMessage =
          "Some error occured while registering!! Try again";
      }
    );
  };
  $scope.close = () => {
    $scope.success = !$scope.success;
    $timeout(() => {
    $location.path("login");
    },700);
  };
  $scope.close2 = () => {$scope.err = !$scope.err;};
  $scope.checkbox = false;
  $scope.nameRegex = /^[\w]{3,15}$/;
  $scope.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;
  $scope.passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
}
