//Create my selectors using jquery
const saveBtn = $('#submitBtn')
const userTypedCity =$('#cityData')
const card1h5Title1 = $('#card-1.h5')
const card1h5Title2 = $('#card-2.h5')
const card1h5Title3 = $('#card-3.h5')
const card1h5Title4 = $('#card-4.h5')
const card1h5Title5 = $('#card-5.h5')

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
function fetchingApi5day () {
    fetch(api5dayForecast)
    .then(response => response.json())
    .then(data => {
      apiCityRes = data;
    });
}
fetchingApi5day()

