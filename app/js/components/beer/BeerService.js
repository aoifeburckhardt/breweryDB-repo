var app = angular.module('distilled');

app.factory('BeerService', function ($http) {

    //Get 50 beers that are available all year round and that have labels (default response contains an array of 50 beer objects)
    //Call data that includes info about breweries
    var fiftyBeersFuture = $http.get('api/beers?availableId=1&hasLabels=Y&withBreweries=Y&key=79067aa92ce6aa05dbb647cf5df7da92')
        .then(function (data) {
        return(data.data.data);
    });
    
    // var beersFromBrewery = {
    //     get: function (id) {
    //         $http.get('api/brewery/'+id+'/beers?p=1&withBreweries=Y&key=79067aa92ce6aa05dbb647cf5df7da92').then(function (response) {
    //             return response.data.data;
    //         })
    //     }
    // };

    return {
        fiftyBeersFuture: fiftyBeersFuture
    }

});
