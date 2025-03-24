import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Twitter, Linkedin } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    // Show success alert
    alert('Message sent successfully!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container py-5">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-5"
      >
        <Mail className="text-primary mb-3" size={40} />
        <h1 className="display-4 mb-3">Contact Us</h1>
        <p className="lead text-muted">Get in touch with our team</p>
      </motion.div>

      <div className="row g-5">
        <div className="col-lg-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <h3 className="h5 mb-4">Contact Information</h3>
                <div className="d-flex mb-3">
                  <Mail size={20} className="text-primary me-3" />
                  <p className="mb-0">contact@typodesign.com</p>
                </div>
                <div className="d-flex mb-3">
                  <Phone size={20} className="text-primary me-3" />
                  <p className="mb-0">+1 (555) 123-4567</p>
                </div>
                <div className="d-flex">
                  <MapPin size={20} className="text-primary me-3" />
                  <p className="mb-0">123 Design Street, Creative City, DC 12345</p>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h5 mb-4">Follow Us</h3>
                <div className="d-flex justify-content-around">
                  <a href="#" className="text-primary" target="_blank" rel="noopener noreferrer">
                    <Github size={24} />
                  </a>
                  <a href="#" className="text-primary" target="_blank" rel="noopener noreferrer">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="text-primary" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="col-lg-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h5 mb-4">Send us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    <Send size={16} className="me-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;