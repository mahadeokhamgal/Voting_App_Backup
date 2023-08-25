export default function getLogin($localStorage){
  var login = {};
  login.getStatus = function(){
    var id1 = localStorage.getItem('id');
    if(id1){
      return true;
    }else {
      return false;
    }
  }
  return login;
}
