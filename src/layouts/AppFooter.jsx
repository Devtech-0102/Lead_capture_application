import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './AppFooter.scss';
import { Link } from 'react-scroll';
import { RadarChartOutlined } from '@ant-design/icons';
// import '../utils/Button.scss';

const AppFooter = () => (
  <footer className='bg-gray-800 text-white p-10 footer'>
    <div className='footer-content1'>
      <div className='space-y-3'>
        <h5 className='font-bold text-lg'>Product</h5>
        <ul className='text-sm'>
          <li>Overview</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className='space-y-3'>
        <h5 className='font-bold text-lg'>Use Cases</h5>
        <ul className='text-sm'>
          <li>Small Business</li>
          <li>Freelancers</li>
          <li>Agencies</li>
          <li>E-commerce</li>
        </ul>
      </div>
      <div className='space-y-3'>
        <h5 className='font-bold text-lg'>Resources</h5>
        <ul className='text-sm'>
          <li>Blog</li>
          <li>Help center</li>
          <li>Community</li>
          <li>Tutorials</li>
        </ul>
      </div>
      <div className='space-y-3'>
        <h5 className='font-bold text-lg'>Company</h5>
        <ul className='text-sm'>
          <li>About us</li>
          <li>Careers</li>
          <li>Press</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
    <div className="row mb-4 px-5" style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evently' }}>
      <div className="col-4" style={{ width: '46%', borderBottom: '2px solid white' }}></div>
      <div className="col-4" style={{ width: '8%', textAlign: 'center', fontSize:'25px', display:'flex', alignItems:'center', justifyContent:'center' }}><RadarChartOutlined /></div>
      <div className="col-4" style={{ width: '46%', borderBottom: '2px solid white' }}></div>
    </div>
    <div className='bg-gray-900 mt-8 text-center text-sm footer-subscription'>
      <h5>HAVE GOOD WEB DESIGN TODAY</h5>
      <p>Transform your ideas into reality with stunning web design.</p>
      <button className='button-42 rounded'><Link to='contact'>Get started</Link></button>
      <div className='flex justify-center space-x-4 mt-3'>
        <FaFacebookF className='me-3' />
        <FaTwitter className='me-3' />
        <FaLinkedinIn className='me-3' />
        <FaInstagram />
      </div>
      <p className='text-gray-400 mt-3'>&copy; 2023 Your Company</p>
    </div>
  </footer>
);

export default AppFooter;