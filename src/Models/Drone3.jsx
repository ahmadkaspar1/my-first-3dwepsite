import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Drone3 = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/drone3.gltf');
  const { actions } = useAnimations(animations, group);
  const { rotation = [0, 0, 0], isRotating } = props;

  useEffect(() => {
    if (actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]].reset().fadeIn(0.5).play();
    }
  }, [actions]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.set(...rotation); // تحديث التدوير بناءً على خاصية rotation
      if (isRotating) {
        group.current.rotation.y += 0.01; // تغيير هذه القيمة لتحديد سرعة التدوير
      }
    }
  });

  // التحقق من وجود العناصر قبل محاولة استخدامها
  if (!nodes || !materials) {
    console.error('Nodes or materials are missing from the GLTF file.');
    return null; // أو يمكنك عرض مؤشر تحميل هنا
  }
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="battle_drone_LP_v3fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Dummy049" position={[23.45, 27.309, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Dummy039" position={[31.411, -24.332, 13.165]} rotation={[1.285, -0.479, -1.242]}>
                    <group name="Dummy045" position={[16.346, -52.123, -0.141]} rotation={[0, 0, 1.484]}>
                      <group name="72_low" position={[1.358, -3.586, 0.141]}>
                        <mesh name="72_low__0" geometry={nodes['72_low__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                      <group name="72_low_1" position={[6.331, -24.095, 0.141]}>
                        <mesh name="72_low__0_1" geometry={nodes['72_low__0_1'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                      <group name="72_low_2" position={[1.427, -17.256, 0.141]}>
                        <mesh name="72_low__0_2" geometry={nodes['72_low__0_2'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="Dummy044" position={[20.009, -33.852, -0.069]} rotation={[0, 0, Math.PI / 9]}>
                      <group name="66_low" position={[9.289, -8.038, -0.375]} rotation={[0, 0, 1.134]}>
                        <mesh name="66_low__0" geometry={nodes['66_low__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                      <group name="204_low" rotation={[0, 0, 1.309]}>
                        <group name="Object_155" position={[0, 0, -0.055]}>
                          <mesh name="204_low__0" geometry={nodes['204_low__0'].geometry} material={materials['Scene_-_Root']} />
                        </group>
                      </group>
                      <group name="204_low_1" rotation={[0, 0, 1.309]}>
                        <group name="Object_158" position={[-1.831, 0.549, -0.055]}>
                          <mesh name="204_low__0_1" geometry={nodes['204_low__0_1'].geometry} material={materials['Scene_-_Root']} />
                        </group>
                      </group>
                    </group>
                    <group name="56_low" position={[9.64, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                      <mesh name="56_low__0" geometry={nodes['56_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="63_low" position={[20.009, -33.852, -0.069]} rotation={[0, 0, Math.PI / 2]}>
                      <mesh name="63_low__0" geometry={nodes['63_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="65_low" position={[20.009, -33.852, -0.069]} rotation={[0, 0, 2.705]}>
                      <mesh name="65_low__0" geometry={nodes['65_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="73_low" position={[16.346, -52.123, -0.141]} rotation={[0, 0, 2.269]}>
                      <mesh name="73_low__0" geometry={nodes['73_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="225_low" position={[16.346, -52.123, -0.141]} rotation={[0, 0, Math.PI / 2]} scale={[1, 1, 0.732]}>
                      <group name="Object_16" position={[0, 0, -0.227]}>
                        <mesh name="225_low__0" geometry={nodes['225_low__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="226_low" position={[16.346, -52.123, -0.141]} rotation={[0, 0, Math.PI / 2]}>
                      <group name="Object_19" position={[0, 0, -0.227]}>
                        <mesh name="226_low__0" geometry={nodes['226_low__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="199_low" position={[1.513, -31.8, 0]} rotation={[0, 0, Math.PI / 2]}>
                      <mesh name="199_low__0" geometry={nodes['199_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="198_low" position={[13.83, -55.983, 0]} rotation={[0, 0, Math.PI / 2]}>
                      <mesh name="198_low__0" geometry={nodes['198_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="203_low" position={[20.009, -33.852, -0.069]} rotation={[0, 0, -1.134]}>
                      <group name="Object_26" position={[0, 0, -0.055]}>
                        <mesh name="203_low__0" geometry={nodes['203_low__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="200_low" position={[17.924, -0.371, 0]} rotation={[0, 0, Math.PI / 2]} scale={[1, 1, 0.589]}>
                      <group name="Object_29" position={[0.371, 8.284, 0]}>
                        <mesh name="200_low__0" geometry={nodes['200_low__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="226_low_1" position={[16.346, -52.123, -0.141]} rotation={[0, 0, -Math.PI / 6]}>
                      <group name="Object_32" position={[0, 0, -0.227]}>
                        <mesh name="226_low__0_1" geometry={nodes['226_low__0_1'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="226_low_2" position={[16.346, -52.123, -0.141]} rotation={[0, 0, -2.618]}>
                      <group name="Object_35" position={[0, 0, -0.227]}>
                        <mesh name="226_low__0_2" geometry={nodes['226_low__0_2'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="202_low" position={[7.726, -35.105, 0.387]} rotation={[0, 0, Math.PI / 2]}>
                      <mesh name="202_low__0" geometry={nodes['202_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="201_low" position={[13.239, -31.84, -0.069]} rotation={[0, 0, 1.92]} scale={[1, 1, 1.387]}>
                      <group name="Object_40" position={[4.035, 1.51, 0.271]}>
                        <mesh name="201_low__0" geometry={nodes['201_low__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="225_low_1" position={[20.009, -33.852, -0.069]} rotation={[0, 0, Math.PI / 2]} scale={[1.101, 1.101, 0.732]}>
                      <group name="Object_43" position={[0, 0, -0.227]}>
                        <mesh name="225_low__0_1" geometry={nodes['225_low__0_1'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="226_low_3" position={[20.009, -33.852, -0.069]} rotation={[0, 0, Math.PI / 2]} scale={[1.101, 1.101, 1]}>
                      <group name="Object_46" position={[0, 0, -0.227]}>
                        <mesh name="226_low__0_3" geometry={nodes['226_low__0_3'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="226_low_4" position={[20.009, -33.852, -0.069]} rotation={[0, 0, -Math.PI / 6]} scale={[1.101, 1.101, 1]}>
                      <group name="Object_49" position={[0, 0, -0.227]}>
                        <mesh name="226_low__0_4" geometry={nodes['226_low__0_4'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="226_low_5" position={[20.009, -33.852, -0.069]} rotation={[0, 0, -2.618]} scale={[1.101, 1.101, 1]}>
                      <group name="Object_52" position={[0, 0, -0.227]}>
                        <mesh name="226_low__0_5" geometry={nodes['226_low__0_5'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low" position={[16.346, -52.123, -0.141]} rotation={[-Math.PI / 2, 1.045, -Math.PI]}>
                      <group name="Object_55" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0" geometry={nodes['227_low__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_1" position={[16.346, -52.123, -0.141]} rotation={[-Math.PI / 2, -0.002, Math.PI]}>
                      <group name="Object_58" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_1" geometry={nodes['227_low__0_1'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_2" position={[16.346, -52.123, -0.141]} rotation={[-Math.PI / 2, 0.26, Math.PI]}>
                      <group name="Object_61" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_2" geometry={nodes['227_low__0_2'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_3" position={[16.346, -52.123, -0.141]} rotation={[-Math.PI / 2, 0.522, -Math.PI]}>
                      <group name="Object_64" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_3" geometry={nodes['227_low__0_3'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_4" position={[16.346, -52.123, -0.141]} rotation={[-Math.PI / 2, 0.783, -Math.PI]}>
                      <group name="Object_67" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_4" geometry={nodes['227_low__0_4'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_5" position={[16.346, -52.123, -0.141]} rotation={[Math.PI / 2, 0.002, 0]}>
                      <group name="Object_70" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_5" geometry={nodes['227_low__0_5'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_6" position={[16.346, -52.123, -0.141]} rotation={[Math.PI / 2, 1.049, 0]}>
                      <group name="Object_73" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_6" geometry={nodes['227_low__0_6'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_7" position={[16.346, -52.123, -0.141]} rotation={[Math.PI / 2, 0.787, 0]}>
                      <group name="Object_76" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_7" geometry={nodes['227_low__0_7'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_8" position={[16.346, -52.123, -0.141]} rotation={[Math.PI / 2, 0.526, 0]}>
                      <group name="Object_79" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_8" geometry={nodes['227_low__0_8'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_9" position={[16.346, -52.123, -0.141]} rotation={[Math.PI / 2, 0.264, 0]}>
                      <group name="Object_82" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_9" geometry={nodes['227_low__0_9'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_10" position={[16.346, -52.123, -0.141]} rotation={[-Math.PI / 2, -1.049, Math.PI]}>
                      <group name="Object_85" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_10" geometry={nodes['227_low__0_10'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_11" position={[16.346, -52.123, -0.141]} rotation={[Math.PI / 2, -1.045, 0]}>
                      <group name="Object_88" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_11" geometry={nodes['227_low__0_11'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_12" position={[16.346, -52.123, -0.141]} rotation={[Math.PI / 2, -1.307, 0]}>
                      <group name="Object_91" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_12" geometry={nodes['227_low__0_12'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_13" position={[16.346, -52.123, -0.141]} rotation={[1.571, -1.569, 0]}>
                      <group name="Object_94" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_13" geometry={nodes['227_low__0_13'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_14" position={[16.346, -52.123, -0.141]} rotation={[-Math.PI / 2, -1.311, Math.PI]}>
                      <group name="Object_97" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_14" geometry={nodes['227_low__0_14'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_15" position={[20.009, -33.852, -0.069]} rotation={[-Math.PI / 2, 1.045, -Math.PI]} scale={[1.101, 1, 1.101]}>
                      <group name="Object_100" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_15" geometry={nodes['227_low__0_15'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_16" position={[20.009, -33.852, -0.069]} rotation={[-Math.PI / 2, -0.002, Math.PI]} scale={[1.101, 1, 1.101]}>
                      <group name="Object_103" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_16" geometry={nodes['227_low__0_16'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_17" position={[20.009, -33.852, -0.069]} rotation={[-Math.PI / 2, 0.26, Math.PI]} scale={[1.101, 1, 1.101]}>
                      <group name="Object_106" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_17" geometry={nodes['227_low__0_17'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_18" position={[20.009, -33.852, -0.069]} rotation={[-Math.PI / 2, 0.522, Math.PI]} scale={[1.101, 1, 1.101]}>
                      <group name="Object_109" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_18" geometry={nodes['227_low__0_18'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_19" position={[20.009, -33.852, -0.069]} rotation={[-Math.PI / 2, 0.783, -Math.PI]} scale={[1.101, 1, 1.101]}>
                      <group name="Object_112" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_19" geometry={nodes['227_low__0_19'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_20" position={[20.009, -33.852, -0.069]} rotation={[Math.PI / 2, 0.002, 0]} scale={[1.101, 1, 1.101]}>
                      <group name="Object_115" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_20" geometry={nodes['227_low__0_20'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_21" position={[20.009, -33.852, -0.069]} rotation={[Math.PI / 2, 1.049, 0]} scale={[1.101, 1, 1.101]}>
                      <group name="Object_118" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_21" geometry={nodes['227_low__0_21'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_22" position={[20.009, -33.852, -0.069]} rotation={[Math.PI / 2, 0.787, 0]} scale={[1.101, 1, 1.101]}>
                      <group name="Object_121" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_22" geometry={nodes['227_low__0_22'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_23" position={[20.009, -33.852, -0.069]} rotation={[Math.PI / 2, 0.526, 0]} scale={[1.101, 1, 1.101]}>
                      <group name="Object_124" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_23" geometry={nodes['227_low__0_23'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_24" position={[20.009, -33.852, -0.069]} rotation={[Math.PI / 2, 0.264, 0]} scale={[1.101, 1, 1.101]}>
                      <group name="Object_127" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_24" geometry={nodes['227_low__0_24'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_25" position={[20.009, -33.852, -0.069]} rotation={[-Math.PI / 2, -1.049, Math.PI]} scale={[1.101, 1, 1.101]}>
                      <group name="Object_130" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_25" geometry={nodes['227_low__0_25'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_26" position={[20.009, -33.852, -0.069]} rotation={[Math.PI / 2, -1.045, 0]} scale={[1.101, 1, 1.101]}>
                      <group name="Object_133" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_26" geometry={nodes['227_low__0_26'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_27" position={[20.009, -33.852, -0.069]} rotation={[Math.PI / 2, -1.307, 0]} scale={[1.101, 1, 1.101]}>
                      <group name="Object_136" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_27" geometry={nodes['227_low__0_27'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_28" position={[20.009, -33.852, -0.069]} rotation={[1.571, -1.569, 0]} scale={[1.101, 1, 1.101]}>
                      <group name="Object_139" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_28" geometry={nodes['227_low__0_28'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="227_low_29" position={[20.009, -33.852, -0.069]} rotation={[-Math.PI / 2, -1.311, Math.PI]} scale={[1.101, 1, 1.101]}>
                      <group name="Object_142" position={[0.031, -0.102, -1.865]}>
                        <mesh name="227_low__0_29" geometry={nodes['227_low__0_29'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                  </group>
                  <group name="Dummy043" position={[31.411, 24.332, 13.165]} rotation={[1.856, 0.479, -1.242]}>
                    <group name="Dummy047" position={[20.009, -33.852, -0.116]} rotation={[0, 0, -1.222]}>
                      <group name="66_low001" position={[8.038, 9.289, 0.375]}>
                        <mesh name="66_low001__0" geometry={nodes['66_low001__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                      <group name="204_low002">
                        <mesh name="204_low002__0" geometry={nodes['204_low002__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                      <group name="204_low001">
                        <mesh name="204_low001__0" geometry={nodes['204_low001__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="Dummy046" position={[16.346, -52.123, -0.044]} rotation={[0, 0, -Math.PI / 4]}>
                      <group name="72_low002" position={[12.301, 12.185, -0.141]}>
                        <mesh name="72_low002__0" geometry={nodes['72_low002__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                      <group name="72_low003" position={[1.874, 3.345, -0.141]}>
                        <mesh name="72_low003__0" geometry={nodes['72_low003__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                      <group name="72_low001" position={[14.388, 20.338, -0.141]}>
                        <mesh name="72_low001__0" geometry={nodes['72_low001__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="198_low001" position={[13.83, -55.983, -0.185]}>
                      <mesh name="198_low001__0" geometry={nodes['198_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="199_low001" position={[1.513, -31.8, -0.185]}>
                      <mesh name="199_low001__0" geometry={nodes['199_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="200_low001" position={[17.924, -0.371, -0.185]}>
                      <mesh name="200_low001__0" geometry={nodes['200_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="201_low001" position={[13.239, -31.84, -0.116]}>
                      <mesh name="201_low001__0" geometry={nodes['201_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="202_low001" position={[7.726, -35.105, -0.572]}>
                      <mesh name="202_low001__0" geometry={nodes['202_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="203_low001" position={[20.009, -33.852, -0.116]}>
                      <mesh name="203_low001__0" geometry={nodes['203_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="225_low001" position={[20.009, -33.852, -0.116]}>
                      <mesh name="225_low001__0" geometry={nodes['225_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="225_low002" position={[16.346, -52.123, -0.044]}>
                      <mesh name="225_low002__0" geometry={nodes['225_low002__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="226_low001" position={[16.346, -52.123, -0.044]}>
                      <mesh name="226_low001__0" geometry={nodes['226_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="226_low002" position={[20.009, -33.852, -0.116]}>
                      <mesh name="226_low002__0" geometry={nodes['226_low002__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="226_low003" position={[20.009, -33.852, -0.116]}>
                      <mesh name="226_low003__0" geometry={nodes['226_low003__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="226_low004" position={[20.009, -33.852, -0.116]}>
                      <mesh name="226_low004__0" geometry={nodes['226_low004__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="226_low005" position={[16.346, -52.123, -0.044]}>
                      <mesh name="226_low005__0" geometry={nodes['226_low005__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="226_low006" position={[16.346, -52.123, -0.044]}>
                      <mesh name="226_low006__0" geometry={nodes['226_low006__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low001" position={[20.009, -33.852, -0.116]}>
                      <mesh name="227_low001__0" geometry={nodes['227_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low002" position={[20.009, -33.852, -0.116]}>
                      <mesh name="227_low002__0" geometry={nodes['227_low002__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low003" position={[20.009, -33.852, -0.116]}>
                      <mesh name="227_low003__0" geometry={nodes['227_low003__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low004" position={[20.009, -33.852, -0.116]}>
                      <mesh name="227_low004__0" geometry={nodes['227_low004__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low005" position={[20.009, -33.852, -0.116]}>
                      <mesh name="227_low005__0" geometry={nodes['227_low005__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low006" position={[20.009, -33.852, -0.116]}>
                      <mesh name="227_low006__0" geometry={nodes['227_low006__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low007" position={[20.009, -33.852, -0.116]}>
                      <mesh name="227_low007__0" geometry={nodes['227_low007__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low008" position={[20.009, -33.852, -0.116]}>
                      <mesh name="227_low008__0" geometry={nodes['227_low008__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low009" position={[16.346, -52.123, -0.044]}>
                      <mesh name="227_low009__0" geometry={nodes['227_low009__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low010" position={[16.346, -52.123, -0.044]}>
                      <mesh name="227_low010__0" geometry={nodes['227_low010__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low011" position={[16.346, -52.123, -0.044]}>
                      <mesh name="227_low011__0" geometry={nodes['227_low011__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low012" position={[20.009, -33.852, -0.116]}>
                      <mesh name="227_low012__0" geometry={nodes['227_low012__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low013" position={[16.346, -52.123, -0.044]}>
                      <mesh name="227_low013__0" geometry={nodes['227_low013__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low014" position={[16.346, -52.123, -0.044]}>
                      <mesh name="227_low014__0" geometry={nodes['227_low014__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low015" position={[16.346, -52.123, -0.044]}>
                      <mesh name="227_low015__0" geometry={nodes['227_low015__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low016" position={[16.346, -52.123, -0.044]}>
                      <mesh name="227_low016__0" geometry={nodes['227_low016__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low017" position={[16.346, -52.123, -0.044]}>
                      <mesh name="227_low017__0" geometry={nodes['227_low017__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low018" position={[16.346, -52.123, -0.044]}>
                      <mesh name="227_low018__0" geometry={nodes['227_low018__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low019" position={[16.346, -52.123, -0.044]}>
                      <mesh name="227_low019__0" geometry={nodes['227_low019__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low020" position={[16.346, -52.123, -0.044]}>
                      <mesh name="227_low020__0" geometry={nodes['227_low020__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low021" position={[16.346, -52.123, -0.044]}>
                      <mesh name="227_low021__0" geometry={nodes['227_low021__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low022" position={[16.346, -52.123, -0.044]}>
                      <mesh name="227_low022__0" geometry={nodes['227_low022__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low023" position={[16.346, -52.123, -0.044]}>
                      <mesh name="227_low023__0" geometry={nodes['227_low023__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low024" position={[16.346, -52.123, -0.044]}>
                      <mesh name="227_low024__0" geometry={nodes['227_low024__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low025" position={[20.009, -33.852, -0.116]}>
                      <mesh name="227_low025__0" geometry={nodes['227_low025__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low026" position={[20.009, -33.852, -0.116]}>
                      <mesh name="227_low026__0" geometry={nodes['227_low026__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low027" position={[20.009, -33.852, -0.116]}>
                      <mesh name="227_low027__0" geometry={nodes['227_low027__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low028" position={[20.009, -33.852, -0.116]}>
                      <mesh name="227_low028__0" geometry={nodes['227_low028__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low029" position={[20.009, -33.852, -0.116]}>
                      <mesh name="227_low029__0" geometry={nodes['227_low029__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="227_low030" position={[20.009, -33.852, -0.116]}>
                      <mesh name="227_low030__0" geometry={nodes['227_low030__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="56_low001" position={[9.64, 0, -0.185]}>
                      <mesh name="56_low001__0" geometry={nodes['56_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="63_low001" position={[20.009, -33.852, -0.116]}>
                      <mesh name="63_low001__0" geometry={nodes['63_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="65_low001" position={[20.009, -33.852, -0.116]}>
                      <mesh name="65_low001__0" geometry={nodes['65_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="73_low001" position={[16.346, -52.123, -0.044]}>
                      <mesh name="73_low001__0" geometry={nodes['73_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="Dummy042" position={[-33.822, 0, -31.302]} rotation={[-Math.PI, -1.396, -Math.PI]}>
                    <group name="215_low" rotation={[-Math.PI / 2, 0, 2.793]} scale={[0.678, 0.678, 0.447]}>
                      <mesh name="215_low__0" geometry={nodes['215_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="219_low" position={[-0.056, 0, -4.644]} rotation={[-Math.PI / 2, 0, 1.309]} scale={0.448}>
                      <group name="Object_275" position={[-46.482, -14.955, 0.8]}>
                        <mesh name="219_low__0" geometry={nodes['219_low__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                  </group>
                  <group name="Dummy048" position={[-0.519, 10.246, -26.219]} rotation={[-1.588, 0.498, -0.34]}>
                    <group name="73_low002" rotation={[Math.PI / 2, -1.309, 0]}>
                      <mesh name="73_low002__0" geometry={nodes['73_low002__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="212_low001" rotation={[Math.PI / 2, -1.309, 0]}>
                      <mesh name="212_low001__0" geometry={nodes['212_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="211_low001" rotation={[Math.PI / 2, -1.309, 0]}>
                      <mesh name="211_low001__0" geometry={nodes['211_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="213_low001" rotation={[Math.PI / 2, -1.309, 0]}>
                      <mesh name="213_low001__0" geometry={nodes['213_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="Dummy037" position={[-0.519, -10.246, -26.219]} rotation={[-1.59, -0.613, -0.359]}>
                    <group name="211_low" scale={[1, 1, 0.659]}>
                      <group name="213_low" position={[4.422, 0.938, 0]} rotation={[0, 0, 0.175]} scale={[1, 1, 1.518]}>
                        <group name="Object_290" position={[-46.482, -14.955, 0.8]}>
                          <mesh name="213_low__0" geometry={nodes['213_low__0'].geometry} material={materials['Scene_-_Root']} />
                        </group>
                      </group>
                      <mesh name="211_low__0" geometry={nodes['211_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="73_low_1" rotation={[0, 0, 0.175]}>
                      <mesh name="73_low__0_1" geometry={nodes['73_low__0_1'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="212_low" position={[0, 0, -0.999]} rotation={[Math.PI, 0, -0.611]}>
                      <mesh name="212_low__0" geometry={nodes['212_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="Dummy050" position={[-22.939, 15.638, -15.036]}>
                    <group name="176_low001">
                      <mesh name="176_low001__0" geometry={nodes['176_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="175_low001">
                      <mesh name="175_low001__0" geometry={nodes['175_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="177_low001">
                      <mesh name="177_low001__0" geometry={nodes['177_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="177_low002">
                      <mesh name="177_low002__0" geometry={nodes['177_low002__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="180_low001">
                      <mesh name="180_low001__0" geometry={nodes['180_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="192_low001">
                      <mesh name="192_low001__0" geometry={nodes['192_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="193_low001">
                      <mesh name="193_low001__0" geometry={nodes['193_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="194_low001">
                      <mesh name="194_low001__0" geometry={nodes['194_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="194_low002">
                      <mesh name="194_low002__0" geometry={nodes['194_low002__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="194_low003">
                      <mesh name="194_low003__0" geometry={nodes['194_low003__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="194_low004">
                      <mesh name="194_low004__0" geometry={nodes['194_low004__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="194_low005">
                      <mesh name="194_low005__0" geometry={nodes['194_low005__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="194_low006">
                      <mesh name="194_low006__0" geometry={nodes['194_low006__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="195_low001">
                      <mesh name="195_low001__0" geometry={nodes['195_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="195_low002">
                      <mesh name="195_low002__0" geometry={nodes['195_low002__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="196_low001">
                      <mesh name="196_low001__0" geometry={nodes['196_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="231_low001">
                      <mesh name="231_low001__0" geometry={nodes['231_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="82_low001">
                      <mesh name="82_low001__0" geometry={nodes['82_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="83_low001">
                      <mesh name="83_low001__0" geometry={nodes['83_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="83_low002">
                      <mesh name="83_low002__0" geometry={nodes['83_low002__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="84_low001">
                      <mesh name="84_low001__0" geometry={nodes['84_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="85_low001">
                      <mesh name="85_low001__0" geometry={nodes['85_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="87_low001">
                      <mesh name="87_low001__0" geometry={nodes['87_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="88_low001">
                      <mesh name="88_low001__0" geometry={nodes['88_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="89_low001" position={[-14.262, -0.278, -0.015]}>
                      <group name="Object_346" position={[14.262, 0.278, 0.015]}>
                        <mesh name="89_low001__0" geometry={nodes['89_low001__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="90_low001">
                      <mesh name="90_low001__0" geometry={nodes['90_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="91_low001">
                      <mesh name="91_low001__0" geometry={nodes['91_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="92_low001">
                      <mesh name="92_low001__0" geometry={nodes['92_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="93_low001">
                      <mesh name="93_low001__0" geometry={nodes['93_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="94_low001">
                      <mesh name="94_low001__0" geometry={nodes['94_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="95_low001">
                      <mesh name="95_low001__0" geometry={nodes['95_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="96_low001">
                      <mesh name="96_low001__0" geometry={nodes['96_low001__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="96_low002">
                      <mesh name="96_low002__0" geometry={nodes['96_low002__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="Dummy040" position={[-22.939, -15.638, -15.036]}>
                    <group name="177_low" position={[4.246, -0.622, -3.409]} rotation={[3.141, 0, 0]}>
                      <mesh name="177_low__0" geometry={nodes['177_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="91_low" position={[-21.163, -0.779, 0.01]} rotation={[Math.PI / 2, 0.001, 0.001]} scale={[1, 1, 1.62]}>
                      <mesh name="91_low__0" geometry={nodes['91_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="92_low" position={[-24.121, 0.276, 0.211]} rotation={[2.007, -1.569, 0.436]}>
                      <group name="Object_370" position={[1.314, 1.091, -0.902]}>
                        <mesh name="92_low__0" geometry={nodes['92_low__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="93_low" position={[-24.192, -1.038, 0.936]} rotation={[2.015, -1.569, 0.444]} scale={[0.882, 0.882, 1]}>
                      <group name="Object_373" position={[0, 0, -0.949]}>
                        <mesh name="93_low__0" geometry={nodes['93_low__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="231_low" position={[-0.734, -1.559, 0.193]} rotation={[1.571, 0.001, 0.001]} scale={[1.083, 1.083, 1]}>
                      <mesh name="231_low__0" geometry={nodes['231_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="193_low" position={[-0.733, -2.6, 0.193]} rotation={[Math.PI / 2, 0, -Math.PI / 9]}>
                      <mesh name="193_low__0" geometry={nodes['193_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="87_low" position={[-0.733, -1.843, 0.193]} rotation={[1.571, 0.001, 0.001]}>
                      <mesh name="87_low__0" geometry={nodes['87_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="195_low" position={[-12.5, -0.105, 3.05]}>
                      <mesh name="195_low__0" geometry={nodes['195_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="195_low_1" position={[-11.329, 0.288, 3.005]}>
                      <mesh name="195_low__0_1" geometry={nodes['195_low__0_1'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="192_low" position={[-15.925, 0.277, 3.277]} scale={[1, 2.127, 0.541]}>
                      <group name="Object_386" position={[0, 0, -0.393]}>
                        <mesh name="192_low__0" geometry={nodes['192_low__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="194_low" position={[6.355, -1.155, 1.622]} rotation={[Math.PI / 2, 1.571, 0]}>
                      <mesh name="194_low__0" geometry={nodes['194_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="194_low_1" position={[8.552, 0.295, -0.344]} rotation={[Math.PI / 2, 0, 0]} scale={1.726}>
                      <mesh name="194_low__0_1" geometry={nodes['194_low__0_1'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="194_low_2" position={[8.516, 0.295, 1.597]} rotation={[Math.PI / 2, 0, 0]} scale={1.726}>
                      <mesh name="194_low__0_2" geometry={nodes['194_low__0_2'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="194_low_3" position={[8.946, 0.295, 1.597]} rotation={[Math.PI / 2, 0, 0]} scale={1.726}>
                      <mesh name="194_low__0_3" geometry={nodes['194_low__0_3'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="196_low" position={[-6.759, 0.288, 2.23]} rotation={[Math.PI / 2, 0.001, 0.001]} scale={[1, 1.121, 1.253]}>
                      <group name="Object_397" position={[-10.915, -2.175, -1.339]}>
                        <mesh name="196_low__0" geometry={nodes['196_low__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="194_low_4" position={[6.355, -1.155, -0.125]} rotation={[Math.PI / 2, 1.571, 0]}>
                      <mesh name="194_low__0_4" geometry={nodes['194_low__0_4'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="88_low" position={[-11.023, 0.281, 0.047]} rotation={[Math.PI / 2, 0.001, 0.001]} scale={[1, 1, 1.117]}>
                      <group name="Object_402" position={[-6.649, 0.006, -1.343]}>
                        <mesh name="88_low__0" geometry={nodes['88_low__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="96_low" position={[-23.82, 0.277, -1.992]} rotation={[-3.14, -1.57, 1.571]}>
                      <group name="Object_405" position={[0, 0.089, -0.322]}>
                        <mesh name="96_low__0_1" geometry={nodes['96_low__0_1'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="84_low" position={[0, 2.714, 0]} rotation={[-1.828, 1.57, -2.884]} scale={[0.468, 0.468, 0.925]}>
                      <group name="Object_408" position={[0, 0, -0.876]}>
                        <mesh name="84_low__0" geometry={nodes['84_low__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="94_low" position={[-25.318, 0.275, 0.6]} rotation={[1.572, -Math.PI / 2, 0]}>
                      <mesh name="94_low__0" geometry={nodes['94_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="89_low" position={[-23.373, 0.277, 0.046]} rotation={[1.571, 0.001, 0.001]} scale={[1.166, 0.872, 0.975]}>
                      <group name="Object_413" position={[0, 0, -1.336]}>
                        <mesh name="89_low__0" geometry={nodes['89_low__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="90_low" position={[-21.21, 0.282, 2.652]} rotation={[0, -0.001, -3.139]} scale={[1, 1.705, 0.833]}>
                      <mesh name="90_low__0" geometry={nodes['90_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="83_low" position={[1.128, 2.714, 0]} rotation={[-1.828, 1.57, -2.885]} scale={[0.748, 0.748, 0.458]}>
                      <group name="Object_418" position={[0, 0, -0.876]}>
                        <mesh name="83_low__0" geometry={nodes['83_low__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="83_low_1" position={[-1.138, 2.714, 0]} rotation={[-1.828, 1.57, -2.885]} scale={[0.748, 0.748, 0.458]}>
                      <group name="Object_421" position={[0, 0, -0.876]}>
                        <mesh name="83_low__0_1" geometry={nodes['83_low__0_1'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="175_low" position={[-6.267, 0.289, -5.099]} rotation={[Math.PI / 2, 0, 0]}>
                      <mesh name="175_low__0" geometry={nodes['175_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="176_low" position={[-6.205, 1.511, -5.159]} rotation={[Math.PI / 2, 0, 0]}>
                      <mesh name="176_low__0" geometry={nodes['176_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="194_low_5" position={[-1.729, 0.295, 0.058]} rotation={[Math.PI / 2, 0, 0]} scale={1.726}>
                      <mesh name="194_low__0_5" geometry={nodes['194_low__0_5'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="180_low" position={[-11.285, 0.287, -3.895]} rotation={[Math.PI / 2, 0.001, 0.001]} scale={[0.272, 0.49, 0.548]}>
                      <group name="Object_430" position={[-2.879, 3.948, -1.521]}>
                        <mesh name="180_low__0" geometry={nodes['180_low__0'].geometry} material={materials['Scene_-_Root']} />
                      </group>
                    </group>
                    <group name="177_low_1" position={[4.246, 1.225, -3.41]} rotation={[3.141, 0, 0]}>
                      <mesh name="177_low__0_1" geometry={nodes['177_low__0_1'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="95_low" position={[-23.794, 0.277, -0.379]} rotation={[-1.572, -Math.PI / 2, 0]}>
                      <mesh name="95_low__0" geometry={nodes['95_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="96_low_1" position={[-25.112, 0.276, 2.287]} rotation={[-3.14, -1.57, 1.571]}>
                      <mesh name="96_low__0" geometry={nodes['96_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="85_low" position={[-1.729, 0.295, 0.058]} rotation={[Math.PI / 2, 0, 0]} scale={1.726}>
                      <mesh name="85_low__0" geometry={nodes['85_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                    <group name="82_low" position={[0, 5.501, 0]} rotation={[1.571, 0.001, 0]}>
                      <mesh name="82_low__0" geometry={nodes['82_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="37_low" position={[-1.551, 0, -10.861]} rotation={[1.571, 0, 0.321]}>
                    <group name="Object_443" position={[-31.087, 13.326, 6.106]}>
                      <mesh name="37_low__0" geometry={nodes['37_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="4_low" position={[-46.984, 0, -20.142]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh name="4_low__0" geometry={nodes['4_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="19_low" position={[-47.738, 0, -30.922]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh name="19_low__0" geometry={nodes['19_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="18_low" position={[-39.209, 0, -30.325]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1.674]}>
                    <group name="Object_450" position={[0, 0, -1.142]}>
                      <mesh name="18_low__0" geometry={nodes['18_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="5_low" position={[-45.418, -3.069, -26.106]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh name="5_low__0" geometry={nodes['5_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="47_low" position={[20.033, 0, 5.544]} rotation={[Math.PI / 2, 1.571, 0]}>
                    <group name="Object_455" position={[-2.829, 0.902, 13.388]}>
                      <mesh name="47_low__0" geometry={nodes['47_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="47_low_1" position={[-1.551, 0, -10.861]} rotation={[Math.PI / 2, 0, 0.321]} scale={[1, 1, 0.822]}>
                    <group name="Object_458" position={[-31.087, 13.326, 6.106]}>
                      <mesh name="47_low__0_1" geometry={nodes['47_low__0_1'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="4_low_1" position={[-47.33, 0, -25.789]} rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_461" position={[0, 0, -1.056]}>
                      <mesh name="4_low__0_1" geometry={nodes['4_low__0_1'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="Dummy023" position={[36.102, -2.564, 8.445]} />
                  <group name="2_low" position={[-52.501, 0, -22.94]} rotation={[-Math.PI, -1.35, Math.PI / 2]} scale={[0.914, 1, 1]}>
                    <mesh name="2_low__0" geometry={nodes['2_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="1_low" position={[-41.283, 0, -19.628]} scale={[1, 0.811, 1]}>
                    <mesh name="1_low__0" geometry={nodes['1_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="3_low" position={[-48.571, 0, -17.261]} rotation={[Math.PI / 2, -1.571, 0]} scale={[1.406, 1.406, 1]}>
                    <mesh name="3_low__0" geometry={nodes['3_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="3_low_1" position={[-48.881, -0.069, -17.218]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.975, 0.975, 0.55]}>
                    <mesh name="3_low__0_1" geometry={nodes['3_low__0_1'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="3_low_2" position={[-49.132, -0.069, -17.218]} rotation={[1.571, -Math.PI / 2, 0]} scale={[0.473, 0.473, 0.55]}>
                    <mesh name="3_low__0_2" geometry={nodes['3_low__0_2'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="3_low_3" position={[-49.028, -0.069, -17.218]} rotation={[1.571, -1.571, 0]} scale={[0.855, 0.855, 0.55]}>
                    <mesh name="3_low__0_3" geometry={nodes['3_low__0_3'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="7_low" rotation={[Math.PI / 2, 0, 0.298]}>
                    <group name="Object_477" position={[-35.236, 5.912, 10.147]}>
                      <mesh name="7_low__0" geometry={nodes['7_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="8_low" position={[0.592, 0, 6.783]} rotation={[Math.PI / 2, 0, 0.466]}>
                    <group name="Object_480" position={[-42.122, -0.324, 10.147]}>
                      <mesh name="8_low__0" geometry={nodes['8_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="9_low" position={[20.033, 0, 5.544]} rotation={[Math.PI / 2, 0, 0.298]}>
                    <group name="Object_483" position={[-56.015, 6.485, 10.147]}>
                      <mesh name="9_low__0" geometry={nodes['9_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="6_low" position={[-35.421, -10.147, -4.679]} rotation={[Math.PI / 2, 0, 0.298]}>
                    <mesh name="6_low__0" geometry={nodes['6_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="220_low" position={[30.079, 0, -4.58]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh name="220_low__0" geometry={nodes['220_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="221_low" position={[30.079, 0, -4.58]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh name="221_low__0" geometry={nodes['221_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="222_low" position={[26.607, 0, -13.147]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.88]}>
                    <group name="Object_492" position={[-8.164, 13.041, 0]}>
                      <mesh name="222_low__0" geometry={nodes['222_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="223_low" position={[30.079, 0, -4.58]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh name="223_low__0" geometry={nodes['223_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="224_low" position={[32.165, 0, -2.168]} rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_497" position={[-1.514, -2.07, 0]}>
                      <mesh name="224_low__0" geometry={nodes['224_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="218_low" position={[-36.505, -1.405, -30.998]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh name="218_low__0" geometry={nodes['218_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="216_low" position={[-33.822, 0, -31.302]} rotation={[-Math.PI / 2, 0, 1.309]} scale={0.678}>
                    <group name="Object_502" position={[0, 0, -0.064]}>
                      <mesh name="216_low__0" geometry={nodes['216_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="217_low" position={[-33.822, -1.417, -31.302]} rotation={[1.571, 0, 0]}>
                    <mesh name="217_low__0" geometry={nodes['217_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="107_low" position={[13.213, -11.897, -13.934]} rotation={[2.014, 1.571, 0]} scale={[1.925, 1.925, 0.431]}>
                    <mesh name="107_low__0" geometry={nodes['107_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="197_low" position={[-15.879, -10.077, -15.734]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1.084, 1.084]}>
                    <group name="Object_509" position={[-2.223, 1.134, -0.825]}>
                      <mesh name="197_low__0" geometry={nodes['197_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="78_low" position={[-16.553, -8.162, -15.119]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1.084, 1.084]}>
                    <group name="Object_512" position={[-2.223, 1.134, -0.825]}>
                      <mesh name="78_low__0" geometry={nodes['78_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="80_low" position={[-29.499, -8.253, -13.08]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh name="80_low__0" geometry={nodes['80_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="81_low" position={[-29.499, -8.253, -11.197]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh name="81_low__0" geometry={nodes['81_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="79_low" position={[-18.464, -6.772, -13.687]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh name="79_low__0" geometry={nodes['79_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="32_low" position={[-11.888, 0, -26.595]} rotation={[-Math.PI, -0.199, -1.571]} scale={[1, 0.878, 2.27]}>
                    <group name="Object_521" position={[-3.197, -6.692, -1.262]}>
                      <mesh name="32_low__0" geometry={nodes['32_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="31_low" position={[-11.888, 0, -26.595]} rotation={[-Math.PI, -0.199, -1.571]} scale={[1, 0.722, 2.27]}>
                    <group name="Object_524" position={[-3.197, -8.143, -1.254]}>
                      <mesh name="31_low__0" geometry={nodes['31_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="32_low_1" position={[-14.814, 0, -26.006]} rotation={[-Math.PI, -0.199, -1.571]} scale={[1, 0.878, 2.27]}>
                    <group name="Object_527" position={[-3.197, -6.692, -1.262]}>
                      <mesh name="32_low__0_1" geometry={nodes['32_low__0_1'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="31_low_1" position={[-14.814, 0, -26.006]} rotation={[-Math.PI, -0.199, -1.571]} scale={[1, 0.722, 2.27]}>
                    <group name="Object_530" position={[-3.197, -8.143, -1.254]}>
                      <mesh name="31_low__0_1" geometry={nodes['31_low__0_1'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="32_low_2" position={[-17.739, 0, -25.417]} rotation={[-Math.PI, -0.199, -1.571]} scale={[1, 0.878, 2.27]}>
                    <group name="Object_533" position={[-3.197, -6.692, -1.262]}>
                      <mesh name="32_low__0_2" geometry={nodes['32_low__0_2'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="31_low_2" position={[-17.739, 0, -25.417]} rotation={[-Math.PI, -0.199, -1.571]} scale={[1, 0.722, 2.27]}>
                    <group name="Object_536" position={[-3.197, -8.143, -1.254]}>
                      <mesh name="31_low__0_2" geometry={nodes['31_low__0_2'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="32_low_3" position={[-20.664, 0, -24.828]} rotation={[-Math.PI, -0.199, -1.571]} scale={[1, 0.878, 2.27]}>
                    <group name="Object_539" position={[-3.197, -6.692, -1.262]}>
                      <mesh name="32_low__0_3" geometry={nodes['32_low__0_3'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="31_low_3" position={[-20.664, 0, -24.828]} rotation={[-Math.PI, -0.199, -1.571]} scale={[1, 0.722, 2.27]}>
                    <group name="Object_542" position={[-3.197, -8.143, -1.254]}>
                      <mesh name="31_low__0_3" geometry={nodes['31_low__0_3'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="32_low_4" position={[-23.589, 0, -24.238]} rotation={[-Math.PI, -0.199, -1.571]} scale={[1, 0.878, 2.27]}>
                    <group name="Object_545" position={[-3.197, -6.692, -1.262]}>
                      <mesh name="32_low__0_4" geometry={nodes['32_low__0_4'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="31_low_4" position={[-23.589, 0, -24.238]} rotation={[-Math.PI, -0.199, -1.571]} scale={[1, 0.722, 2.27]}>
                    <group name="Object_548" position={[-3.197, -8.143, -1.254]}>
                      <mesh name="31_low__0_4" geometry={nodes['31_low__0_4'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="33_low" position={[-23.589, 0, -24.238]} rotation={[-Math.PI, -0.17, 0]} scale={[1.175, 0.44, 1]}>
                    <group name="Object_551" position={[0, 0, -1.481]}>
                      <mesh name="33_low__0" geometry={nodes['33_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="35_low" position={[-23.595, 0, -24.287]} rotation={[-Math.PI / 2, 0, -2.749]}>
                    <group name="Object_554" position={[4.809, -1.465, -1.35]}>
                      <mesh name="35_low__0" geometry={nodes['35_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="36_low" position={[-23.595, 0, -24.287]} rotation={[-Math.PI / 2, 0, -2.749]}>
                    <group name="Object_557" position={[4.809, -1.465, -1.35]}>
                      <mesh name="36_low__0" geometry={nodes['36_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="30_low" position={[-23.574, 0, -24.416]} rotation={[Math.PI, -0.199, -Math.PI / 2]} scale={[1.823, 1, 1]}>
                    <group name="Object_560" position={[0, 0, -2.485]}>
                      <mesh name="30_low__0" geometry={nodes['30_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="182_low" position={[-47.457, -2.765, -25.035]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh name="182_low__0" geometry={nodes['182_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="17_low" position={[-39.209, -1.812, -30.325]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1.674]}>
                    <group name="Object_565" position={[0, 0, -1.142]}>
                      <mesh name="17_low__0" geometry={nodes['17_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="26_low" position={[-33.246, -2.469, -25.098]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh name="26_low__0" geometry={nodes['26_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="25_low" position={[-35.777, -7.922, -26.135]}>
                    <mesh name="25_low__0" geometry={nodes['25_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="24_low" position={[-38.684, -7.922, -26.654]}>
                    <mesh name="24_low__0" geometry={nodes['24_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="13_low" position={[33.489, -5.415, 14.582]}>
                    <mesh name="13_low__0" geometry={nodes['13_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="108_low" position={[13.213, -11.897, -13.934]} rotation={[2.014, Math.PI / 2, 0]} scale={[1.431, 1.431, 1]}>
                    <mesh name="108_low__0" geometry={nodes['108_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="10_low" position={[13.33, -4.45, 12.086]} rotation={[2.269, 0, 0]}>
                    <mesh name="10_low__0" geometry={nodes['10_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="105_low" position={[10.233, -10.663, -16.535]} rotation={[-1.128, Math.PI / 2, 0]} scale={[0.867, 0.867, 0.629]}>
                    <group name="Object_580" position={[0, -1.545, 6.061]}>
                      <mesh name="105_low__0" geometry={nodes['105_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="15_low" position={[34.992, -2.449, 9.818]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh name="15_low__0" geometry={nodes['15_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="207_low" position={[22.54, 0, -30.716]} rotation={[-Math.PI / 2, 0, -0.327]}>
                    <group name="Object_585" position={[-37.878, -11.067, 0.8]}>
                      <mesh name="207_low__0" geometry={nodes['207_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="205_low" position={[-4.833, 0, -26.593]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="Object_588" position={[-7.346, -1.321, 0.74]}>
                      <mesh name="205_low__0" geometry={nodes['205_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="13_low_1" position={[17.865, 0, -29.066]} rotation={[2.417, 0.249, 0.215]}>
                    <group name="Object_591" position={[-14.245, 3.541, -4.181]}>
                      <mesh name="13_low__0_1" geometry={nodes['13_low__0_1'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="206_low" position={[3.226, 0, -30.261]} rotation={[-Math.PI / 2, 0, 0]} scale={1.155}>
                    <group name="Object_594" position={[-20.625, -4.162, 0.777]}>
                      <mesh name="206_low__0" geometry={nodes['206_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="209_low" position={[-1.703, -6.345, -24.188]} rotation={[1.631, 0.006, 0]} scale={0.633}>
                    <group name="Object_597" position={[6.383, 1.53, -1.028]}>
                      <mesh name="209_low__0" geometry={nodes['209_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="210_low" position={[-0.519, -10.246, -26.219]} rotation={[-1.59, -0.613, 1.299]}>
                    <mesh name="210_low__0" geometry={nodes['210_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="208_low" position={[4.665, -5.324, -22.556]} rotation={[1.631, 0.006, 0]}>
                    <mesh name="208_low__0" geometry={nodes['208_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="111_low" position={[13.213, -11.897, -13.934]} rotation={[-2.331, -0.006, -3.103]}>
                    <group name="Object_604" position={[-1.395, 0.016, -0.888]}>
                      <mesh name="111_low__0" geometry={nodes['111_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="111_low_1" position={[13.213, -11.897, -13.934]} rotation={[-1.808, -0.006, -3.103]}>
                    <group name="Object_607" position={[-1.395, 0.016, -0.888]}>
                      <mesh name="111_low__0_1" geometry={nodes['111_low__0_1'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="111_low_2" position={[13.213, -11.897, -13.934]} rotation={[-1.284, -0.006, -3.103]}>
                    <group name="Object_610" position={[-1.395, 0.016, -0.888]}>
                      <mesh name="111_low__0_2" geometry={nodes['111_low__0_2'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="111_low_3" position={[13.213, -11.897, -13.934]} rotation={[-0.76, -0.006, -3.103]}>
                    <group name="Object_613" position={[-1.395, 0.016, -0.888]}>
                      <mesh name="111_low__0_3" geometry={nodes['111_low__0_3'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="111_low_4" position={[13.213, -11.897, -13.934]} rotation={[-0.237, -0.006, -3.103]}>
                    <group name="Object_616" position={[-1.395, 0.016, -0.888]}>
                      <mesh name="111_low__0_4" geometry={nodes['111_low__0_4'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="111_low_5" position={[13.213, -11.897, -13.934]} rotation={[0.287, -0.006, -3.103]}>
                    <group name="Object_619" position={[-1.395, 0.016, -0.888]}>
                      <mesh name="111_low__0_5" geometry={nodes['111_low__0_5'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="111_low_6" position={[13.213, -11.897, -13.934]} rotation={[0.81, -0.006, -3.103]}>
                    <group name="Object_622" position={[-1.395, 0.016, -0.888]}>
                      <mesh name="111_low__0_6" geometry={nodes['111_low__0_6'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="111_low_7" position={[13.213, -11.897, -13.934]} rotation={[1.334, -0.006, -3.103]}>
                    <group name="Object_625" position={[-1.395, 0.016, -0.888]}>
                      <mesh name="111_low__0_7" geometry={nodes['111_low__0_7'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="111_low_8" position={[13.213, -11.897, -13.934]} rotation={[1.858, -0.006, -3.103]}>
                    <group name="Object_628" position={[-1.395, 0.016, -0.888]}>
                      <mesh name="111_low__0_8" geometry={nodes['111_low__0_8'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="111_low_9" position={[13.213, -11.897, -13.934]} rotation={[2.381, -0.006, -3.103]}>
                    <group name="Object_631" position={[-1.395, 0.016, -0.888]}>
                      <mesh name="111_low__0_9" geometry={nodes['111_low__0_9'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="111_low_10" position={[13.213, -11.897, -13.934]} rotation={[2.905, -0.006, -3.103]}>
                    <group name="Object_634" position={[-1.395, 0.016, -0.888]}>
                      <mesh name="111_low__0_10" geometry={nodes['111_low__0_10'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="43_low" position={[14.461, -11.897, -13.934]} rotation={[-2.698, Math.PI / 2, 0]} scale={[0.495, 0.495, 1.019]}>
                    <group name="Object_637" position={[0, 0, -0.531]}>
                      <mesh name="43_low__0" geometry={nodes['43_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="230_low" position={[2.298, -10.669, -16.523]} rotation={[-1.128, 1.571, 0]}>
                    <group name="Object_640" position={[-0.001, -1.532, 9.038]}>
                      <mesh name="230_low__0" geometry={nodes['230_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="100_low" position={[5.624, -6.754, -8]} rotation={[1.576, -0.001, 0]} scale={[1.88, 1, 1]}>
                    <group name="Object_643" position={[0.001, -0.224, -1.159]}>
                      <mesh name="100_low__0" geometry={nodes['100_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="101_low" position={[5.619, -7.921, -9.587]} rotation={[1.576, -0.001, 0]} scale={[1.88, 1, 1]}>
                    <group name="Object_646" position={[-0.003, 1.351, -3.816]}>
                      <mesh name="101_low__0" geometry={nodes['101_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="103_low" position={[5.626, -5.833, -18.058]} rotation={[1.566, -0.002, 3.142]}>
                    <group name="Object_649" position={[-0.003, 1.351, -3.816]}>
                      <mesh name="103_low__0" geometry={nodes['103_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="102_low" position={[5.624, -4.877, -19.684]} rotation={[1.566, -0.002, 3.142]}>
                    <group name="Object_652" position={[0.001, -0.224, -1.159]}>
                      <mesh name="102_low__0" geometry={nodes['102_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="104_low" position={[5.679, -10.762, -16.535]} rotation={[-1.128, 1.571, 0]}>
                    <group name="Object_655" position={[0, -1.545, 6.061]}>
                      <mesh name="104_low__0" geometry={nodes['104_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="104_low_1" position={[5.709, -10.663, -16.535]} rotation={[-1.128, 1.571, 0]}>
                    <group name="Object_658" position={[0, -1.545, 6.061]}>
                      <mesh name="104_low__0_1" geometry={nodes['104_low__0_1'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="161_low" position={[2.386, -10.669, -16.523]} rotation={[-1.128, Math.PI / 2, 0]}>
                    <group name="Object_661" position={[-0.001, -1.532, 9.038]}>
                      <mesh name="161_low__0" geometry={nodes['161_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="111_low_11" position={[13.213, -11.897, -13.934]} rotation={[-2.855, -0.006, -3.103]}>
                    <group name="Object_664" position={[-1.395, 0.016, -0.888]}>
                      <mesh name="111_low__0_11" geometry={nodes['111_low__0_11'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="106_low" position={[13.299, -10.663, -16.535]} rotation={[-1.128, Math.PI / 2, 0]}>
                    <group name="Object_667" position={[0, -1.545, -1.529]}>
                      <mesh name="106_low__0" geometry={nodes['106_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="11_low" position={[32.951, -5.342, 14.358]} rotation={[2.269, 0, 0]} scale={1.155}>
                    <group name="Object_670" position={[-19.621, -2.314, 0.777]}>
                      <mesh name="11_low__0" geometry={nodes['11_low__0'].geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                  <group name="12_low" position={[13.752, -4.466, 12.086]} rotation={[2.269, 0, 0]}>
                    <mesh name="12_low__0" geometry={nodes['12_low__0'].geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Particle_View_001" rotation={[-Math.PI / 2, 0, 0]} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
export default Drone3;
useGLTF.preload('/drone3.gltf')
