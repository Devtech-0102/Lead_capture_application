import React, { useRef, useEffect, useState } from "react";
import { MenuOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import gsap from "gsap";
import { Link } from "react-scroll";
import "./Headers.scss";

const Headers = () => {
  const navLinks = [{ name: "Home", path: 'hero' }, { name: "About Us", path: 'about' }, { name: "Services", path: 'services' }, { name: "Blog", path: 'blog' }, { name: "Contact", path: 'contact' }];
  const linkRefs = useRef([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    gsap.from(linkRefs.current, {
      y: -20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <>

      <div className="row navbar-section">
        <div className="col-3 logo">
          <img src="/logo.webp" alt="Logo" />
          <span>Insight eye</span>
        </div>

        <div className="col-5 nav-links">

          {navLinks.map((text, index) => (
            <Link
              key={index}
              ref={el => linkRefs.current[index] = el}
              to={text.path}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              className="nav-link"
              onMouseEnter={() => {
                gsap.to(linkRefs.current[index], {
                  scale: 0.9,
                  color: "#ff4d4f",
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
              onMouseLeave={() => {
                gsap.to(linkRefs.current[index], {
                  scale: 1,
                  color: "#000",
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
            >
              {text.name}
            </Link>
          ))}

        </div>
        <div className="col-4">
          <div className="right-section">
            <PhoneOutlined />
            <span>(239)-543-217-0108</span>
            <Button className="contact-btn button-48" type="primary">Let's Contact →</Button>
          </div>
        </div>
      </div>

      {/* <div className="logo-section">
        <nav className="main-navbar">
          
          <div className="nav-links">
            {navLinks.map((text, index) => (
              <Link
                key={index}
                ref={el => linkRefs.current[index] = el}
                to={text.path}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                className="nav-link"
                onMouseEnter={() => {
                  gsap.to(linkRefs.current[index], {
                    scale: 0.9,
                    color: "#ff4d4f",
                    duration: 0.3,
                    ease: "power2.out",
                  });
                }}
                onMouseLeave={() => {
                  gsap.to(linkRefs.current[index], {
                    scale: 1,
                    color: "#000",
                    duration: 0.3,
                    ease: "power2.out",
                  });
                }}
              >
                {text.name}
              </Link>
            ))}
          </div>
          <div className="right-section">
            <PhoneOutlined />
            <span>(239)-543-217-0108</span>
            <Button className="contact-btn button-48" type="primary">Let's Contact →</Button>
          </div>
          <div className="menu-toggle" onClick={() => setOpen(true)}>
            <MenuOutlined />
          </div>
        </nav>
      </div> */}
      <Drawer placement="right" onClose={() => setOpen(false)} open={open}>
        {navLinks.map(link => (
          <p key={link}><a href="#">{link}</a></p>
        ))}
      </Drawer>
    </>
  );
};

export default Headers;
