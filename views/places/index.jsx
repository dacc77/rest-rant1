
const React = require('react');
const Def = require('../default');

res.render('places/index', { places })

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className="col-sm-6">
          <h2>{Rio Picanha Brazilian Steakhouse }</h2>
          <p>className="text-center">
            {places.cuisines}
          </p>
          <img src={braziliansteak.jpg} alt={rio picanha} />
          <p> className="text-center">
            Located in {West Covina}, {California}
          </p>
        </div>
      )
    })

    function index (data) {
        let placesFormatted = data.places.map((place) => {
          return (
            <div className="col-sm-6">
              <h2>{99 Ranch Dine-In }</h2>
              <p>className="text-center">
                {places.cuisines}
              </p>
              <img src={pekingduck.jpg} alt={99 ranch duck} />
              <p> className="text-center">
                Located in {Monterey Park}, {California}
              </p>
            </div>
          )
        })
    return (
      <Def>
          <main>
              <h1>Places to Rant or Rave About</h1>
              <div className="row">
                {placesFormatted}
              </div>
          </main>
      </Def>
    )
  }
  

    return (
        <Def>
            <main>
                <h1>Places List</h1>
                {placesFormatted}
            </main>
        </Def>
    );
}

module.exports = Index;
