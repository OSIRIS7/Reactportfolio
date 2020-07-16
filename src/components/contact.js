import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
        <div class="row section-head">
          <div class="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div class="ten columns">
            <p class="lead">
              If you'd like to find out more about me, please visit the about
              page, to contact me you can{" "}
              <a id="emaile" href="mailto:shashankpriyam11@gmail.com">
                eMail
              </a>{" "}
              {}/* me or leave a message on any of the given social links. */{" "}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
