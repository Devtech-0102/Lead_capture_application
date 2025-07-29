import { CodeOutlined, MobileOutlined, CloudOutlined } from '@ant-design/icons';
import './Services.scss';

const services = [
  {
    title: "Web Development",
    icon: CodeOutlined,
    desc: "Custom-built, responsive, and lightning-fast websites using modern technologies like React, Angular, and Java — optimized for performance, scalability, and SEO.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500"
  },
  {
    title: "Mobile Apps",
    icon: MobileOutlined,
    desc: "Seamless cross-platform mobile apps crafted with React Native and Flutter — delivering native performance, intuitive UI/UX, and robust functionality across Android and iOS.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=500"
  },
  {
    title: "Cloud Solutions",
    icon: CloudOutlined,
    desc: "End-to-end cloud infrastructure solutions for scalability, security, and performance — including migration, DevOps automation, and cloud-native architecture on AWS, Azure, or GCP.",
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
