function Experience() {
  return (
    <>
      <section id="experience" style={{ padding: "6%" }}>
        <h1 className="text-center" style={{ marginTop: "3%" }}>
          Experience
        </h1>
        <div style={{ margin: "2%" }}>
          <ul className="list-unstyled">
            <li className="mb-5 border-start" style={{ padding: "2%" }}>
              <h5 className="fw-bold text-success">Infosys Limited</h5>
              <p className="text-muted mb-2 fw-bold">
                Associate Software Developer - SDET, Nov 2022 - Sept 2023
              </p>
              <p className="text-muted">
                <ul>
                  <li>
                    Designed sprint level test cases and regression test cases
                    in agile teams of 10 members.
                  </li>
                  <li>
                    Automated and executed test cases for the regression suite
                    over 3 releases using Selenium and TestNG increasing
                    automation test coverage by 10%.
                  </li>
                  <li>
                    Collaborated with mentor and technical leads to improve on
                    technical skills and build on previous dexterity to stay up
                    to date with industry standards resulting in an increase in
                    client project satisfaction.
                  </li>
                  <li>
                    Completed 15+ technical trainings and courses over the span
                    of 6 months leading to obtaining 3 company specific
                    certifications.
                  </li>
                </ul>
              </p>
            </li>

            <li className="mb-5 border-start" style={{ padding: "2%" }}>
              <h5 className="fw-bold text-success">
                The University of British Columbia
              </h5>
              <p className="text-muted mb-2 fw-bold">
                Teaching Assisstant, Sept 2021 - Apr 2022
              </p>
              <p className="text-muted">
                <ul>
                  <li>
                    Instructed students in lab sessions and provided technical
                    and non-technical support increasing lab attendance by 20%.
                  </li>
                  <li>
                    Assisted students with troubleshooting software environment
                    set up and debugging code resulting in an increase of 15%
                    assignment passing rate.
                  </li>
                  <li>
                    Reinforced students' learning by reviewing programming
                    concepts at the beginning of lab sessions 2 times a week.
                  </li>
                  <li>
                    Worked closely with course professors and teams of 5-10
                    teaching assistants to provide students with feedback via
                    comments and grades for each assignment leading to deeper
                    critical thinking practices.
                  </li>
                </ul>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Experience;
