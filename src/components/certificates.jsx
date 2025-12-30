import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({ index, name, image, issuer, date, description, setSelectedCert }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    whileHover={{ y: -10 }}
    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-card border border-white/5 hover:border-[#18c8ff]/30 transition-all group cursor-zoom-in"
    onClick={() => setSelectedCert({ name, image, issuer, date, description })}
  >
    <div className="relative w-full h-[230px]">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-2xl"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
        <div className="bg-black/60 backdrop-blur-sm p-3 rounded-full">
          <p className="text-white text-[12px] font-bold">View Certificate</p>
        </div>
      </div>
    </div>

    <div className="mt-5">
      <h3 className="text-white font-bold text-[20px] line-clamp-1">{name}</h3>
      <p className="mt-2 text-[#18c8ff] text-[14px] font-medium">{issuer}</p>
    </div>
  </motion.div>
);

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Sinkronisasi dengan Navbar (Sama seperti di Works)
  useEffect(() => {
    const isZoomed = !!selectedCert;
    const event = new CustomEvent("creativeZoom", { 
      detail: { isZoomed: isZoomed } 
    });
    window.dispatchEvent(event);

    if (isZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Accomplishments</p>
        <h2 className={styles.sectionHeadText}>Certificates</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-7 justify-center lg:justify-start">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={`cert-${index}`}
            index={index}
            setSelectedCert={setSelectedCert}
            {...cert}
          />
        ))}
      </div>

      {/* Modal Zoom Elegan */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center overflow-y-auto hide-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="fixed top-5 right-5 z-[10000] bg-white/10 hover:bg-[#18c8ff] text-white p-3 rounded-full transition-all backdrop-blur-md border border-white/20"
                onClick={() => setSelectedCert(null)}
              >
                <span className="text-xl font-bold text-white">✕</span>
              </button>

              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="w-full h-auto max-h-[70vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(24,200,255,0.2)] border border-white/10"
              />
              
              <div className="mt-8 text-center px-4 pb-10">
                <h2 className="text-white text-3xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#18c8ff]">
                  {selectedCert.name}
                </h2>
                <p className="text-[#18c8ff] text-xl font-semibold mb-4">
                  {selectedCert.issuer}
                </p>
                {selectedCert.description && (
                  <p className="text-secondary text-lg max-w-3xl leading-relaxed mx-auto">
                    {selectedCert.description}
                  </p>
                )}
                {selectedCert.date && (
                  <p className="mt-4 text-white/40 text-sm italic">
                    Issued: {selectedCert.date}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");