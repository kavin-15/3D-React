import React from 'react'
import { Canvas } from '@react-three/fiber'
import "./style.css"
import { Environment, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

function App() {
  return (
    <div className='w-full h-screen relative'>
      <div className='navbar line flex gap-40 pt-10 pb-3 absolute top-10 left-1/2 -translate-x-1/2 z-20'>
        {["iPhone", "iPad", "Mac", "Airpods", "Accessories", "Support"].map((item, index) => (
          <a
            href="#"
            key={index}
            className="text-white font-[400] text-sm hover:underline"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="absolute text-white top-40 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display'] z-10">
        <h2 className='text-7xl tracking-tight'>MacBook Pro</h2>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']} />
        <ScrollControls pages={2} damping={6}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App
