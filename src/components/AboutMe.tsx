// colour alternative for col background: #90b8a8

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cards from "./Cards";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faMedal } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
  return (
    <>
      <section id="about" style={{ padding: "6%" }}>
        <div className="container" style={{ marginTop: "3%" }}>
          <h2 className="font-weight-bold mb-4 text-center">About Me</h2>
          <div>
            <p className="fw-bold text-success">Hi, i'm Monica!</p>
            <p>
              Welcome to my website! I am a software developer with a passion
              for all things development and quality assurance. I love to create
              websites and software applications that are appealing and easy for
              users to navigate. Building and testing softwares and web apps to
              ensure the user experience is smooth via automation testing is my
              passion.
            </p>
            <p>
              Feel free to explore my projects and learn more about my journey
              in software development. If you have any questions or would like
              to connect, don't hesitate to reach out!
            </p>
            <p>Areas of expertise: </p>
          </div>
        </div>

        <div className="container mt-7" style={{ margin: "2%" }}>
          <div className="row">
            <div className="container col-sm-3">
              <Cards
                faIcon={
                  <FontAwesomeIcon
                    icon={faHtml5}
                    size="5x"
                    style={{ margin: "5%" }}
                  />
                }
                title="Front-end Web Development"
              />
            </div>
            <div className="container col-sm-3">
              <Cards
                faIcon={
                  <FontAwesomeIcon
                    icon={faCode}
                    size="5x"
                    style={{ margin: "5%" }}
                  />
                }
                title="Software Desgin & Development"
              />
            </div>
            <div className="container col-sm-3">
              <Cards
                faIcon={
                  <FontAwesomeIcon
                    icon={faDatabase}
                    size="5x"
                    style={{ margin: "5%" }}
                  />
                }
                title="Database Management Systems"
              />
            </div>
            <div className="container col-sm-3">
              <Cards
                faIcon={
                  <FontAwesomeIcon
                    icon={faMedal}
                    size="5x"
                    style={{ margin: "5%" }}
                  />
                }
                title="Quality Assurance"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
