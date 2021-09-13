const request = require('request') 

const geocode = ((address, fun )=> {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+decodeURI(address) +'.json?access_token=pk.eyJ1Ijoibm9hMTYwNSIsImEiOiJja3IzZTM5ZTkxbmN3MnlzNnU3N3d6aTRxIn0.t8iGE1b9qcD01YH5R0nz-A&limit=1'
    request({
        url,
        json:true
    },
    (error,{body}={}) =>{
        if(error)
            fun('bad internat' , undefined)
        else if(  body.message=='Forbidden'|| body.features.length===0 )
            fun('cnt find', undefined)
        else
            fun(undefined , body)
        })
    })

module.exports = geocode;

