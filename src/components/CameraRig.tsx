import { useFrame } from '@react-three/fiber';
import type { RefObject } from 'react';
import { useEffect, useMemo, useRef } from 'react';
import { Vector3 } from 'three';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import {
  defaultCameraPosition,
  defaultCameraTarget,
  projects,
} from '../data/projects';
import { usePortfolioStore } from '../store/usePortfolioStore';

type CameraRigProps = {
  controlsRef: RefObject<OrbitControlsImpl | null>;
};

const cameraPosition = new Vector3();
const cameraTarget = new Vector3();

export function CameraRig({ controlsRef }: CameraRigProps) {
  const activeProject = usePortfolioStore((state) => state.activeProject);
  const isTransitioning = useRef(false);
  const projectById = useMemo(
    () => new Map(projects.map((project) => [project.id, project])),
    [],
  );

  useEffect(() => {
    isTransitioning.current = true;
  }, [activeProject]);

  useFrame(({ camera }, delta) => {
    if (!isTransitioning.current) {
      return;
    }

    const project = activeProject ? projectById.get(activeProject) : null;
    const nextPosition = project?.cameraPosition ?? defaultCameraPosition;
    const nextTarget = project?.cameraTarget ?? defaultCameraTarget;
    const smoothing = 1 - Math.exp(-delta * 3.8);

    cameraPosition.fromArray(nextPosition);
    cameraTarget.fromArray(nextTarget);

    camera.position.lerp(cameraPosition, smoothing);
    controlsRef.current?.target.lerp(cameraTarget, smoothing);
    controlsRef.current?.update();

    const cameraSettled = camera.position.distanceTo(cameraPosition) < 0.015;
    const targetSettled =
      !controlsRef.current ||
      controlsRef.current.target.distanceTo(cameraTarget) < 0.015;

    if (cameraSettled && targetSettled) {
      camera.position.copy(cameraPosition);
      controlsRef.current?.target.copy(cameraTarget);
      controlsRef.current?.update();
      isTransitioning.current = false;
    }
  });

  return null;
}
