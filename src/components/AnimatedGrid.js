import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedGrid = () => {
  const groupRef = useRef();

  // Animation loop to move the grid
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.z = (t * 2) % 10; // Adjust speed and movement
    }
  });

  // Function to create grid lines
  const createGridLines = () => {
    const size = 100; // Size of the grid
    const divisions = 40; // Number of divisions in the grid
    const gridHelper = new THREE.GridHelper(size, divisions);
    const material = new THREE.LineBasicMaterial({ color: 0x888888, linewidth: 1 });
    const geometry = new THREE.BufferGeometry().setFromPoints(gridHelper.geometry.attributes.position.array);

    return (
      <lineSegments geometry={geometry} material={material} />
    );
  };

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Create grid using lines */}
      {createGridLines()}
    </group>
  );
};

export default AnimatedGrid;
