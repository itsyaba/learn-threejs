import { InteractiveProject } from './InteractiveProject';

export function Desk() {
  return (
    <InteractiveProject projectId="workspace">
      {(hovered) => (
        <group position={[0, 0.62, -1.25]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2.4, 0.16, 1.05]} />
            <meshStandardMaterial
              color="#83664b"
              emissive={hovered ? '#5a321c' : '#000000'}
              emissiveIntensity={hovered ? 0.32 : 0}
              roughness={0.82}
            />
          </mesh>
          <mesh position={[-1.02, -0.38, -0.38]}>
            <boxGeometry args={[0.14, 0.76, 0.14]} />
            <meshStandardMaterial color="#5a4433" roughness={0.8} />
          </mesh>
          <mesh position={[1.02, -0.38, -0.38]}>
            <boxGeometry args={[0.14, 0.76, 0.14]} />
            <meshStandardMaterial color="#5a4433" roughness={0.8} />
          </mesh>
          <mesh position={[-1.02, -0.38, 0.38]}>
            <boxGeometry args={[0.14, 0.76, 0.14]} />
            <meshStandardMaterial color="#5a4433" roughness={0.8} />
          </mesh>
          <mesh position={[1.02, -0.38, 0.38]}>
            <boxGeometry args={[0.14, 0.76, 0.14]} />
            <meshStandardMaterial color="#5a4433" roughness={0.8} />
          </mesh>
        </group>
      )}
    </InteractiveProject>
  );
}
