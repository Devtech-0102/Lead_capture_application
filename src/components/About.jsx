import './About.scss'

const About = () => (
  // <section id="about" style={{ padding: '80px 20px' }}>
  //   <h2>About Us</h2>
  //   <p>We are a leading provider of innovative digital solutions.</p>
  // </section>
  <section className="about-us">
    <div className="container">
      <h2 className="about-heading">About us</h2>
      <p className="about-intro">
        <strong>LeadCreature</strong> is an India-based software company passionate about building smart, scalable, and user-friendly digital solutions. We specialize in software products, mobile and web applications, Saas platforms, and tailor-made development based on your needs.
      </p>

      <div className="about-grid">
        <div className="about-section">
          <h3 className="section-title">Who We Are</h3>
          <p>
            We are a team of creative developers, designers, and problem solvers delivering reliable software solutions to clients worldwide. Headquarted in India, we merge innovation with affordability to help bussiness grow.
          </p>

          <h3 className="section-title">Our Mission</h3>
          <p>
            To help businesses of all sizes embrace digital innovation through user-centric, efficient, and scalable software solutions.
          </p>
        </div>

        <div className="about-section">
          <h3 className="section-title">What We Do</h3>
          <ul className="list">
            <li>Custom Software Development</li>
            <li>Mobile App Development (Android & iOS)</li>
            <li>Web Application Development</li>
            <li>SaaS Product Development</li>
            <li>Technical Consulting & Support</li>
          </ul>

          <h3 className="section-title">Why Choose Us?</h3>
          <ul className="list">
            <li>India-based with a global client base</li>
            <li>End-to-end project execution</li>
            <li>Agile, scalable, and user-focused</li>
            <li>Reliable post-launch support</li>
          </ul>
        </div>
      </div>

      <div className="call-to-action">
        <h3>Let’s Build Something Great Together</h3>
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
          <a className="contact-link">Get in touch →</a>
        </Link>
      </div>

    </div>
  </section>
);

export default About;
