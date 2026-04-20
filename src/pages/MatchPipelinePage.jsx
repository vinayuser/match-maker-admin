export function MatchPipelinePage() {
  return (
    <div className="h-full overflow-y-auto px-4 pb-4"><div className="flex-1 p-8 overflow-y-auto max-w-7xl mx-auto w-full">
    <div className="mb-12 flex justify-between items-end">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">Match Pipeline History</h1>
        <p className="text-on-surface-variant max-w-lg">Tracking the journey of <span className="text-primary">Sarah Jenkins</span> and <span className="text-primary">David Miller</span>. Obsidian-tier matching status: <span className="text-[#F5B41A] font-semibold">High Compatibility</span>.</p>
      </div>
      <div className="flex gap-4">
        <button className="bg-surface-container hover:bg-surface-container-high text-on-surface px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border border-outline-variant/20">Export PDF</button>
        <button className="metallic-shine text-on-primary px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg transition-transform hover:scale-[1.02]">Schedule Next Step</button>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8">
        <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-4 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-primary-container before:via-outline-variant/50 before:to-transparent">
          <div className="relative mb-12">
            <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-primary-container ring-8 ring-primary-container/10" />
            <div className="glass-panel p-6 rounded-2xl border border-outline-variant/20 shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="label-sm text-on-surface-variant font-bold uppercase tracking-widest text-[0.6875rem]">Date 3 — Complete</span>
                  <h3 className="text-xl font-bold text-white mt-1">Evening Gallery &amp; Dinner</h3>
                </div>
                <div className="bg-surface-container-high px-3 py-1 rounded-full text-xs text-primary-container font-semibold">Oct 24, 2023</div>
              </div>
              <div className="flex gap-8 mb-6">
                <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-lg" data-icon="location_on">location_on</span>
                  The Obsidian Gallery, Chelsea
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-lg" data-icon="restaurant">restaurant</span>
                  L'Artisan Paris
                </div>
              </div>
              <p className="text-on-surface/80 text-sm leading-relaxed mb-6">
                Highly positive connection. Conversation flowed naturally regarding shared interests in contemporary art and international travel. Both parties expressed strong interest in a fourth meeting.
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-outline-variant/10 pt-6">
                <div>
                  <div className="text-[0.6rem] uppercase tracking-widest text-on-surface-variant mb-1">Energy Match</div>
                  <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                    <div className="h-full bg-primary-container w-[92%]" />
                  </div>
                </div>
                <div>
                  <div className="text-[0.6rem] uppercase tracking-widest text-on-surface-variant mb-1">Communication</div>
                  <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                    <div className="h-full bg-primary-container w-[88%]" />
                  </div>
                </div>
                <div>
                  <div className="text-[0.6rem] uppercase tracking-widest text-on-surface-variant mb-1">Outcome</div>
                  <div className="text-xs font-bold text-primary">Progress to L4</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mb-12 opacity-80">
            <div className="absolute -left-10 top-2 w-3 h-3 rounded-full bg-outline-variant ring-4 ring-outline-variant/10" />
            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="label-sm text-on-surface-variant font-bold uppercase tracking-widest text-[0.6875rem]">Date 2 — Complete</span>
                  <h3 className="text-lg font-bold text-white mt-1">Riverside Walk &amp; Coffee</h3>
                </div>
                <div className="text-xs text-on-surface-variant">Oct 12, 2023</div>
              </div>
              <p className="text-on-surface/70 text-sm italic">"A comfortable afternoon session focusing on family values and professional ambitions."</p>
            </div>
          </div>
          <div className="relative opacity-60">
            <div className="absolute -left-10 top-2 w-3 h-3 rounded-full bg-outline-variant ring-4 ring-outline-variant/10" />
            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="label-sm text-on-surface-variant font-bold uppercase tracking-widest text-[0.6875rem]">Date 1 — Complete</span>
                  <h3 className="text-lg font-bold text-white mt-1">Introduction &amp; Drinks</h3>
                </div>
                <div className="text-xs text-on-surface-variant">Sep 28, 2023</div>
              </div>
              <p className="text-on-surface/70 text-sm">Initial spark confirmed. Physical chemistry 8.5/10.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-4 space-y-8">
        <div className="bg-surface-container p-8 rounded-3xl border border-outline-variant/20 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary-container" data-icon="auto_awesome">auto_awesome</span>
            Schedule Next Step
          </h2>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant">Pipeline Stage</label>
              <div className="relative">
                <select className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface appearance-none focus:ring-1 focus:ring-primary-container outline-none transition-all">
                  <option>Date 4: Intimate Setting</option>
                  <option>Date 5: Value Alignment</option>
                  <option>Exclusive Transition</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant">Proposed Date</label>
              <div className="relative">
                <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary-container outline-none transition-all" type="date" />
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">calendar_today</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant">Venue / Location</label>
              <div className="relative">
                <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary-container outline-none transition-all" placeholder="Search Obsidian-approved venues..." type="text" />
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">search</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant">Concierge Notes</label>
              <textarea className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary-container outline-none transition-all resize-none" placeholder="Briefing for participants..." rows={4} defaultValue={""} />
            </div>
            <button className="w-full metallic-shine py-4 rounded-xl text-on-primary font-extrabold text-sm uppercase tracking-widest shadow-lg shadow-primary-container/10 transition-all hover:shadow-primary-container/20 active:scale-[0.98]" type="submit">
              Confirm Scheduling
            </button>
          </form>
        </div>
        <div className="bg-surface-container p-6 rounded-3xl border border-outline-variant/10">
          <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Location Preview</h4>
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-outline-variant/20 mb-4 bg-surface-container-lowest">
            <img alt="Map" className="w-full h-full object-cover grayscale opacity-60 contrast-125" data-alt="Stylized dark mode map interface of Manhattan with golden pin indicators and elegant minimalist typography" data-location="New York City" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCctlhejezVW4ZQUUoA0Xr46LZCcwF7TRZy2zS4DerFlcq2mQ5DQ_xJqS84EGR60CMhMb2SBtFiUzvQhCjd9nijf8YwGZlU23Nm75vwXOMS3qViQr0Cs0fMaX7DT7cHuJWkWAz4p2AZ4fVgmgTTsgEDpcQB_3L69KN8a-GdyhnwSL9s_5PekJDn_tFhb0inmKH8uGXtZvhoa3Fb0CIyR1CTg0KlJMnmeSdBRvE_0nKYAxumP_KLaJegEKtt6dnWd6UvDELMc8d9bKg" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-container">near_me</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white">Skyline Lounge</div>
                <div className="text-xs text-on-surface-variant">Private Terrace Access</div>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-white transition-colors">open_in_new</span>
          </div>
        </div>
      </div>
    </div>
  </div></div>

  )
}
