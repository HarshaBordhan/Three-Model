import { PerspectiveCamera, Float, Clone } from "@react-three/drei";
import useSpline from "@splinetool/r3f-spline";
import * as THREE from 'three'
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useLerpedMouse } from "./hooks";

const cameraTargetPosition = new THREE.Vector3(0, -10, 211)

export default function Scene({scroll, ...props}) {
  const {nodes, materials} = useSpline("https://prod.spline.design/HwAUoybfBaBCLzwO/scene.spline")
console.log(nodes, materials)

const camera = useRef()
const sceneContent = useRef()
const mouse = useLerpedMouse()
const size = useThree((state) => state.size)
const isMobile = size.width < 768

const lerpedScroll = useRef(0)

useFrame(() => {
    // lerp the scroll
    lerpedScroll.current += (scroll.current - lerpedScroll.current) * 0.08;

    // animate the camera
    const zStart = isMobile ? 2000 : 1100;
    const zEnd = isMobile ? -300 : -40;
    const xMin = isMobile ? -600 : -800;
    const xMax = isMobile ? -200 : 0;
    const targetX = isMobile ? -50 : -300;
    const yBase = isMobile ? 50 : 200;
    const yRange = isMobile ? 100 : 200;
    const t = lerpedScroll.current;
    const arc = Math.sin(t * Math.PI);
    camera.current.position.set(
      THREE.MathUtils.lerp(xMax, xMin, arc),
      arc * yRange + yBase,
      THREE.MathUtils.lerp(zStart, zEnd, t)
    );
    cameraTargetPosition.x = THREE.MathUtils.lerp(0, targetX, arc);
    camera.current.lookAt(cameraTargetPosition);

    // rotate the model on mousehover
    sceneContent.current.position.x = (1 - t) * 150;
    sceneContent.current.rotation.y = mouse.current.x * Math.PI * 0.03;
  });

  return (
   <>
      <color attach="background" args={["#f5ded9"]} />
      <fog
        attach="fog"
        args={["#f5ded9", 
        isMobile ? 1800 : 1152.44, isMobile ? 3000 : 2000
      ]
      }
      />
      <group {...props} dispose={null}>
        <PerspectiveCamera
          name="Camera"
          ref={camera}
          makeDefault={true}
          far={8000}
          near={5}
          fov={45}
        />
        <group ref={sceneContent}>
          <group
            name="Group"
            position={[211.09, 110.65, 254.62]}
            rotation={[0.01, -0.29, -0.42]}
          >
            <mesh
              name="Sphere 4"
              geometry={nodes["Sphere 4"].geometry}
              material={materials["Sphere 4 Material"]}
              castShadow
              receiveShadow
              position={[11.62, 3.22, -2.26]}
              scale={0.9}
            />
            <mesh
              name="Sphere 3"
              geometry={nodes["Sphere 3"].geometry}
              material={materials["Sphere 3 Material"]}
              castShadow
              receiveShadow
              position={[0.33, 3.22, -2.26]}
              scale={0.9}
            />
            <mesh
              name="Sphere 2"
              geometry={nodes["Sphere 2"].geometry}
              material={materials["Sphere 2 Material"]}
              castShadow
              receiveShadow
              position={[-11.42, 3.22, -2.26]}
              scale={0.9}
            />
            <mesh
              name="Rectangle"
              geometry={nodes.Rectangle.geometry}
              material={materials["Rectangle Material"]}
              castShadow
              receiveShadow
              position={[-0.01, 1.49, -7.99]}
            />
          </group>
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials["Cube Material"]}
            castShadow
            receiveShadow
            position={[233.49, -281.02, -311.4]}
            rotation={[-Math.PI / 2, 0, Math.PI / 9]}
          />
          <mesh
            name="Sphere"
            geometry={nodes.Sphere.geometry}
            material={materials["Sphere Material"]}
            castShadow
            receiveShadow
            position={[-132.59, -262, -70.72]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <group name="icon" position={[51, 153.92, 37.16]}>
            <Float floatIntensity={3} speed={2}>
              <Clone object={nodes["Triangle"]} />
            </Float>
            <Float floatIntensity={3} speed={2}>
              <Clone object={nodes["Shape"]} />
            </Float>
            <Float floatIntensity={3} speed={2}>
              <Clone object={nodes["Cube 2"]} />
            </Float>
            <Float floatIntensity={3} speed={2}>
              <Clone object={nodes["Group 13"]} />
            </Float>
          </group>
          <group
            name="picture"
            position={[337.87, -189.84, -261.37]}
            rotation={[-0.17, 0.08, 0]}
          >
            <mesh
              name="Rectangle 21"
              geometry={nodes["Rectangle 21"].geometry}
              material={materials["Rectangle 21 Material"]}
              castShadow
              receiveShadow
              position={[-0.21, 0.99, 8.15]}
            />
            <mesh
              name="Triangle1"
              geometry={nodes.Triangle1.geometry}
              material={materials["Triangle1 Material"]}
              castShadow
              receiveShadow
              position={[12.57, -34.06, 10.05]}
              rotation={[0, 0, -Math.PI / 9]}
              scale={1.06}
            />
            <mesh
              name="Rectangle 22"
              geometry={nodes["Rectangle 22"].geometry}
              material={materials["Rectangle 22 Material"]}
              castShadow
              receiveShadow
              position={[1.27, 24.12, 9.08]}
              rotation={[0, 0, 0.87]}
            />
            <mesh
              name="Ellipse1"
              geometry={nodes.Ellipse1.geometry}
              material={materials["Ellipse1 Material"]}
              castShadow
              receiveShadow
              position={[-11.67, 28.21, 9.51]}
            />
            <mesh
              name="Cube 21"
              geometry={nodes["Cube 21"].geometry}
              material={materials["Cube 21 Material"]}
              castShadow
              receiveShadow
              rotation={[0, Math.PI / 2, 0]}
            />
          </group>
          <group name="desk-relation" position={[-300.24, -147.23, 107.43]}>
            <group name="plant" position={[-17.09, 78.24, -75.42]}>
              <mesh
                name="Cube 5"
                geometry={nodes["Cube 5"].geometry}
                material={materials["Cube 5 Material"]}
                castShadow
                receiveShadow
                position={[-9.04, 12.19, 0.73]}
                rotation={[-Math.PI, 0, 2.71]}
              />
              <mesh
                name="Cube 4"
                geometry={nodes["Cube 4"].geometry}
                material={materials["Cube 4 Material"]}
                castShadow
                receiveShadow
                position={[5.49, 46.53, -1.34]}
                rotation={[-0.05, 0.01, -0.13]}
              />
              <mesh
                name="Cube 3"
                geometry={nodes["Cube 3"].geometry}
                material={materials["Cube 3 Material"]}
                castShadow
                receiveShadow
                position={[7.82, 68.33, -2.54]}
                rotation={[0, 0, 0.05]}
              />
              <mesh
                name="Cube 22"
                geometry={nodes["Cube 22"].geometry}
                material={materials["Cube 22 Material"]}
                castShadow
                receiveShadow
                position={[-1.09, -85.49, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group
              name="books"
              position={[123.88, -136.32, 69.49]}
              rotation={[0, 0, Math.PI / 2]}
              scale={0.74}
            >
              <mesh
                name="Cube 41"
                geometry={nodes["Cube 41"].geometry}
                material={materials["Cube 41 Material"]}
                castShadow
                receiveShadow
                position={[-57.22, 118.49, 103.65]}
                rotation={[2.3, 0, 0]}
                scale={[0.59, 1.06, 0.89]}
              >
                <mesh
                  name="Cube 42"
                  geometry={nodes["Cube 42"].geometry}
                  material={materials["Cube 42 Material"]}
                  castShadow
                  receiveShadow
                  position={[17.51, 0.45, -9.59]}
                />
              </mesh>
              <mesh
                name="Cube 31"
                geometry={nodes["Cube 31"].geometry}
                material={materials["Cube 31 Material"]}
                castShadow
                receiveShadow
                position={[-14.6, 2.95, 27.27]}
                rotation={[0.44, 0.09, -0.04]}
                scale={[0.6, 1.2, 0.89]}
              >
                <mesh
                  name="Cube 32"
                  geometry={nodes["Cube 32"].geometry}
                  material={materials["Cube 32 Material"]}
                  castShadow
                  receiveShadow
                  position={[16.8, 0.6, -9.12]}
                />
              </mesh>
              <mesh
                name="Cube1"
                geometry={nodes.Cube1.geometry}
                material={materials["Cube1 Material"]}
                castShadow
                receiveShadow
                position={[-58.06, 14.46, 14.19]}
                rotation={[2.36, 0, 0]}
                scale={[1, 1.06, 0.89]}
              >
                <mesh
                  name="Cube 23"
                  geometry={nodes["Cube 23"].geometry}
                  material={materials["Cube 23 Material"]}
                  castShadow
                  receiveShadow
                  position={[16.72, 0.6, -8.95]}
                />
              </mesh>
            </group>
            <mesh
              name="Rectangle 5"
              geometry={nodes["Rectangle 5"].geometry}
              material={materials["Rectangle 5 Material"]}
              castShadow
              receiveShadow
              position={[40.75, -185.54, 146.65]}
              rotation={[-Math.PI / 2, 0, -3.06]}
              scale={[0.86, 0.86, 0.6]}
            />
            <group
              name="document"
              position={[-94.94, -17.72, 16.81]}
              rotation={[-Math.PI / 2, 0, -2.53]}
            >
              <mesh
                name="Rectangle 4"
                geometry={nodes["Rectangle 4"].geometry}
                material={materials["Rectangle 4 Material"]}
                castShadow
                receiveShadow
                position={[0.25, -17.89, -0.36]}
                scale={[0.86, 0.86, 0.6]}
              />
              <mesh
                name="Rectangle 32"
                geometry={nodes["Rectangle 32"].geometry}
                material={materials["Rectangle 32 Material"]}
                castShadow
                receiveShadow
                position={[5.28, 0.31, -2.1]}
                rotation={[0, 0, 0.21]}
                scale={[0.86, 0.86, 0.6]}
              />
              <mesh
                name="Rectangle 23"
                geometry={nodes["Rectangle 23"].geometry}
                material={materials["Rectangle 23 Material"]}
                castShadow
                receiveShadow
                position={[-6, 5.2, -3.62]}
                scale={[0.86, 0.86, 0.6]}
              />
              <mesh
                name="Cube2"
                geometry={nodes.Cube2.geometry}
                material={materials["Cube2 Material"]}
                castShadow
                receiveShadow
                position={[-0.01, -15.86, 12.11]}
                scale={0.86}
              />
            </group>
            <group name="cup" position={[40.22, -8.77, -4.59]}>
              <mesh
                name="Cube 33"
                geometry={nodes["Cube 33"].geometry}
                material={materials["Cube 33 Material"]}
                castShadow
                receiveShadow
                position={[18.09, 1.8, 1.24]}
              />
              <mesh
                name="Cube 24"
                geometry={nodes["Cube 24"].geometry}
                material={materials["Cube 24 Material"]}
                castShadow
                receiveShadow
                position={[-5.14, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group name="desk" position={[-33.07, -104.75, -18.74]}>
              <mesh
                name="Rectangle1"
                geometry={nodes.Rectangle1.geometry}
                material={materials["Rectangle1 Material"]}
                castShadow
                receiveShadow
                position={[-0.23, 60.7, -0.47]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Cube 43"
                geometry={nodes["Cube 43"].geometry}
                material={materials["Cube 43 Material"]}
                castShadow
                receiveShadow
                position={[107.78, -4.67, -63.48]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 0.68]}
              />
              <mesh
                name="Cube 34"
                geometry={nodes["Cube 34"].geometry}
                material={materials["Cube 34 Material"]}
                castShadow
                receiveShadow
                position={[-110.55, -4.67, -63.48]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 0.68]}
              />
              <mesh
                name="Cube 44"
                geometry={nodes["Cube 44"].geometry}
                material={materials["Cube 44 Material"]}
                castShadow
                receiveShadow
                position={[107.78, -4.67, 65.25]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 0.68]}
              />
              <mesh
                name="Cube 25"
                geometry={nodes["Cube 25"].geometry}
                material={materials["Cube 25 Material"]}
                castShadow
                receiveShadow
                position={[-110.55, -4.67, 65.25]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 0.68]}
              />
            </group>
          </group>
          <group name="lamp" position={[293.44, -21.82, 126.1]}>
            <mesh
              name="Cylinder 3"
              geometry={nodes["Cylinder 3"].geometry}
              material={materials["Cylinder 3 Material"]}
              castShadow
              receiveShadow
              position={[-0.53, -36.52, 1.57]}
            />
            <mesh
              name="Cylinder 4"
              geometry={nodes["Cylinder 4"].geometry}
              material={materials["Cylinder 4 Material"]}
              castShadow
              receiveShadow
              position={[0.25, 247.42, -0.71]}
            />
            <mesh
              name="Cylinder 6"
              geometry={nodes["Cylinder 6"].geometry}
              material={materials["Cylinder 6 Material"]}
              castShadow
              receiveShadow
              position={[-0.22, 296.27, -0.71]}
            />
            <mesh
              name="Cylinder 5"
              geometry={nodes["Cylinder 5"].geometry}
              material={materials["Cylinder 5 Material"]}
              castShadow
              receiveShadow
              position={[-0.22, 197.6, -0.71]}
            />
            <mesh
              name="Cylinder 2"
              geometry={nodes["Cylinder 2"].geometry}
              material={materials["Cylinder 2 Material"]}
              castShadow
              receiveShadow
              position={[-0.25, -296.92, 0.71]}
            />
          </group>
          <group
            name="plant2"
            position={[433.73, -87.11, -27.42]}
            rotation={[0, -0.61, 0]}
          >
            <mesh
              name="Cube 10"
              geometry={nodes["Cube 10"].geometry}
              material={materials.plant}
              castShadow
              receiveShadow
              position={[-64.81, 78.49, 34.46]}
              rotation={[-1.47, 0.44, 1.74]}
            />
            <mesh
              name="Cube 8"
              geometry={nodes["Cube 8"].geometry}
              material={materials.plant}
              castShadow
              receiveShadow
              position={[109.13, 90.03, -28.28]}
              rotation={[-1.48, -0.34, -1.29]}
            />
            <mesh
              name="Cube 11"
              geometry={nodes["Cube 11"].geometry}
              material={materials.plant}
              castShadow
              receiveShadow
              position={[46.21, 165.04, 10.76]}
              rotation={[-1.09, -0.64, -0.96]}
            />
            <mesh
              name="Cube 9"
              geometry={nodes["Cube 9"].geometry}
              material={materials.plant}
              castShadow
              receiveShadow
              position={[-15.54, 98.58, 70.89]}
              rotation={[-1.98, 0.45, 2.55]}
            />
            <mesh
              name="Cube 7"
              geometry={nodes["Cube 7"].geometry}
              material={materials.plant}
              castShadow
              receiveShadow
              position={[15.17, 90.03, -91.43]}
              rotation={[-1.22, 0, 0]}
            />
            <mesh
              name="Cube 6"
              geometry={nodes["Cube 6"].geometry}
              material={materials["Cube 6 Material"]}
              castShadow
              receiveShadow
              position={[20.84, -175.71, -6.26]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <mesh
            name="floor"
            geometry={nodes.floor.geometry}
            material={materials["floor Material"]}
            castShadow
            receiveShadow
            position={[125.82, -329.82, 156.81]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <group name="people" position={[54.84, 0.52, 141.56]}>
            <group
              name="shoes"
              position={[-45.75, -283.03, 87.46]}
              rotation={[0.31, -0.2, 0.49]}
              scale={[-1.2, 1.2, 1.2]}
            >
              <mesh
                name="Cylinder 31"
                geometry={nodes["Cylinder 31"].geometry}
                material={materials["Cylinder 31 Material"]}
                castShadow
                receiveShadow
                position={[-2.99, 24.83, -28.74]}
                rotation={[-Math.PI / 9, 0, 0.09]}
                scale={0.65}
              />
              <mesh
                name="Torus 5"
                geometry={nodes["Torus 5"].geometry}
                material={materials["Torus 5 Material"]}
                castShadow
                receiveShadow
                position={[0, 4.97, -18.7]}
                rotation={[-2.34, 0, 2.36]}
              />
              <mesh
                name="Torus 4"
                geometry={nodes["Torus 4"].geometry}
                material={materials["Torus 4 Material"]}
                castShadow
                receiveShadow
                position={[0, 0.78, -15.38]}
                rotation={[-2.34, 0, 2.36]}
              />
              <mesh
                name="Torus 3"
                geometry={nodes["Torus 3"].geometry}
                material={materials["Torus 3 Material"]}
                castShadow
                receiveShadow
                position={[0, -2.43, -11.25]}
                rotation={[-2.34, 0, 2.36]}
              />
              <mesh
                name="Torus 2"
                geometry={nodes["Torus 2"].geometry}
                material={materials["Torus 2 Material"]}
                castShadow
                receiveShadow
                position={[0, -4.82, -6.39]}
                rotation={[-2.34, 0, 2.36]}
              />
              <mesh
                name="Torus"
                geometry={nodes.Torus.geometry}
                material={materials["Torus Material"]}
                castShadow
                receiveShadow
                position={[0, -6.17, -0.33]}
                rotation={[-2.34, 0, 2.36]}
              />
              <mesh
                name="Rectangle 51"
                geometry={nodes["Rectangle 51"].geometry}
                material={materials["Rectangle 51 Material"]}
                castShadow
                receiveShadow
                position={[11.67, -14.09, 13.97]}
                rotation={[-Math.PI / 2, 1.48, Math.PI / 9]}
              />
              <mesh
                name="Rectangle 41"
                geometry={nodes["Rectangle 41"].geometry}
                material={materials["Rectangle 41 Material"]}
                castShadow
                receiveShadow
                position={[11.45, -11.57, 5.14]}
                rotation={[-Math.PI / 2, 1.48, Math.PI / 9]}
              />
              <mesh
                name="Rectangle 33"
                geometry={nodes["Rectangle 33"].geometry}
                material={materials["Rectangle 33 Material"]}
                castShadow
                receiveShadow
                position={[11.29, -9.72, -3.39]}
                rotation={[-Math.PI / 2, 1.48, Math.PI / 9]}
              />
              <mesh
                name="Cube 26"
                geometry={nodes["Cube 26"].geometry}
                material={materials["Cube 26 Material"]}
                castShadow
                receiveShadow
                position={[-0.12, -11.5, 2.05]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Rectangle 24"
                geometry={nodes["Rectangle 24"].geometry}
                material={materials["Rectangle 24 Material"]}
                castShadow
                receiveShadow
                position={[-0.01, -27.5, 0.54]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group
              name="shoe"
              position={[-99.24, -294.46, 140.87]}
              rotation={[-0.09, -Math.PI / 6, -0.17]}
              scale={1.2}
            >
              <mesh
                name="Cylinder 32"
                geometry={nodes["Cylinder 32"].geometry}
                material={materials["Cylinder 32 Material"]}
                castShadow
                receiveShadow
                position={[-0.07, 25.37, -26.1]}
                rotation={[-0.17, 0, 0]}
                scale={0.65}
              />
              <mesh
                name="Torus 51"
                geometry={nodes["Torus 51"].geometry}
                material={materials["Torus 51 Material"]}
                castShadow
                receiveShadow
                position={[0, 4.97, -18.7]}
                rotation={[-2.34, 0, 2.36]}
              />
              <mesh
                name="Torus 41"
                geometry={nodes["Torus 41"].geometry}
                material={materials["Torus 41 Material"]}
                castShadow
                receiveShadow
                position={[0, 0.78, -15.38]}
                rotation={[-2.34, 0, 2.36]}
              />
              <mesh
                name="Torus 31"
                geometry={nodes["Torus 31"].geometry}
                material={materials["Torus 31 Material"]}
                castShadow
                receiveShadow
                position={[0, -2.43, -11.25]}
                rotation={[-2.34, 0, 2.36]}
              />
              <mesh
                name="Torus 21"
                geometry={nodes["Torus 21"].geometry}
                material={materials["Torus 21 Material"]}
                castShadow
                receiveShadow
                position={[0, -4.82, -6.39]}
                rotation={[-2.34, 0, 2.36]}
              />
              <mesh
                name="Torus1"
                geometry={nodes.Torus1.geometry}
                material={materials["Torus1 Material"]}
                castShadow
                receiveShadow
                position={[0, -6.17, -0.33]}
                rotation={[-2.34, 0, 2.36]}
              />
              <mesh
                name="Rectangle 52"
                geometry={nodes["Rectangle 52"].geometry}
                material={materials["Rectangle 52 Material"]}
                castShadow
                receiveShadow
                position={[11.67, -14.09, 13.97]}
                rotation={[-Math.PI / 2, 1.48, Math.PI / 9]}
              />
              <mesh
                name="Rectangle 42"
                geometry={nodes["Rectangle 42"].geometry}
                material={materials["Rectangle 42 Material"]}
                castShadow
                receiveShadow
                position={[11.45, -11.57, 5.14]}
                rotation={[-Math.PI / 2, 1.48, Math.PI / 9]}
              />
              <mesh
                name="Rectangle 34"
                geometry={nodes["Rectangle 34"].geometry}
                material={materials["Rectangle 34 Material"]}
                castShadow
                receiveShadow
                position={[11.29, -9.72, -3.39]}
                rotation={[-Math.PI / 2, 1.48, Math.PI / 9]}
              />
              <mesh
                name="Cube 27"
                geometry={nodes["Cube 27"].geometry}
                material={materials["Cube 27 Material"]}
                castShadow
                receiveShadow
                position={[-0.12, -11.5, 2.05]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Rectangle 25"
                geometry={nodes["Rectangle 25"].geometry}
                material={materials["Rectangle 25 Material"]}
                castShadow
                receiveShadow
                position={[-0.01, -27.5, 0.54]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group
              name="headphones"
              position={[31.88, 137.51, -80.19]}
              rotation={[-1.13, -0.24, -0.47]}
              scale={0.59}
            >
              <mesh
                name="Cylinder 21"
                geometry={nodes["Cylinder 21"].geometry}
                material={materials["Cylinder 21 Material"]}
                castShadow
                receiveShadow
                position={[-76.47, -48.31, 2.68]}
                rotation={[0, 0, 0.26]}
              />
              <mesh
                name="Cylinder"
                geometry={nodes.Cylinder.geometry}
                material={materials["Cylinder Material"]}
                castShadow
                receiveShadow
                position={[72.07, -48.41, 2.68]}
                rotation={[0, 0, -0.17]}
              />
              <mesh
                name="Torus2"
                geometry={nodes.Torus2.geometry}
                material={materials["Torus2 Material"]}
                castShadow
                receiveShadow
                position={[-2.41, -33.31, 1.83]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1.05, 1, 1]}
              />
              <group
                name="Group 51"
                position={[-58.3, -62.56, 1.56]}
                rotation={[Math.PI / 2, -1.4, -Math.PI / 2]}
                scale={0.7}
              >
                <mesh
                  name="Rectangle 35"
                  geometry={nodes["Rectangle 35"].geometry}
                  material={materials["Rectangle 35 Material"]}
                  castShadow
                  receiveShadow
                  position={[-1.2, -0.12, 15.36]}
                />
                <mesh
                  name="Rectangle 26"
                  geometry={nodes["Rectangle 26"].geometry}
                  material={materials["Rectangle 26 Material"]}
                  castShadow
                  receiveShadow
                  position={[-1.2, -0.12, 8.51]}
                />
                <mesh
                  name="Cube3"
                  geometry={nodes.Cube3.geometry}
                  material={materials["Cube3 Material"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, -7.36]}
                />
              </group>
              <group
                name="Group 50"
                position={[55.95, -61.83, 1.78]}
                rotation={[Math.PI / 2, 1.48, -Math.PI / 2]}
                scale={0.7}
              >
                <mesh
                  name="Rectangle 36"
                  geometry={nodes["Rectangle 36"].geometry}
                  material={materials["Rectangle 36 Material"]}
                  castShadow
                  receiveShadow
                  position={[-1.2, -0.12, 15.36]}
                />
                <mesh
                  name="Rectangle 27"
                  geometry={nodes["Rectangle 27"].geometry}
                  material={materials["Rectangle 27 Material"]}
                  castShadow
                  receiveShadow
                  position={[-1.2, -0.12, 8.51]}
                />
                <mesh
                  name="Cube4"
                  geometry={nodes.Cube4.geometry}
                  material={materials["Cube4 Material"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, -7.36]}
                />
              </group>
            </group>
            <group
              name="chair"
              position={[17.29, -213.5, -71.28]}
              rotation={[0, -Math.PI / 6, 0]}
            >
              <mesh
                name="Cube 91"
                geometry={nodes["Cube 91"].geometry}
                material={materials["Cube 91 Material"]}
                castShadow
                receiveShadow
                position={[-2.31, 98.83, -2.38]}
                rotation={[Math.PI / 2, 0, Math.PI / 4]}
              />
              <mesh
                name="Cube 81"
                geometry={nodes["Cube 81"].geometry}
                material={materials["Cube 81 Material"]}
                castShadow
                receiveShadow
                position={[-2.38, 97.16, 2.31]}
                rotation={[Math.PI / 2, 0, -Math.PI / 4]}
              />
              <mesh
                name="Cylinder 61"
                geometry={nodes["Cylinder 61"].geometry}
                material={materials["Cylinder 61 Material"]}
                castShadow
                receiveShadow
                position={[67.32, -2.73, 67.27]}
                rotation={[1.4, -1.48, 1.48]}
                scale={1.24}
              />
              <mesh
                name="Cylinder 41"
                geometry={nodes["Cylinder 41"].geometry}
                material={materials["Cylinder 41 Material"]}
                castShadow
                receiveShadow
                position={[67.27, -2.73, -67.32]}
                rotation={[0.09, 0.02, 0.09]}
                scale={1.24}
              />
              <mesh
                name="Cylinder 62"
                geometry={nodes["Cylinder 62"].geometry}
                material={materials["Cylinder 62 Material"]}
                castShadow
                receiveShadow
                position={[-67.32, -2.73, -67.33]}
                rotation={[-Math.PI / 2, -1.48, -1.66]}
                scale={1.24}
              />
              <mesh
                name="Cylinder 51"
                geometry={nodes["Cylinder 51"].geometry}
                material={materials["Cylinder 51 Material"]}
                castShadow
                receiveShadow
                position={[-67.33, -2.73, 67.32]}
                rotation={[-0.09, 0, -0.09]}
                scale={1.24}
              />
              <mesh
                name="Cylinder 22"
                geometry={nodes["Cylinder 22"].geometry}
                material={materials["Cylinder 22 Material"]}
                castShadow
                receiveShadow
                position={[3.25, 110.66, 3.32]}
                scale={1.24}
              />
            </group>
            <group
              name="computer"
              position={[-47.41, 10.18, 45.32]}
              rotation={[-2.97, 0.52, 3.06]}
              scale={[0.64, 0.7, 0.7]}
            >
              <group
                name="Text"
                position={[3.04, 1.12, -81.16]}
                rotation={[-Math.PI / 9, 0, 0]}
                scale={[1.64, 1.51, 1.51]}
              >
                <mesh
                  name="S"
                  geometry={nodes.S.geometry}
                  material={materials["S Material"]}
                  castShadow
                  receiveShadow
                  position={[-32, -6.5, 0]}
                />
                <mesh
                  name="p"
                  geometry={nodes.p.geometry}
                  material={materials["p Material"]}
                  castShadow
                  receiveShadow
                  position={[-18.14, -6.5, 0]}
                />
                <mesh
                  name="l"
                  geometry={nodes.l.geometry}
                  material={materials["l Material"]}
                  castShadow
                  receiveShadow
                  position={[-5.52, -6.5, 0]}
                />
                <mesh
                  name="i"
                  geometry={nodes.i.geometry}
                  material={materials["i Material"]}
                  castShadow
                  receiveShadow
                  position={[0.08, -6.5, 0]}
                />
                <mesh
                  name="i1"
                  geometry={nodes.i1.geometry}
                  material={materials["i1 Material"]}
                  castShadow
                  receiveShadow
                  position={[0.08, -6.5, 0]}
                />
                <mesh
                  name="n"
                  geometry={nodes.n.geometry}
                  material={materials["n Material"]}
                  castShadow
                  receiveShadow
                  position={[5.68, -6.5, 0]}
                />
                <mesh
                  name="e"
                  geometry={nodes.e.geometry}
                  material={materials["e Material"]}
                  castShadow
                  receiveShadow
                  position={[18.3, -6.5, 0]}
                />
              </group>
              <mesh
                name="Rectangle 28"
                geometry={nodes["Rectangle 28"].geometry}
                material={materials["Rectangle 28 Material"]}
                castShadow
                receiveShadow
                position={[0, -0.21, -81.43]}
                rotation={[-Math.PI / 9, 0, 0]}
              />
              <mesh
                name="Rectangle 53"
                geometry={nodes["Rectangle 53"].geometry}
                material={materials["Rectangle 53 Material"]}
                castShadow
                receiveShadow
                position={[0, -66.01, 62.64]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.83}
              />
              <mesh
                name="Rectangle 43"
                geometry={nodes["Rectangle 43"].geometry}
                material={materials["Rectangle 43 Material"]}
                castShadow
                receiveShadow
                position={[0, -62.82, -3.88]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.83}
              />
              <mesh
                name="Rectangle 37"
                geometry={nodes["Rectangle 37"].geometry}
                material={materials["Rectangle 37 Material"]}
                castShadow
                receiveShadow
                position={[0, -66.85, 15.84]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Rectangle2"
                geometry={nodes.Rectangle2.geometry}
                material={materials["Rectangle2 Material"]}
                castShadow
                receiveShadow
                position={[0, -5.45, -85.58]}
                rotation={[-Math.PI / 9, 0, 0]}
              />
            </group>
            <mesh
              name="leg"
              geometry={nodes.leg.geometry}
              material={materials["leg Material"]}
              castShadow
              receiveShadow
              position={[31.27, -40.93, -83.02]}
              rotation={[0, -Math.PI / 6, 0]}
            />
            <group
              name="body"
              position={[5.06, 49.66, -37.85]}
              rotation={[0, -Math.PI / 6, 0]}
            >
              <mesh
                name="line"
                geometry={nodes.line.geometry}
                material={materials["line Material"]}
                castShadow
                receiveShadow
                position={[-8.34, -29.82, -1.07]}
              />
              <mesh
                name="Cylinder 23"
                geometry={nodes["Cylinder 23"].geometry}
                material={materials["Cylinder 23 Material"]}
                castShadow
                receiveShadow
                position={[0.97, 83.67, -58.41]}
                rotation={[0.22, -0.17, 0]}
                scale={1.33}
              />
              <mesh
                name="hand-15 2"
                geometry={nodes["hand-15 2"].geometry}
                material={materials["hand-15 2 Material"]}
                castShadow
                receiveShadow
                position={[57.19, -72.48, 62.33]}
                rotation={[1.77, 0.04, 0.48]}
                scale={[-1, 1, 1]}
              />
              <mesh
                name="hand-15"
                geometry={nodes["hand-15"].geometry}
                material={materials["hand-15 Material"]}
                castShadow
                receiveShadow
                position={[-69.05, -69.33, 71.27]}
                rotation={[1.81, 0.31, -0.24]}
              />
              <mesh
                name="body1"
                geometry={nodes.body1.geometry}
                material={materials["body1 Material"]}
                castShadow
                receiveShadow
                position={[0.15, 16.28, -51.27]}
              />
            </group>
            <mesh
              name="Cylinder1"
              geometry={nodes.Cylinder1.geometry}
              material={materials["Cylinder1 Material"]}
              castShadow
              receiveShadow
              position={[33.52, 151.87, -85.2]}
              rotation={[0.4, -0.49, 0.19]}
            />
            <group
              name="head"
              position={[18.51, 200.48, -52.92]}
              rotation={[0.4, -0.49, 0.19]}
            >
              <mesh
                name="Cube5"
                geometry={nodes.Cube5.geometry}
                material={materials["Cube5 Material"]}
                castShadow
                receiveShadow
                position={[29.23, 40.35, 17.52]}
                rotation={[-0.67, 0.58, -0.07]}
                scale={[0.97, 0.85, 1]}
              />
              <mesh
                name="Cube6"
                geometry={nodes.Cube6.geometry}
                material={materials["Cube6 Material"]}
                castShadow
                receiveShadow
                position={[-4.85, -22.51, 35.87]}
              />
              <mesh
                name="Cube 71"
                geometry={nodes["Cube 71"].geometry}
                material={materials["Cube 71 Material"]}
                castShadow
                receiveShadow
                position={[-2.71, 44.73, -69.78]}
                rotation={[0.61, Math.PI / 2, 0]}
              />
              <mesh
                name="Cube 72"
                geometry={nodes["Cube 72"].geometry}
                material={materials["Cube 72 Material"]}
                castShadow
                receiveShadow
                position={[-3.46, -35.76, 36.79]}
              />
              <mesh
                name="Cube 35"
                geometry={nodes["Cube 35"].geometry}
                material={materials["Cube 35 Material"]}
                castShadow
                receiveShadow
                position={[-3.71, -39.93, -45.36]}
              />
              <mesh
                name="Cube 45"
                geometry={nodes["Cube 45"].geometry}
                material={materials["Cube 45 Material"]}
                castShadow
                receiveShadow
                position={[49.14, -11.33, 15.7]}
                rotation={[-0.05, -0.34, -0.02]}
                scale={[-1, 1, 1.14]}
              />
              <mesh
                name="Cube 28"
                geometry={nodes["Cube 28"].geometry}
                material={materials["Cube 28 Material"]}
                castShadow
                receiveShadow
                position={[34.85, 14.43, 27.35]}
                rotation={[0.03, -0.61, 0.14]}
                scale={[-1, 1, 1.36]}
              />
              <mesh
                name="Cube 61"
                geometry={nodes["Cube 61"].geometry}
                material={materials["Cube 61 Material"]}
                castShadow
                receiveShadow
                position={[12.61, 21.85, 28.5]}
                rotation={[0.37, -0.79, 1.73]}
                scale={[1, 1, 0.78]}
              />
              <mesh
                name="Cube 51"
                geometry={nodes["Cube 51"].geometry}
                material={materials["Cube 51 Material"]}
                castShadow
                receiveShadow
                position={[-45.39, 23.81, 20.24]}
                rotation={[-0.09, 0.35, -0.48]}
              />
              <mesh
                name="Cube7"
                geometry={nodes.Cube7.geometry}
                material={materials["Cube7 Material"]}
                castShadow
                receiveShadow
                position={[-51.46, 1.7, 11.03]}
                rotation={[-0.09, 0.35, 0.24]}
              />
              <mesh
                name="Cube 15"
                geometry={nodes["Cube 15"].geometry}
                material={materials["Cube 15 Material"]}
                castShadow
                receiveShadow
                position={[11.67, 1.12, 30.38]}
                rotation={[0, Math.PI / 9, 0]}
              />
              <mesh
                name="Cube 14"
                geometry={nodes["Cube 14"].geometry}
                material={materials["Cube 14 Material"]}
                castShadow
                receiveShadow
                position={[-21.34, 1.12, 28.72]}
                rotation={[0, -Math.PI / 9, 0]}
              />
              <mesh
                name="Cube 13"
                geometry={nodes["Cube 13"].geometry}
                material={materials["Cube 13 Material"]}
                castShadow
                receiveShadow
                position={[-21.98, 10.29, 29.17]}
                rotation={[-0.04, -0.41, 3.03]}
              />
              <mesh
                name="Cube 12"
                geometry={nodes["Cube 12"].geometry}
                material={materials["Cube 12 Material"]}
                castShadow
                receiveShadow
                position={[12.6, 6.38, 31.35]}
                rotation={[-0.1, 0.28, 0.2]}
              />
              <mesh
                name="Cube 16"
                geometry={nodes["Cube 16"].geometry}
                material={materials["Cube 16 Material"]}
                castShadow
                receiveShadow
                position={[38.42, -12.67, -6.07]}
                scale={[-1, 1, 1]}
              />
              <mesh
                name="Cube8"
                geometry={nodes.Cube8.geometry}
                material={materials["Cube8 Material"]}
                castShadow
                receiveShadow
                position={[-44.39, -12.67, -6.07]}
              />
              <mesh
                name="Sphere 21"
                geometry={nodes["Sphere 21"].geometry}
                material={materials["Sphere 21 Material"]}
                castShadow
                receiveShadow
                position={[-2.88, -8.51, -8.67]}
              />
            </group>
          </group>
          <pointLight
            name="Point Light"
            // castShadow
            intensity={0.6}
            distance={1011}
            color="#c2d3fe"
            position={[319.47, 509.35, -330.97]}
            rotation={[0, -Math.PI / 6, 0]}
          />
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.8}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-near={1}
            shadow-camera-far={1500}
            shadow-camera-left={-1500}
            shadow-camera-right={1500}
            shadow-camera-top={1500}
            shadow-camera-bottom={-1500}
            color="#feefe8"
            position={[-189.41, 460.06, 327.57]}
          />
          <hemisphereLight
            name="Default Ambient Light"
            intensity={0.75}
            color="#eaeaea"
            position={[0, 1, 0]}
          />
        </group>
      </group>
    </>
  );
}



