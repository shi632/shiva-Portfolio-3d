import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Career <span>&</span>
          <br /> Education
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Experience 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Atvantiq Networks, Mohali, Punjab</h5>
              </div>
              <h3>June 2026 - Present</h3>
            </div>
            <p>
              Working on software development and backend application workflows involving APIs, business logic, application integration, and testing. Developing backend functionality with a focus on reliable API behavior, data processing, and performance.
            </p>
          </div>

          {/* Experience 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Deep Minds Technologies, USA (Remote)</h5>
              </div>
              <h3>Dec 2025 - May 2026</h3>
            </div>
            <p>
              Developed and maintained RESTful APIs using Python for healthcare insurance and preventive healthcare management systems. Created Swagger/OpenAPI documentation and performed API testing and debugging using Postman.
            </p>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – CSE (AI)</h4>
                <h5>ABESIT, AKTU</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              CGPA: 7.37 / 10 | Class XII: 76% | Class X: 84.89% (UP Board). Strong foundation in OOP, DSA, DBMS, OS, and Software Engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;