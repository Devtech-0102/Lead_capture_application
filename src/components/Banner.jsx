import { Button } from 'antd';
import { motion } from 'framer-motion';
import './Banner.scss';
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Banner = () => (
  <>
    <Carousel autoplay>
      <div>
        <motion.div
          className="banner banner-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1>Welcome to LeadCapture</h1>
          <p>Your one-stop solution Empowering your business with cutting-edge digital success.</p>
          <Button type="primary" size="large">Get Started</Button>
        </motion.div>

      </div>
      <div>
        <motion.div
          className="banner banner-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1>Welcome to LeadCapture</h1>
          <p>Your one-stop solution Empowering your business with cutting-edge digital success.</p>
          <Button type="primary" size="large">Get Started</Button>
        </motion.div>

      </div>
      <div>
        <motion.div
          className="banner banner-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1>Welcome to LeadCapture</h1>
          <p>Your one-stop solution Empowering your business with cutting-edge digital success.</p>
          <Button type="primary" size="large">Get Started</Button>
        </motion.div>

      </div>
    </Carousel>
  </>
);

export default Banner;
