import { create } from 'zustand';

type PortfolioState = {
  activeProject: string | null;
  setActiveProject: (projectId: string | null) => void;
};

export const usePortfolioStore = create<PortfolioState>((set) => ({
  activeProject: null,
  setActiveProject: (projectId) => set({ activeProject: projectId }),
}));
