$(document).ready(function(){

    function displayWeatherForecast(){

        var city = $(".searchTerm").val().trim();
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

                var weatherWrapper = $('<div>');
                var contentWrapper = $('<div>');

                contentWrapper.append('<h4>' + city + '</h4>');
                contentWrapper.append('<p>' + wind + '</p>');
                contentWrapper.append('<p>' + humidity + '</p>');
                contentWrapper.append('<p>' + temp + '</p>');

                weatherWrapper.append(contentWrapper);
                $('#weather-card').append(weatherWrapper);
            });
    };
        $('#searchButton').click(function(){
            displayWeatherForecast();
        });
});