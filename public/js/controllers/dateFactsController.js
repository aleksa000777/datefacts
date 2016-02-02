var ctrl = angular.module('MainControllers', []);

ctrl.controller('DateFactsController', ['$scope', 'DateFactsApi','DateFactsApiSave','DateFactsApiAll',
function($scope, DateFactsApi,DateFactsApiSave,DateFactsApiAll){

  $scope.newDateFact = function(){
    DateFactsApi.newDateFact($scope.newDate)
    .then(function(response){
      var data = response;
      DateFactsApiSave.newDateFactSave(data);
      $scope.allDateFacts();
    });
  };

  $scope.allDateFacts = function(){
    DateFactsApiAll.getAll().then(function(response){
    var data = response.data.dateFacts;
    $scope.dateFacts = data;
  });
};

$scope.allDateFacts();
}]);
