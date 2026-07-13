"use client";

import { Environment, Float, Sparkles } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function TeaCup() {
  const cup = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (!cup.current) return;
    cup.current.rotation.y = THREE.MathUtils.damp(cup.current.rotation.y, pointer.x * 0.22, 4, delta);
    cup.current.rotation.x = THREE.MathUtils.damp(cup.current.rotation.x, pointer.y * -0.1, 4, delta);
    cup.current.position.y = Math.sin(state.clock.elapsedTime * 0.75) * 0.06;
  });

  return (
    <group ref={cup} rotation={[0.04, -0.16, -0.035]}>
      <mesh position={[0, -0.15, 0]} castShadow>
        <cylinderGeometry args={[1.12, 0.82, 2.75, 64, 1, true]} />
        <meshPhysicalMaterial color="#ffe7dd" transparent opacity={0.27} roughness={0.08} transmission={0.7} thickness={0.2} />
      </mesh>
      <mesh position={[0, -0.24, 0]}>
        <cylinderGeometry args={[1.035, 0.75, 2.38, 64]} />
        <meshPhysicalMaterial color="#e98976" roughness={0.24} transmission={0.12} transparent opacity={0.9} />
      </mesh>
      <mesh position={[0, 0.96, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.08, 0.055, 16, 64]} />
        <meshStandardMaterial color="#fff5ee" roughness={0.18} />
      </mesh>
      <mesh position={[0, 1.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.01, 64]} />
        <meshStandardMaterial color="#f2a08d" roughness={0.3} />
      </mesh>
      <mesh position={[0.48, 1.06, 0.16]} rotation={[0.2, 0.1, 0.3]}>
        <sphereGeometry args={[0.3, 32, 24]} />
        <meshStandardMaterial color="#fff2e6" roughness={0.75} />
      </mesh>
      <mesh position={[-0.33, 1.08, -0.18]} rotation={[0.1, 0.4, -0.2]}>
        <sphereGeometry args={[0.26, 32, 24]} />
        <meshStandardMaterial color="#f7e7db" roughness={0.75} />
      </mesh>
      <mesh position={[0.2, 2.05, 0]} rotation={[0, 0, -0.12]}>
        <cylinderGeometry args={[0.075, 0.075, 3.1, 18]} />
        <meshPhysicalMaterial color="#f9c1ca" transparent opacity={0.82} roughness={0.12} />
      </mesh>
    </group>
  );
}

function Lychee({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <Float speed={1.5} rotationIntensity={0.65} floatIntensity={0.75}>
      <group position={position} scale={scale}>
        <mesh castShadow>
          <sphereGeometry args={[0.34, 24, 20]} />
          <meshStandardMaterial color="#efa0ae" roughness={0.82} />
        </mesh>
        <mesh position={[0.08, 0.33, 0]} rotation={[0, 0, -0.45]}>
          <coneGeometry args={[0.09, 0.25, 10]} />
          <meshStandardMaterial color="#78985e" roughness={0.8} />
        </mesh>
      </group>
    </Float>
  );
}

function Petal({ position, color = "#f4a6b6" }: { position: [number, number, number]; color?: string }) {
  return (
    <Float speed={2} rotationIntensity={1.4} floatIntensity={1.1}>
      <mesh position={position} rotation={[0.7, 0.4, 0.2]} scale={[0.18, 0.42, 0.08]}>
        <sphereGeometry args={[1, 20, 12]} />
        <meshStandardMaterial color={color} roughness={0.7} side={THREE.DoubleSide} />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.7} />
      <directionalLight position={[4, 6, 5]} intensity={3.2} color="#fff4e8" castShadow />
      <pointLight position={[-4, 1, 3]} intensity={15} color="#f5a4b8" distance={10} />
      <TeaCup />
      <Lychee position={[-1.65, 1.45, 0.2]} scale={0.9} />
      <Lychee position={[1.7, -0.7, 0.1]} scale={0.7} />
      <Lychee position={[-1.35, -1.5, -0.2]} scale={0.55} />
      <Petal position={[1.6, 1.35, 0.3]} />
      <Petal position={[-1.7, 0.1, -0.2]} color="#ffd0b4" />
      <Petal position={[1.35, -1.7, 0.4]} />
      <Petal position={[0.95, 2.15, -0.3]} color="#f7c2ce" />
      <Sparkles count={30} scale={[5.5, 5.5, 2]} size={2.2} speed={0.35} color="#fff0d6" opacity={0.8} />
      <Environment preset="studio" />
    </>
  );
}

export default function TonyScene() {
  return (
    <Canvas
      className="tony-canvas"
      camera={{ position: [0, 0.15, 6.2], fov: 38 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      shadows
    >
      <Scene />
    </Canvas>
  );
}
