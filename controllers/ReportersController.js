newsBeat.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId),
  $scope.addReporter = function() {
    $scope.beat.reporters.push({ name: $scope.beat.reporter, employment: $scope.beat.duration, birthday: $scope.beat.birthday });
    $scope.beat.reporter = null;
    $scope.beat.duration = null;
    $scope.beat.birthday = null;
  }
});
