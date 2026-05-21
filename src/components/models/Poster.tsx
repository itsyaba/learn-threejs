import { InteractiveProject } from './InteractiveProject';

export function Poster() {
  return (
    <InteractiveProject projectId="about">
      {(hovered) => (
        <group position={[-1.55, 1.75, -2.92]}>
          <mesh>
            <boxGeometry args={[0.95, 1.15, 0.04]} />
            <meshStandardMaterial
              color="#b6594c"
              emissive={hovered ? '#8f2f24' : '#000000'}
              emissiveIntensity={hovered ? 0.34 : 0}
              roughness={0.7}
            />
          </mesh>
          <mesh position={[0, 0.04, 0.025]}>
            <boxGeometry args={[0.72, 0.08, 0.02]} />
            <meshStandardMaterial color="#f0e6d2" roughness={0.6} />
          </mesh>
          <mesh position={[0, -0.16, 0.025]}>
            <boxGeometry args={[0.5, 0.08, 0.02]} />
            <meshStandardMaterial color="#f0e6d2" roughness={0.6} />
          </mesh>
        </group>
      )}
    </InteractiveProject>
  );
}
