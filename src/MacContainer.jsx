import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React from 'react'
import * as THREE from "three";


function MacContainer() {
    let model = useGLTF("./mac.glb");
    let meshes = {};
    model.scene.traverse((e)=>{
            meshes[e.name]=e;
    } );
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    let data = useScroll();
    useFrame((state,delta)=>{
        meshes.screen.rotation.x=THREE.MathUtils.degToRad(180-data.offset*90);
    })
  return( 
    <group position={[0,-10,-40]}>
        <primitive object={model.scene}/>
    </group>    
  )
}

export default MacContainer