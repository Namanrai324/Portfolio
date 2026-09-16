'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Planet() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.z = 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Planet Sphere */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial 
          color="#450a0a" // red-950
          roughness={0.7}
          metalness={0.2}
        />
      </mesh>

      {/* Planet Ring */}
      <mesh rotation={[Math.PI / 2 + 0.3, 0, 0]}>
        <ringGeometry args={[2, 3, 64]} />
        <meshStandardMaterial 
          color="#fca5a5" // red-300
          side={THREE.DoubleSide} 
          transparent 
          opacity={0.6}
        />
      </mesh>
      
      {/* Outer faint ring */}
      <mesh rotation={[Math.PI / 2 + 0.3, 0, 0]}>
        <ringGeometry args={[3.2, 3.8, 64]} />
        <meshStandardMaterial 
          color="#f87171" // red-400
          side={THREE.DoubleSide} 
          transparent 
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

export default function Saturn() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#f8fafc" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ef4444" />
        <Planet />
      </Canvas>
    </div>
  );
}
