import { CodeOutlined, MobileOutlined, CloudOutlined } from '@ant-design/icons';
import './Services.scss';

const services = [
  {
    title: "Web Development",
    icon: CodeOutlined,
    desc: "Build high-performance websites with React, Angular, and Java.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500"
  },
  {
    title: "Mobile Apps",
    icon: MobileOutlined,
    desc: "Cross-platform apps with React Native or Flutter.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=500"
  },
  {
    title: "Cloud Solutions",
    icon: CloudOutlined,
    desc: "Scalable cloud infrastructure.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500"
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div key={idx} className="service-card">
              <div className="service-icon">
                <Icon />
              </div>
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
                loading="lazy"
              />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <button className="service-button">Learn More</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
