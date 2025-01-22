import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

function Star() {

  const gltf = useLoader(GLTFLoader, '/star.gltf')

  const starRef = useRef();
  useFrame((state, delta) => {
    starRef.current.rotation.y += delta;
  });

  return (<>

    <OrbitControls />
    <ambientLight />
    <primitive ref={starRef} scale={[5, 5, 5]} object={gltf.scene} position={[0, 0, 0]} />


  </>)}
export default Star;
