import React, { useEffect, useRef } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { SkeletonUtils } from 'three-stdlib'

export function Bot(props) {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/BOT.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  // Play first available animation automatically
  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.reset().fadeIn(0.5).play()
    }
  }, [actions, animations])

  // Smooth entry: lerp from above into final position
  const targetY = useRef(5)
  useEffect(() => {
    targetY.current = props.position?.[1] ?? -1
  }, [])

  useFrame(() => {
    if (!group.current) return
    group.current.position.y +=
      (targetY.current - group.current.position.y) * 0.05
  })

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[props.position?.[0] ?? 0, 5, props.position?.[2] ?? 0]}
    >
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 1]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Alpha_Joints"
            geometry={nodes.Alpha_Joints.geometry}
            material={materials.Alpha_Joints_MAT}
            skeleton={nodes.Alpha_Joints.skeleton}
          />
          <skinnedMesh
            name="Alpha_Surface"
            geometry={nodes.Alpha_Surface.geometry}
            material={materials.Alpha_Body_MAT}
            skeleton={nodes.Alpha_Surface.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/BOT.glb')
