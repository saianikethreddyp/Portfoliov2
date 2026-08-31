import { notFound } from 'next/navigation';
import Link from 'next/link';
import portfolioData from '@/data/portfolio.json';

export default async function ExperimentDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const experiment = portfolioData.experiments.find(exp => exp.slug === resolvedParams.slug);

  if (!experiment) {
    notFound();
  }

  return (
    <main className="grow overflow-hidden px-6 pb-20 md:pb-0">
      <div className="mx-auto max-w-2xl py-24 sm:py-32">
        <Link href="/experiments" className="text-[var(--color-mute)] hover:text-black transition flex items-center gap-2 text-sm font-medium mb-12 w-fit">
          &larr; Back to Experiments
        </Link>
        
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">{experiment.title}</h1>
        <div className="mt-4 flex items-center gap-3 text-sm text-[var(--color-mute)]">
          <span className="font-medium bg-black/5 px-3 py-1 rounded-full">{experiment.date}</span>
          {experiment.link && (
            <a href={experiment.link} target="_blank" rel="noopener noreferrer" className="text-[var(--color-blue)] hover:text-black transition flex items-center gap-1 font-medium">
              Visit Live Site <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>

        <section className="mt-14">
          <h2 className="text-xl font-bold text-black mb-4">The Story</h2>
          <div className="space-y-4 text-[17px] leading-relaxed text-[var(--color-ink)]">
            {Array.isArray(experiment.story) 
              ? experiment.story.map((paragraph, index) => {
                  const htmlContent = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                  return <p key={index} dangerouslySetInnerHTML={{ __html: htmlContent }} />;
                })
              : <p>{experiment.story}</p>
            }
          </div>
        </section>

        {experiment.architecture && (
          <section className="mt-14">
            <h2 className="text-xl font-bold text-black mb-4">Architecture</h2>
            <div className="bg-[#111] rounded-2xl p-2 border border-[var(--color-line)] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={experiment.architecture} alt={`${experiment.title} Architecture`} className="w-full h-auto rounded-xl shadow-lg" />
            </div>
          </section>
        )}

        {experiment.figmaEmbed && (
          <section className="mt-14">
            <h2 className="text-xl font-bold text-black mb-4">Interactive Design</h2>
            <p className="text-[var(--color-mute)] mb-6 text-[15px]">
              Explore the live Figma prototype below. You can zoom, pan, and click through the frames.
            </p>
            <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-[var(--color-line)] bg-[#1e1e1e]">
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="100%"
                className="h-[400px] md:h-[600px]"
                src={experiment.figmaEmbed}
                allowFullScreen
              />
            </div>
          </section>
        )}

        {experiment.websites && experiment.websites.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl font-bold text-black mb-4">Live Client Projects</h2>
            <p className="text-[var(--color-mute)] mb-6 text-[15px]">
              Explore some of the live platforms we&apos;ve engineered. You can interact with them directly below.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* @ts-expect-error Typescript dynamic websites type */}
              {experiment.websites.map((site: any, index: number) => {
                const url = typeof site === 'string' ? site : site.url;
                const name = typeof site === 'string' ? url.replace('https://', '').replace(/\/$/, '') : site.name;
                const description = typeof site === 'string' ? '' : site.description;

                return (
                  <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="group flex flex-col p-6 rounded-2xl border border-[var(--color-line)] bg-black/[0.02] hover:bg-black/[0.05] transition-all hover:shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-black text-[17px]">{name}</h3>
                      <div className="w-8 h-8 rounded-full bg-white border border-[var(--color-line)] flex items-center justify-center text-[var(--color-mute)] group-hover:text-[var(--color-blue)] group-hover:border-[var(--color-blue)]/30 transition-colors shadow-sm">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      </div>
                    </div>
                    {description && <p className="text-[14px] text-[var(--color-mute)] leading-relaxed mb-4 flex-grow">{description}</p>}
                    <div className="text-xs font-medium text-[var(--color-mute)] group-hover:text-black transition-colors mt-auto flex items-center gap-1.5 truncate">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                      {url.replace('https://', '').replace(/\/$/, '')}
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
