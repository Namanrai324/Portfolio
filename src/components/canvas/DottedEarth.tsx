'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function DottedEarth() {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate points for a dotted sphere
  const { positions, colors } = useMemo(() => {
    const numPoints = 3000;
    const positions = new Float32Array(numPoints * 3);
    const colors = new Float32Array(numPoints * 3);
    const radius = 2;

    const color1 = new THREE.Color('#ffffff'); // White dots
    const color2 = new THREE.Color('#ef4444'); // Red dots accent
    const color3 = new THREE.Color('#4b5563'); // Gray dots

    for (let i = 0; i < numPoints; i++) {
      // Golden spiral method for even distribution on a sphere
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;

      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Mix colors for some visual interest
      const rand = Math.random();
      let pointColor = color1;
      if (rand > 0.95) pointColor = color2;
      else if (rand > 0.6) pointColor = color3;

      colors[i * 3] = pointColor.r;
      colors[i * 3 + 1] = pointColor.g;
      colors[i * 3 + 2] = pointColor.b;
    }

    return { positions, colors };
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.1; // Slow rotation
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        {/* @ts-ignore */}
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        {/* @ts-ignore */}
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors={true}
        transparent={true}
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  );
}
