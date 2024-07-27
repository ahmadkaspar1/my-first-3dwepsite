import React, { useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react';
import Loader from "../components/Loader";
import Island from "../Models/Island";
import { OrbitControls, Environment } from "@react-three/drei";
import Cloud from "../Models/Cloud";
import Drone3 from "../Models/Drone3";
/* eslint-disable react/no-unknown-property */

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  // Function to handle rotation toggle
  const handleRotate = (value) => {
    setIsRotating(value);
  };

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ near: 0.1, far: 1000000 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <OrbitControls enableDamping={true} enableZoom={false} />
        <Suspense fallback={<Loader />}>
          <Island
            scale={[0.00225, 0.00225, 0.00225]}
            isRotating={isRotating}
            onRotate={handleRotate} // Pass the handler function
          />
          <Cloud scale={[0.5, 0.5, 0.5]} position={[2, 4, -4]} />
          <Cloud scale={[0.7, 0.7, 0.7]} position={[-12, 3.5, -3]} />
          <Drone3
            scale={[0.35, 0.35, 0.35]}
            position={[-1.3, 0.5, 3]}
            isRotating={isRotating}
            rotation={[0, 3, 0]}
          />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
