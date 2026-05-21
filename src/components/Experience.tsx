import { OrbitControls } from '@react-three/drei';
import { Room } from './Room';

export function Experience() {
  return (
    <>
      <color attach="background" args={['#151515']} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 3]} intensity={1.4} />
      <Room />
      <OrbitControls
        makeDefault
        target={[0, 1.2, 0]}
        enableDamping
        minDistance={2}
        maxDistance={10}
      />
    </>
  );
}
