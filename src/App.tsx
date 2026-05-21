import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Experience } from './components/Experience';
import { LoadingScreen } from './components/LoadingScreen';
import { ProjectPanel } from './components/ProjectPanel';
import { defaultCameraPosition } from './data/projects';
import { usePortfolioStore } from './store/usePortfolioStore';

export default function App() {
  const setActiveProject = usePortfolioStore((state) => state.setActiveProject);

  return (
    <main className="app">
      <Canvas
        shadows
        camera={{ position: defaultCameraPosition, fov: 50 }}
        onPointerMissed={() => setActiveProject(null)}
      >
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      <ProjectPanel />
      <LoadingScreen />
    </main>
  );
}
