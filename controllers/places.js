const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.get('/', (req, res) => {
    res.render('GET /places')
})
router.get('/home', (req, res) => {
    res.render('home')
  })
router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
  router.post('/', (req, res) => {
   // console.log(req.body)
    if (!req.body.pic) {
        req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
        req.body.city = 'Anytown'
      }
      if (!req.body.state) {
        req.body.state = 'USA'
      }
      places.push(req.body)
    res.redirect('/places')
  })
  

router.get('/places', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      },
       {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
       res.render('places/index', {places});
  });
  
module.exports = router;
