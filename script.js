var city = "Moscow,Russia"
var apiKey = "0784d07688511b276c71076385817e27";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    
    console.log(queryURL);
    console.log(response);

    var city = response.name
    var wind = response.wind.speed
    var humidity = response.main.humidity
    var temp = response.main.temp

    $('body').prepend('<h1>'+ city + '5 day weather forecast</h1>')
    $('.city').text('City: ' + city)
    $('.wind').text('Wind: ' + wind)
    $('.humidity').text('Humidity: ' + humidity)
    $('.temp').text('Temperature (in Kelvin): ' + temp)

    });

$(document).ready(function(){

    $('#searchButton').click(function(){

    });
});