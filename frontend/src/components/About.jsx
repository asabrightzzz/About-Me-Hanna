import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import myPhoto from "../assets/hanna1.jpg";

const workStyles = [
  { title: "Fast Learner", icon: "🚀" },
  { title: "Multidisciplinary", icon: "🎨" },
  { title: "Teamwork", icon: "🤝" },
  { title: "Critical Thinking", icon: "🧠" },
];

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    scale={1.1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="w-full p-[1px] rounded-[24px] bg-gradient-to-br from-[#18c8ff] via-[#a259ff] to-[#ff59e8] shadow-lg hover:shadow-[#18c8ff]/40 transition-shadow duration-500"
    >
      <div className="bg-[#0b0e29]/80 rounded-[23px] py-8 px-6 min-h-[220px] flex justify-center items-center flex-col border border-white/10 backdrop-blur-xl relative overflow-hidden group">
        
        {/* corner light decoration */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#18c8ff] blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* icon with bounce animation */}
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-5xl mb-5 filter drop-shadow-[0_0_10px_rgba(24,200,255,0.5)]"
        >
          {icon}
        </motion.div>

        <h3 className="text-white text-[20px] font-bold text-center tracking-wide group-hover:text-[#18c8ff] transition-colors duration-300">
          {title}
        </h3>

        {/* Indicator */}
        <div className="w-10 h-[2px] bg-[#18c8ff] mt-4 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full mb-20">
        
        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="relative group w-[280px] h-[350px] sm:w-[320px] sm:h-[400px]"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#18c8ff] to-[#a259ff] rounded-[30px] opacity-20 blur-2xl group-hover:opacity-40 transition duration-500" />
          
          <div className="relative w-full h-full rounded-[24px] overflow-hidden border border-white/20 bg-tertiary shadow-2xl">
            <img 
              src={myPhoto} 
              alt="Hanna Maria Illustration"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition duration-500 scale-110 hover:scale-100"
            />
            <div className="absolute bottom-0 w-full p-4 bg-white/5 backdrop-blur-md border-t border-white/10 text-center">
              <p className="text-white font-medium tracking-widest text-xs uppercase opacity-80">Artist & Engineer</p>
            </div>
          </div>
        </motion.div>
        {/* introduction text */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-[#18c8ff] font-bold tracking-[0.3em]`}>
              INTRODUCTION
            </p>
            <h2 className={`${styles.sectionHeadText} leading-none mb-6`}>
              About Me
            </h2>
          </motion.div>

          <motion.p
            variants={fadeIn("left", "", 0.1, 1)}
            className="text-secondary text-[17px] sm:text-[18px] leading-[30px] font-light"
          >
            I am a <span className="text-white font-semibold">Creative Developer</span> and
            <span className="text-white font-semibold"> Digital Artist</span> who lives at the intersection of
            <span className="text-[#18c8ff] font-medium italic"> logic and design</span>. 
            <br className="hidden sm:block" /><br />
            With a passion for building intuitive <span className="text-white underline decoration-[#18c8ff] underline-offset-4">UI/UX experiences</span>, 
            I blend technical expertise in Software development with my love for 
            <span className="text-[#18c8ff]"> Digital Illustration</span> and 
            <span className="text-[#18c8ff]"> Music Production</span>. 
            Dedicated to bridging the gap between functional code and expressive art.
          </motion.p>
        </div>
      </div>

      {/* Work Style Cards */}
      <motion.div variants={textVariant()} className="text-center mb-10">
        <h3 className="text-white text-[24px] font-bold tracking-widest uppercase opacity-50">
          — Work Style —
        </h3>
      </motion.div>

      <div className="flex flex-wrap gap-8 justify-center w-full">
        {workStyles.map((style, index) => (
          <ServiceCard key={style.title} index={index} {...style} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");