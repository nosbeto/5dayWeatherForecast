// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={4f702383a74cebe940df686df1fd83c2}
//fetch('http://api.openweathermap.org/geo/1.0/direct?q=Charlotte,NC&appid=8b70d97613f963c4f438360db59ebce1')

fetch('http://api.openweathermap.org/geo/1.0/zip?zip=28270,US&appid=8b70d97613f963c4f438360db59ebce1')
.then(response => response.json())
.then(data => {
    apiZipRes = data;
    apiZipResLat = data.lat;
    apiZipResLon = data.lon;
});
// .then(() => {
//     console.log(apiGeolocRes);
//    });

const testing = 'api.openweathermap.org/data/2.5/forecast?lat='+apiZipResLat+'&lon='+apiZipResLon+'&appid={APIkey}'


// // Grab the variables from the object so I can pass them to another API call
// fetch(api.openweathermap.org/data/2.5/forecast?lat={apiZipResLat}&lon={apiZipResLon}&appid={APIkey}), {
//     APIkey : '4f702383a74cebe940df686df1fd83c2'
// }