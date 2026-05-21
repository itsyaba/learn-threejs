const ROOM_WIDTH = 6;
const ROOM_HEIGHT = 3.2;
const ROOM_DEPTH = 6;
const WALL_THICKNESS = 0.16;
const FLOOR_DEPTH = ROOM_DEPTH + WALL_THICKNESS * 2;
const FLOOR_WIDTH = ROOM_WIDTH + WALL_THICKNESS * 2;

export function Room() {
  return (
    <group>
      <mesh receiveShadow position={[0, -WALL_THICKNESS / 2, 0]}>
        <boxGeometry args={[FLOOR_WIDTH, WALL_THICKNESS, FLOOR_DEPTH]} />
        <meshStandardMaterial color="#8b6f47" roughness={0.78} />
      </mesh>

      <mesh receiveShadow position={[0, 0.012, -0.25]}>
        <boxGeometry args={[2.8, 0.024, 1.75]} />
        <meshStandardMaterial color="#5f4d38" roughness={0.88} />
      </mesh>

      <mesh receiveShadow position={[0, ROOM_HEIGHT + WALL_THICKNESS / 2, 0]}>
        <boxGeometry args={[FLOOR_WIDTH, WALL_THICKNESS, FLOOR_DEPTH]} />
        <meshStandardMaterial color="#efe9de" roughness={0.9} />
      </mesh>

      <mesh receiveShadow position={[0, ROOM_HEIGHT / 2, -ROOM_DEPTH / 2]}>
        <boxGeometry args={[FLOOR_WIDTH, ROOM_HEIGHT, WALL_THICKNESS]} />
        <meshStandardMaterial color="#d8d2c6" roughness={0.9} />
      </mesh>

      <mesh receiveShadow position={[-ROOM_WIDTH / 2, ROOM_HEIGHT / 2, 0]}>
        <boxGeometry args={[WALL_THICKNESS, ROOM_HEIGHT, ROOM_DEPTH]} />
        <meshStandardMaterial color="#cbd3c7" roughness={0.9} />
      </mesh>

      <mesh receiveShadow position={[ROOM_WIDTH / 2, ROOM_HEIGHT / 2, 0]}>
        <boxGeometry args={[WALL_THICKNESS, ROOM_HEIGHT, ROOM_DEPTH]} />
        <meshStandardMaterial color="#d4cec3" roughness={0.9} />
      </mesh>

      <group position={[-1.85, 0.28, -0.95]} rotation={[0, 0.2, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.2, 0.38, 0.58]} />
          <meshStandardMaterial color="#8f5f55" roughness={0.82} />
        </mesh>
        <mesh castShadow receiveShadow position={[0, 0.28, -0.18]}>
          <boxGeometry args={[1.22, 0.5, 0.18]} />
          <meshStandardMaterial color="#7e5049" roughness={0.86} />
        </mesh>
        <mesh castShadow receiveShadow position={[-0.48, 0.2, 0.16]}>
          <boxGeometry args={[0.16, 0.38, 0.55]} />
          <meshStandardMaterial color="#7e5049" roughness={0.86} />
        </mesh>
      </group>

      <group position={[-2.45, 0.25, -2.25]}>
        <mesh castShadow receiveShadow position={[0, 0.12, 0]}>
          <cylinderGeometry args={[0.16, 0.2, 0.24, 16]} />
          <meshStandardMaterial color="#8a5a3c" roughness={0.78} />
        </mesh>
        <mesh castShadow position={[0, 0.45, 0]}>
          <cylinderGeometry args={[0.035, 0.045, 0.42, 8]} />
          <meshStandardMaterial color="#52633d" roughness={0.8} />
        </mesh>
        <mesh castShadow position={[0, 0.72, 0]}>
          <sphereGeometry args={[0.26, 18, 18]} />
          <meshStandardMaterial color="#4d7b4b" roughness={0.76} />
        </mesh>
      </group>
    </group>
  );
}
