import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../js/gsapConfig';
import './Contact.scss';


const Contact = () => {
  const imgRef = useRef(null);
  const formRef = useRef(null);

 
 useEffect(() => {
  if (imgRef.current && formRef.current) {
    gsap.from(imgRef.current, {
      scrollTrigger: {
        trigger: imgRef.current,
        start: 'top 80%',
      },
      x: -100,
      opacity: 0,
      duration: 1,
    });

    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: formRef.current,
        start: 'top 80%',
      },
      x: 100,
      opacity: 0,
      duration: 1,
    });

    // ✅ Refresh ScrollTrigger to re-calculate layout
    ScrollTrigger.refresh();
  }
}, []);

  return (
    <section id="contact">
      <div className="contact_us">
        <div className="row contact-row">
          <div className="col contact-img-blog" ref={imgRef}>
            <img className="mainImg" src="/pro2.jpeg" alt="Contact" />
          </div>
          <div className="col contact-form" ref={formRef}>
            <p className="text-blk heading">Contact Me</p>
            <form className="formTable" id="izml">
              <div className="row">
                <div className="col">
                  <label className="form-label">Full Name</label>
                  <input className="fullName" id="fullName" name="fullName" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label className="form-label">Email Address</label>
                  <input className="email" id="email" name="email" type="email" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label className="form-label">Message</label>
                  <textarea className="message" cols="30" id="message" name="message" rows="6"></textarea>
                </div>
              </div>
              <div className="row">
                <button className="submit" type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
