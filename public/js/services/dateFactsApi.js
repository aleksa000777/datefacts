var api = angular.module('ApiServices', []);

api.factory('DateFactsApi', ['$http', function($http){

  var dateFactsInterface = {};

  dateFactsInterface.newDateFact = function(dateFatcData){
    var FINAL_API_URL = "https://numbersapi.p.mashape.com/"+dateFatcData.month+"/"+dateFatcData.day+"/date?fragment=true&json=true"
    var configHeaders = {
      headers:{
        "X-Mashape-Key": "oQqCQAHUjlmshJmJ0Q2fZdOZql8Ip1IIbKejsnDm24vl5HJO3a",
        "Accept": "text/plain"
      }
    };

    return $http.get("https://numbersapi.p.mashape.com/"+dateFatcData.day+"/"+dateFatcData.month+"/date?fragment=true&json=true", configHeaders).then(function(output){
      var mergedObject = angular.extend(dateFatcData, output.data);
      return mergedObject;
    });
  };

return dateFactsInterface;
}])
