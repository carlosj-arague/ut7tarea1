import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


function XrIcosahedron() {

    const icoRef = useRef();

    useFrame((state, delta) => {
        icoRef.current.rotation.y += delta;
    });

    return (<>
        <OrbitControls />
        <ambientLight />
        <mesh ref={icoRef} position={[0, 0, -1]}>
            <icosahedronGeometry args={[3, 0]} />
            <meshStandardMaterial color='crimson' />
        </mesh>
    </>

    )
}

export default XrIcosahedron;
