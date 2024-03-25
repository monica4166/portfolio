import Progress from "./Progress";
function Skills() {
  return (
    <>
      <section id="skills" style={{ padding: "6%" }}>
        <div className="text-center" style={{ marginTop: "3%" }}>
          <h1>Skills</h1>
        </div>

        <p>Here is an overview of my top skills:</p>

        <div className="container mt-7">
          <div className="row">
            <div className="container col-sm-6">
              <div style={{ padding: "3%" }}>
                <Progress skill="Java" value="95%" />
              </div>

              <div style={{ padding: "3%" }}>
                <Progress skill="Python" value="80%" />
              </div>

              <div style={{ padding: "3%" }}>
                <Progress skill="HTML / CSS" value="95%" />
              </div>

              <div style={{ padding: "3%" }}>
                <Progress skill="C#" value="80%" />
              </div>
            </div>
            <div className="container col-sm-6">
              <div style={{ padding: "3%" }}>
                <Progress skill="Javascript / Typescript" value="80%" />
              </div>

              <div style={{ padding: "3%" }}>
                <Progress skill="Databases / SQL" value="70%" />
              </div>

              <div style={{ padding: "3%" }}>
                <Progress skill="React" value="80%" />
              </div>

              <div style={{ padding: "3%" }}>
                <Progress skill="TestNG / JUnit with Selenium" value="90%" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center" style={{ margin: "3%", padding: "2%" }}>
          <p>For a more in-depth look at my skills please view my resume. </p>
          <p>
            <a
              className="btn btn-dark"
              href={"files/Monica-Rampaul-Resume.pdf"}
              download
            >
              Check out my resume
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Skills;
