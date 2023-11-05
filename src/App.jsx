// import { Float, OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import { Suspense } from 'react'
// import './App.css'
// import Scene from './Scene'

// const App = () => {
//   return(
//     <>
//      {/* <h3>Here's the keyboard</h3> */}
//     <Suspense fallback={null}>
//     <Canvas shadows flat linear>
//       <color attach="background" args={["#3b567f"]}/>
//       <Float
//       speed={3}
//       rotationIntensity={0.4}
//       floatIntensity={1}
//       floatingRange={[1, 20]}
//       >
//        <Scene/>
//       </Float>

//       <OrbitControls/>
//     </Canvas>
//     </Suspense>
//     </>
//   )
// }

// export default App


// ////////////////////////////////
// // Three.js Level - 1
// import { OrbitControls, PresentationControls } from "@react-three/drei"
// import { Canvas } from "@react-three/fiber"
// import Cactus from "./components/Cactus"
// import Camera from "./components/Camera"
// import Icon from "./components/Icon"
// import Level from "./components/Level"
// import Pyramid from "./components/Pyramid"
// import Sudo from './components/Sudo'

// const App = () => {
//   return(
//     <Canvas flat dpr={[1, 2]} camera={{fov: 25, position: [0, 0, 8]}}>
//       <color attach="background" args={['#e0b7ff']}/>
//         <ambientLight/>
//         <PresentationControls snap global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
//           <group position-y={-0.75} dispose={null}>
//            <Level/>
//            <Sudo/>
//            <Camera/>
//            <Cactus/>
//            <Pyramid/>
//            <Icon/>
//           </group>
//         </PresentationControls>
//         {/* <OrbitControls/> */}
//     </Canvas>
//   )
// }

// export default App


////////////////////////////////
// Short Keyboard
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ShortKey from "./ShortKey";

const App = () => {
  return(
      <Canvas shadows linear flat>
        <color attach="background" args={["#0F0359"]}/>
        <ShortKey/>
        <OrbitControls/>
      </Canvas>
  )
}

export default App;


// ////////////////////////////////
// // Relax
// import { Suspense, useRef} from "react";
// import  Scene  from "./components/relax/Scene";
// import { Canvas } from "@react-three/fiber";
// import {Overlay} from './components/relax/Overlay'

// export default function App() {
// const scroll = useRef(0)

//   return(
//     <>
//     <Canvas shadows flat linear>
//       <Suspense fallback={null}>
//         <Scene scroll={scroll}/>
//       </Suspense>
//     </Canvas>
//     <Overlay scroll={scroll}/>
//     </>
//   )
// }