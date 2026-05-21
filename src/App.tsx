import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';

export default function App() {
  return (
    <main className="app">
      <Canvas camera={{ position: [4, 3, 6], fov: 50 }}>
        <Experience />
      </Canvas>
    </main>
  );
}
