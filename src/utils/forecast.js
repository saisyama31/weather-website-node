const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url='http://api.weatherstack.com/current?access_key=425b5b7921a22c0b02a122a0285fb4a9&query=' + latitude +','+longitude+'&units=f'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('unable to connect weather services!', undefined)
        } else if (response.body.error) {   
            callback('unable to find the location!', undefined)
        } else {
            callback(undefined,response.body.current.weather_descriptions + ' It is currently ' + response.body.current.temperature + ' fahrenheit out. There is a ' + response.body.current.feelslike + '% chance of rain.')
        }
    })
}

module.exports = forecast