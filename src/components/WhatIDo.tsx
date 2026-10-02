import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () =>
            handleClick(container)
          );
        }
      });
    }

    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () =>
            handleClick(container)
          );
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">

      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">

          {/* ================= BACKEND & API DEVELOPMENT ================= */}

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >

            <div className="what-content-in">

              <h3>BACKEND & API DEVELOPMENT</h3>

              <h4>Description</h4>

              <p>
                I develop scalable backend systems and high-performance RESTful APIs
                using Python and FastAPI, focusing on API integration, data processing,
                business logic implementation, and database architecture.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">

                <div className="what-tags">Python</div>
                <div className="what-tags">FastAPI</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">API Integration</div>
                <div className="what-tags">PostgreSQL</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">AWS</div>
                <div className="what-tags">Git & GitHub</div>

              </div>

              <div className="what-arrow"></div>

            </div>

          </div>

          {/* ================= API TESTING & SOFTWARE ENGINEERING ================= */}

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >

            <div className="what-content-in">

              <h3>TESTING & SOFTWARE ENGINEERING</h3>

              <h4>Description</h4>

              <p>
                I ensure software quality through comprehensive API testing, validation,
                debugging, and regression testing with Postman and Swagger, built on strong
                foundations in OOP, DSA, DBMS, and OS concepts.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">

                <div className="what-tags">API Testing</div>
                <div className="what-tags">Postman</div>
                <div className="what-tags">Swagger / OpenAPI</div>
                <div className="what-tags">Unit Testing</div>
                <div className="what-tags">Integration Testing</div>
                <div className="what-tags">Regression Testing</div>
                <div className="what-tags">OOP & DSA</div>
                <div className="what-tags">DBMS & OS</div>
                <div className="what-tags">React.js & JS</div>

              </div>

              <div className="what-arrow"></div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {

  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {

    const siblings = Array.from(
      container.parentElement.children
    );

    siblings.forEach((sibling) => {

      if (sibling !== container) {

        sibling.classList.remove(
          "what-content-active"
        );

        sibling.classList.toggle(
          "what-sibling"
        );

      }

    });

  }

}