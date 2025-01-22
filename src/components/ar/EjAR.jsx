//Ejemplo de un cubo en RA
import { Canvas} from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrIcosahedron from "./XrIcosahedron";

function EjAR(){

    return(
        <>
            <ARButton/>
            <Canvas>
                <XR>
                    <XrIcosahedron />
                </XR>
            </Canvas>
        </>
)

}

export default EjAR;