var rrr = angular.module('ApiServicesSave', []);

rrr.factory('DateFactsApiSave', ['$http','DateFactsApi', function($http,DateFactsApi){
  var baseUrl = '/api/datefacts';
  var dateFactsInterfaceSave = {};
  dateFactsInterfaceSave.newDateFactSave = function(DateFactsApi){
    return $http.post(baseUrl, {dateFacts: DateFactsApi});
  };
  return dateFactsInterfaceSave;

  }])
