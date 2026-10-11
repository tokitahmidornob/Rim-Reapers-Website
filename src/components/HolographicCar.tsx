"use client";

import React, { useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Center, Bounds, Loader } from '@react-three/drei';
import * as THREE from 'three';

function CarModel() {
  const { scene } = useGLTF('/car.glb');

  useEffect(() => {
    if (!scene) return;

    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          color: '#ffffff',
          emissive: '#a855f7',
          emissiveIntensity: 1.5,
          wireframe: true,
          transparent: true,
          opacity: 0.15,
        });
      }
    });
  }, [scene]);

  return <primitive object={scene} />;
}

export default function HolographicCar() {
  return (
    <>
      <Canvas
        camera={{ position: [5, 2, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, 10, -5]} intensity={1.0} />
        <pointLight position={[0, 6, 0]} intensity={2.0} color="#a855f7" />

        <OrbitControls
          makeDefault
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          autoRotate={true}
          autoRotateSpeed={0.8}
        />

        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.2}>
            <Center>
              <CarModel />
            </Center>
          </Bounds>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

useGLTF.preload('/car.glb');
