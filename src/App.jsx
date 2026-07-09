const past = [
  'Member of Technical Staff Intern @ Ise AI',
  'AI Research Intern @ Modern Vision Planning',
  'Logistics @ Great Worldwide Logistics',
]

const school = ['University of Waterloo', 'CS + Finance']

const projects = [
  {
    id: 'school-fintech-software',
    label: 'School fintech software',
    detail: 'processed $14.8k+',
  },
  {
    id: 'eureka-hacks',
    label: '2nd place @ Eureka Hacks',
    detail:
      'built a piano tutor w/ audio extraction & OpenCV data pipelined into GenAI',
  },
  {
    id: 'projects-for-fun',
    label: 'Building projects for fun',
    detail: 'with Golang, Java, and more',
  },
]

const links = [
  {
    label: 'github',
    href: 'https://github.com/dzkchen',
  },
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/davidzekaichen/',
  },
  {
    label: 'x',
    href: 'https://x.com/czkdavid',
  },
]

function App() {
  return (
    <main className="page-shell">
      <header className="intro" aria-labelledby="site-title">
        <h1 id="site-title">David Chen</h1>
      </header>

      <section className="section" aria-labelledby="school-heading">
        <h2 id="school-heading">School</h2>
        <div className="text-list">
          {school.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="experiences-heading">
        <h2 id="experiences-heading">Experiences</h2>
        <div className="text-list">
          {past.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="projects-heading">
        <h2 id="projects-heading">Projects</h2>
        <div className="text-list">
          {projects.map((project) => (
            <p key={project.id}>
              <span className="project-label">{project.label}</span>{' '}
              <span>{project.detail}</span>
            </p>
          ))}
        </div>
      </section>

      <footer className="footer" aria-label="Contact links">
        <nav className="links" aria-label="Social links">
          {links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </nav>
        <a className="email" href="mailto:dzkchen@gmail.com">
          dzkchen@gmail.com
        </a>
      </footer>
    </main>
  )
}

export default App
