/*
  Auto-generated by Spline
*/

import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'
import { useEffect } from 'react'

const buttonDelta = 52.5

const btnClick = (event, delta) => {
  console.log(event)
  const group = event.object.parent;
  group.position.y += delta 
}

export default function ShortKey({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/YQGG3heKZGrS9yGQ/scene.splinecode')

  console.log(nodes, materials)

  useEffect(() => {
    
  }, [])
  return (
    <>
      <color attach="background" args={['#e5e8ee']} />
      <group {...props} dispose={null}>
        <mesh
          name="Rectangle 2"
          geometry={nodes['Rectangle 2'].geometry}
          material={materials['Rectangle 2 Material']}
          castShadow
          receiveShadow
          position={[380.01, -251.32, 379.52]}
          rotation={[-1.58, 0, 0]}
          scale={[1, 0.97, 1]}
        />
        <mesh
          name="Rectangle"
          geometry={nodes.Rectangle.geometry}
          material={materials['Rectangle Material']}
          castShadow
          receiveShadow
          position={[380, -231.35, 380]}
          rotation={[-1.58, 0, 0]}
          scale={[1, 0.97, 1]}
        />
        <mesh
          name="Space"
          geometry={nodes.Space.geometry}
          material={materials['Key Space']}
          castShadow
          receiveShadow
          position={[380, -52.5, 752]}
          rotation={[-1.59, 0.01, 1.57]}
          scale={[2.05, 1.55, 0.99]}
        />
        <group name="Enter" position={[758, -52.5, 368]} rotation={[-0.01, 0, 0]} onPointerOver={(e) => btnClick(e, -buttonDelta)} onPointerOut={(e) => { btnClick(e, buttonDelta)
        }}>
          <mesh
            name="TextEnter"
            geometry={nodes.TextEnter.geometry}
            material={materials['Key ']}
            castShadow
            receiveShadow
            position={[2.97, 121.62, -49.32]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
          <mesh
            name="Cube 2"
            geometry={nodes['Cube 2'].geometry}
            material={materials['Key Orange']}
            castShadow
            receiveShadow
            position={[0.05, 49.14, 0]}
            rotation={[0, 0, 0]}
          />
        </group>
        <group name="Key4" position={[380, -52.5, 368]} rotation={[-0.01, 0, 0]}>
          <mesh
            name="Text4"
            geometry={nodes.Text4.geometry}
            material={materials['Text4 Material']}
            castShadow
            receiveShadow
            position={[-40.89, 123.64, -55.41]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
          <mesh
            name="Cube 21"
            geometry={nodes['Cube 21'].geometry}
            material={materials['Key ']}
            castShadow
            receiveShadow
            position={[0.05, 49.14, 0]}
            rotation={[0, 0, 0]}
          />
        </group>
        <group name="Key3" position={[2.6, -52.5, 368]} rotation={[-0.01, 0, 0]}>
          <mesh
            name="Text3"
            geometry={nodes.Text3.geometry}
            material={materials['Text3 Material']}
            castShadow
            receiveShadow
            position={[-43.89, 122.62, -55.41]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
          <mesh
            name="Cube 22"
            geometry={nodes['Cube 22'].geometry}
            material={materials['Key ']}
            castShadow
            receiveShadow
            position={[0.05, 49.14, 0]}
            rotation={[0, 0, 0]}
          />
        </group>
        <group name="Delete" position={[758, -52.5, -1.46]}>
          <mesh
            name="TextDelete"
            geometry={nodes.TextDelete.geometry}
            material={materials['TextDelete Material']}
            castShadow
            receiveShadow
            position={[0.67, 123.54, -21.77]}
            rotation={[-1.57, 0, 0]}
          />
          <mesh
            name="Cube 23"
            geometry={nodes['Cube 23'].geometry}
            material={materials['Key ']}
            castShadow
            receiveShadow
            position={[0.05, 49.14, 0]}
            rotation={[0, 0, 0]}
          />
        </group>
        <group name="Key2" position={[380, -52.5, -1.46]}>
          <mesh
            name="Text2"
            geometry={nodes.Text2.geometry}
            material={materials['Text2 Material']}
            castShadow
            receiveShadow
            position={[-40.89, 123.64, -55.41]}
            rotation={[-1.57, 0, 0]}
          />
          <mesh
            name="Cube 24"
            geometry={nodes['Cube 24'].geometry}
            material={materials['Key ']}
            castShadow
            receiveShadow
            position={[0.05, 49.14, 0]}
            rotation={[0, 0, 0]}
          />
        </group>
        <group name="Key1" position={[2.6, -52.55, -1.46]}>
          <mesh
            name="Text1"
            geometry={nodes.Text1.geometry}
            material={materials['Text1 Material']}
            castShadow
            receiveShadow
            position={[-40.89, 123.64, -55.41]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
          <mesh
            name="Cube 25"
            geometry={nodes['Cube 25'].geometry}
            material={materials['Key ']}
            castShadow
            receiveShadow
            position={[0.05, 49.14, 0]}
            rotation={[0, 0, 0]}
          />
        </group>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          position={[-674.88, 655.74, -97.26]}
          rotation={[0, 0, 0.05]}
          scale={[1, 1, 4.33]}
        />
        <OrthographicCamera
          name="1"
          makeDefault={true}
          zoom={0.36}
          far={100000}
          near={-100000}
          position={[-218.92, 2549.18, 4042.07]}
          rotation={[-0.6, -0.09, -0.06]}
          scale={1}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
  )
}

