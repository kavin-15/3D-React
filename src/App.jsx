import React from 'react'
import { Canvas } from '@react-three/fiber'
import "./style.css"
import { OrbitControls } from '@react-three/drei'
import MacContainer from './MacContainer'

function App() {
  return (
    <Canvas camera={{fov: 20}}>
      <OrbitControls/>
      <MacContainer/>
      </Canvas>
  )
}

export default App