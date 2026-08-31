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
          {/* @ts-expect-error Typescript doesn't know about dynamic link field */}
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

        {/* @ts-expect-error Typescript doesn't know about dynamic websites array */}
        {experiment.websites && experiment.websites.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl font-bold text-black mb-4">Live Client Projects</h2>
            <p className="text-[var(--color-mute)] mb-6 text-[15px]">
              Explore some of the live platforms we&apos;ve engineered. You can interact with them directly below.
            </p>
            <div className="flex flex-col gap-10">
              {/* @ts-expect-error Typescript doesn't know about dynamic websites array */}
              {experiment.websites.map((url, index) => (
                <div key={index} className="w-full rounded-2xl overflow-hidden shadow-xl border border-[var(--color-line)] bg-white">
                  <div className="bg-gray-100 border-b border-[var(--color-line)] px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="mx-auto bg-white border border-gray-200 text-xs text-gray-500 hover:text-black hover:border-gray-300 transition-colors rounded-md px-3 py-1 truncate max-w-[300px] flex items-center gap-1.5" title="Open in new tab">
                      {url.replace('https://', '').replace(/\/$/, '')}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  </div>
                  <iframe
                    style={{ border: "none" }}
                    width="100%"
                    className="h-[400px] md:h-[600px]"
                    src={url}
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
