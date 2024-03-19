import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <>
      <section id="contact" style={{ padding: "6%" }}>
        <h1 className="text-center">Contact</h1>
        <p className="text-center">Get in touch!</p>

        <div
          className="container mt-7"
          style={{ padding: "2%", height: "100vh" }}
        >
          <div
            className="row align-items-center text center"
            style={{ height: "20vh" }}
          >
            <div className="container col-sm-6 ">
              <div>
                <a
                  href="mailto:monicarampaul@gmail.com"
                  className="link-success"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <p>monicarampaul@gmail.com</p>
              </div>
            </div>
            <div className="container col-sm-6 ">
              <div>
                <a href="tel:4168804695" className="link-success">
                  <FontAwesomeIcon icon={faPhone} />
                </a>
                <p>(416)880-4695</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center" style={{ height: "20vh" }}>
            <div className="container col-sm-6 ">
              <div>
                <a
                  href="https://github.com/monica4166"
                  className="link-success"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <p>Visit my Github</p>
              </div>
            </div>
            <div className="container col-sm-6 ">
              <div>
                <a
                  href="https://www.linkedin.com/in/monica-rampaul/"
                  className="link-success"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <p>Connect with me on LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
