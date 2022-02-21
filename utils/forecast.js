const request = require('request')
const forecast = (latitude, longitude, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=967b7d74115ca73c6fe1d0b506af3ef6&query=${longitude},${latitude}&units=f`
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to run', undefined)
        } else if (response.body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(
                undefined, ' It is currently ' + response.body.current.temperature + ' degrees out. Feeels like ' + response.body.current.feelslike)

        }

    })
}
module.exports = forecast