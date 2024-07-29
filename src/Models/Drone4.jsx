import React from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

export default function Drone4(props) {
  const group = React.useRef();
  const { scene, animations } = useGLTF('/drone4.gltf');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { actions } = useAnimations(animations, group);

  React.useEffect(() => {
    if (actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]].reset().fadeIn(0.1).play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Ensure your model hierarchy is correctly referenced here */}
      <primitive object={clone} />
    </group>
  );
}

useGLTF.preload('/drone4.gltf');
