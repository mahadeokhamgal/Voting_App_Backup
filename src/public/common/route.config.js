import loginCtrl from "../auth/login/login.controller";
import registerCtrl from "../auth/register/register.controller";
import chatCtrl from "../home/chatapp/chatApp.controller";
import resultCtrl from "../home/result/result.controller";
import candidateCtrl from "../home/vote/candidate/candidate.controller";
import partyCtrl from "../home/vote/party/party.controller";
import voteCtrl from "../home/vote/vote.controller";
import chartCtrl from './../chart/chart.controller';

export default function routerConfig($stateProvider,$urlRouterProvider){
  $stateProvider
  .state('login',{
    url:'/login',
    templateUrl:'auth/login/login.template.html',
    controller: loginCtrl,
    authenticated:null,
  })
  .state('register',{
    url:'/register',
    templateUrl:'auth/register/register.template.html',
    controller:registerCtrl,
    authenticated:null,
  })
  .state('home',{
    url:'/home',
    templateUrl:'home/home.template.html',
    controller: function($location){
      $location.path('home/welcome');
    },
    authenticated:'user',
  })
  .state('home.welcome',{
    url:'/welcome',
    templateUrl:'home/welcome/welcome.template.html',
    authenticated:'user',
  })
  .state('home.vote',{
    url:'/vote',
    templateUrl:'home/vote/vote.template.html',
    controller:voteCtrl,
    authenticated:'user',
  })
  .state('home.candidate',{
    url:'/candidate',
    templateUrl:'home/vote/candidate/candidate.template.html',
    controller:candidateCtrl,
    authenticated:'user',
  })
  .state('home.chat',{
    url:'/chat',
    templateUrl:'home/chatapp/chatApp.template.html',
    controller:chatCtrl,
    authenticated:'user',
  })
  .state('home.result',{
    url:'/result',
    templateUrl:'home/result/result.template.html',
    controller:resultCtrl,
    authenticated:'admin',
  })
  .state('home.result.table',{
    url:'/table',
    templateUrl:'home/result/table/table.template.html',
    authenticated:'admin',
  })
  .state('home.result.bar',{
    url:'/bar',
    templateUrl:'home/result/bar/bar.template.html',
    authenticated:'admin',
  })
  .state('home.result.pie',{
    url:'/pie',
    templateUrl:'home/result/pie/pie.template.html',
    authenticated:'admin',
  })
  .state('otherwise',{
    url:'*path',
    templateUrl:'auth/login/login.template.html',
    controller: loginCtrl,
    authenticated:null,
  })
}
