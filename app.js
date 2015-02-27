var newsBeat = angular.module('newsBeat', ['ui.router']);

newsBeat.config(function($stateProvider) {

  $stateProvider.state('beats', {
    url: "",
    templateUrl: "partials/beats.html",
    controller: 'BeatsCtrl'
  });

  $stateProvider.state('reporters', {
    url: "/:beatId",
    templateUrl: "partials/beats.reporters.html",
    controller: 'ReportersCtrl'
  });
});
