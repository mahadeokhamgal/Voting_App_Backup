import footerCtrl from "./footer.controller"

export default function footerDirective(){
  return{
    templateUrl:'home/footer/footer.template.html',
    controller:footerCtrl,
    controllerAs:'vm',
  }
}
