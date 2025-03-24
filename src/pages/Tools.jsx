import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PenTool as Tool, Download, Info } from "lucide-react";
import { Link } from "lucide-react";
// Simulated API data (replace with real API call if available)
const fetchTools = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Color Palette Generator",
          description: "Create beautiful color schemes for your designs",
          category: "Color",
          downloadLink: "https://example.com/color-palette-generator.zip",
          externalLink: "https://coolors.co",
          details:
            "Advanced color palette generator with export options in HEX, RGB, and HSL, plus accessibility checking for WCAG compliance.",
        },
        {
          id: 2,
          name: "Typography Scale Calculator",
          description: "Calculate perfect type scales and rhythm",
          category: "Typography",
          downloadLink: "https://example.com/typography-scale-calculator.zip",
          externalLink: "https://type-scale.com",
          details:
            "Generate harmonious typography scales based on mathematical ratios like the golden ratio or modular scale.",
        },
        {
          id: 3,
          name: "Grid System Generator",
          description: "Create responsive grid layouts",
          category: "Layout",
          downloadLink: "https://example.com/grid-system-generator.zip",
          externalLink: "https://grid.layoutit.com",
          details:
            "Flexible grid system generator with customizable columns, gutters, and responsive breakpoints.",
        },
      ]);
    }, 1000); // Simulate network delay
  });
};

function Tools() {
  const [tools, setTools] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch tools (simulated API call)
    fetchTools()
      .then((data) => {
        setTools(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tools:", error);
        setLoading(false);
      });
  }, []);

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTool(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.03, transition: { duration: 0.2 } },
  };

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading tools...</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-5"
      >
        <Tool className="text-primary mb-3" size={40} />
        <h1 className="display-4 mb-3 fw-bold">Design Tools & Resources</h1>
        <p className="lead text-muted">
          Essential tools to enhance your design workflow
        </p>
      </motion.div>

      {/* Tools Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="row g-4"
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.id}
            className="col-md-4"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h3 className="h5 mb-3">{tool.name}</h3>
                <p className="text-muted mb-4 flex-grow-1">
                  {tool.description}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="badge bg-primary text-capitalize">
                    {tool.category}
                  </span>
                  <div className="btn-group">
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleToolClick(tool)}
                      title="View Details"
                    >
                      <Info size={16} className="me-1" /> Details
                    </button>
                    <a
                      href={tool.downloadLink}
                      className="btn btn-primary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Download Tool"
                    >
                      <Download size={16} className="me-1" /> Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Tool Details Modal */}
      {showModal && (
  <motion.div
    className="modal fade show"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{
      display: "block",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1050,
      overflowY: "auto",
    }}
    onClick={closeModal} // Close modal when clicking outside
  >
    <motion.div
      className="modal-dialog modal-dialog-centered"
      initial={{ scale: 0.9, y: 50 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{selectedTool?.name}</h5>
          <button
            type="button"
            className="btn-close"
            onClick={closeModal}
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <p>{selectedTool?.details}</p>
          {selectedTool?.externalLink && (
            <p>
              <a
                href={selectedTool?.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Visit Tool Website
              </a>
            </p>
          )}
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={closeModal}
          >
            Close
          </button>
          <a
            href={selectedTool?.downloadLink}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={16} className="me-1" /> Download
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>
)}

    </div>
  );
}

export default Tools;
