import sidemenuCtrl from "./sidemenu.controller";

export default function sidemenuDirective(){
  return{
    templateUrl:'home/sidemenu/sidemenu.template.html',
    controller:sidemenuCtrl,
    controllerAs:'vm'
  }
}
