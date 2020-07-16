import React from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        <section id="about">
          <div className="row">
            <div className="three columns" />

            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>
                <h3>
                  Hello!
                  <br />
                  My name is Shashank Priyam Jha, I am 24 years old Front End
                  Developer based in Bengaluru. I describe myself as a developer
                  who loves coding and designing websites.
                  <br />
                  In my spare time I like to design different websites and take
                  up freelancing projects in HTML and CSS. That helps me to
                  learn a lot of new stuff and grow myself as a developer and
                  designer.
                  <br />I also love playing musical instruments.
                </h3>
              </p>

              <div className="row">
                <div className="columns download">
                  <p>
                    <a
                      href="https://docdro.id/tMdTAzw"
                      className="button"
                      target="_blank"
                    >
                      <i className="fa fa-download" />
                      Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
