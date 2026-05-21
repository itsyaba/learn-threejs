import { InteractiveProject } from './InteractiveProject';

export function Door() {
  return (
    <InteractiveProject projectId="tms-platform">
      {(hovered) => (
        <group position={[1.15, 1.05, -2.93]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.9, 2.1, 0.08]} />
            <meshStandardMaterial
              color="#7b4b30"
              emissive={hovered ? '#5c2812' : '#000000'}
              emissiveIntensity={hovered ? 0.36 : 0}
              roughness={0.78}
            />
          </mesh>
          <mesh castShadow receiveShadow position={[0.28, 0, 0.06]}>
            <sphereGeometry args={[0.055, 16, 16]} />
            <meshStandardMaterial color="#d8b85f" metalness={0.4} roughness={0.32} />
          </mesh>
        </group>
      )}
    </InteractiveProject>
  );
}
