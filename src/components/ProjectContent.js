"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortableText } from '@portabletext/react';

export default function ProjectContent({ project }) {
  // 1. Create a state to track if the description is open or closed
  const [isOpen, setIsOpen] = useState(false);

  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <main className="case-study-page">
      
      {/* HEADER SECTION */}
      <motion.header className="case-study-header" {...fadeUp}>
        <div className="case-study-header-top">
          <div className="case-study-titles">
            <h1>{project.title}</h1>
            <p className="project-meta-text">{project.services}</p>
          </div>
          
          {/* Only show the button if there is actually a description written in Sanity */}
          {project.body && (
            <button 
              className="about-project-btn" 
              onClick={() => setIsOpen(!isOpen)}
            >
              About the project {isOpen ? '-' : '+'}
            </button>
          )}
        </div>

        {/* The Expanding Description */}
        <AnimatePresence>
          {isOpen && project.body && (
            <motion.div 
              className="case-study-description"
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: "3rem" }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: "hidden" }} // This ensures the text is clipped while animating
            >
              <PortableText value={project.body} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* HERO MEDIA */}
      <motion.div className="case-study-hero-media" {...fadeUp}>
        {project.heroVideoUrl ? (
          <video src={project.heroVideoUrl} autoPlay loop muted playsInline />
        ) : project.heroImageUrl ? (
          <img src={project.heroImageUrl} alt={`${project.title} hero`} />
        ) : project.videoUrl ? (
          <video src={project.videoUrl} autoPlay loop muted playsInline />
        ) : project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} />
        ) : null}
      </motion.div>
      
      {/* GALLERY SECTION */}
      <div className="case-study-content">
        {project.galleryUrls && project.galleryUrls.length > 0 && (
          <div className="case-study-gallery">
            {project.galleryUrls.map((url, index) => (
              <motion.img 
                key={index} 
                src={url} 
                alt={`${project.title} gallery image ${index + 1}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              />
            ))}
          </div>
        )}
      </div>
      
    </main>
  );
}