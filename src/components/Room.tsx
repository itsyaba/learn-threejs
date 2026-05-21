const ROOM_WIDTH = 6;
const ROOM_HEIGHT = 3.2;
const ROOM_DEPTH = 6;
const WALL_THICKNESS = 0.12;

export function Room() {
  return (
    <group>
      <mesh position={[0, -WALL_THICKNESS / 2, 0]}>
        <boxGeometry args={[ROOM_WIDTH, WALL_THICKNESS, ROOM_DEPTH]} />
        <meshStandardMaterial color="#5f6f52" roughness={0.85} />
      </mesh>

      <mesh position={[0, ROOM_HEIGHT + WALL_THICKNESS / 2, 0]}>
        <boxGeometry args={[ROOM_WIDTH, WALL_THICKNESS, ROOM_DEPTH]} />
        <meshStandardMaterial color="#ded8cb" roughness={0.9} />
      </mesh>

      <mesh position={[0, ROOM_HEIGHT / 2, -ROOM_DEPTH / 2]}>
        <boxGeometry args={[ROOM_WIDTH, ROOM_HEIGHT, WALL_THICKNESS]} />
        <meshStandardMaterial color="#d5cdbc" roughness={0.9} />
      </mesh>

      <mesh position={[-ROOM_WIDTH / 2, ROOM_HEIGHT / 2, 0]}>
        <boxGeometry args={[WALL_THICKNESS, ROOM_HEIGHT, ROOM_DEPTH]} />
        <meshStandardMaterial color="#c5d0c0" roughness={0.9} />
      </mesh>

      <mesh position={[ROOM_WIDTH / 2, ROOM_HEIGHT / 2, 0]}>
        <boxGeometry args={[WALL_THICKNESS, ROOM_HEIGHT, ROOM_DEPTH]} />
        <meshStandardMaterial color="#d0c8b7" roughness={0.9} />
      </mesh>
    </group>
  );
}
