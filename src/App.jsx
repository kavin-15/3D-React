import React from 'react'
import { Canvas } from '@react-three/fiber'
import "./style.css"
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

function App() {
  return (
    <div className='w-full h-screen'>
      <div className="absolute text-white top-32 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display']">
        <h2 className='text-7xl tracking tighter'>MacBook Pro</h2>
      </div>
      <Canvas camera={{fov: 12, position:[0, -10, 220]}}>
      <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']}/>
      <ScrollControls pages={2} damping={6}>
      <MacContainer/>
      </ScrollControls>
      </Canvas>
    </div>
    
  )
}

export default App