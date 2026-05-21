import { Environment, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { CameraRig } from './CameraRig';
import { Bookshelf } from './models/Bookshelf';
import { Desk } from './models/Desk';
import { Door } from './models/Door';
import { Laptop } from './models/Laptop';
import { Phone } from './models/Phone';
import { Poster } from './models/Poster';
import { Room } from './Room';
import { usePortfolioStore } from '../store/usePortfolioStore';

export function Experience() {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const activeProject = usePortfolioStore((state) => state.activeProject);

  return (
    <>
      <color attach="background" args={['#151515']} />
      <Environment preset="apartment" />
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 3]} intensity={1.4} />
      <CameraRig controlsRef={controlsRef} />
      <Room />
      <Desk />
      <Laptop />
      <Phone />
      <Poster />
      <Bookshelf />
      <Door />
      <OrbitControls
        ref={controlsRef}
        makeDefault
        target={[0, 1.2, 0]}
        enableDamping
        enabled={!activeProject}
        minDistance={2}
        maxDistance={10}
      />
    </>
  );
}
