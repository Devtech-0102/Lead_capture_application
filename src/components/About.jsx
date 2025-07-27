import { Link } from 'react-scroll';
import './About.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  const animations = [];

  useEffect(() => {

    if (!aboutRef.current) return;

    // Debug: Add temporary border to check if container renders
    // aboutRef.current.style.border = '2px solid red';

    gsap.set(aboutRef.current.querySelectorAll('*'), {
      opacity: 1,
      y: 0
    });

    const sections = aboutRef.current.querySelectorAll('.about-section, .call-to-action, .about-heading, .about-intro');

    sections.forEach((element) => {
      const animation = gsap.from(element, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          markers: false
        }
      });

      animations.push(animation);

    });

    // Animate list items sequentially
    const listItems = aboutRef.current.querySelectorAll('.list li');
    listItems.forEach((item, index) => {
      const animation = gsap.from(item, {
        opacity: 0,
        x: -20,
        duration: 0.5,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: item.parentElement,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
      animations.push(animation);
    });

    return () => {
      animations.forEach(anime => anime.kill());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }

  }, []);

  return (
    <section className="about-us" ref={aboutRef}>
      <div className="container">
        <div className="about-header">
          <h2 className="about-heading">About <span className="highlight">LeadCreature</span></h2>
          <div className="divider"></div>
          <p className="about-intro">
            <strong>LeadCreature</strong> is an India-based software company passionate about building smart, scalable, and user-friendly digital solutions. We specialize in software products, mobile and web applications, Saas platforms, and tailor-made development based on your needs.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-section">
            <div className="section-card">
              <div className="icon-wrapper">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                </svg>
              </div>
              <h3 className="section-title">Who We Are</h3>
              <p>
                We are a team of creative developers, designers, and problem solvers delivering reliable software solutions to clients worldwide. Headquartered in India, we merge innovation with affordability to help businesses grow.
              </p>
            </div>

            <div className="section-card">
              <div className="icon-wrapper">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M12,2L4,5V11.09C4,16.14 7.41,20.85 12,22C16.59,20.85 20,16.14 20,11.09V5L12,2M12,4.5L18,6.6V11.8C17.1,12.45 16.1,13 15,13.5V7.1L12,5.5L9,7.1V13.5C7.9,13 6.9,12.45 6,11.8V6.6L12,4.5M12,8A1,1 0 0,0 11,9A1,1 0 0,0 12,10A1,1 0 0,0 13,9A1,1 0 0,0 12,8Z" />
                </svg>
              </div>
              <h3 className="section-title">Our Mission</h3>
              <p>
                To help businesses of all sizes embrace digital innovation through user-centric, efficient, and scalable software solutions.
              </p>
            </div>
          </div>

          <div className="about-section">
            <div className="section-card">
              <div className="icon-wrapper">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z" />
                </svg>
              </div>
              <h3 className="section-title">What We Do</h3>
              <ul className="list">
                <li>Custom Software Development</li>
                <li>Mobile App Development (Android & iOS)</li>
                <li>Web Application Development</li>
                <li>SaaS Product Development</li>
                <li>Technical Consulting & Support</li>
              </ul>
            </div>

            <div className="section-card">
              <div className="icon-wrapper">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.5V11C15.4,11 16,11.6 16,12.2V15.7C16,16.4 15.4,17 14.7,17H9.2C8.6,17 8,16.4 8,15.7V12.2C8,11.6 8.6,11 9.2,11V9.5C9.2,8.1 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z" />
                </svg>
              </div>
              <h3 className="section-title">Why Choose Us?</h3>
              <ul className="list">
                <li>India-based with a global client base</li>
                <li>End-to-end project execution</li>
                <li>Agile, scalable, and user-focused</li>
                <li>Reliable post-launch support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="call-to-action">
          <div className="cta-content">
            <h3>Let's Build Something <span className="highlight">Great Together</span></h3>
            <p>
              Whether you're launching a new app, modernizing your system, or developing a unique product idea —
              <strong> LeadCreature</strong> is your trusted technology partner.
            </p>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              className="contact-link"
            >
              Get in touch <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;