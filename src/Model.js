import React, { useRef, useEffect, useState } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Model = () => {
  const modelRef = useRef();
  const { viewport } = useThree();

  // const gltf = useLoader(GLTFLoader, "/scene.gltf");

  // useFrame((state) => {
  //   modelRef.current.rotation.y += 0.002;
  //   modelRef.current.position.x = THREE.MathUtils.lerp(
  //     modelRef.current.position.x,
  //     0 - state.mouse.x * 0.05,
  //     0.02
  //   );
  //   modelRef.current.position.y = THREE.MathUtils.lerp(
  //     modelRef.current.position.y,
  //     0 - state.mouse.y * 0.05,
  //     0.02
  //   );
  // });

  const { scene, animations } = useLoader(GLTFLoader, "/scene.gltf");
  const group = useRef();
  // const [mixer] = useState(() => new THREE.AnimationMixer());
  // useEffect(() => {
  //   mixer.clipAction(animations[3], group.current).play();
  // }, [animations, mixer]);
  useFrame(({ clock }) => {
    // modelRef.current.rotation.y += 0.005;
    modelRef.current.rotation.y = window.scrollY / 100;
    modelRef.current.position.x = window.scrollY / 50;
    modelRef.current.position.y = Math.sin(clock.elapsedTime * 2) * 0.2;
    // mixer.update(delta);
  });

  return (
    <group ref={group} position={[0, -0.2, 0]} scale={viewport.width / 10}>
      <mesh ref={modelRef}>
        <primitive object={scene} dispose={null} />
      </mesh>
    </group>
  );
};

export default Model;
