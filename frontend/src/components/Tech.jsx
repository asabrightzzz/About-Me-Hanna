import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologyStacks } from "../constants";
import { styles } from "../styles";
import { textVariant} from "../utils/motion";

const Tech = () => {
  const [activeTab, setActiveTab] = useState("tech");
  const modes = ["creative", "tech", "music", "game"];

  const filteredStack = technologyStacks.filter(
    (item) => item.category === activeTab
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tools & Technologies</p>
        <h2 className={styles.sectionHeadText}>My Tech Stack</h2>
      </motion.div>

      {/* Tab Selector */}
      <div className="mt-10 flex flex-wrap justify-center sm:justify-start gap-4">
        {modes.map((mode) => (
          <button
            key={mode}
            onClick={() => setActiveTab(mode)}
            className={`px-6 py-2 rounded-xl border transition-all duration-300 capitalize font-semibold
              ${
                activeTab === mode
                  ? "bg-gradient-to-r from-[#18c8ff] to-[#a259ff] text-white border-transparent shadow-lg scale-105"
                  : "bg-white/5 text-secondary border-white/10 hover:bg-white/10"
              }`}
          >
            {mode}
          </button>
        ))}
      </div>

      {/* Grid Icons Area */}
      <motion.div layout className="mt-16 flex flex-wrap justify-center gap-10">
        <AnimatePresence mode="popLayout">
          {filteredStack.length > 0 ? (
            filteredStack.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                whileHover={{ y: -10 }}
                className="w-28 flex flex-col items-center justify-start group"
              >
                <div className="w-20 h-20 rounded-full bg-tertiary flex items-center justify-center shadow-card border border-white/10 group-hover:border-[#18c8ff] transition-all duration-300">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>

                <p className="mt-3 text-secondary text-[14px] font-medium group-hover:text-white transition-colors text-center leading-tight w-full max-w-[110px] break-words">
                  {tech.name}
                </p>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full text-center py-10 border border-dashed border-white/10 rounded-2xl"
            >
              <p className="text-secondary italic">
                Coming soon: Adding stacks for {activeTab}...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
