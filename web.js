const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const express = require('express')
const hbs = require('hbs')
const exp = express()

const port = process.env.PORT || 3000

const viewpath =(__dirname + '/templets/views')
const viewpartials =(__dirname + '/templets/partials')

exp.use(express.static(  __dirname + '/noastaticPublic' ))

exp.set('view engine','hbs')
exp.set('views',viewpath)
hbs.registerPartials(viewpartials)

exp.get('/help', (req, res)=> res.render('help', {title: 'help', name: 'assaf',
me: 'noa'}))

exp.get('', (req, res)=> res.render('', {title: 'home page' , name: 'assaf',
me: 'noa'}))

exp.get('/about', (req, res)=> res.render('about', {title: 'about', name: 'assaf',
me: 'noa'}))


exp.get('/weather' , (req, res)=>{
  if(!req.query.address){
    return  res.send ({ messege: 'location didnt provide'})
  }
  
  geocode(req.query.address, (error, response) => {
    if(error)
      return res.send ({error: error})
    
    forecast(response.features[0].center[0], response.features[0].center[1],  (error, data) => {
      if(error)
        return res.send({error: error})
                
      res.send (
      {
        location: response.features[0].place_name,
        forecast: data,
        address: req.query.address
      })
    })
  }) 
})

exp.get('/help/*', (req, res)=> res.render('404view', {title: '404', name: 'assaf',
me: 'noa', messege: 'help article not found'}))

exp.get('*', (req, res)=> res.render('404view', {title: '404', name: 'assaf',
me: 'noa' , messege: '404 not found'}))




exp.listen(port,()=>console.log('Hello YOURE ON PORT' + port))



