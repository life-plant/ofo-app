export default class StationController {
  constructor($scope, stationService) {
    $scope.stations = stationService.getStations();
  }
}
