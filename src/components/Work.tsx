import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Work = () => {

  
  const projects = [
    {
      number: "01",
      name: "Task Manager API",
      category: "Task & Team Management",
      tools:
        "Python, FastAPI, REST APIs, CRUD Operations, Authentication, PostgreSQL",
      image: "/images/TaskMangerAPI.jpeg",
    },

    {
      number: "02",
      name: "ServioServicePlatform",
      category: "Service Management Platform",
      tools:
        "Python, FastAPI, REST APIs, Database Integration, Operational Workflows",
      image: "/images/Authentication.jpeg",
    },

    {
      number: "03",
      name: "Mind Matrix AI",
      category: "AI Mental Wellness Platform",
      tools:
        "Python, Flask, AI Assessment, REST APIs, Database Integration",
      image: "/images/MindCare.jpeg",
    },

    {
      number: "04",
      name: "Healthcare Management API",
      category: "Healthcare & Insurance System",
      tools: "Python, RESTful APIs, Swagger / OpenAPI, Postman Testing, Business Logic",
      image: "/images/E-Commerce.png",
    },

    {
      number: "05",
      name: "3D Interactive Portfolio",
      category: "Modern 3D Web Experience",
      tools:
        "React, TypeScript, Three.js, GSAP, Rapier Physics",
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