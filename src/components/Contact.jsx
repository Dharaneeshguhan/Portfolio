import { FaLinkedin, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ message: '', isError: false });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: '', isError: false });

    // Add current time to form data
    const currentTime = new Date().toLocaleTimeString();

    // Add time to form data before sending
    const formData = new FormData(form.current);
    formData.append('time', currentTime);

    // Convert FormData to object for emailjs
    const formObject = Object.fromEntries(formData);

    emailjs
      .send(
        'service_7p2bf87', // Replace with your EmailJS service ID
        'template_53051im', // Replace with your EmailJS template ID
        formObject,
        'LJOqgwxeXaiS5c5hT' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setSubmitStatus({ message: 'Message sent successfully!', isError: false });
          form.current.reset();
        },
        (error) => {
          setSubmitStatus({ message: 'Failed to send message. Please try again.', isError: true });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-br from-orange-400 to-yellow-300 py-16 px-4 md:px-10 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Contact Me
      </h2>
      <p className="text-lg text-white mb-12 text-center">
        Connect with me on social media or send me a message!
      </p>

      {/* Social Media Links */}
      <div className="flex space-x-8 mb-12">
        <a
          href="https://www.linkedin.com/in/dharaneeshguhan-t-a36140284"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:scale-125 transition-transform"
        >
          <FaLinkedin />
          </a>
        <a
          href="https://github.com/Dharaneeshguhan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:scale-125 transition-transform"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/ig_dharaneeshguhan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:scale-125 transition-transform"
        >
          <FaInstagram />
        </a>
        <a
          href="https://youtube.com/@ihtamil-dg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:scale-125 transition-transform"
        >
          <FaYoutube />
        </a>
      </div>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl">
        <div className="mb-6">
          <input
            type="text"
            name="title"
            placeholder="Message Title"
            required
            className="w-full border-2 border-orange-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border-2 border-orange-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border-2 border-orange-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="mb-6">
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full border-2 border-orange-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {submitStatus.message && (
          <div className={`mt-4 text-center ${submitStatus.isError ? 'text-red-500' : 'text-green-500'}`}>
            {submitStatus.message}
          </div>
        )}
      </form>

      {/* Thank You Note */}
      <div className="mt-12 text-white text-center max-w-xl">
        <p className="text-lg">
          Thank you for visiting my portfolio. Feel free to reach out if you
          have opportunities or collaborations in mind!
        </p>
      </div>
    </section>
  );
};

export default Contact;
