import React from "react";

class Resume extends React.Component {
  render() {
    return (
      <div>
        <section id="resume">
          <div class="row education">
            <div class="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Delhi Public School, Gandhingar</h3>
                  <p className="info">
                    Class X <span>&bull;</span> <em className="date">2011</em>
                  </p>

                  <p>
                    I completed my class X from Delhi Public School, Gandhinagar
                    ,with a CGPA of 9.2.
                  </p>
                  <p className="info">
                    Class XII <span>&bull;</span> <em className="date">2013</em>
                  </p>

                  <p>
                    I completed my class XII from Delhi Public School,
                    Gandhinagar ,with a percentage of 85.8%.
                  </p>
                </div>
              </div>

              <div className="row item">
                <div className="twelve columns">
                  <h3>The LNM Institute of Information Technology, Jaipur</h3>
                  <p className="info">
                    B.Tech (E.C.E) <span>&bull;</span>{" "}
                    <em className="date">2017</em>
                  </p>

                  <p>
                    I completed my B.Tech from The LNMIIT, Jaipur in Electronics
                    and Communication Engineering, with a CGPA of 5.35.
                  </p>
                </div>
              </div>
              <div className="row item">
                <div className="twelve columns">
                  <h3>C-DAC , Bengaluru(E-City)</h3>
                  <p className="info">
                    PG Diploma in Advanced Computing <span>&bull;</span>{" "}
                    <em className="date">2018</em>
                  </p>

                  <p>
                    I completed my 6 months Post Graduate Diploma in Advanced
                    Computing from CDAC E-City Bengaluru.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>
                I have completed my B.Tech in Electronics and Communication
                Engineering but due to my keen interest in computer programming
                since class 10<sup>th</sup> I decided to pursue PG-Diploma in
                Advanced Computing to learn coding in depth.
                <br />I started developing games in UNITY 3D and then switched
                to web development.
              </p>

              <div className="bars">
                <ul className="skills">
                  <li>
                    <span className="bar-expand clang" />
                    <em>C</em>
                  </li>
                  <li>
                    <span className="bar-expand cpplang" />
                    <em>C++</em>
                  </li>
                  <li>
                    <span className="bar-expand html5" />
                    <em>HTML5</em>
                  </li>
                  <li>
                    <span className="bar-expand css3" />
                    <em>CSS 3</em>
                  </li>
                  <li>
                    <span className="bar-expand javaScript" />
                    <em>JavaScript</em>
                  </li>
                  <li>
                    <span className="bar-expand jquery" />
                    <em>jQuery</em>
                  </li>
                  <li>
                    <span className="bar-expand reactJs" />
                    <em>React JS</em>
                  </li>
                  <li>
                    <span className="bar-expand angular" />
                    <em>Angular</em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Resume;
