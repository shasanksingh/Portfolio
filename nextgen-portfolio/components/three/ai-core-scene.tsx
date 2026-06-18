"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function NeuralNetwork() {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    return Array.from({ length: 26 }, (_, index) => {
      const angle = (index / 26) * Math.PI * 2;
      const radius = 1.35 + (index % 4) * 0.22;
      const y = ((index % 7) - 3) * 0.18;
      return new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
    });
  }, []);

  const connections = useMemo(() => {
    return points
      .map((point, index) => [point, points[(index + 5) % points.length], points[(index + 9) % points.length]])
      .flatMap(([from, toA, toB]) => [
        [from, toA],
        [from, toB],
      ]);
  }, [points]);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.elapsedTime * 0.18 + pointer.x * 0.16;
    group.current.rotation.x = pointer.y * 0.12;
  });

  return (
    <group ref={group}>
      {connections.map((connection, index) => (
        <Line
          key={`${connection[0].x}-${index}`}
          points={connection}
          color={index % 3 === 0 ? "#16d6d9" : "#7b3ff2"}
          lineWidth={0.7}
          transparent
          opacity={0.22}
        />
      ))}
      {points.map((point, index) => (
        <mesh key={`${point.x}-${index}`} position={point}>
          <sphereGeometry args={[index % 5 === 0 ? 0.035 : 0.025, 16, 16]} />
          <meshStandardMaterial
            color={index % 3 === 0 ? "#16d6d9" : index % 3 === 1 ? "#0867e8" : "#7b3ff2"}
            emissive={index % 3 === 0 ? "#16d6d9" : "#0867e8"}
            emissiveIntensity={0.55}
          />
        </mesh>
      ))}
    </group>
  );
}

function CoreSphere() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = clock.elapsedTime * 0.35 + pointer.x * 0.22;
    mesh.current.rotation.z = clock.elapsedTime * 0.12;
  });

  return (
    <Float speed={1.7} rotationIntensity={0.35} floatIntensity={0.42}>
      <Sphere ref={mesh} args={[0.78, 64, 64]}>
        <MeshDistortMaterial
          color="#0867e8"
          emissive="#16d6d9"
          emissiveIntensity={0.28}
          roughness={0.32}
          metalness={0.34}
          distort={0.22}
          speed={1.6}
        />
      </Sphere>
    </Float>
  );
}

function OrbitingRings() {
  const ring = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ring.current) return;
    ring.current.rotation.y = clock.elapsedTime * 0.2;
    ring.current.rotation.z = clock.elapsedTime * 0.12;
  });

  return (
    <group ref={ring}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.18, 0.008, 12, 160]} />
        <meshStandardMaterial color="#16d6d9" emissive="#16d6d9" emissiveIntensity={0.6} />
      </mesh>
      <mesh rotation={[Math.PI / 2.7, 0.35, 0.7]}>
        <torusGeometry args={[1.52, 0.006, 12, 160]} />
        <meshStandardMaterial color="#7b3ff2" emissive="#7b3ff2" emissiveIntensity={0.45} />
      </mesh>
    </group>
  );
}

export function AiCoreScene() {
  return (
    <Canvas className="!h-[520px]" camera={{ position: [0, 0.35, 4.1], fov: 42 }} dpr={[1, 1.65]}>
      <color attach="background" args={["#f8fbff"]} />
      <ambientLight intensity={1.4} />
      <pointLight position={[3, 3, 4]} intensity={3.8} color="#16d6d9" />
      <pointLight position={[-3, -1, 2]} intensity={2.2} color="#7b3ff2" />
      <group position={[0, 0.1, 0]}>
        <CoreSphere />
        <OrbitingRings />
        <NeuralNetwork />
      </group>
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.55} />
    </Canvas>
  );
}
