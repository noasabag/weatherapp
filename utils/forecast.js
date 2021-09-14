const request = require('request') 

const forecast = ((co1, co2, callback)=>{
    url= 'http://api.weatherstack.com/current?access_key=82ff0459f30b9b34821041c48371e827&query='+ decodeURI(co2) +','+decodeURI(co1)
    request({
    url:url,
    json:true
    }, (error, {body}={})=>{
        if(error)
        callback('bad internet',undefined)
        else if(body.success===false)
        callback('culdnt find the location',undefined)
    
        else
        callback(undefined, ' ' +body.current.weather_descriptions[0] + ' the temp is ' + body.current.temperature + ' but it feels like ' + body.current.feelslike )    
        
    })})
module.exports = forecast;