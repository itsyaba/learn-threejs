import { InteractiveProject } from './InteractiveProject';

export function Phone() {
  return (
    <InteractiveProject projectId="mobile-work">
      {(hovered) => (
        <group position={[0.55, 0.78, -0.98]} rotation={[0, -0.35, 0]}>
          <mesh>
            <boxGeometry args={[0.28, 0.04, 0.52]} />
            <meshStandardMaterial color="#1f2327" roughness={0.35} />
          </mesh>
          <mesh position={[0, 0.025, 0]}>
            <boxGeometry args={[0.22, 0.02, 0.42]} />
            <meshStandardMaterial
              color="#7d927e"
              emissive={hovered ? '#84d48a' : '#1d2d1d'}
              emissiveIntensity={hovered ? 0.65 : 0.16}
              roughness={0.32}
            />
          </mesh>
        </group>
      )}
    </InteractiveProject>
  );
}
