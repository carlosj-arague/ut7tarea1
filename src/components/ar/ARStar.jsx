import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrStar from './XrStar.jsx';

function ARStar() {

    return (
        <>
            <ARButton />
            <Canvas>
                <XR>
                    <XrStar />
                </XR>
            </Canvas>
        </>
    )
}
export default ARStar;