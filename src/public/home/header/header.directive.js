import headerCtrl from "./header.controller";

export default function headerDirective(){
  return{
    templateUrl:'home/header/header.template.html',
    controller: headerCtrl,
    controllerAs:'vm',
  }
}
