import React from 'react';
import { useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

export default function Drone2(props) {
  const group = React.useRef();
  const { scene } = useGLTF('/drone2.gltf');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials, animations } = useGraph(clone);
  const { actions } = animations ? useAnimations(animations, group) : { actions: {} };

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <group name="1ae3d3b61691438daf83d633a8ccabddfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Happy" rotation={[0, -Math.PI / 2, 0]}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_7" rotation={[0, -Math.PI / 2, 0]} />
                    <group name="Drone" />
                    <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.Ear_Right} skeleton={nodes.Object_8.skeleton} />
                    <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.Eear_Right_Emissive} skeleton={nodes.Object_9.skeleton} />
                    <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.Ear_Right_Light} skeleton={nodes.Object_10.skeleton} />
                    <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.Ear_Right_Interface} skeleton={nodes.Object_11.skeleton} />
                    <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.Ear_Left} skeleton={nodes.Object_12.skeleton} />
                    <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.Ear_Left_Light} skeleton={nodes.Object_13.skeleton} />
                    <skinnedMesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.Ear_Left_Interface} skeleton={nodes.Object_14.skeleton} />
                    <skinnedMesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.Display} skeleton={nodes.Object_15.skeleton} />
                    <skinnedMesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.Vents_top} skeleton={nodes.Object_16.skeleton} />
                    <skinnedMesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.Base} skeleton={nodes.Object_17.skeleton} />
                    <skinnedMesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.Exhausts} skeleton={nodes.Object_18.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/drone2.gltf');
