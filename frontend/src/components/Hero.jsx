import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      {/* Ambient Glow in background */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#18c8ff] opacity-10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[20%] right-[-5%] w-[300px] h-[300px] bg-[#a259ff] opacity-10 blur-[100px] rounded-full" />

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#18c8ff] shadow-[0_0_15px_#18c8ff]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#18c8ff] via-[#a259ff] to-transparent" />
        </div>

        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className={`${styles.heroHeadText} text-white leading-tight drop-shadow-2xl`}
            >
              I'm <br className="sm:hidden block" />
              <span className="bg-gradient-to-r from-[#18c8ff] via-[#1897ff] to-[#5918ff] bg-clip-text text-transparent filter saturate-150 brightness-110">
                Hanna Maria
              </span>
            </h1>
          </motion.div>

          <div className="mt-4 p-4 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 max-w-fit shadow-xl">
            <p
              className={`${styles.heroSubText} text-white font-medium flex flex-col`}
            >
              <span className="flex items-center gap-2">
                I thrive in
                <span className="text-[#18c8ff] font-extrabold tracking-wide drop-shadow-[0_0_10px_rgba(24,200,255,0.5)]">
                  <Typewriter
                    words={[
                      "Software Engineering",
                      "Music Production",
                      "Hardware Enthusiast",
                      "Game Development",
                      "Digital Illustration",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={1500}
                  />
                </span>
              </span>
              <span className="text-[16px] sm:text-[18px] text-white/90 mt-1 font-light italic">
                Bridging the gap between art and technology.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* 3D Model Area */}
      <ComputersCanvas />

      {/* Mouse Scroll Animation */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[54px] rounded-3xl border-2 border-white/20 flex justify-center items-start p-2 backdrop-blur-md">
            <motion.div
              animate={{
                y: [0, 16, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 rounded-full bg-[#18c8ff]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
