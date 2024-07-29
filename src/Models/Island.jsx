import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

export default function Island(props) {
  const { nodes, materials } = useGLTF('/island.gltf');
  const { viewport } = useThree();
  const islandRef = useRef();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const { isRotating, onRotate } = props;

  const handleMouseDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (onRotate) onRotate(true);
    const clientX = e.clientX;
    lastX.current = clientX;
  };

  const handleMouseUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (onRotate) onRotate(false);
  };

  const handleMouseMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      const clientX = e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) onRotate(true);
      islandRef.current.rotation.y += 0.01 * Math.PI;
    } else if (e.key === "ArrowRight") {
      if (!isRotating) onRotate(true);
      islandRef.current.rotation.y -= 0.01 * Math.PI;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      if (isRotating) onRotate(false);
    }
  };

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
    } else {
      const rotation = islandRef.current.rotation.y;
      const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // يمكنك استخدام setCurrentStage هنا بناءً على دوران الجزيرة
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          // setCurrentStage(4); // تأكد من تعريف setCurrentStage
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          // setCurrentStage(3); // تأكد من تعريف setCurrentStage
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          // setCurrentStage(2); // تأكد من تعريف setCurrentStage
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          // setCurrentStage(1); // تأكد من تعريف setCurrentStage
          break;
        default:
          // setCurrentStage(null); // تأكد من تعريف setCurrentStage
          break;
      }
    }
  });

  useEffect(() => {
    const canvas = document.querySelector('canvas');
    canvas.addEventListener("pointerdown", handleMouseDown);
    canvas.addEventListener("pointerup", handleMouseUp);
    canvas.addEventListener("pointermove", handleMouseMove);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handleMouseDown);
      canvas.removeEventListener("pointerup", handleMouseUp);
      canvas.removeEventListener("pointermove", handleMouseMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleMouseDown, handleMouseUp, handleMouseMove]);

  return (
    <group {...props} dispose={null} ref={islandRef}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.BALOON} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.BALOON_BULB} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.BALOON_CURVE} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.DROPS_PIPE} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.ISLAND_BASE_SHADOW} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.base_island_additional_pipes} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['base_island_additional_pipes_BEAM.001']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.base_island_additional_pipes_transarent} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.curve_Pipe} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.island_Connector_CURVE} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.island_Metal_holders} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.machine_MAIN} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.machine_REACTOR} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.machine_REACTOR_transparent} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.machine_RENTGEN} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.machine_TELEPORT_flash} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.machine_TELEPORT_transparent} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.sphere} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.ISLAND_BASE} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.ISLAND_BASE} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.machine_PRINTER} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.machine_PRINTER} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.machine_TELEPORT} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.machine_TELEPORT} />
      </group>
    </group>
  );
}

useGLTF.preload('/island.gltf');
