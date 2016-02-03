var api = angular.module('ApiServices', []);

api.factory('DateFactsApi', ['$http','$filter', function($http,$filter){

  var dateFactsInterface = {};

  dateFactsInterface.filter = function(monthNumber){
        var monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December' ];
        return monthNames[monthNumber - 1];
    }

  dateFactsInterface.newDateFact = function(dateFatcData){
    var FINAL_API_URL = "https://numbersapi.p.mashape.com/"+dateFatcData.month+"/"+dateFatcData.day+"/date?fragment=true&json=true"
    var configHeaders = {
      headers:{
        "X-Mashape-Key": "oQqCQAHUjlmshJmJ0Q2fZdOZql8Ip1IIbKejsnDm24vl5HJO3a",
        "Accept": "text/plain"
      }
    };

    return $http.get("https://numbersapi.p.mashape.com/"+dateFatcData.day+"/"+dateFatcData.month+"/date?fragment=true&json=true", configHeaders).then(function(output){
      console.log(dateFatcData,'data');
    var month = dateFactsInterface.filter(dateFatcData.month);
    var fullDate = {data: dateFatcData.day+" "+month}
    console.log(fullDate,'wooooow');
      var mergedObject = angular.extend(fullDate, output.data);
      return mergedObject;
    });
  };

return dateFactsInterface;
}])
