import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_lkserkc', 'template_i4lrst8', e.target, 'FLJ_jbeiLuM6Hzktw')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}

const Contact = () => {
  return (
    <section id="contact" className="p-6 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mt-16 mb-2">
        <h2 className="text-4xl text-[#e3d000] font-bold mb-4 font-serif">Get in Touch</h2>
        <p className="text-lg mb-2 font-mono">I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.</p>
      </div>
      <div className="contact-info text-custom-white text-center flex flex-wrap justify-center items-center space-x-8 mb-8">
        <a href="mailto:saramasmoudi2001@gmail.com" className="text-xl font-semibold flex items-center space-x-2 hover:text-gray-300">
          <FaEnvelope /> <span>Email</span>
        </a>
        <a href="tel:+212664492728" className="text-xl font-semibold flex items-center space-x-2 hover:text-gray-300">
          <FaPhone /> <span>Phone</span>
        </a>
        <a href="http://www.linkedin.com/in/sara-masmoudi-3b34bb255" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold flex items-center space-x-2 hover:text-gray-300">
          <FaLinkedin /> <span>LinkedIn</span>
        </a>
        <a href="https://github.com/saraamas" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold flex items-center space-x-2 hover:text-gray-300">
          <FaGithub /> <span>GitHub</span>
        </a>
      </div>
      <div className="w-full max-w-4xl text-white p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold mb-4 text-[#e3d000] text-center font-serif">Send a Message</h3>
        
        <form className="flex flex-wrap font-mono" onSubmit={sendEmail}>
          <div className="w-full md:w-1/2 p-2">
            <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 rounded-lg text-black border-4 border-[#e3d000]" placeholder="Your Name" />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 border-4 border-[#e3d000] rounded-lg text-black" placeholder="Your Email" />
          </div>
          <div className="w-full p-2">
            <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
            <textarea id="message" name="message" className="w-full p-2 border-4 border-[#e3d000] rounded-lg text-black" placeholder="Your Message" rows="4"></textarea>
          </div>
          <div className="w-full p-2 text-center">
            <button type="submit" name="Send" className="text-white border-4 border-[#e3d000] font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 hover:bg-[#e3d000]">Send</button>
          </div>
        </form>

      </div>
    </section>
  );
};

export default Contact;
