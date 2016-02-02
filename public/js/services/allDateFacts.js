var rrr = angular.module('ApiServicesAll', []);

rrr.factory('DateFactsApiAll', ['$http', function($http){
  var baseUrl = '/api/datefacts';
  var allDateFacts = {};

  allDateFacts.getAll = function(){
    return $http.get(baseUrl);
  };
  return allDateFacts;

  }])
