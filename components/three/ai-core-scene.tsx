"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function NeuralNetwork() {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    return Array.from({ length: 22 }, (_, index) => {
      const angle = (index / 22) * Math.PI * 2;
      const radius = 1.45 + (index % 4) * 0.2;
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
          lineWidth={0.85}
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

function ParticleCloud() {
  const group = useRef<THREE.Group>(null);
  const particles = useMemo(() => {
    return Array.from({ length: 48 }, (_, index) => {
      const radius = 1.65 + Math.random() * 1.18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      return {
        position: new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta) * 0.72,
          radius * Math.cos(phi),
        ),
        size: index % 7 === 0 ? 0.035 : 0.018,
        color: index % 3 === 0 ? "#16d6d9" : index % 3 === 1 ? "#0867e8" : "#7b3ff2",
      };
    });
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.elapsedTime * 0.06 + pointer.x * 0.08;
    group.current.rotation.x = pointer.y * 0.05;
  });

  return (
    <group ref={group}>
      {particles.map((particle, index) => (
        <mesh key={`${particle.color}-${index}`} position={particle.position}>
          <sphereGeometry args={[particle.size, 10, 10]} />
          <meshStandardMaterial color={particle.color} emissive={particle.color} emissiveIntensity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function FloatingPanels() {
  const group = useRef<THREE.Group>(null);
  const panels = [
    { position: [-1.9, 0.88, -0.2], color: "#0867e8" },
    { position: [1.78, 0.76, 0.24], color: "#16d6d9" },
    { position: [-1.62, -0.78, 0.16], color: "#7b3ff2" },
    { position: [1.45, -0.9, -0.18], color: "#0f172a" },
  ] as const;

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.45) * 0.12;
  });

  return (
    <group ref={group}>
      {panels.map((panel, index) => (
        <Float key={panel.color} speed={1.2 + index * 0.2} rotationIntensity={0.24} floatIntensity={0.35}>
          <mesh position={panel.position} rotation={[0.25, index * 0.62, -0.08]}>
            <boxGeometry args={[0.54, 0.34, 0.045]} />
            <meshStandardMaterial
              color={panel.color}
              emissive={panel.color}
              emissiveIntensity={0.18}
              roughness={0.28}
              metalness={0.18}
            />
          </mesh>
        </Float>
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
      <Sphere ref={mesh} args={[0.62, 64, 64]}>
        <MeshDistortMaterial
          color="#0867e8"
          emissive="#16d6d9"
          emissiveIntensity={0.28}
          roughness={0.32}
          metalness={0.34}
          distort={0.22}
          speed={1.6}
          transparent
          opacity={0.88}
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
        <torusGeometry args={[1.08, 0.008, 12, 160]} />
        <meshStandardMaterial color="#16d6d9" emissive="#16d6d9" emissiveIntensity={0.6} />
      </mesh>
      <mesh rotation={[Math.PI / 2.7, 0.35, 0.7]}>
        <torusGeometry args={[1.42, 0.006, 12, 160]} />
        <meshStandardMaterial color="#7b3ff2" emissive="#7b3ff2" emissiveIntensity={0.45} />
      </mesh>
      <mesh rotation={[Math.PI / 3.2, -0.6, 1.35]}>
        <torusGeometry args={[1.74, 0.004, 12, 180]} />
        <meshStandardMaterial color="#0867e8" emissive="#0867e8" emissiveIntensity={0.35} />
      </mesh>
    </group>
  );
}

export function AiCoreScene() {
  return (
    <Canvas
      className="!h-[380px] !bg-transparent md:!h-[540px]"
      camera={{ position: [0, 0.35, 4.75], fov: 40 }}
      dpr={[1, 1.35]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={1.4} />
      <pointLight position={[3, 3, 4]} intensity={3.8} color="#16d6d9" />
      <pointLight position={[-3, -1, 2]} intensity={2.2} color="#7b3ff2" />
      <group position={[0, 0.1, 0]}>
        <ParticleCloud />
        <FloatingPanels />
        <CoreSphere />
        <OrbitingRings />
        <NeuralNetwork />
      </group>
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.55} />
    </Canvas>
  );
}
