import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {OrbitControls,Preload, useGLTF, Float, DragControls,} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const tab = useGLTF("./tab/galaxy_tab_s8_ultra.glb");
  const joystick = useGLTF("./joystick/joystick.glb");
  const midi = useGLTF("./midi_controller/akai_mpk_mini_midi_controller.glb");

  return (
    <group>
      <ambientLight intensity={0.5} /> 
      <hemisphereLight intensity={0.5} groundColor='black' />
      <pointLight intensity={1.5} position={[0, 1, 2]} />

      {/* main computer */}
      <primitive
        object={computer.scene.clone()} 
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />

      {/* --- interactive objects --- */}

      {/* Galaxy Tab */}
      <DragControls>
        <Float speed={2}>
          <primitive object={tab.scene.clone()} scale={0.5} position={[3.5, 0.5, -0.5]} />
        </Float>
      </DragControls>

      {/* MIDI Controller */}
      <DragControls>
        <Float speed={1.5}>
          <primitive object={midi.scene.clone()} scale={0.25} position={[-4.5, -1.5, 1.5]} />
        </Float>
      </DragControls>

      {/* Joystick */}
      <DragControls>
        <Float speed={2.5}>
          <primitive object={joystick.scene.clone()} scale={0.1} position={[4, -2, 2]} />
        </Float>
      </DragControls>
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
