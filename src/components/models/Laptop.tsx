import { InteractiveProject } from './InteractiveProject';

export function Laptop() {
  return (
    <InteractiveProject projectId="featured-app">
      {(hovered) => (
        <group position={[-0.45, 0.78, -1.28]}>
          <mesh position={[0, 0.03, 0.08]}>
            <boxGeometry args={[0.8, 0.05, 0.52]} />
            <meshStandardMaterial color="#2b2f33" roughness={0.45} />
          </mesh>
          <mesh position={[0, 0.35, -0.18]} rotation={[-0.35, 0, 0]}>
            <boxGeometry args={[0.82, 0.52, 0.05]} />
            <meshStandardMaterial color="#25282c" roughness={0.4} />
          </mesh>
          <mesh position={[0, 0.35, -0.21]} rotation={[-0.35, 0, 0]}>
            <boxGeometry args={[0.68, 0.38, 0.02]} />
            <meshStandardMaterial
              color="#5ea1a8"
              emissive={hovered ? '#4fc3d2' : '#16353a'}
              emissiveIntensity={hovered ? 0.75 : 0.22}
              roughness={0.35}
            />
          </mesh>
        </group>
      )}
    </InteractiveProject>
  );
}
