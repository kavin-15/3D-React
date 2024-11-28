This repository showcases a fully interactive 3D web application created with React and @react-three/fiber, highlighting advanced rendering and animation techniques. The centerpiece is a realistic MacBook Pro 3D model that responds to user interactions, scroll events, and dynamic animations.

**Key Features**
  1. 3D Model Integration
      MacBook Pro model imported via useGLTF.
      Custom textures applied to specific parts of the model using useTexture for added realism.
      Dynamic material properties, such as emissive intensity, roughness, and metalness, customized for a polished look.
  2. Scroll-Based Animation
     Smooth scroll animations enabled by useScroll and ScrollControls.
     The MacBook Pro screen rotation dynamically adjusts based on the user’s scroll position for an engaging experience.
  3. Lighting and Environment
     Realistic environmental lighting achieved using HDRI textures integrated with the Environment component from @react-three/drei.
     High-quality visual effects for a lifelike scene rendering.
  4. Responsive Web Design
     Fully responsive layout with a customized navbar featuring interactive links.
     Center-aligned masked text effect for enhanced aesthetic appeal using CSS techniques, including blur effects and layered text styles.
  5. Code Modularity and Clarity
     Organized structure with reusable components like MacContainer for handling model-specific logic and rendering.
     Clean separation of concerns for better readability and scalability.
     
**Tech Stack**
  React: Core framework for building the application.
  @react-three/fiber: Renderer for creating and animating 3D scenes.
  @react-three/drei: Utility library for simplifying 3D development.
  Three.js: Underlying 3D rendering engine.
  CSS: Custom styling for the user interface.

  
**Getting Started**
  1. Clone the repository:
      git clone https://github.com/kavin-15/3D-React.git
      cd 3D-React
  2. Install dependencies:
      npm install
  3. Start the development server:
      npm start

Preview
The application creates an engaging, immersive 3D experience showcasing the MacBook Pro in a modern, responsive web layout. Explore how React and Three.js come together to build high-quality visualizations for the web.

Feel free to explore, modify, or contribute to enhance this project further!
