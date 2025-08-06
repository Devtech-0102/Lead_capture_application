// TechStack.js
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./css/TechStack.module.css"; // Add styles here
import clsx from "clsx";
gsap.registerPlugin(ScrollTrigger);

const techStack = [
  [{ name: "Android", icon: "/assets/icons/tech/android.png" },
  { name: "Java", icon: "/assets/icons/tech/java.png" },
  { name: "React", icon: "/assets/icons/tech/react.png" },
  { name: "MySQL", icon: "/assets/icons/tech/mysql.png" }
  ],
  [
    { name: "IOS", icon: "/assets/icons/tech/ios.png" },
    { name: "Angular.js", icon: "/assets/icons/tech/angular.png" },
    { name: "Vs code", icon: "/assets/icons/tech/vs-code.png" }
  ],
  [
    { name: "aws", icon: "/assets/icons/tech/aws.png" },
    { name: "PostgreSQL", icon: "/assets/icons/tech/postgre.png" },
    { name: "Docker", icon: "/assets/icons/tech/docker.png" },
    { name: "redhat", icon: "/assets/icons/tech/redhat.png" }
  ],
  [
    { name: "Android", icon: "/assets/icons/tech/android.png" },
    { name: "Jenkins", icon: "/assets/icons/tech/jenkins.png" }
  ]



];

const TechStack = () => {
  const containerRef = useRef(null);

// useEffect(() => {
//   gsap.from(".tech_icon img", {
//     opacity: 0,
//     scale: 0.8,
//     y: 50,
//     stagger: 0.1,
//     delay:1,
//     duration: 0.6,
//     ease: "power2.out",
//   });
// }, []);


  return (
    <section className={clsx(styles.tech_stack_section)} ref={containerRef}>
      <div className="container-fluid px-xl-5">
        <h2 className="text-center text-white mb-5">Our Tech Stack</h2>
        <div className="row justify-content-center">
          {techStack.map((group, groupIndex) => (
            <div className="d-flex py-2 justify-content-around" key={groupIndex}>
              {group.map((tech, index) => (
                <div key={`${groupIndex}-${index}`} className={`${styles.tech_icon} tech_icon p-3 rounded`}>
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="img-fluid"
                    style={{ maxHeight: "80px" }}
                  />
                  {/* <p className="mt-2 text-white">{tech.name}</p> */}
                </div>
              ))}
            </div>
            // <div key={index} className={`
            // text-center,
            // mb-4,
            // col-xl-3,
            // col-md-4`
            // }
            // >
            //   <div className={`${styles.tech_icon} tech_icon  p-3 rounded`}>
            //     <img 
            //       src={tech.icon}
            //       alt={tech.name}
            //       className="img-fluid"
            //       style={{ maxHeight: "60px" }}
            //     />
            //     <p className="mt-2 text-white">{tech.name}</p>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
