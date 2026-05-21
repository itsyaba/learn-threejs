import { projects } from '../data/projects';
import { usePortfolioStore } from '../store/usePortfolioStore';

export function ProjectPanel() {
  const activeProject = usePortfolioStore((state) => state.activeProject);
  const setActiveProject = usePortfolioStore((state) => state.setActiveProject);
  const project = projects.find((item) => item.id === activeProject);

  if (!project) {
    return null;
  }

  return (
    <aside className="project-panel" aria-live="polite" aria-label="Project details">
      <button
        className="project-panel__close"
        type="button"
        aria-label="Close project details"
        onClick={() => setActiveProject(null)}
      >
        x
      </button>
      <p className="project-panel__section">{project.section}</p>
      <h2 className="project-panel__title">{project.title}</h2>
      <p className="project-panel__description">{project.description}</p>
      <div className="project-panel__badges" aria-label="Tech stack">
        {project.techStack.map((tech) => (
          <span className="project-panel__badge" key={tech}>
            {tech}
          </span>
        ))}
      </div>
      <div className="project-panel__links">
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          Live
        </a>
      </div>
    </aside>
  );
}
