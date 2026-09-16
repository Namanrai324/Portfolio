'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

function BlackHole() {
  const diskRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (diskRef.current) {
      diskRef.current.rotation.z -= 0.005;
      diskRef.current.rotation.x = 1.2;
    }
    if (glowRef.current) {
      glowRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group position={[0, 2, -15]} rotation={[0.2, 0, 0]}>
      {/* Event Horizon (The Black Hole itself) */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* Photon Ring (Bright inner ring) */}
      <mesh>
        <ringGeometry args={[2.05, 2.2, 64]} />
        <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide} transparent opacity={0.8} />
      </mesh>

      {/* Accretion Disk */}
      <mesh ref={diskRef}>
        <ringGeometry args={[2.5, 6, 128]} />
        <meshBasicMaterial 
          color="#ef4444" // red-500
          side={THREE.DoubleSide} 
          transparent 
          opacity={0.5} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Outer Glow / Nebula Dust */}
      <mesh ref={glowRef} rotation={[1.5, 0, 0]}>
        <torusGeometry args={[4, 2, 16, 100]} />
        <meshBasicMaterial 
          color="#b91c1c" // red-700
          transparent 
          opacity={0.15} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function CameraRig() {
  useFrame((state) => {
    // Subtle camera movement based on mouse position
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, (state.mouse.x * 2), 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (state.mouse.y * 2), 0.05);
    state.camera.lookAt(0, 0, -10);
  });
  return null;
}

import { useIsMobile } from '@/hooks/useIsMobile';

export default function SpaceBackground() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#05060f]" />;
  }

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#05060f]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <color attach="background" args={['#05060f']} />
        
        {/* Ambient Light */}
        <ambientLight intensity={0.1} />
        
        {/* Starfield */}
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1} 
        />
        
        {/* The Black Hole */}
        <BlackHole />

        {/* Dynamic Camera */}
        <CameraRig />
      </Canvas>
    </div>
  );
}
