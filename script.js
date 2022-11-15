//Create my selectors using jquery
const saveBtn = $('#submitBtn')
const userTypedCity =$('#cityData')

//When the user clicks submit store this variable to be used in localStorage
saveBtn.on('click', function(event) {
    event.preventDefault();
    var userInput = userTypedCity.val()
    userInput = userInput.trim()
    // var userInput = $('#cityData').val()
    localStorage.setItem('cityData',userInput)

  });

//Gets item from localStorage to be used in my code
let userInputFromLS =  localStorage.getItem('cityData')

//Building string to use in my fetch
let api5dayForecast = 'http://api.openweathermap.org/data/2.5/forecast?q=' + userInputFromLS + '&units=imperial&appid=8b70d97613f963c4f438360db59ebce1'

//It uses my constructed string to pull data from yhe 5day API
fetch(api5dayForecast)
.then(response => response.json())
.then(data => {
  apiCityRes = data;
}); 

//store data about city into a variable to portray
let apiCityPulled = apiCityRes.city.name

//store API data of next day. using first time for simplicity

let apiTempPulled0 = apiCityRes.list[0].main.temp
let apiHumPulled0 = apiCityRes.list[0].main.humidity + ' %'
let apiWindPulled0 = apiCityRes.list[0].wind.deg + ' MPH'
//store API data of next day. using first time for simplicity
let apiDatePulled6 = apiCityRes.list[6].dt_txt
let apiTempPulled6 = apiCityRes.list[6].main.temp
let apiHumPulled6 = apiCityRes.list[6].main.humidity + ' %'
let apiWindPulled6 = apiCityRes.list[6].wind.deg + ' MPH'
//store API data of next day. using first time for simplicity
let apiDatePulled14 = apiCityRes.list[14].dt_txt
let apiTempPulled14 = apiCityRes.list[14].main.temp
let apiHumPulled14 = apiCityRes.list[14].main.humidity + ' %'
let apiWindPulled14 = apiCityRes.list[14].wind.deg + ' MPH'
//store API data of next day. using first time for simplicity
let apiDatePulled22 = apiCityRes.list[22].dt_txt
let apiTempPulled22 = apiCityRes.list[22].main.temp
let apiHumPulled22 = apiCityRes.list[22].main.humidity + ' %'
let apiWindPulled22 = apiCityRes.list[22].wind.deg + ' MPH'
//store API data of next day. using first time for simplicity
let apiDatePulled30 = apiCityRes.list[30].dt_txt
let apiTempPulled30 = apiCityRes.list[30].main.temp
let apiHumPulled30 = apiCityRes.list[30].main.humidity + ' %'
let apiWindPulled30 = apiCityRes.list[30].wind.deg + ' MPH'




// //
// fetch('http://api.openweathermap.org/data/2.5/forecast?q=San Diego&appid=8b70d97613f963c4f438360db59ebce1')
// .then(response => response.json())
// .then(data => {
//   apiCityRes = data;
//   // var test1 = apiCityRes.city.coord.name;
//   // console.log(test1)
// });

// var test2 = apiCityRes.id;


// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={4f702383a74cebe940df686df1fd83c2}
//fetch('http://api.openweathermap.org/geo/1.0/direct?q=Charlotte,NC&appid=8b70d97613f963c4f438360db59ebce1')

// fetch('http://api.openweathermap.org/geo/1.0/zip?zip=28270,US&appid=8b70d97613f963c4f438360db59ebce1')
// .then(response => response.json())
// .then(data => {
//     apiGeoRes = data;
//     // apiGeoResLat = data.lat;
//     // apiGeoResLon = data.lon;
//     // apiGeoResName = data.name;
//     // apiGeoResZip = data.zip;
// });

// const apiGeoResLat = apiGeoRes.lat;
// const apiGeoResLon = data.lon;
// const apiGeoResName = data.name;
// const apiGeoResZip = data.zip;
// .then(() => {
//     console.log(apiGeolocRes);
//    });

// const testing = 'api.openweathermap.org/data/2.5/forecast?lat='+apiZipResLat+'&lon='+apiZipResLon+'&appid={APIkey}'


// // // Grab the variables from the object so I can pass them to another API call
// // fetch(api.openweathermap.org/data/2.5/forecast?lat={apiZipResLat}&lon={apiZipResLon}&appid={APIkey}), {
// //     APIkey : '4f702383a74cebe940df686df1fd83c2'
// // }