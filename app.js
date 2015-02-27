var newsBeat = angular.module('newsBeat', ['ui.router']);

newsBeat.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/beats.html",
    controller: 'BeatsCtrl'
  });

  $stateProvider.state('beats.reporters', {
    url: "beats/:beatId",
    templateUrl: "partials/beats.reporters.html",
    controller: 'ReportersCtrl'
  });
});
