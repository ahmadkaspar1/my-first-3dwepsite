/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 board.gltf 
*/

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Board(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/board.gltf')
  const { actions } = useAnimations(animations, group)
  React.useEffect(() => {
    if (actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]].reset().fadeIn(0.1).play();
    }
  }, [actions]);




  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="a1daeed44fe14376a0fc6934aef3ab4dfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode">
              <group name="Nube001" position={[677.233, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={58.204} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model001" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="4e4541ff511d406b8a3dfc7144802368fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode001">
                <group name="TV_ALL">
                  <group name="BG" position={[0, -2.5, 1.5]} scale={1.5}>
                    <mesh name="BG_BG_MTL_0" geometry={nodes.BG_BG_MTL_0.geometry} material={materials.BG_MTL} scale={[0.91, 1, 1]} />
                  </group>
                  <group name="Cube001">
                    <group name="pCube12" position={[0, -1, 0]}>
                      <mesh name="pCube12_TV_MTL_0" geometry={nodes.pCube12_TV_MTL_0.geometry} material={materials.TV_MTL} />
                    </group>
                    <group name="pCube13" position={[0, -1, 0]}>
                      <mesh name="pCube13_TV_MTL_0" geometry={nodes.pCube13_TV_MTL_0.geometry} material={materials.TV_MTL} />
                    </group>
                    <group name="pCube14" position={[0, -1, 0]}>
                      <mesh name="pCube14_TV_MTL_0" geometry={nodes.pCube14_TV_MTL_0.geometry} material={materials.TV_MTL} />
                    </group>
                    <group name="pCube15" position={[0, -1, 0]}>
                      <mesh name="pCube15_TV_MTL_0" geometry={nodes.pCube15_TV_MTL_0.geometry} material={materials.TV_MTL} />
                    </group>
                    <group name="pCube16" position={[0, -1, 0]} scale={[1, 0.274, 1]}>
                      <mesh name="pCube16_TV_MTL_0" geometry={nodes.pCube16_TV_MTL_0.geometry} material={materials.TV_MTL} />
                    </group>
                    <group name="pCube17" position={[0, -1, 0]} scale={[1, 0.274, 1]}>
                      <mesh name="pCube17_TV_MTL_0" geometry={nodes.pCube17_TV_MTL_0.geometry} material={materials.TV_MTL} />
                    </group>
                    <group name="pCube18" position={[0, -1, 0]} scale={[1, 0.274, 1]}>
                      <mesh name="pCube18_TV_MTL_0" geometry={nodes.pCube18_TV_MTL_0.geometry} material={materials.TV_MTL} />
                    </group>
                  </group>
                  <group name="Dec_Down">
                    <group name="cone001">
                      <group name="pCube10001" position={[-8.381, -0.53, 0]} scale={0}>
                        <mesh name="pCube10_TV_MTL_0001" geometry={nodes.pCube10_TV_MTL_0001.geometry} material={materials.TV_MTL} position={[524288, 0, 0]} scale={0.999} />
                      </group>
                      <group name="pCube11001" position={[-7.742, -0.53, 0]} scale={0}>
                        <mesh name="pCube11_TV_MTL_0001" geometry={nodes.pCube11_TV_MTL_0001.geometry} material={materials.TV_MTL} scale={0.999} />
                      </group>
                      <group name="pCube9001" position={[-9, -0.53, 0]} scale={0}>
                        <mesh name="pCube9_TV_MTL_0001" geometry={nodes.pCube9_TV_MTL_0001.geometry} material={materials.TV_MTL} position={[1048576, 0, 0]} scale={0.999} />
                      </group>
                    </group>
                    <group name="cube001">
                      <group name="pCube4001" position={[-10, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh name="pCube4_TV_MTL_0001" geometry={nodes.pCube4_TV_MTL_0001.geometry} material={materials.TV_MTL} />
                      </group>
                      <group name="pCube5001" position={[-9, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh name="pCube5_TV_MTL_0001" geometry={nodes.pCube5_TV_MTL_0001.geometry} material={materials.TV_MTL} />
                      </group>
                      <group name="pCube6001" position={[-8, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh name="pCube6_TV_MTL_0001" geometry={nodes.pCube6_TV_MTL_0001.geometry} material={materials.TV_MTL} />
                      </group>
                      <group name="pCube7001" position={[-7, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh name="pCube7_TV_MTL_0001" geometry={nodes.pCube7_TV_MTL_0001.geometry} material={materials.TV_MTL} />
                      </group>
                      <group name="pCube8001" position={[-6, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh name="pCube8_TV_MTL_0001" geometry={nodes.pCube8_TV_MTL_0001.geometry} material={materials.TV_MTL} />
                      </group>
                    </group>
                  </group>
                  <group name="Dec_Top" position={[0, 12, 0]} rotation={[0, 0, Math.PI]}>
                    <group name="cone">
                      <group name="pCube10" position={[-8.381, -0.53, 0]} scale={0}>
                        <mesh name="pCube10_TV_MTL_0" geometry={nodes.pCube10_TV_MTL_0.geometry} material={materials.TV_MTL} position={[524288, -1048576, 0]} scale={0.999} />
                      </group>
                      <group name="pCube11" position={[-7.742, -0.53, 0]} scale={0}>
                        <mesh name="pCube11_TV_MTL_0" geometry={nodes.pCube11_TV_MTL_0.geometry} material={materials.TV_MTL} position={[0.002, -1048576, 0]} scale={0.999} />
                      </group>
                      <group name="pCube9" position={[-9, -0.53, 0]} scale={0}>
                        <mesh name="pCube9_TV_MTL_0" geometry={nodes.pCube9_TV_MTL_0.geometry} material={materials.TV_MTL} position={[1048576, -1048576, 0]} scale={0.999} />
                      </group>
                    </group>
                    <group name="cube">
                      <group name="pCube4" position={[-10, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh name="pCube4_TV_MTL_0" geometry={nodes.pCube4_TV_MTL_0.geometry} material={materials.TV_MTL} />
                      </group>
                      <group name="pCube5" position={[-9, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh name="pCube5_TV_MTL_0" geometry={nodes.pCube5_TV_MTL_0.geometry} material={materials.TV_MTL} />
                      </group>
                      <group name="pCube6" position={[-8, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh name="pCube6_TV_MTL_0" geometry={nodes.pCube6_TV_MTL_0.geometry} material={materials.TV_MTL} />
                      </group>
                      <group name="pCube7" position={[-7, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh name="pCube7_TV_MTL_0" geometry={nodes.pCube7_TV_MTL_0.geometry} material={materials.TV_MTL} />
                      </group>
                      <group name="pCube8" position={[-6, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh name="pCube8_TV_MTL_0" geometry={nodes.pCube8_TV_MTL_0.geometry} material={materials.TV_MTL} />
                      </group>
                    </group>
                  </group>
                  <group name="monter">
                    <group name="pCube19" position={[-6.995, 10.813, 0]} scale={[1, 1, 0.1]}>
                      <mesh name="pCube19_monter_MTL_0" geometry={nodes.pCube19_monter_MTL_0.geometry} material={materials.monter_MTL} />
                    </group>
                    <group name="pCube20" position={[7, 1.176, 0]} rotation={[0, 0, Math.PI]} scale={[1, 1, 0.1]}>
                      <mesh name="pCube20_monter_MTL_0" geometry={nodes.pCube20_monter_MTL_0.geometry} material={materials.monter_MTL} />
                    </group>
                    <group name="pPlane1" position={[0, 6, 0.05]} rotation={[Math.PI / 2, 0, 0]} scale={[15.7, 1, 8.7]} />
                  </group>
                  <group name="TV">
                    <group name="pCube1" position={[0, 6, 0]} scale={[16, 9, 0.2]}>
                      <mesh name="pCube1_TV_MTL_0" geometry={nodes.pCube1_TV_MTL_0.geometry} material={materials.TV_MTL} />
                    </group>
                    <group name="pCube2" position={[0, 7, 0]} scale={[16, 9, 0.2]}>
                      <mesh name="pCube2_TV_MTL_0" geometry={nodes.pCube2_TV_MTL_0.geometry} material={materials.TV_MTL} />
                    </group>
                    <group name="pCube3" position={[0, 5, 0]} rotation={[0, 0, Math.PI]} scale={[16, 9, 0.2]}>
                      <mesh name="pCube3_TV_MTL_0" geometry={nodes.pCube3_TV_MTL_0.geometry} material={materials.TV_MTL} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <mesh name="sa" geometry={nodes.sa.geometry} material={materials['Material.002']} position={[-0.07, 0.085, 0.001]} rotation={[1.588, 0, 0]} scale={[0.019, 1.04, 0.02]} />
        <mesh name="Object" geometry={nodes.Object.geometry} material={materials['Material.002']} position={[-0.063, 0.06, 0.001]} rotation={[1.588, 0, 0]} scale={[0.014, 1.03, 0.013]} />
        <mesh name="Object001" geometry={nodes.Object001.geometry} material={materials['Material.002']} position={[-0.063, 0.106, 0.001]} rotation={[1.588, 0, 0]} scale={[0.012, 1.03, 0.007]} />
        <group name="Object002" position={[-0.011, 0.01, 0.001]} rotation={[1.588, 0, 0]} scale={[0.008, 1.03, 0.007]}>
          <mesh name="Text003" geometry={nodes.Text003.geometry} material={materials['Material.002']} />
          <mesh name="Text003_1" geometry={nodes.Text003_1.geometry} material={materials.monter_MTL} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/board.gltf')
