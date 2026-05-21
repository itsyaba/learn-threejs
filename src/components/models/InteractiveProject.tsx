import type { ThreeEvent } from '@react-three/fiber';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { usePortfolioStore } from '../../store/usePortfolioStore';

type InteractiveProjectProps = {
  projectId: string;
  children: (hovered: boolean) => ReactNode;
};

export function InteractiveProject({
  projectId,
  children,
}: InteractiveProjectProps) {
  const [hovered, setHovered] = useState(false);
  const setActiveProject = usePortfolioStore((state) => state.setActiveProject);

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setActiveProject(projectId);
  };

  const handlePointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setHovered(true);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setHovered(false);
    document.body.style.cursor = '';
  };

  return (
    <group
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      {children(hovered)}
    </group>
  );
}
