import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/Kizashi" target="_blank">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/kizashi_spj" target="_blank">
                  <i className="fa fa-twitter" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/shashank-priyam-jha-05770ba3/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/shashankpriyam/"
                  target="_blank"
                >
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>

            <ul class="copyright">
              <li class="nav-item pl-2 pr-2">
                <p>
                  &#169;2019 - Made by{" "}
                  <a
                    href="https://www.linkedin.com/in/shashank-priyam-jha-05770ba3/"
                    target="_blank"
                    target="_blank"
                  >
                    Kizashi
                  </a>
                  <br />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
