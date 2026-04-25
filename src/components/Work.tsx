import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Work = () => {

  // 📌 Real Projects Based On Your Resume
  const projects = [
    {
      number: "01",
      name: "Healthcare Management System",
      category: "Backend Development",
      tools:
        "Java, Spring Boot, REST API, MySQL, Microservices",
      image: "/images/MindCare.jpeg",
    },

    {
      number: "02",
      name: "User Authentication System",
      category: "Security & Backend",
      tools:
        "Java, JWT, Session Management, Role-Based Access",
      image: "/images/Authentication.jpeg",
    },

    {
       number: "03",
       name: "E-Commerce Web Application",
       category: "Full Stack Development",
       tools:
        "Java, Spring Boot, REST API, MySQL, JWT Authentication, Payment Integration",
       image: "/images/E-Commerce.png",
    },

    {
      number: "04",
      name: "Task Manager",
      category: "Backend Architecture",
      tools: "Java, Spring Boot, REST APIs, Microservices",
      image: "/images/TaskMangerAPI.jpeg",
    },

    {
      number: "05",
      name: "Portfolio Website",
      category: "Frontend Development",
      tools:
        "React, TypeScript, GSAP, CSS",
      image: "/images/PortfolioWebsite.jpeg",
    },

    
  ];

  useGSAP(() => {

    let translateX: number = 0;

    function setTranslateX() {

      const box = document.getElementsByClassName(
        "work-box"
      ) as HTMLCollectionOf<HTMLElement>;

      if (!box.length) return;

      const container =
        document.querySelector(".work-container");

      if (!container) return;

      const rectLeft =
        container.getBoundingClientRect().left;

      const rect = box[0].getBoundingClientRect();

      const parentWidth =
        box[0].parentElement!.getBoundingClientRect()
          .width;

      let padding: number =
        parseInt(
          window.getComputedStyle(box[0]).padding
        ) / 2;

      translateX =
        rect.width * box.length -
        (rectLeft + parentWidth) +
        padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };

  }, []);

  return (

    <div className="work-section" id="work">

      <div className="work-container section-container">

        <h2>
          My <span>Projects</span>
        </h2>

        <div className="work-flex">

          {projects.map((project, index) => (

            <div
              className="work-box"
              key={index}
            >

              <div className="work-info">

                <div className="work-title">

                  <h3>{project.number}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>

                </div>

                <h4>Tools & Technologies</h4>

                <p>{project.tools}</p>

              </div>

              <WorkImage
                image={project.image}
                alt={project.name}
              />

            </div>

          ))}

        </div>

      </div>

    </div>

  );

};

export default Work;