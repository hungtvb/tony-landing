"use client";

import { ContactShadows, Environment, Float, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const GLASS = new THREE.MeshPhysicalMaterial({
  color: "#fff4ed",
  transparent: true,
  opacity: 0.32,
  roughness: 0.08,
  transmission: 0.58,
  thickness: 0.34,
  clearcoat: 1,
  clearcoatRoughness: 0.08,
  side: THREE.DoubleSide,
  depthWrite: false,
});

function IceCube({ position, rotation, scale = 1 }: { position: [number, number, number]; rotation: [number, number, number]; scale?: number }) {
  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[0.48, 0.48, 0.48, 2, 2, 2]} />
      <meshPhysicalMaterial color="#fff8f3" transparent opacity={0.38} transmission={0.65} roughness={0.18} thickness={0.35} />
    </mesh>
  );
}

function TonyMark() {
  return (
    <group position={[0, -0.13, 1.06]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.41, 0.41, 0.035, 48]} />
        <meshStandardMaterial color="#fff8ef" roughness={0.72} />
      </mesh>
      <mesh position={[0, 0.035, 0.035]} scale={[0.12, 0.3, 0.07]} rotation={[0, 0, 0]}>
        <sphereGeometry args={[1, 20, 14]} />
        <meshStandardMaterial color="#e97991" roughness={0.62} />
      </mesh>
      <mesh position={[-0.16, 0.03, 0.035]} scale={[0.11, 0.25, 0.07]} rotation={[0, 0, -0.62]}>
        <sphereGeometry args={[1, 20, 14]} />
        <meshStandardMaterial color="#f3a0af" roughness={0.62} />
      </mesh>
      <mesh position={[0.16, 0.03, 0.035]} scale={[0.11, 0.25, 0.07]} rotation={[0, 0, 0.62]}>
        <sphereGeometry args={[1, 20, 14]} />
        <meshStandardMaterial color="#f3a0af" roughness={0.62} />
      </mesh>
    </group>
  );
}

function TeaCup() {
  const cup = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!cup.current) return;
    const time = state.clock.elapsedTime;
    cup.current.rotation.y = THREE.MathUtils.damp(cup.current.rotation.y, -0.12 + Math.sin(time * 0.42) * 0.055, 3, delta);
    cup.current.rotation.z = THREE.MathUtils.damp(cup.current.rotation.z, -0.025 + Math.sin(time * 0.55) * 0.012, 3, delta);
    cup.current.position.y = Math.sin(time * 0.7) * 0.045;
  });

  const bubbles = useMemo(
    () => [
      [-0.62, -0.58, 0.54, 0.07], [0.54, -0.15, 0.64, 0.055], [0.2, -0.83, 0.72, 0.045],
      [-0.35, 0.3, 0.7, 0.06], [0.63, 0.48, 0.35, 0.04], [-0.7, 0.02, 0.25, 0.05],
    ] as const,
    [],
  );

  return (
    <group ref={cup} position={[0, -0.08, 0]} rotation={[0.015, -0.12, -0.025]}>
      <mesh position={[0, -0.22, 0]} castShadow>
        <cylinderGeometry args={[1.08, 0.79, 2.64, 72, 1, true]} />
        <primitive object={GLASS} attach="material" />
      </mesh>

      <mesh position={[0, -0.35, 0]}>
        <cylinderGeometry args={[0.99, 0.72, 2.22, 72]} />
        <meshPhysicalMaterial color="#da746b" roughness={0.25} transmission={0.12} transparent opacity={0.92} clearcoat={0.55} />
      </mesh>

      <mesh position={[0, -1.49, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.74, 0.055, 16, 64]} />
        <meshStandardMaterial color="#ffd8ce" roughness={0.3} />
      </mesh>

      <mesh position={[0, 1.11, 0]}>
        <cylinderGeometry args={[1.13, 1.08, 0.18, 72]} />
        <meshPhysicalMaterial color="#ffece6" transparent opacity={0.78} transmission={0.26} roughness={0.16} clearcoat={1} />
      </mesh>
      <mesh position={[0, 1.21, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.07, 72]} />
        <meshPhysicalMaterial color="#fff3ed" transparent opacity={0.58} transmission={0.35} roughness={0.13} />
      </mesh>
      <mesh position={[0, 1.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.08, 0.055, 16, 72]} />
        <meshStandardMaterial color="#fff8f2" roughness={0.18} />
      </mesh>

      <mesh position={[0.28, 2.12, 0.02]} rotation={[0, 0, -0.105]}>
        <cylinderGeometry args={[0.075, 0.075, 2.95, 20]} />
        <meshPhysicalMaterial color="#f4afbd" transparent opacity={0.92} roughness={0.16} clearcoat={1} />
      </mesh>
      <mesh position={[0.435, 3.56, 0.02]} rotation={[0, 0, -0.105]}>
        <cylinderGeometry args={[0.082, 0.082, 0.13, 20]} />
        <meshStandardMaterial color="#e77c94" roughness={0.24} />
      </mesh>

      <IceCube position={[-0.45, 0.62, 0.16]} rotation={[0.42, 0.35, 0.18]} />
      <IceCube position={[0.36, 0.5, -0.2]} rotation={[0.25, -0.5, 0.34]} scale={0.92} />
      <IceCube position={[0.05, 0.12, 0.42]} rotation={[0.5, 0.12, -0.25]} scale={0.8} />

      <mesh position={[-0.43, 0.99, 0.36]} scale={[1, 0.88, 1]}>
        <sphereGeometry args={[0.3, 32, 24]} />
        <meshStandardMaterial color="#fff0e3" roughness={0.72} />
      </mesh>
      <mesh position={[0.44, 1.01, 0.24]} scale={[1, 0.88, 1]}>
        <sphereGeometry args={[0.28, 32, 24]} />
        <meshStandardMaterial color="#f9e5d7" roughness={0.72} />
      </mesh>

      {bubbles.map(([x, y, z, radius], index) => (
        <mesh key={index} position={[x, y, z]}>
          <sphereGeometry args={[radius, 14, 10]} />
          <meshPhysicalMaterial color="#fff5ec" transparent opacity={0.65} roughness={0.08} transmission={0.55} />
        </mesh>
      ))}

      <TonyMark />
    </group>
  );
}

