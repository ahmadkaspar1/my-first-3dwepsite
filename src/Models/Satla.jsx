/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 satla.gltf 
Author: ilarioseb (https://sketchfab.com/ilarioseb)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/satellite-402afb3459db47658c39875c38a6ff2a
Title: Satellite
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export  default function Satla(props) {
  const { nodes, materials } = useGLTF('/satla.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.satellite_satellite_0.geometry} material={materials.satellite} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/satla.gltf')
