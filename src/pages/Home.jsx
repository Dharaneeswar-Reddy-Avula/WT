import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Type, Palette, PenTool as Tool } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const carouselItems = [
    {
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
      title: "Typography Excellence",
      description: "Discover the art of beautiful typography"
    },
    {
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
      title: "Design Innovation",
      description: "Explore creative graphic design solutions"
    },
    {
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
      title: "Creative Tools",
      description: "Access powerful design resources"
    }
  ];

  return (
    <>
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={item.image} className="d-block w-100" alt={item.title} style={{ height: '600px', objectFit: 'cover' }} />
              <div className="carousel-caption d-none d-md-block">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="py-5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 mb-3">Welcome to TypoDesign</h2>
            <p className="lead text-muted">Your one-stop destination for typography and design resources</p>
          </motion.div>

          <div className="row g-4">
            <motion.div
              className="col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <Type size={40} className="text-primary mb-3" />
                  <h3 className="h4 mb-3">Typography</h3>
                  <p className="text-muted mb-4">Explore beautiful fonts and typography styles for your next project.</p>
                  <Link to="/typography" className="btn btn-outline-primary">
                    Explore Fonts <ArrowRight size={16} className="ms-1" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <Palette size={40} className="text-primary mb-3" />
                  <h3 className="h4 mb-3">Graphic Design</h3>
                  <p className="text-muted mb-4">Discover trending designs and get inspired by creative artwork.</p>
                  <Link to="/graphic-design" className="btn btn-outline-primary">
                    View Designs <ArrowRight size={16} className="ms-1" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <Tool size={40} className="text-primary mb-3" />
                  <h3 className="h4 mb-3">Resources</h3>
                  <p className="text-muted mb-4">Access tools and resources to enhance your design workflow.</p>
                  <Link to="/tools" className="btn btn-outline-primary">
                    Browse Tools <ArrowRight size={16} className="ms-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;