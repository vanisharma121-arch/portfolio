import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-head-center">
        <div className="section-eyebrow reveal">Portfolio</div>
        <h2 className="section-title reveal">My Latest Projects</h2>
        <p className="section-sub reveal">
          A snapshot of the most meaningful research and marketing work I've shipped.
        </p>
      </div>

      <div className="proj-grid">
        {projects.map((project) => (
          <div className={`proj-card ${project.color} reveal`} key={project.num}>
            <span className="proj-big">{project.emoji}</span>
            <span className="proj-deco">↗</span>
            <div className="proj-num">{project.num}</div>
            <h3 className="proj-name">{project.name}</h3>
            <p className="proj-sub">{project.sub}</p>
            <div className="proj-tags">
              {project.tags.map((tag) => (
                <span className="proj-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
