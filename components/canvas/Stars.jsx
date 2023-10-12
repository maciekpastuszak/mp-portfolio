import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Stars = (props) => {
  return (
    <div>Stars</div>
  )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas>

      </Canvas>
    </div>
  )
}

export default StarsCanvas