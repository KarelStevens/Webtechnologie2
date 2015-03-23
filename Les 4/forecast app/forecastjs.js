(function (){
    /*global $, navigator, localStorage*/
    "use strict";
    var App, myApp;
    App = function () {
        function PositionSuccess(pos) {
            var crd = pos.coords ;

            /*  console.log('Your current position is:');
            console.log('Latitude : ' + crd.latitude);
            console.log('Longitude: ' + crd.longitude);
            console.log('More or less ' + crd.accuracy + ' meters.');*/

            getWeather(crd.latitude, crd.longitude);
        }

        function PositionError(err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        }

        function getWeather(latitude, longitude){
            if (localStorage.getItem('stations') !== null){
            // get from cache

            var stations = JSON.parse(localStorage.getItem('stations'));
            $.each(stations, function(key, station){
                console.log(station.name);});
            }
            else
            {

                var APIkey = "0f40c77f6617428e9c86a400f25fd1f0";
                var url = "https://api.forecast.io/forecast/" + APIkey + "/" + latitude + "," + longitude;
                $.ajax({
                    type: 'GET',
                    dataType: "jsonp",
                    url: url,
                    success: function(resp) {
                        var weather = resp.currently;
                        localStorage.setItem("CurrentWeather", JSON.stringify(weather));
                        console.log('Your current weather: ' + weather.summary);
                    },
                    error: function() {
                        console.log("Error: kon het weer niet ophalen");
                    }
                });
            }
        }

        navigator.geolocation.getCurrentPosition(PositionSuccess, PositionError);




        };
        myApp = new App();
}());
