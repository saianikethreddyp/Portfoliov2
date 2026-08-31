import portfolioData from '@/data/portfolio.json';

const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z"></path></svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
);

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <main className="grow overflow-hidden px-6 pb-20 md:pb-0">
      <div className="mx-auto max-w-xl py-24 sm:py-32">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">All Projects</h1>
        <p className="mt-4 text-[17px] leading-relaxed text-[var(--color-ink)]">
          A comprehensive list of everything I&apos;ve built, from SaaS platforms and AI agents to freelance business solutions.
        </p>

        <section className="mt-16">
          <ul className="mt-4 flex flex-col gap-10">
            {projects.map((project, index) => (
              <li key={index} className="group flex gap-5 items-start">
                
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--color-line)] bg-white shadow-sm text-black transition-transform group-hover:scale-105">
                    {project.icon === 'github' ? <GithubIcon /> : <GlobeIcon />}
                  </a>
                ) : (
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--color-line)] bg-white shadow-sm text-black transition-transform group-hover:scale-105">
                    {project.icon === 'github' ? <GithubIcon /> : <GlobeIcon />}
                  </div>
                )}

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-lg text-black u">{project.title}</a>
                    ) : (
                      <span className="font-semibold text-lg text-black">{project.title}</span>
                    )}
                  </div>
                  <span className="text-[var(--color-mute)] block mt-2 leading-snug">  
                    {project.description}
                  </span>
                </div>
              </li>
            ))}

            {/* Empty State Note */}
            <li className="mt-8 text-center text-[var(--color-mute)] border border-dashed border-[var(--color-line)] rounded-xl py-12 px-6">
              <svg className="mx-auto h-8 w-8 opacity-40 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <p>More projects loading up dynamically via JSON...</p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
