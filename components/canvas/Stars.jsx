import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Stars = (props) => {
  const ref = useRef();

  return (
    <div>Stars</div>
  )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas
        camera={{position: [0,0,1]}}
      >
        <Suspense>
          <Stars fallback={null}/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default StarsCanvas