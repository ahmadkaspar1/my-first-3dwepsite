import React, { useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Drone(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF('/drone.gltf');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions.AnimationName) {
      actions.AnimationName.play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Cube010" position={[1.864, 1.865, -0.12]} rotation={[0, 0, 0.268]} scale={[0.763, 0.119, 0.119]}>
              <mesh name="Cube010_0" geometry={nodes.Cube010_0.geometry} material={materials['Material.004']} />
              <mesh name="Cube010_1" geometry={nodes.Cube010_1.geometry} material={materials['Material.006']} />
            </group>
            <group name="Circle002" position={[3.468, 2.215, 0.871]} rotation={[0, 0, -0.53]} scale={1.801}>
              <mesh name="Circle002_0" geometry={nodes.Circle002_0.geometry} material={materials['Material.005']} />
            </group>
            <group name="Circle003" position={[-3.474, 2.215, 0.871]} scale={1.801}>
              <mesh name="Circle003_0" geometry={nodes.Circle003_0.geometry} material={materials['Material.005']} />
            </group>
            <group name="Circle004" position={[-3.474, -3.182, 0.871]} rotation={[0, 0, 0.074]} scale={1.801}>
              <mesh name="Circle004_0" geometry={nodes.Circle004_0.geometry} material={materials['Material.005']} />
            </group>
            <group name="Cube009" position={[0, -2.998, 1.218]} scale={[0.347, 0.113, 0.117]}>
              <mesh name="Cube009_0" geometry={nodes.Cube009_0.geometry} material={materials['Material.004']} />
              <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials.Material} />
            </group>
            <group name="Circle005" position={[3.468, -3.182, 0.871]} rotation={[0, 0, -0.021]} scale={1.801}>
              <mesh name="Circle005_0" geometry={nodes.Circle005_0.geometry} material={materials['Material.005']} />
            </group>
            <group name="Lamp" position={[4.076, 1.005, 5.904]} rotation={[-0.268, 0.602, 1.931]}>
              <group name="Lamp_1" />
            </group>
            <group name="Cube" scale={[1, 1.959, 0.032]}>
              <mesh name="Cube_0" geometry={nodes.Cube_0.geometry} material={materials.TEXTURE} />
            </group>
            <group name="Cube002" position={[0, 0, 0.087]} scale={[1, 1.959, 0.032]}>
              <mesh name="Cube002_0" geometry={nodes.Cube002_0.geometry} material={materials.TEXTURE} />
            </group>
            <group name="Cube003" position={[-0.018, 1.432, -1.674]} rotation={[0, 0, -0.29]} scale={[1.353, 0.273, 0.024]}>
              <mesh name="Cube003_0" geometry={nodes.Cube003_0.geometry} material={materials.TEXTURE} />
            </group>
            <group name="Circle" position={[-3.459, -3.191, 0.054]} scale={0.478}>
              <mesh name="Circle_0" geometry={nodes.Circle_0.geometry} material={materials['Material.002']} />
              <mesh name="Circle_1" geometry={nodes.Circle_1.geometry} material={materials['Material.003']} />
              <mesh name="Circle_2" geometry={nodes.Circle_2.geometry} material={materials['Material.004']} />
            </group>
            <group name="Cube004" position={[0.052, 0.311, 1.104]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-0.883, 2.42, 0.027]}>
              <mesh name="Cube004_0" geometry={nodes.Cube004_0.geometry} material={materials.TEXTURE} />
            </group>
            <group name="Cylinder" position={[-0.739, 1.767, 0.596]} rotation={[-Math.PI, 0, 0]} scale={[-0.063, 0.063, 0.508]}>
              <mesh name="Cylinder_0" geometry={nodes.Cylinder_0.geometry} material={materials['Material.001']} />
            </group>
            <group name="Circle001" position={[-3.459, 2.216, 0.054]} scale={0.478}>
              <mesh name="Circle001_0" geometry={nodes.Circle001_0.geometry} material={materials['Material.002']} />
              <mesh name="Circle001_1" geometry={nodes.Circle001_1.geometry} material={materials['Material.003']} />
              <mesh name="Circle001_2" geometry={nodes.Circle001_2.geometry} material={materials['Material.004']} />
            </group>
            <group name="Hemi" position={[0.589, -1.3, 3.38]}>
              <group name="Hemi_1" />
            </group>
            <group name="Hemi001" position={[0.589, -1.3, -1.254]} rotation={[-Math.PI, 0.018, -Math.PI]}>
              <group name="Hemi001_1" />
            </group>
            <group name="Cube001" position={[0.024, -2.085, 0.398]} scale={[0.512, 0.914, 0.305]}>
              <mesh name="Cube001_0" geometry={nodes.Cube001_0.geometry} material={materials['Material.007']} />
            </group>
            <group name="Cube005" position={[0.004, 0.627, 1.137]} scale={[0.376, 0.461, 0.013]}>
              <mesh name="Cube005_0" geometry={nodes.Cube005_0.geometry} material={materials['Material.004']} />
            </group>
            <group name="Cube006" position={[0.004, -0.404, 0.322]} scale={[0.547, 0.547, 0.164]}>
              <mesh name="Cube006_0" geometry={nodes.Cube006_0.geometry} material={materials['Material.008']} />
            </group>
            <group name="Cube007" position={[0.024, 0.814, 0.296]} scale={[0.301, 0.536, 0.179]}>
              <mesh name="Cube007_0" geometry={nodes.Cube007_0.geometry} material={materials['Material.007']} />
            </group>
            <group name="Cube008" position={[0.009, 1.779, 0.576]} scale={[0.575, 0.041, 0.45]}>
              <mesh name="Cube008_0" geometry={nodes.Cube008_0.geometry} material={materials['Material.004']} />
              <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={materials.CAMERA_EEFCT} />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/drone.gltf');
