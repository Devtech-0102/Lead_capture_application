import { Button } from 'antd';
import { motion } from 'framer-motion';

const Hero = () => (
  <motion.div
    className="hero"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    style={{ textAlign: 'center', padding: '100px 20px', background: '#f0f2f5' }}
  >
    <h1>Welcome to LeadCapture</h1>
    <p>Your one-stop solution for digital success.</p>
    <Button type="primary" size="large">Get Started</Button>
  </motion.div>
);

export default Hero;
