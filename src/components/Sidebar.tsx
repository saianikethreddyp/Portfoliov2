import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="fixed bottom-0 left-0 z-50 h-16 w-full border-t border-[var(--color-line)] bg-white/70 backdrop-blur-lg md:sticky md:top-0 md:h-screen md:w-48 md:shrink-0 md:border-t-0 md:border-r">
      <div className="flex h-full w-full flex-row items-center justify-evenly md:flex-col md:items-start md:justify-start md:gap-2 md:px-5 md:pt-8">
        
        <Link href="/" className="group flex items-center gap-3 rounded-lg px-2 py-2 transition-[color,background-color,scale] duration-150 active:scale-[0.96] md:w-full md:justify-between md:py-2.5 text-[var(--color-mute)] hover:bg-black/[0.03] hover:text-[var(--color-ink)]">
          <span className="hidden text-[15px] font-medium md:inline">Home</span>
          <span className="grid h-5 w-5 shrink-0 place-items-center">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" width="19" height="19">
              <path fillOpacity=".16" d="M4 7v11h13V7l-6.5-5z"></path>
              <path d="m10.433 3.242-8.837 6.56L.404 8.198l10.02-7.44L20.59 8.194l-1.18 1.614-8.977-6.565ZM16 17V9h2v10H3V9h2v8h11Z"></path>
            </svg>
          </span>
        </Link>
        
        <Link href="/#experience" className="group flex items-center gap-3 rounded-lg px-2 py-2 transition-[color,background-color,scale] duration-150 active:scale-[0.96] md:w-full md:justify-between md:py-2.5 text-[var(--color-mute)] hover:bg-black/[0.03] hover:text-[var(--color-ink)]">
          <span className="hidden text-[15px] font-medium md:inline">Experience</span>
          <span className="grid h-5 w-5 shrink-0 place-items-center">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" strokeWidth="1.5" stroke="currentColor">
              <path fillOpacity=".16" fillRule="nonzero" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"></path>
            </svg>
          </span>
        </Link>

        <Link href="/projects" className="group flex items-center gap-3 rounded-lg px-2 py-2 transition-[color,background-color,scale] duration-150 active:scale-[0.96] md:w-full md:justify-between md:py-2.5 text-[var(--color-mute)] hover:bg-black/[0.03] hover:text-[var(--color-ink)]">
          <span className="hidden text-[15px] font-medium md:inline">Projects</span>
          <span className="grid h-5 w-5 shrink-0 place-items-center">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="19" height="19">
              <path fillOpacity=".16" d="M1 4h18v10H1z"></path>
              <path d="M8 3h4V2H8v1ZM6 3V0h8v3h6v12H0V3h6ZM2 5v8h16V5H2Zm14 13v-2h2v4H2v-4h2v2h12Z"></path>
            </svg>
          </span>
        </Link>

        <Link href="/experiments" className="group flex items-center gap-3 rounded-lg px-2 py-2 transition-[color,background-color,scale] duration-150 active:scale-[0.96] md:w-full md:justify-between md:py-2.5 text-[var(--color-mute)] hover:bg-black/[0.03] hover:text-[var(--color-ink)]">
          <span className="hidden text-[15px] font-medium md:inline">Experiments</span>
          <span className="grid h-5 w-5 shrink-0 place-items-center">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="19" height="19">
              <path fillOpacity=".16" d="M6 3h8v3L10 9 6 6zM4 18l5-10h2l5 10H4z"></path>
              <path d="M6 3h8v2H6zm1.3 3.5l1.6 2 2.5-4h-5zM15.5 18H4.5l3.5-7h4l3.5 7z"></path>
            </svg>
          </span>
        </Link>

      </div>
    </div>
  );
}