function Lychee({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <Float speed={1.25} rotationIntensity={0.4} floatIntensity={0.55}>
      <group position={position} scale={scale}>
        <mesh castShadow>
          <sphereGeometry args={[0.34, 28, 22]} />
          <meshStandardMaterial color="#efa0ae" roughness={0.82} />
        </mesh>
        <mesh position={[0.09, 0.34, 0]} rotation={[0, 0, -0.48]}>
          <coneGeometry args={[0.09, 0.26, 12]} />
          <meshStandardMaterial color="#78985e" roughness={0.8} />
        </mesh>
      </group>
    </Float>
  );
}

function Petal({ position, color = "#f4a6b6" }: { position: [number, number, number]; color?: string }) {
  return (
    <Float speed={1.7} rotationIntensity={0.95} floatIntensity={0.75}>
      <mesh position={position} rotation={[0.7, 0.4, 0.2]} scale={[0.16, 0.38, 0.07]}>
        <sphereGeometry args={[1, 20, 12]} />
        <meshStandardMaterial color={color} roughness={0.7} side={THREE.DoubleSide} />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.45} />
      <directionalLight position={[4, 6, 5]} intensity={3.1} color="#fff4e8" castShadow />
      <pointLight position={[-3.5, 1.5, 3.5]} intensity={14} color="#f5a4b8" distance={10} />
      <TeaCup />
      <Lychee position={[-1.7, 1.45, 0.15]} scale={0.88} />
      <Lychee position={[1.65, -0.75, 0.05]} scale={0.68} />
      <Lychee position={[-1.35, -1.5, -0.15]} scale={0.52} />
      <Petal position={[1.6, 1.42, 0.2]} />
      <Petal position={[-1.7, 0.05, -0.2]} color="#ffd0b4" />
      <Petal position={[1.35, -1.65, 0.35]} />
      <Petal position={[0.95, 2.25, -0.25]} color="#f7c2ce" />
      <Sparkles count={22} scale={[5.2, 5.2, 2]} size={2} speed={0.28} color="#fff0d6" opacity={0.72} />
      <ContactShadows position={[0, -1.82, 0]} opacity={0.22} scale={4.6} blur={2.8} far={3.5} color="#7c3e4c" />
      <Environment preset="studio" />
    </>
  );
}

export default function TonyScene() {
  return (
    <Canvas
      className="tony-canvas"
      camera={{ position: [0, 0.35, 6.7], fov: 38 }}
      dpr={[1, 1.45]}
      frameloop="always"
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      shadows
    >
      <Scene />
    </Canvas>
  );
}
