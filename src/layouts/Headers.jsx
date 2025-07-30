import React, { useRef, useEffect, useState } from "react";
import { MenuOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { gsap, ScrollTrigger } from '../js/gsapConfig';
import { Link } from "react-scroll";
import "./Headers.scss";
import './../utils/Button.scss'


const Headers = () => {
  const navLinks = [{ name: "Home", path: 'hero' }, { name: "About Us", path: 'about' }, { name: "Services", path: 'services' }, { name: "Blog", path: 'blog' }, { name: "Contact", path: 'contacts' }];
  const linkRefs = useRef([]);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="row navbar-section">
        <div className="col-3 logo">
          <img src="/logo.webp" alt="Logo" />
          <span>Lead-Capture</span>
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
              className="nav-link button-89">
              {text.name}
            </Link>
          ))}
        </div>
        <div className="col-4 right-section">
          <PhoneOutlined />
          <span>(239)-543-217-0108</span>
          <Button className="button-48" type="primary">Let's Contact →</Button>
        </div>
      </div>
      <Drawer placement="right" onClose={() => setOpen(false)} open={open}>
        {navLinks.map(link => (
          <p key={link}><a href="#">{link}</a></p>
        ))}
      </Drawer>
    </>
  );
};

export default Headers;
