import React, { useRef } from "react";
import { motion} from "framer-motion";
import { SectionWrapper } from "../hoc";
import { documentations } from "../constants";
import { styles } from "../styles";

const DocCard = ({ item, index }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="min-w-[280px] sm:min-w-[400px] relative group overflow-hidden rounded-3xl bg-tertiary shadow-xl border border-white/5"
  >
    {/* Image Container */}
    <div className="relative h-[400px] w-full">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Overlay Glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          className="backdrop-blur-sm bg-white/5 p-4 rounded-2xl border border-white/10"
        >
          <h3 className="text-[#18c8ff] font-bold text-[18px] mb-1">
            {item.title}
          </h3>
          <p className="text-white/80 text-[13px] leading-snug">
            {item.caption}
          </p>
        </motion.div>
      </div>
    </div>
    
    {/* Default interfaces*/}
    <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-4 py-1 rounded-full border border-white/10 group-hover:opacity-0 transition-opacity">
      <p className="text-white text-[12px] font-medium italic opacity-80">
        0{index + 1} . {item.title}
      </p>
    </div>
  </motion.div>
);

const Documentations = () => {
  const scrollRef = useRef(null);

  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Moments & Events</p>
        <h2 className={styles.sectionHeadText}>Documentations</h2>
      </motion.div>

      {/* Slider Container with Snap Scrolling */}
      <div 
        ref={scrollRef}
        className="mt-12 flex gap-8 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {documentations.map((item, index) => (
          <div key={index} className="snap-center first:pl-5 last:pr-5">
            <DocCard item={item} index={index} />
          </div>
        ))}
      </div>

      {/* Hint for user */}
      <div className="flex justify-center mt-4">
        <div className="flex gap-2">
          <div className="w-10 h-1 bg-[#18c8ff] rounded-full animate-pulse" />
          <p className="text-secondary text-[12px] italic">Swipe to explore moments</p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Documentations, "documentation");