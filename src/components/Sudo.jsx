import { useSpring, a } from "@react-spring/three"
import { useGLTF } from "@react-three/drei"
import { useEffect } from "react"
import * as THREE from 'three'

export default function Sudo() {
const {nodes} = useGLTF("/level-react-draco.glb")

const [spring, api] = useSpring(() =>({rotation: [Math.PI / 2, 0, 0], config: {friction: 40}}), [])

useEffect(() => {
  let timeout
  const wandar = () => {
    api.start({rotation: [Math.PI / 2 + THREE.MathUtils.randFloatSpread(2) * 0.3, 0, 0.29 + THREE.MathUtils.randFloatSpread(2) * 0.2]})
    timeout = setTimeout(wandar, (1 + Math.random() * 3) * 1000)
  }
  wandar()
  return () => clearTimeout(timeout)
},[])

  return(
    <>
     <mesh geometry={nodes.Sudo.geometry} material={nodes.Sudo.material} position={[0.68, 0.33, -0.67]} rotation={[Math.PI / 2, 0, 0.29]} />   
     <a.mesh geometry={nodes.SudoHead.geometry} material={nodes.SudoHead.material} position={[0.68, 0.33, -0.67]} rotation={[Math.PI / 2, 0, 0]} {...spring}/>   
    </>
  )
}