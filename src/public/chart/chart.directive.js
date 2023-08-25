import chartCtrl from './chart.controller';

export default function chartDirective(){
  return{
    templateUrl:'chart/chart.template.html',
    controller:chartCtrl,
    // controllerAs:'vm',
  }
}
