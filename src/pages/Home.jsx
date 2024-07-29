import React, { useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react';
import Loader from "../components/Loader";
import Island from "../Models/Island";
import { OrbitControls, Environment } from "@react-three/drei";
import Cloud from "../Models/Cloud";
import Drone3 from "../Models/Drone3";
import Drone4 from '../Models/Drone4';
import Satla from '../Models/Satla';
import Satla2 from '../Models/Satla2';
import Homeinfo from '../components/Homeinfo';
import Board from '../Models/Board';
/* eslint-disable react/no-unknown-property */

const Home = ({setCurrentStage}) => {
  const [isRotating, setIsRotating] = useState(false);

  // Function to handle rotation toggle
  const handleRotate = (value) => {
    setIsRotating(value);
  };

  return (
    <section className="w-full h-screen relative">

<div className=' absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>{setCurrentStage && <Homeinfo currentStage={setCurrentStage}/>}
</div>

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ near: 0.1, far: 1000000000 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <OrbitControls enableDamping={true} enableZoom={false} />
        <Suspense fallback={<Loader />}>
          <Island
            scale={[0.00225, 0.00225, 0.00225]}
            isRotating={isRotating}
            rotation={[0.15, 0, 0]}
            onRotate={handleRotate} // Pass the handler function
          />
          <Cloud scale={[0.5, 0.5, 0.5]} position={[2, 4, -4]} />
          <Cloud scale={[0.7, 0.7, 0.7]} position={[-12, 3.5, -3]} />
          <Drone3
            scale={[0.3, 0.3, 0.3]}
            position={[-.8, .29, 3]}
            isRotating={isRotating}
            rotation={[0, 3, 0]}
          />
          <Drone4 position={[-5.3, 0, -.4]} rotation={[0, 5.2, 0]} scale={[0.9, 0.9, 0.9]}/>
          <Satla position={[9, 4, -2]} 
          rotation={[5, 17.1, 4]} 
          scale={[0.2, 0.2, 0.2]}/>
          
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
