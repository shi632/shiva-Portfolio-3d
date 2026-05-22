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

          {/* ================= BACKEND DEVELOPMENT ================= */}

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >

            <div className="what-content-in">

              <h3>BACKEND DEVELOPMENT</h3>

              <h4>Description</h4>

              <p>
                I develop scalable backend systems using Java and Python,
                focusing on REST API development, database management,
                and secure microservices-based applications.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">

                <div className="what-tags">Java</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">Spring Boot</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">Microservices</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Express.js</div>

              </div>

              <div className="what-arrow"></div>

            </div>

          </div>

          {/* ================= SOFTWARE & AI DEVELOPMENT ================= */}

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >

            <div className="what-content-in">

              <h3>SOFTWARE & AI DEVELOPMENT</h3>

              <h4>Description</h4>

              <p>
                I build intelligent and real-world software solutions
                including healthcare and AI-based applications,
                focusing on clean architecture and performance optimization.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">

                <div className="what-tags">Machine Learning</div>
                <div className="what-tags">AI Development</div>
                <div className="what-tags">Data Structures</div>
                <div className="what-tags">Algorithms</div>
                <div className="what-tags">Git</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">Linux</div>
                <div className="what-tags">Problem Solving</div>

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