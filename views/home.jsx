// views/home.jsx
const React = require('react');
const Def = require('./default');

function Home() {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <img src="/imageschipudding.jpg" alt="Chia pudding with fruit" />
                </div> 
                Photo by <a href=" AUTHOR_LINK"> Brenda Godinez</a> on <a href="UNSPLASHLINK">Unsplash</a>
                <a href="/places">
                 <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    );
}

module.exports = Home;
