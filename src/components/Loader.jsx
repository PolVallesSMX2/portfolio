import { Html, useProgress } from "@react-three/drei"
import React from "react";

// React.memo prevents unnecessary re-renders when parent state changes.
// Math.round avoids flooding the Html component with fractional progress updates.
const Loader = React.memo(() => {
    const { progress } = useProgress()
    return (
        <Html center className="font-normal text-2xl text-center">
            {Math.round(progress)}% Loaded
        </Html>
    )
})

Loader.displayName = "Loader"

export default Loader