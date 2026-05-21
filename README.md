# Interactive Portfolio Room

An interactive 3D portfolio room built with Vite, React, TypeScript, React Three Fiber, Drei, Three.js, and Zustand.

## Current Features

- Primitive 3D room with floor, walls, ceiling, desk, laptop, phone, poster, bookshelf, and door.
- Clickable portfolio objects backed by central project data.
- Smooth camera transitions to each selected object.
- Orbit controls while exploring, disabled while focused on a project.
- HTML project panel with title, description, tech badges, GitHub and Live links, and close action.
- Empty-space click clears the active project and returns the camera to the default view.
- Drei loading screen via `useProgress`.
- Drei environment lighting for extra scene polish.

## Project Structure

```txt
src/
  components/
    models/        Primitive interactive portfolio objects
    CameraRig.tsx  Smooth camera and target transitions
    Experience.tsx Three.js scene composition
    ProjectPanel.tsx
    Room.tsx
  data/
    projects.ts    Project metadata, camera positions, and panel links
  store/
    usePortfolioStore.ts
```

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Next Milestone

- Replace primitive object components with low-poly GLB models.
- Compress and inspect models with `gltf-pipeline`, `gltf.report`, or similar tooling.
- Add optional post-processing only if it improves the scene without hurting performance.
- Verify touch controls and panel layout across mobile viewport sizes.
- Deploy as a static Vite site.
