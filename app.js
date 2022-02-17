const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=bf84264da0de28808147247886761611&query=37.8267,-122.4233&units=f'
// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('unable to run')
//     } else if (response.body.error) {
//         console.log('unable to get location')

//     } else {
//         console.log(response.body.current.weather_descriptions[0] +
//             ' It is currently ' + response.body.current.temperature + ' degrees out. Feeels like ' + response.body.current.feelslike)
//     }

// })





const url2 = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ2F1cmF2c2hhcm1hMjciLCJhIjoiY2t6cW9yOXlmM3R3aDJwbnJudjJld3NlcyJ9.er795XnY8AZmm6FonVXOZg&limit=1`
request({ url: url2, json: true }, (error, response) => {

    if (error) {
        console.log('unable o connect ')
    } else if (response.body.features.length === 0) {
        console.log('unable to get data')
    } else {
        console.log(response.body.features[0].center)
    }
})