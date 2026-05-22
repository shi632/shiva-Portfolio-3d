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
                <h4>Software Development Intern</h4>
                <h5>Deep Minds Technologies (Remote)</h5>
              </div>
              <h3>Feb 2025 - Jul 2025</h3>
            </div>
            <p>
              Developed REST APIs using Java & Spring Boot, created API
              documentation (Swagger), and performed testing with Postman.
            </p>
          </div>

          {/* Experience 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Trainee</h4>
                <h5>NVIDIA (DGX-A100)</h5>
              </div>
              <h3>Oct 2024 - Jan 2025</h3>
            </div>
            <p>
              Worked on AI models, Docker, and deployment. Built projects like
              face recognition and custom ML models.
            </p>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech - Computer Science</h4>
                <h5>AKTU, ABESIT Ghaziabad</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              CGPA: 7.23 | Focused on DSA, OOP, DBMS, AI/ML, and Software
              Engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;