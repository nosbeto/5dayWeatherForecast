//Create my selectors using jquery
const saveBtn = $("#submitBtn");
const userTypedCity = $("#cityData");
let buttons = $(".button");

//Create query selector
const header = $("#historyContainer");

//card 1
const card1h4City1 = $("#card-1 h4");
const card1h5Date1 = $("#card-1 h5");

//card 2
const card2h4City2 = $("#card-2 h4");
const card2h5Date2 = $("#card-2 h5");

//card 3
const card3h4City3 = $("#card-3 h4");
const card3h5Date3 = $("#card-3 h5");

//card 4
const card4h4City4 = $("#card-4 h4");
const card4h5Date4 = $("#card-4 h5");

//card 5
const card5h4City5 = $("#card-5 h4");
const card5h5Date5 = $("#card-5 h5");

let apiCityRes = "";
let apiCurrentCityRes = "";

const storedCity = JSON.parse(localStorage.getItem("cityData")) || [];

// get info from local storage and create dynamic buttons out of it
// The functionality of these buttons are gonna to be on click render fetchings
function renderButtons() {
  for (let i = 0; i < storedCity.length; i++) {
    // console.log(storedCity[i])
    let buttonHistory = $("<button>")
      .html(storedCity[i])
      .attr("id", storedCity[i]);
    header.append(buttonHistory);
  }
}
renderButtons();

buttons.on("click", function (event) {
  event.preventDefault();
  var btesting = $(event.target).val();
  console.log(btesting);
  var id = $(event.target).attr("id");
  console.log(id);
  clearpage();
  fetchingApi5day(userInput);
  fetchingApiCurrentday(userInput);
  renderButtons();
});
//

// execBtn.setAttribute("onclick", "runCommand();");

//When the user clicks submit store this variable to be used in localStorage
saveBtn.on("click", function (event) {
  event.preventDefault();
  clearpage();
  var userInput = userTypedCity.val();
  //clear first
  header.empty()
  // userInput = userInput.trim();
  storedCity.push(userInput);
  // var userInput = $('#cityData').val()
  localStorage.setItem("cityData", JSON.stringify(storedCity));
  fetchingApi5day(userInput);
  fetchingApiCurrentday(userInput);
  renderButtons();
});

localStorage.getItem("cityData");

//It uses my constructed string to pull data from the 5day API
function fetchingApi5day(TypedCity) {
  //Gets item from localStorage to be used in my code
  let userInputFromLS = TypedCity;
  //*** 5 day forcast call***/
  //Building string to use in my fetch
  let api5dayForecast =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    userInputFromLS +
    "&units=imperial&appid=8b70d97613f963c4f438360db59ebce1";
  fetch(api5dayForecast)
    .then((response) => response.json())
    .then((data) => {
      apiCityRes = data;
      //Card 2
      // include specific image to a variable
      let imageCard2 =
        "http://openweathermap.org/img/wn/" +
        apiCityRes.list[6].weather[0].icon +
        "@2x.png";
      // add image to HTML
      $("#card-2 img").attr("src", imageCard2).css("width", "50px");
      //Add City Name
      card2h4City2.append(apiCityRes.city.name);
      //Add Date
      card2h5Date2.append(apiCityRes.list[6].dt_txt.split(" ")[0]);
      //Add the temperature
      $("#card-2 li#l2-1").append('Temperature ' + apiCityRes.list[6].main.temp + "°F");
      //Add the humidity
      $("#card-2 li#l2-2").append('Humidity ' + apiCityRes.list[6].main.humidity + " %");
      //Add the MPH
      $("#card-2 li#l2-3").append('Windspeed ' + apiCityRes.list[6].wind.speed + " MPH");

      //Card 3
      // include specific image to a variable
      let imageCard3 =
        "http://openweathermap.org/img/wn/" +
        apiCityRes.list[14].weather[0].icon +
        "@2x.png";
      // add image to HTML
      $("#card-3 img").attr("src", imageCard3).css("width", "50px");
      //Add City Name
      card3h4City3.append(apiCityRes.city.name);
      //Add Date
      card3h5Date3.append(apiCityRes.list[14].dt_txt.split(" ")[0]);
      //Add the temperature
      $("#card-3 li#l3-1").append('Temperature ' +apiCityRes.list[14].main.temp + "°F");
      //Add the humidity
      $("#card-3 li#l3-2").append('Humidity ' + apiCityRes.list[14].main.humidity + " %");
      //Add the MPH
      $("#card-3 li#l3-3").append('Windspeed ' + apiCityRes.list[14].wind.speed + " MPH");

      //Card 4
      // add image
      let imageCard4 =
        "http://openweathermap.org/img/wn/" +
        apiCityRes.list[22].weather[0].icon +
        "@2x.png";
      // add image to HTML
      $("#card-4 img").attr("src", imageCard4).css("width", "50px");
      //Add City Name
      card4h4City4.append(apiCityRes.city.name);
      //Add Date
      card4h5Date4.append(apiCityRes.list[22].dt_txt.split(" ")[0]);
      //Add the temperature
      $("#card-4 li#l4-1").append('Temperature ' + apiCityRes.list[22].main.temp + "°F");
      //Add the humidity
      $("#card-4 li#l4-2").append('Humidity ' + apiCityRes.list[22].main.humidity + " %");
      //Add the MPH
      $("#card-4 li#l4-3").append('Windspeed ' + apiCityRes.list[22].wind.speed + " MPH");

      //Card 5
      // add image
      let imageCard5 =
        "http://openweathermap.org/img/wn/" +
        apiCityRes.list[30].weather[0].icon +
        "@2x.png";
      // add image to HTML
      $("#card-5 img").attr("src", imageCard5).css("width", "50px");
      //Add City Name
      card5h4City5.append(apiCityRes.city.name);
      //Add Date
      card5h5Date5.append(apiCityRes.list[30].dt_txt.split(" ")[0]);
      //Add the temperature
      $("#card-5 li#l5-1").append('Temperature ' + apiCityRes.list[30].main.temp + "°F");
      //Add the humidity
      $("#card-5 li#l5-2").append('Humidity ' + apiCityRes.list[30].main.humidity + " %");
      //Add the MPH
      $("#card-5 li#l5-3").append('Windspeed ' + apiCityRes.list[30].wind.speed + " MPH");
    });
  apiCityRes;
}

