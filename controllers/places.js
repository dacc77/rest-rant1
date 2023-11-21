const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('GET /places')
})
router.get('/home', (req, res) => {
    res.render('home')
  })
router.get('/new', (req, res) => {
    res.render('places/new')
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
