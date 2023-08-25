export default function authFact(){
  var authfact = {}
  authfact.setAccessToken = function(accessToken){
    localStorage.setItem('id',accessToken.id);
    localStorage.setItem('name',accessToken.name);
    localStorage.setItem('role',accessToken.role);
    localStorage.setItem('isVoted',accessToken.isVoted);
  }
  return authfact;
}
