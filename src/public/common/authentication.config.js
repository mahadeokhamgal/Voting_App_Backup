export default function authenticationService($rootScope, $location,getLogin,$localStorage,routeFactory) {
  $rootScope.$on(
    "$stateChangeStart",
    function (event, next, toParams, current, fromParams) {
      if(next.authenticated === null){
        console.log("no authentication needed");
        return false;
      }
      else if(next.authenticated === 'user'){
        console.log("user route found");
        if(localStorage.getItem('role') === 'user' || localStorage.getItem('role') === 'admin'){
          console.log("user allready logged in as a user");
        }else{
          alert('you need to log in as user or admin to use this route');
          $location.path('/err');
        }
      }
      else if(next.authenticated === 'admin'){
        if(localStorage.getItem('role') === 'admin'){
          console.log("user allready logged in as an admin");
          return true;
        }else{
          alert('you need to log in as admin to use this route');
          $location.path('/err');
        }
      }
    }
  );
}
