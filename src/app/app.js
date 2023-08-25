import angular from "angular";
import { UIRouter } from "angular-ui-router";
require("../../node_modules/angular-ui-router/lib/legacy/stateEvents");
require("angular-chart.js");
require("ngstorage");
require("angular-resource");
require("bootstrap/dist/css/bootstrap.min.css");
require("../style/app.css");
require("socket.io/dist/socket");
import routerConfig from "../public/common/route.config";
import voterFactory from "../public/common/voter.factory";
import getLogin from "../public/common/getLogin.factory";
import authFact from "./../public/common/authFact";
import authenticationService from "../public/common/authentication.config";
import headerDirective from "../public/home/header/header.directive";
import sidemenuDirective from "../public/home/sidemenu/sidemenu.directive";
import footerDirective from "../public/home/footer/footer.directive";
import constants from "../public/common/constants";
import crudFactory from "../public/common/crud.factory";
import interceptorFactory from "../public/common/interceptor.factory";
import socketFactory from "../public/common/socket.factory";

const MODULE_NAME = "app";

angular
  .module(MODULE_NAME, [
    "ui.router",
    "ui.router.state.events",
    "ngStorage",
    "ngResource",
    "chart.js",
  ])
  .directive("headerDirective", headerDirective)
  .directive("sidemenuDirective", sidemenuDirective)
  .directive("footerDirective", footerDirective)
  .factory("voterFactory", voterFactory)
  .factory("crudFactory", crudFactory)
  .factory("getLogin", getLogin)
  .factory("authFact", authFact)
  // .factory("interceptors", interceptorFactory)
  .factory("socket", ["$rootScope", socketFactory])
  // .factory('socket', ['$rootScope', function ($rootScope) {
  //   var socket = io.connect('http://127.0.0.1:3000');
  //   socket();
  //   console.log("socket created");

  //   return {
  //     on: function (eventName, callback) {
  //       function wrapper() {
  //         var args = arguments;
  //         $rootScope.$apply(function () {
  //           callback.apply(socket, args);
  //         });
  //       }

  //       socket.on(eventName, wrapper);

  //       return function () {
  //         socket.removeListener(eventName, wrapper);
  //       };
  //     },

  //     emit: function (eventName, data, callback) {
  //       socket.emit(eventName, data, function () {
  //         var args = arguments;
  //         $rootScope.$apply(function () {
  //           if (callback) {
  //             callback.apply(socket, args);
  //           }
  //         });
  //       });
  //     }
  //   };
  // }])
  .constant("api", constants)
  .config(["$stateProvider", routerConfig])
  // .config(function($httpProvider){
  //   $httpProvider.interceptors.push(interceptors)
  // })
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push(Interceptor);
  })
  .run(["$rootScope", "$location", authenticationService]);

export default MODULE_NAME;

var Interceptor = function ($q) {
  return {
    request: function (config) {
      console.log(config);
      return config;
    },
    requestError: function (rejection) {
      console.log(rejection);
      return $q.reject(rejection);
    },
    response: function (result) {
      console.log(result);
      console.log(result.status);
      // result.status = '201';
      return result;
    },
    responseError: function (response) {
      console.log(response);
      return $q.reject(response);
    },
  };
};
