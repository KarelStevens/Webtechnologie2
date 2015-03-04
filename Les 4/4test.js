// self invoking function doe je zo: (met al die haakjes erond, gn functienaam etc)
(function (){
    /*global $, localStorage*/
    "use strict";
    var App, myApp;
    App = function () {
        if (localStorage.getItem('stations') !== null){
            // get from cache

            var stations = JSON.parse(localStorage.getItem('stations'));
            $.each(stations, function(key, station){
                console.log(station.name);});
        }
        else
        {
            var url = "http://api.irail.be/stations/?lang=NL&format=JSON";
            $.ajax({
                type: 'GET',
                //datatype: "jsponp",
                url: url,
                success: function(resp) {

                var stations = resp.station;
                // cachen zodat je je niet constant requests moet doen naar de data
                localStorage.setItem("stations", JSON.stringify(stations));

                $.each(stations, function(key, station){
                    console.log(station.name);
                });
            },
                error: function() {
            }
        });
        }
    };

    myApp = new App();

}());
