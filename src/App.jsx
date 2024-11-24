import React from 'react'
import { Canvas } from '@react-three/fiber'
import "./style.css"
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

function App() {
  return (
    <Canvas camera={{fov: 50, positon:[0, -80, 120]}}>
      <OrbitControls/>
      <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']}/>
      <ScrollControls pages={2} damping={6}>
      <MacContainer/>
      </ScrollControls>
      </Canvas>
  )
}

export default App