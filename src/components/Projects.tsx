import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects() {
  return (
    <>
      <section id="projects" style={{ padding: "5%" }}>
        <h1 className="text-center">Projects</h1>
        <p className="text-center">Check out a few of my projects!</p>

        <div className="container mt-7" style={{ margin: "5%" }}>
          <div className="row align-items-center">
            <div className="container col-sm-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={"images/movieChatbot.png"}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Movie Chatbot (Python)</h5>
                  <p className="card-text">
                    A chatbot that can have a conversation with the user about
                    any movie, director, actor, etc. This project utilizes the
                    IMDbPY library as well as nltk library.
                  </p>
                  <a
                    href="https://github.com/COSC-310-Group-4/Group-4-Project-Assignment-3.git"
                    style={{ color: "green" }}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>

            <div className="container col-sm-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={"images/ethicsDashboard.png"}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Ethics Dashboard (Web Dev)</h5>
                  <p className="card-text">
                    A dashboard site created to aid students in a collage ethics
                    class in their learning and assignments. Created for an
                    Ethics collage progessor at Okanagan College.
                  </p>
                  <a
                    href="https://github.com/aCupOfHotJava/Ethics_Dashboard_1.git"
                    style={{ color: "green" }}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>

            <div className="container col-sm-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={"images/TicTacToe.png"}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Tic Tac Toe (Java + Swing)</h5>
                  <p className="card-text">
                    Classic game of Tic Tac Toe created with Java. Utilizes
                    Swing to create a user friendly GUI that allows the user to
                    restart the game, create new game, and quit the program.
                  </p>
                  <a
                    href="https://github.com/monica4166/TicTacToe.git"
                    style={{ color: "green" }}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
