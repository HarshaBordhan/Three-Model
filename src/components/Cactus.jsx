import { MeshWobbleMaterial, useGLTF } from "@react-three/drei"

export default function Cactus() {
const {nodes, materials} = useGLTF("/level-react-draco.glb")
// console.log(nodes, materials)

  return(
    <mesh geometry={nodes.Cactus.geometry} material={materials.Cactus} position={[-0.425, 0.51, -0.625]} 
    rotation={[Math.PI / 2, 0, 0]}
    >
      <MeshWobbleMaterial factor={0.4} map={materials.Cactus.map}/>
    </mesh>
    
  )
}