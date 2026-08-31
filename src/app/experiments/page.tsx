import Link from 'next/link';
import portfolioData from '@/data/portfolio.json';

export default function Experiments() {
  const { experiments } = portfolioData;

  return (
    <main className="grow overflow-hidden px-6 pb-20 md:pb-0">
      <div className="mx-auto max-w-xl py-24 sm:py-32">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Experiments & Research</h1>
        <p className="mt-4 text-[17px] leading-relaxed text-[var(--color-ink)]">
          Here is a collection of my research, experiments, and technical deep dives.
        </p>

        <section className="mt-16">
          {experiments.length > 0 ? (
            <ul className="mt-4 border-t border-[var(--color-line)]">
              {experiments.map((exp, index) => (
                <li key={index} className="border-b border-[var(--color-line)] py-5">
                  <div className="group flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                    <span className="font-medium text-lg text-black">{exp.title}</span>
                    <span className="shrink-0 text-sm tabular-nums text-[var(--color-mute)]">{exp.date}</span>
                  </div>
                  {exp.description && (
                    <div className="mt-2 text-[var(--color-mute)] leading-relaxed">
                      <p>{exp.description}</p>
                      {exp.slug && (
                        <Link href={`/experiments/${exp.slug}`} className="inline-block mt-3 text-[var(--color-blue)] u font-medium transition hover:text-black">
                          Read the full story &rarr;
                        </Link>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center text-[var(--color-mute)] border border-dashed border-[var(--color-line)] rounded-xl py-16 px-6 mt-4">
              <svg className="mx-auto h-12 w-12 opacity-50 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <p>Ready to add your research content via JSON.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
