import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { github, instagram, music } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  category,
  audioSrc,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = async (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Playback gagal:", err);
        setIsPlaying(false);
        alert("Music file not found.");
      }
    }
  };

  useEffect(() => {
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
  }, [isZoomed]);

  return (
    <>
      <motion.div
        layout
        onClick={() => category === "creative" && setIsZoomed(true)}
        className={`bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-card border border-white/5 hover:border-[#18c8ff]/30 transition-all group ${
          category === "creative" ? "cursor-zoom-in" : "cursor-default"
        }`}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl transition-all group-hover:scale-105"
          />
          
          {/* Overlay Music Category */}
          {category === "music" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
              <button
                onClick={togglePlay}
                className="w-16 h-16 bg-[#18c8ff] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(24,200,255,0.6)] hover:scale-110 transition-transform"
              >
                {isPlaying ? (
                  <div className="flex gap-1">
                    <div className="w-2 h-6 bg-white animate-pulse" />
                    <div className="w-2 h-6 bg-white animate-pulse delay-75" />
                  </div>
                ) : (
                  <div className="ml-1 w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent" />
                )}
              </button>
              <audio ref={audioRef} src={audioSrc} preload="auto" onEnded={() => setIsPlaying(false)} />
            </div>
          )}

          {/* Overlay Creative Category */}
          {category === "creative" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
              <div className="bg-black/60 backdrop-blur-sm p-3 rounded-full">
                <p className="text-white text-[12px] font-bold">Click to View</p>
              </div>
            </div>
          )}

          {/* Link Icon*/}
          <div className="absolute top-3 right-3 flex gap-2">
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white/10"
            >
              <img
                src={category === "music" ? music : category === "creative" ? instagram : github}
                alt="link"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] flex items-center gap-2">
            {name}
            {isPlaying && (
              <span className="flex gap-1 h-3 items-end">
                <div className="w-1 bg-[#18c8ff] animate-[bounce_1s_infinite]" />
                <div className="w-1 bg-[#a259ff] animate-[bounce_0.7s_infinite]" />
                <div className="w-1 bg-[#18c8ff] animate-[bounce_1.3s_infinite]" />
              </span>
            )}
          </h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-2">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <p key={tag.name} className={`text-[12px] font-medium ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </motion.div>

      {/* MODAL ZOOM */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center overflow-y-auto hide-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="fixed top-5 right-5 z-[10000] bg-white/10 hover:bg-[#18c8ff] text-white p-3 rounded-full transition-all backdrop-blur-md border border-white/20"
                onClick={() => setIsZoomed(false)}
              >
                <span className="text-xl font-bold">✕</span>
              </button>

              <img
                src={image}
                alt={name}
                className="w-full h-auto max-h-[70vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10"
              />
              
              <div className="mt-8 text-center px-4 pb-10">
                <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {name}
                </h2>
                <p className="text-secondary text-lg max-w-3xl leading-relaxed">
                  {description}
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {tags?.map((tag) => (
                    <span key={tag.name} className={`px-4 py-1 rounded-full text-sm border border-white/10 bg-white/5 ${tag.color}`}>
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Works = () => {
  const [activeMode, setActiveMode] = useState("tech");
  const modes = ["creative", "tech", "music", "game"];
  const filteredProjects = projects.filter((p) => p.category === activeMode);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work history</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects Showcase</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world
          examples. Use the selector below to switch between different domains.
        </motion.p>
      </div>

      {/* Filter Tabs */}
      <div className="mt-10 flex flex-wrap justify-center sm:justify-start gap-4">
        {modes.map((mode) => (
          <button
            key={mode}
            onClick={() => setActiveMode(mode)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 capitalize font-medium ${
              activeMode === mode
                ? "bg-gradient-to-r from-[#18c8ff] to-[#a259ff] text-white border-transparent shadow-[0_0_15px_rgba(24,200,255,0.4)]"
                : "bg-white/5 text-secondary border-white/10 hover:bg-white/10 hover:text-white"
            }`}
          >
            {mode}
          </button>
        ))}
      </div>

      {/* Projects Grid / Work in Progress */}
      <div className="mt-20 flex flex-wrap gap-7 justify-center lg:justify-start min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${activeMode}-${project.name}`}
                index={index}
                {...project}
              />
            ))
          ) : (

            <motion.div
              key="wip-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full flex flex-col items-center justify-center py-12 px-6 sm:py-20 border-2 border-dashed border-white/10 rounded-[30px] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm"
            >
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-[50px] sm:text-[80px] mb-4 filter drop-shadow-[0_0_15px_rgba(24,200,255,0.3)]"
              >
                🚧
              </motion.div>

              <div className="text-center max-w-md">
                <h3 className="text-white font-bold text-[20px] sm:text-[28px] tracking-tight">
                  Work In <span className="text-[#18c8ff]">Progress</span>
                </h3>
                <p className="text-secondary text-[14px] sm:text-[16px] mt-4 leading-relaxed opacity-80">
                  I'm currently crafting some content for the <span className="capitalize text-white font-medium underline decoration-[#a259ff] underline-offset-4">{activeMode}</span> section. 
                  Stay tuned!
                </p>
              </div>

              {/* Decorative Progress Bar */}
              <div className="mt-8 w-full max-w-[200px] h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full bg-gradient-to-r from-transparent via-[#18c8ff] to-transparent"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");