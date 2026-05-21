import { InteractiveProject } from './InteractiveProject';

export function Bookshelf() {
  return (
    <InteractiveProject projectId="writing">
      {(hovered) => (
        <group position={[2.28, 0.95, -2.35]}>
          <mesh>
            <boxGeometry args={[0.86, 1.9, 0.34]} />
            <meshStandardMaterial
              color="#6b5138"
              emissive={hovered ? '#43230f' : '#000000'}
              emissiveIntensity={hovered ? 0.26 : 0}
              roughness={0.84}
            />
          </mesh>
          <mesh position={[0, 0.34, 0.19]}>
            <boxGeometry args={[0.72, 0.08, 0.08]} />
            <meshStandardMaterial color="#dbc6a6" roughness={0.7} />
          </mesh>
          <mesh position={[0, -0.22, 0.19]}>
            <boxGeometry args={[0.72, 0.08, 0.08]} />
            <meshStandardMaterial color="#dbc6a6" roughness={0.7} />
          </mesh>
          <mesh position={[-0.22, 0.66, 0.21]}>
            <boxGeometry args={[0.12, 0.46, 0.12]} />
            <meshStandardMaterial color="#4f7188" roughness={0.75} />
          </mesh>
          <mesh position={[0, 0.63, 0.21]}>
            <boxGeometry args={[0.14, 0.52, 0.12]} />
            <meshStandardMaterial color="#a75b4d" roughness={0.75} />
          </mesh>
          <mesh position={[0.22, 0.68, 0.21]}>
            <boxGeometry args={[0.12, 0.42, 0.12]} />
            <meshStandardMaterial color="#73875b" roughness={0.75} />
          </mesh>
          <mesh position={[-0.14, 0.04, 0.21]}>
            <boxGeometry args={[0.12, 0.42, 0.12]} />
            <meshStandardMaterial color="#d0b05f" roughness={0.75} />
          </mesh>
          <mesh position={[0.08, 0.04, 0.21]}>
            <boxGeometry args={[0.14, 0.44, 0.12]} />
            <meshStandardMaterial color="#8367a2" roughness={0.75} />
          </mesh>
        </group>
      )}
    </InteractiveProject>
  );
}
