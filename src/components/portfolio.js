import React from "react";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="portfolio">
        <h1>Check out some of my work !!</h1>
        <hr />
        <div class="row">
          <h2>Websites:-</h2>
          <div class="column1">
            <div class="card">
              <div class="container">
                <h2>Product Page</h2>
                <p id="productp">
                  The Ukulele Shop is an E-Commerce website, to display types of
                  Ukulele , and their prices and a way to make a cart for final
                  purchase.
                </p>
                <p>
                  <a
                    href="https://codepen.io/kizashi/full/dqmYPG"
                    target="_blank"
                  >
                    <button class="button">Visit</button>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="column1">
            <div class="card">
              <div class="container">
                <h2>Wikipedia Searcher</h2>

                <p>
                  The Wikipedia Searcher is a searching website, to directly
                  search the contents on Wikipedia and display results.
                </p>
                <p>
                  <a
                    href="https://codepen.io/kizashi/full/deYMgm"
                    target="_blank"
                  >
                    <button class="button">Visit</button>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="column1">
            <div class="card">
              <div class="container">
                <h2>Quote Generator</h2>

                <p>
                  The Quote Generator is a website that randomly generates
                  inspiring Quotes , and an option to share them.
                </p>
                <p>
                  <a
                    href="https://codepen.io/kizashi/full/mLbwQq"
                    target="_blank"
                  >
                    <button class="button">Visit</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="column1">
            <div class="card">
              <div class="container">
                <h2>The Weather App</h2>
                <p>
                  The Weather App is a website that detects the users location
                  and displays the weather of the location.
                </p>
                <p>
                  <a
                    href="https://codepen.io/kizashi/full/ELYbdj"
                    target="_blank"
                  >
                    <button class="button">Visit</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="row">
          <h2>Games:-</h2>
          <div class="column2">
            <div class="card">
              <img
                src="https://s20.postimg.cc/nvaa5fm59/Screenshot_65.png"
                alt="Boxiee"
              />
              <div class="container">
                <h2>Box Shooter</h2>
                <p class="title">3D- Game</p>
                <p>
                  Boxiee is a game in which player shoots the randomly
                  generating boxes using a shooter.New features are added on new
                  levels. It has mouse and keyboard functionalities.
                </p>
              </div>
            </div>
          </div>
          <div class="column2">
            <div class="card">
              <img
                src="https://s20.postimg.cc/fut9w63h9/3c9d1602-129b-47e7-a799-5c6920a55f6a_level_1.jpg"
                alt="Killball"
              />
              <div class="container">
                <h2>Kill Ball</h2>
                <p class="title">3D- Game</p>
                <p>
                  KillBall is a game in which the ball rolls on the floor
                  collecting coins and avoiding various obstacles and
                  enemies.This game has keyboard functionality to control the
                  movement of the ball.
                </p>
              </div>
            </div>
          </div>
          <div class="column2">
            <div class="card">
              <img
                src="https://s20.postimg.cc/mt03mvvm5/Screenshot_64.png"
                alt="Don\'t Jump "
              />
              <div class="container">
                <h2>Don't Jump</h2>
                <p class="title">2D- Game</p>
                <p>
                  Don't Jump is the game in which the player moves around a 2-D
                  world comprising of planks collectibles and avoiding various
                  fixed and moving enemies.This Game is developed using UNITY 3D
                  Game Engine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
