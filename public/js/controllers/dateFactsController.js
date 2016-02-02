var ctrl = angular.module('MainControllers', []);

ctrl.controller('DateFactsController', ['$scope', 'DateFactsApi','DateFactsApiSave','DateFactsApiAll',
function($scope, DateFactsApi,DateFactsApiSave,DateFactsApiAll){

  $scope.newDateFact = function(){
    console.log($scope.newDate, 'liiii');
    DateFactsApi.newDateFact($scope.newDate)
    .then(function(response){
      var data = response;
      DateFactsApiSave.newDateFactSave(data);
      $scope.newDate={};
      $scope.allDateFacts();
    });
  };

  $scope.allDateFacts = function(){
    DateFactsApiAll.getAll().then(function(response){
    var data = response.data.dateFacts;
    $scope.dateFacts = data;
  });
};

  $scope.date = new Date();
  var day = $scope.date.getDate().toString();
  var month = ($scope.date.getMonth()+1).toString();
  var str = {
    day:day,
    month:month
  };

  $scope.todayDateFact = function(){
    DateFactsApi.newDateFact(str)
    .then(function(response){
      $scope.todayFactData = response;
    });
  };
$scope.todayDateFact();


$scope.allDateFacts();
}]);
