import Link from 'next/link';
import portfolioData from '@/data/portfolio.json';
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiPostgresql, SiFastapi, SiPython } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import type { ReactNode } from 'react';

const iconMap: Record<string, ReactNode> = {
  "React": <SiReact className="text-[#61DAFB] text-xl shrink-0" />,
  "Next.js": <SiNextdotjs className="text-[var(--color-ink)] text-xl shrink-0" />,
  "Node.js": <SiNodedotjs className="text-[#339933] text-xl shrink-0" />,
  "AWS": <FaAws className="text-[#FF9900] text-xl shrink-0" />,
  "MongoDB": <SiMongodb className="text-[#47A248] text-xl shrink-0" />,
  "PostgreSQL": <SiPostgresql className="text-[#4169E1] text-xl shrink-0" />,
  "FastAPI": <SiFastapi className="text-[#009688] text-xl shrink-0" />,
  "Python": <SiPython className="text-[#3776AB] text-xl shrink-0" />
};

export default function Home() {
  const { personal, experience, projects, skills, experiments } = portfolioData;
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <main className="grow overflow-hidden px-6 pb-20 md:pb-0" id="home">
      <div className="mx-auto max-w-xl py-24 sm:py-32">
        
        {/* Intro */}
        <p className="font-medium text-[var(--color-mute)]">{personal.name}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl leading-[1.15]">
          {personal.titleLine1}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{personal.titleLine2}</span>{" "}
          {personal.titleLine3}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{personal.titleLine4}</span>
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-[var(--color-ink)]">
          {personal.intro}
        </p>

        {/* Socials */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-[var(--color-mute)]">
          {personal.socials.github && (
            <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-[var(--color-blue)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z"></path></svg>
            </a>
          )}
          {personal.socials.x && (
            <a href={personal.socials.x} target="_blank" rel="noopener noreferrer" aria-label="X" className="transition hover:text-[var(--color-blue)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"></path></svg>
            </a>
          )}
          {personal.socials.linkedin && (
            <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-[var(--color-blue)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33 0-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z"></path></svg>
            </a>
          )}
          {personal.socials.email && (
            <a href={personal.socials.email} aria-label="Email" className="transition hover:text-[var(--color-blue)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m2 7 10 6 10-6"></path></svg>
            </a>
          )}
        </div>

        {/* Experience & Story */}
        <section className="mt-14" id="experience">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-mute)] mb-4">Experience & Story</h2>
          <ul className="list-disc space-y-3 pl-5 leading-relaxed text-[var(--color-ink)] marker:text-[var(--color-mute)]">
            {experience.map((item, index) => {
              const htmlContent = item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              return (
                <li key={index} dangerouslySetInnerHTML={{ __html: htmlContent }} />
              );
            })}
          </ul>
        </section>

        {/* Superpowers */}
        <section className="mt-14" id="skills">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-mute)] mb-4">Superpowers</h2>
          <div className="flex flex-wrap gap-3">
            {skills && skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--color-line)] bg-black/5 hover:bg-black/10 transition group cursor-default">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white border border-[var(--color-line)] shadow-sm group-hover:scale-110 transition-transform">
                  {iconMap[skill]}
                </div>
                <span className="font-medium text-[14px] text-[var(--color-ink)]">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mt-16" id="projects">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-mute)]">Projects</h2>
          <ul className="mt-4">
            {featuredProjects.map((project, index) => (
              <li key={index} className="py-2.5">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="u font-semibold text-lg">{project.title}</a>
                ) : (
                  <span className="u font-semibold text-lg">{project.title}</span>
                )}
                <span className="text-[var(--color-mute)] block mt-1 leading-snug">  
                  {project.shortDescription}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/projects" className="text-[var(--color-blue)] u font-medium transition hover:text-black">
              View all projects &rarr;
            </Link>
          </div>
        </section>

        {/* Experiments */}
        <section className="mt-16" id="experiments">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-mute)] mb-6">Research & Labs</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {experiments.map((exp, index) => (
              <Link key={index} href={`/experiments/${exp.slug}`} className="group relative rounded-2xl border border-[var(--color-line)] bg-black/[0.03] p-6 transition-all hover:bg-black/[0.06] hover:shadow-sm overflow-hidden flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-blue)] mb-2">{exp.date}</span>
                <h3 className="text-[17px] font-bold text-black mb-2 leading-snug">{exp.title.split(':')[0]}</h3>
                <p className="text-[14px] text-[var(--color-mute)] leading-relaxed flex-grow line-clamp-3">
                  {exp.description}
                </p>
                <div className="mt-4 pt-4 border-t border-[var(--color-line)]/50 text-sm font-medium text-black group-hover:text-[var(--color-blue)] transition-colors flex items-center gap-1.5">
                  Explore Case Study <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/experiments" className="text-[var(--color-blue)] u font-medium transition hover:text-black">
              View all experiments &rarr;
            </Link>
          </div>
        </section>

        {/* GitHub Contributions */}
        <section className="mt-14">
          <div className="overflow-x-auto rounded-xl border border-[var(--color-line)] p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://ghchart.rshah.org/2f6bff/saianikethreddyp" alt={`${personal.name}'s GitHub contribution graph`} loading="lazy" className="h-auto w-full min-w-[620px] max-w-none" />
          </div>
          <p className="mt-2 text-sm text-[var(--color-mute)]">
            (always building)
          </p>
        </section>

        <footer className="mt-20 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--color-mute)]">
          <a href={personal.socials.email} className="u">Contact Me</a>
          <span>© {new Date().getFullYear()} {personal.name.split(' ')[0]} {personal.name.split(' ')[1]}</span>
        </footer>

      </div>
    </main>
  );
}
