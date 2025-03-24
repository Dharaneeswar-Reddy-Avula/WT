import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Book, Type, ArrowRight, Search, Filter } from "lucide-react";
import { useInView } from "react-intersection-observer";
import WebFont from "webfontloader";

const Typography = () => {
  const [fonts, setFonts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const fetchFonts = async () => {
      try {
        setLoading(true); // Ensure loading state is set at the start
        const response = await axios.get(
          "https://www.googleapis.com/webfonts/v1/webfonts",
          {
            params: {
              key: "AIzaSyAREzzRgLInXn1I7Uk4Jcr80yHbe14dagY", // Replace with your actual Google Fonts API key
              sort: "popularity",
            },
          }
        );
        const fontData = response.data.items.slice(0, 50); // Limit to 50 fonts
        setFonts(fontData);

        // Load fonts dynamically with WebFontLoader
        WebFont.load({
          google: {
            families: fontData.map((font) => `${font.family}:400`), // Use 400 weight for consistency
          },
          active: () => setLoading(false), // Fonts loaded successfully
          inactive: () => {
            console.error("Some fonts failed to load");
            setLoading(false); // Proceed even if some fonts fail
          },
        });
      } catch (error) {
        console.error("Error fetching fonts:", error);
        setLoading(false); // Handle error gracefully
      }
    };

    fetchFonts();
  }, []); // Empty dependency array ensures this runs once on mount

  const categories = ["all", "serif", "sans-serif", "display", "handwriting", "monospace"];

  const filteredFonts = fonts.filter((font) => {
    const matchesCategory = selectedCategory === "all" || font.category === selectedCategory;
    const matchesSearch = font.family.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading fonts...</p>
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
        <Type className="text-primary mb-3" size={40} />
        <h1 className="display-4 mb-3 fw-bold">Typography Showcase</h1>
        <p className="lead text-muted">Explore a curated collection of Google Fonts</p>
      </motion.div>

      {/* Search and Filter Section */}
      <div className="row mb-5">
        <div className="col-md-6 mb-3 mb-md-0">
          <div className="input-group shadow-sm">
            <span className="input-group-text bg-light border-0">
              <Search size={20} />
            </span>
            <input
              type="text"
              className="form-control border-0"
              placeholder="Search fonts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group shadow-sm">
            <span className="input-group-text bg-light border-0">
              <Filter size={20} />
            </span>
            <select
              className="form-select border-0"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Font Cards */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="row g-4"
      >
        {filteredFonts.length > 0 ? (
          filteredFonts.map((font) => (
            <motion.div
              key={font.family}
              variants={itemVariants}
              className="col-md-6 col-lg-4"
            >
              <div className="card h-100 border-0 shadow-sm p-3 hover-lift">
                <div className="card-body d-flex flex-column">
                  <h3 className="h5 mb-3 d-flex align-items-center">
                    <Book className="text-primary me-2" size={20} />
                    {font.family}
                  </h3>
                  <p
                    className="mb-3 fs-4 font-preview flex-grow-1"
                    style={{
                      fontFamily: `"${font.family}", sans-serif`,
                      fontWeight: 400,
                    }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-primary text-capitalize">
                      {font.category}
                    </span>
                    <a
                      href={`https://fonts.google.com/specimen/${font.family.replace(
                        /\s+/g,
                        "+"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm"
                    >
                      View Font <ArrowRight size={16} className="ms-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p className="text-muted">No fonts match your search criteria.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Typography;