//It uses my constructed string to pull data from the current API
function fetchingApiCurrentday(TypedCity) {
  //Gets item from localStorage to be used in my code
  let userInputFromLS = TypedCity;
  //*** Current weather call***/
  //Building string to use in my fetch
  let apiCurrentWeather =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    userInputFromLS +
    "&units=imperial&appid=4f702383a74cebe940df686df1fd83c2";
  fetch(apiCurrentWeather)
    .then((response) => response.json())
    .then((data) => {
      apiCurrentCityRes = data;
      // After the data is fetched, then start adding elements from the fetch to the cards
      //Card 1
      //add image
      let imageCard1 =
        "http://openweathermap.org/img/wn/" +
        apiCurrentCityRes.weather[0].icon +
        "@2x.png";
      // add image to HTML
      $("#card-1 img").attr("src", imageCard1).css("width", "50px");
      //Add City Name
      card1h4City1.append(apiCurrentCityRes.name);
      //Add Date
      card1h5Date1.append(dayjs().format("YYYY-MM-DD") + " - Today");
      //Add the temperature
      $("#card-1 li#l1-1").append('Temperature ' + apiCurrentCityRes.main.temp + "°F");
      //Add the humidity
      $("#card-1 li#l1-2").append('Humidity ' + apiCurrentCityRes.main.humidity + " %");
      //Add the MPH
      $("#card-1 li#l1-3").append('Windspeed ' + apiCurrentCityRes.wind.speed + " MPH");
    });
}

function clearpage() {
  //clear card1
  $("#card-1 img").attr("src", "");
  card1h4City1.empty();
  card1h5Date1.empty();
  $("#card-1 li#l1-1").empty();
  $("#card-1 li#l1-2").empty();
  $("#card-1 li#l1-3").empty();
  //clear card2
  $("#card-2 img").attr("src", "");
  card2h4City2.empty();
  card2h5Date2.empty();
  $("#card-2 li#l2-1").empty();
  $("#card-2 li#l2-2").empty();
  $("#card-2 li#l2-3").empty();
  //clear card3
  $("#card-3 img").attr("src", "");
  card3h4City3.empty();
  card3h5Date3.empty();
  $("#card-3 li#l3-1").empty();
  $("#card-3 li#l3-2").empty();
  $("#card-3 li#l3-3").empty();
  //clear card4
  $("#card-4 img").attr("src", "");
  card4h4City4.empty();
  card4h5Date4.empty();
  $("#card-4 li#l4-1").empty();
  $("#card-4 li#l4-2").empty();
  $("#card-4 li#l4-3").empty();
  //clear card5
  $("#card-5 img").attr("src", "");
  card5h4City5.empty();
  card5h5Date5.empty();
  $("#card-5 li#l5-1").empty();
  $("#card-5 li#l5-2").empty();
  $("#card-5 li#l5-3").empty();
}
