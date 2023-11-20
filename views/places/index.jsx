
const React = require('react');
const Def = require('../default');

res.render('places/index', { places })

function Index(data) {
    let placesFormatted = places.map(place) => {
        return (
        <div>
            <h2>{placesFormatted.name</h2>
            <img src={place.pic} alt={place.name}/>
        </div>
    );

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
