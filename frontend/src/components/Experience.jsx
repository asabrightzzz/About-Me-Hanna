import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF, Float, Clone, } from "@react-three/drei";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const RoleModel = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
      <Clone object={scene} scale={1.2} />
    </Float>
  );
};

const CompactRoleCard = ({ index, title, description, modelPath, iconColor }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="w-full md:w-[48%] lg:w-[48%] group"
  >
    <div className="relative flex items-center bg-gradient-to-r from-[#111428] to-[#050816] p-4 rounded-[24px] border border-white/5 hover:border-[#18c8ff]/50 transition-all duration-500 overflow-hidden min-h-[160px] shadow-xl">
      
      {/* 3D Viewport*/}
      <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex-shrink-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 35 }} frameloop="demand" gl={{ antialias: false, powerPreference: "high-performance" }}>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.4} contactShadow={false}>
              <RoleModel modelPath={modelPath} />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
          </Suspense>
        </Canvas>
      </div>

      {/* Text Content */}
      <div className="flex flex-col ml-4 pr-2">
        <h3 className={`text-[20px] font-bold tracking-wide transition-colors duration-300 group-hover:text-[#18c8ff]`}>
          {title}
        </h3>
        <p className="text-secondary text-[14px] leading-[20px] mt-1 line-clamp-3">
          {description}
        </p>

        {/* Indicator */}
        <div className={`w-8 h-1 mt-3 rounded-full ${iconColor} shadow-[0_0_8px_currentColor]`} />
      </div>

      {/* Hover Effect Background Glow */}
      <div className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${iconColor}`} />
    </div>
  </motion.div>
);

const Experience = () => {
  const roles = [
    {
      title: "Software Engineer",
      description: "Crafting seamless digital solutions with a focus on logic, scalability, and performance.",
      modelPath: "./desktop_pc/scene.gltf",
      iconColor: "bg-blue-500",
    },
    {
      title: "Illustrator",
      description: "Visualizing stories and concepts through digital art with artistic precision.",
      modelPath: "./tab/galaxy_tab_s8_ultra.glb",
      iconColor: "bg-purple-500",
    },
    {
      title: "Music Producer",
      description: "Designing sonic landscapes and emotional through melodies.",
      modelPath: "./midi_controller/akai_mpk_mini_midi_controller.glb",
      iconColor: "bg-orange-500",
    },
    {
      title: "Game Developer",
      description: "Engineering interactive worlds where gameplay and creativity meet.",
      modelPath: "./joystick/joystick.glb",
      iconColor: "bg-green-500",
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()} className="mb-12">
        <p className={`${styles.sectionSubText} text-[#18c8ff]`}>Multidisciplinary</p>
        <h2 className={styles.sectionHeadText}>Expertise</h2>
      </motion.div>

      <div className="flex flex-wrap gap-6 justify-center">
        {roles.map((role, index) => (
          <CompactRoleCard key={role.title} index={index} {...role} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");