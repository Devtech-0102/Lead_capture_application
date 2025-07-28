// src/components/ContactUs.jsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../js/gsapConfig';
import '../utils/Button.scss'

gsap.registerPlugin(ScrollTrigger);
import { motion } from 'framer-motion';
import './Contact.scss';
import { Button } from 'antd';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  // Right side form animation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animation based on scroll direction
          if (scrollDirection === 'down') {
            entry.target.classList.add('animate-up');
          } else {
            entry.target.classList.add('animate-down');

          }
        } else {
          entry.target.classList.remove('animate-down', 'animate-up');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, [scrollDirection]);


  // Left side text animations
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animation based on scroll direction
          if (scrollDirection === 'down') {
            entry.target.classList.add('animate-down');
          } else {
            entry.target.classList.add('animate-up');
          }
        } else {
          entry.target.classList.remove('animate-down', 'animate-up');
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [scrollDirection]);


  return (
    <section className="contact-section">
      <div ref={textRef}
        className="directional-text contact-info">
        <h2 >
          Have Any Questions?
        </h2>
        <p>
         Have questions, feedback, or need support? Fill out the form or reach us through the details below.
        </p>
        <div className="contact-items">
          <div className='cont-det'><strong>📞</strong><span>+11223344550</span></div>
          <div className='cont-det'><strong>📧</strong><span>info@example.com</span></div>
          <div className='cont-det'><strong>📍</strong><span>1234 Chennai, Tamilnadu, INDIA</span></div>
        </div>

      </div>



      <div className="contact-form" ref={aboutRef}>
        <input type="text" placeholder="Enter Your Name *" />
        <input type="email" placeholder="Enter Your Email *" />
        <textarea placeholder="Enter Your Message *" />
         <Button className="button-48" type="primary" style={{padding:'18px 0px 25px 0px'}}>Send Us →</Button>
        {/* <button className='btn-48'></button> */}
      </div>
    </section>
  );
};

export default Contact;
