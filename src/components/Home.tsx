import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <section id="home" style={{ padding: "6%" }}>
        <div className="container mt-7">
          <div className="row align-items-center">
            <div className="container col-sm-4">
              <h1 className="fw-bold mb-4">Hi, i'm Monica!</h1>
              <h2 className="text-success">Software developer</h2>
              <p>Passion for front-end web development and quality assurance</p>
              <p>
                <a
                  className="btn btn-dark"
                  href={"files/Monica-Rampaul-Resume.pdf"}
                  download
                >
                  Check out my resume
                </a>
              </p>
              <a
                href="https://github.com/monica4166"
                style={{ color: "black", margin: "5px" }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="mailto:monicarampaul@gmail.com"
                style={{ color: "black", margin: "5px" }}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>

              <a
                href="tel:monicarampaul@gmail.com"
                style={{ color: "black", margin: "5px" }}
              >
                <FontAwesomeIcon icon={faPhone} />
              </a>

              <a
                href="https://www.linkedin.com/in/monica-rampaul/"
                style={{ color: "black", margin: "5px" }}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="container col-sm-5">
              <img
                src={"images/Portfolio-Headshot.JPG"}
                alt="Profile Picture"
                className="img-fluid rounded-circle mx-auto d-block border border-dark"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
