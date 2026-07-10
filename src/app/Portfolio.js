"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Portfolio({ projects }) {
  return (
    <main>
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1>Bazy Inc. is an independent studio where strategic design meets digital craft.</h1>
      </motion.section>

      <section className="project-grid">
        {projects.map((project) => (
          <motion.div
            key={project._id}
            className="project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={`/${project.slug}`} className="project-card-link">
              <div className="project-image-placeholder" style={{ overflow: 'hidden' }}>
                {project.videoUrl ? (
                  <video 
                    src={project.videoUrl} 
                    autoPlay loop muted playsInline 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                ) : project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                ) : null}
              </div>
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.shortDescription}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </main>
  );
}