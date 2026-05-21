import { useProgress } from '@react-three/drei';

export function LoadingScreen() {
  const { active, progress } = useProgress();

  if (!active) {
    return null;
  }

  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="loading-screen__bar">
        <span style={{ width: `${progress}%` }} />
      </div>
      <p>{Math.round(progress)}%</p>
    </div>
  );
}
