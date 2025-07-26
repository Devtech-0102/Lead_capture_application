import { Row, Col, Image } from 'antd';
import { motion } from 'framer-motion';

const galleryImages = [
  '../assets/img-1.webp',
  '../assets/img-2.webp',
  '/assets/img-3.jpg',
  'assets\img-3.jpg',
  '/assets/gallery5.jpg',
  '/assets/gallery6.jpg',   
];

const Gallery = () => (
  <section id="gallery" style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
    <h2 style={{ textAlign: 'center' }}>Gallery</h2>
    <Row gutter={[16, 16]}>
      {galleryImages.map((src, idx) => (
        <Col xs={24} sm={12} md={8} key={idx}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={src}
              alt={`Gallery ${idx + 1}`}
              width="100%"
              height={200}
              style={{ objectFit: 'cover' }}
              preview={true}
            />
          </motion.div>
        </Col>
      ))}
    </Row>
  </section>
);

export default Gallery;
