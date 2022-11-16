//Create my selectors using jquery
const saveBtn = $('#submitBtn')
const userTypedCity =$('#cityData')

//card 1
const card1h4City1 = $('#card-1 h4')
const card1h5Date1 = $('#card-1 h5')

//card 2
const card2h4City2 = $('#card-2 h4')
const card2h5Date2 = $('#card-2 h5')

//card 3
const card3h4City3 = $('#card-3 h4')
const card3h5Date3 = $('#card-3 h5')

//card 4
const card4h4City4 = $('#card-4 h4')
const card4h5Date4 = $('#card-4 h5')

//card 5
const card5h4City5 = $('#card-5 h4')
const card5h5Date5 = $('#card-5 h5')

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


// After the data is fetched, then start adding elements from the fetch to the cards
//Card 1
//Add City Name
card1h4City1.append(apiCityRes.city.name)
//Add Date 
card1h5Date1.append(apiCityRes.list[0].dt_txt.split(' ')[0])
//Add the temperature
$('#card-1 li#l1-1').append(apiCityRes.list[0].main.temp)
//Add the humidity
$('#card-1 li#l1-2').append(apiCityRes.list[0].main.humidity + ' %')
//Add the MPH
$('#card-1 li#l1-3').append(apiCityRes.list[0].wind.deg + ' MPH')



//Card 2
// add image
let imageCard2 = 'http://openweathermap.org/img/wn/' + apiCityRes.list[6].weather[0].icon + '@2x.png'
//Check
$('#card-2 img').attr('src',imageCard2);
//Add City Name
card2h4City2.append(apiCityRes.city.name)
//Add Date 
card2h5Date2.append(apiCityRes.list[6].dt_txt.split(' ')[0])
//Add the temperature
$('#card-2 li#l2-1').append(apiCityRes.list[6].main.temp)
//Add the humidity
$('#card-2 li#l2-2').append(apiCityRes.list[6].main.humidity + ' %')
//Add the MPH
$('#card-2 li#l2-3').append(apiCityRes.list[6].wind.deg + ' MPH')

//Card 3
// add image
let imageCard3 = 'http://openweathermap.org/img/wn/' + apiCityRes.list[14].weather[0].icon + '@2x.png'
//Add City Name
card3h4City3.append(apiCityRes.city.name)
//Add Date 
card3h5Date3.append(apiCityRes.list[14].dt_txt.split(' ')[0])
//Add the temperature
$('#card-3 li#l3-1').append(apiCityRes.list[14].main.temp)
//Add the humidity
$('#card-3 li#l3-2').append(apiCityRes.list[14].main.humidity + ' %')
//Add the MPH
$('#card-3 li#l3-3').append(apiCityRes.list[14].wind.deg + ' MPH')


//Card 4
// add image
let imageCard4 = 'http://openweathermap.org/img/wn/' + apiCityRes.list[22].weather[0].icon + '@2x.png'
//Add City Name
card4h4City4.append(apiCityRes.city.name)
//Add Date 
card4h5Date4.append(apiCityRes.list[22].dt_txt.split(' ')[0])
//Add the temperature
$('#card-4 li#l4-1').append(apiCityRes.list[22].main.temp)
//Add the humidity
$('#card-4 li#l4-2').append(apiCityRes.list[22].main.humidity + ' %')
//Add the MPH
$('#card-4 li#l4-3').append(apiCityRes.list[22].wind.deg + ' MPH')

//Card 5
// add image
let imageCard5 = 'http://openweathermap.org/img/wn/' + apiCityRes.list[30].weather[0].icon + '@2x.png'
//Add City Name
card5h4City5.append(apiCityRes.city.name)
//Add Date 
card5h5Date5.append(apiCityRes.list[30].dt_txt.split(' ')[0])
//Add the temperature
$('#card-5 li#l5-1').append(apiCityRes.list[30].main.temp)
//Add the humidity
$('#card-5 li#l5-2').append(apiCityRes.list[30].main.humidity + ' %')
//Add the MPH
$('#card-5 li#l5-3').append(apiCityRes.list[30].wind.deg + ' MPH')