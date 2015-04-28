(function (){
    /*global $, navigator, localStorage, moment*/
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
            if (localStorage.getItem('CurrentWeather') !== null){
                // get from cache

                var weather = JSON.parse(localStorage.getItem('CurrentWeather'));
                printWeather(weather.daily.data);
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
                        var weather = resp.daily.data;
                        localStorage.setItem("CurrentWeather", JSON.stringify(resp));
                        printWeather(weather);
                    },
                    error: function() {
                        console.log("Error: kon het weer niet ophalen");
                    }
                });
            }
        }

        function printWeather(weather){
            var i = 0;
            $.each( weather, function( index, value ) {
                var formattedDate = moment(value.time*1000);
                var datestring = formattedDate.format('dddd Do MMMM YYYY');

                $( "#weatherlist" ).append(
                    "<li><div class='weather'>" + datestring + " <img src='images/" + value.icon + ".png' width='50px' height='50px'> " + value.summary + "</div></li>"

                );

                i++;
            });
        }

        navigator.geolocation.getCurrentPosition(PositionSuccess, PositionError);




        };
        myApp = new App();
}());
