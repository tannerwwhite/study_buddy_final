
//on click return weather
$(document).on("click", ".expander", function () {

  $("#weather-table-body").empty();

  //Variables for building query URL
  const API_key = '7669666f22479d98';
  let city = $(this).attr("city");
  let state = $(this).attr("state");
  let queryURL = "https://api.wunderground.com/api/" + API_key + "/forecast/q/" + state + "/" + city + ".json";

  console.log(state);
  // AJAX call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function (response) {

    //log response
    console.log(response.forecast.simpleforecast);

    //print city name at top of table
    $("#weather-table-body").append("<tr><td id='city' colspan='4'>"+city+"</td></tr>");

    //loop through to add data to weather table
    for (i = 0; i < 4; i++) {

      let shortResponse = response.forecast.simpleforecast.forecastday[i];
      let day = shortResponse.date.weekday_short;
      let tempHi = shortResponse.high.fahrenheit;
      let tempLo = shortResponse.low.fahrenheit;
      let icon = shortResponse.icon_url;

      $("#weather-table-body").append("<tr><td>" + day + "</td><td>" + tempHi + "</td><td>" +
      tempLo + "</td><td><img src='"+ icon +"'</td>");

      console.log(day);
    }

  })
});
