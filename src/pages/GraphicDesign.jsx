import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image, ExternalLink, Filter } from 'lucide-react';

function GraphicDesign() {
  const [category, setCategory] = useState('all');

  const designs = [
    {
      id: 1,
      title: "Modern Minimalist Logo",
      category: "branding",
      image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&w=600&q=80",
      description: "Clean and modern logo design"
    },
    {
      id: 2,
      title: "Creative Poster Design",
      category: "print",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
      description: "Eye-catching poster artwork"
    },
    {
      id: 3,
      title: "Social Media Package",
      category: "digital",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=600&q=80",
      description: "Complete social media design kit"
    },
    // Add more designs as needed
  ];

  const filteredDesigns = category === 'all' 
    ? designs 
    : designs.filter(design => design.category === category);

  return (
    <div className="container py-5">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-5"
      >
        <Image className="text-primary mb-3" size={40} />
        <h1 className="display-4 mb-3">Graphic Design Showcase</h1>
        <p className="lead text-muted">Explore our collection of creative designs</p>
      </motion.div>

      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <div className="input-group">
            <span className="input-group-text">
              <Filter size={20} />
            </span>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="branding">Branding</option>
              <option value="print">Print Design</option>
              <option value="digital">Digital Design</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row g-4" data-masonry='{"percentPosition": true }'>
        {filteredDesigns.map((design) => (
          <motion.div
            key={design.id}
            className="col-md-6 col-lg-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card border-0 shadow-sm">
              <img
                src={design.image}
                className="card-img-top"
                alt={design.title}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{design.title}</h5>
                <p className="card-text text-muted">{design.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="badge bg-primary">{design.category}</span>
                  <button className="btn btn-outline-primary btn-sm">
                    View Details <ExternalLink size={16} className="ms-1" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default GraphicDesign;