export function CaseFileDetailPage() {
  return (
    <div className="h-full overflow-y-auto px-4 pb-4">{/* TopNavBar */}
  <div className="p-8 max-w-7xl mx-auto">
    {/* Header Section */}
    <div className="mb-10 flex items-end justify-between">
      <div>
        <nav className="flex mb-4 text-[#A3A3A3] text-xs font-bold tracking-widest uppercase">
          <span>Pipeline</span>
          <span className="mx-2">/</span>
          <span className="text-primary-container">Active Match</span>
        </nav>
        <h1 className="text-4xl font-extrabold tracking-tight text-white">Case File: Julian Thorne &amp; Seraphina Vance</h1>
      </div>
      <div className="flex gap-4">
        <button className="bg-surface-container hover:bg-surface-container-highest text-white px-6 py-2.5 rounded-xl border border-outline-variant/20 transition-all font-semibold text-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">print</span> Export Dossier
        </button>
        <button className="metallic-gradient text-on-primary px-6 py-2.5 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">handshake</span> Finalize Outcome
        </button>
      </div>
    </div>
    {/* Bento Grid Layout */}
    <div className="grid grid-cols-12 gap-6">
      {/* Left Column: Profiles & Compatibility */}
      <div className="col-span-12 lg:col-span-5 space-y-6">
        {/* Compatibility Score Card */}
        <div className="bg-surface-container p-8 rounded-full flex items-center justify-between border-l-4 border-primary-container relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div>
            <p className="label-sm text-[#A3A3A3] font-bold tracking-widest uppercase mb-1">Algorithm Confidence</p>
            <h3 className="text-2xl font-bold text-white">Elite Match Grade</h3>
          </div>
          <div className="relative w-24 h-24 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx={48} cy={48} fill="transparent" r={40} stroke="rgba(245, 180, 26, 0.1)" strokeWidth={6} />
              <circle cx={48} cy={48} fill="transparent" r={40} stroke="#F5B41A" strokeDasharray="251.2" strokeDashoffset={30} strokeLinecap="round" strokeWidth={6} />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-black text-primary-container text-xl tracking-tighter">88%</span>
          </div>
        </div>
        {/* Profile Summaries */}
        <div className="grid grid-cols-1 gap-6">
          {/* Male Profile */}
          <div className="bg-surface-container rounded-xl overflow-hidden shadow-2xl transition-transform hover:-translate-y-1">
            <div className="h-48 relative">
              <img className="w-full h-full object-cover" data-alt="refined handsome man in his 30s wearing a tailored midnight blue blazer, standing in an elegant library with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAllXwkBm_sn2jv2byxnbgO0ZO9BWAhc0gu4FrqQgsizlpCjpFNiarcv-kMqeqLx3yzN0GSuBbOyeH968mxSDIlhLJGz1uAp8VBGzbORhpeNpCas5fY-X--IsGxPTybrrXn2-PXSH7ggnhH_16EO3PgLrFbPBfofOmBxoZH4JT4iKAxa-_vG_wBJ7tWPc5knOyCK2b0Hh_ChF_fGRZqz3-nD9r_0o9qgbENF7kTv5xqrFsyhaQD5119Y0hLyVfrmBLJNo3Vt75RITQ" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-surface-container to-transparent">
                <h4 className="text-xl font-bold text-white">Julian Thorne, 34</h4>
                <p className="text-primary-container text-sm font-semibold">Venture Capitalist</p>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-lowest px-3 py-1 text-[10px] font-bold text-[#A3A3A3] uppercase tracking-wider rounded border border-outline-variant/20">Classical Music</span>
                <span className="bg-surface-container-lowest px-3 py-1 text-[10px] font-bold text-[#A3A3A3] uppercase tracking-wider rounded border border-outline-variant/20">Equitation</span>
                <span className="bg-surface-container-lowest px-3 py-1 text-[10px] font-bold text-[#A3A3A3] uppercase tracking-wider rounded border border-outline-variant/20">Aries</span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">Highly ambitious, seeks a partner who appreciates intellectual discourse and has a strong sense of autonomy.</p>
              <button className="w-full py-2 bg-surface-container-lowest hover:bg-surface-container-highest text-[#A3A3A3] text-xs font-bold uppercase tracking-widest rounded-lg border border-outline-variant/10 transition-colors">View Full Dossier</button>
            </div>
          </div>
          {/* Female Profile */}
          <div className="bg-surface-container rounded-xl overflow-hidden shadow-2xl transition-transform hover:-translate-y-1">
            <div className="h-48 relative">
              <img className="w-full h-full object-cover" data-alt="elegant young woman with dark hair in a silk emerald gown, soft dramatic lighting, luxury interior background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUAotf-fd53PsqEtD66byy8FKso5vDUUlccj0hxasFiLuAy9CP52V3vFufOSozDMmmP09tJ3LVdamKHJcT_uPM1Ku-Q0syM6TLrrOyjih-hnckZk8KQEFej4S6FldfMkcl5PZPA9PbK7rGCNRUXaSOY_gUFrm0Yt68EFr6aCSRy6yIzcAqDFFI7lnYDCU_RQmqwql_-W0o8-yBhS2vcRc7dhkuUXwAAEsqeUKLTvBxfBfiYnlAE4sXO7pEUUyw43Slart4uCd2EVw" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-surface-container to-transparent">
                <h4 className="text-xl font-bold text-white">Seraphina Vance, 29</h4>
                <p className="text-primary-container text-sm font-semibold">Art Curator</p>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-lowest px-3 py-1 text-[10px] font-bold text-[#A3A3A3] uppercase tracking-wider rounded border border-outline-variant/20">Contemporary Art</span>
                <span className="bg-surface-container-lowest px-3 py-1 text-[10px] font-bold text-[#A3A3A3] uppercase tracking-wider rounded border border-outline-variant/20">Philosophy</span>
                <span className="bg-surface-container-lowest px-3 py-1 text-[10px] font-bold text-[#A3A3A3] uppercase tracking-wider rounded border border-outline-variant/20">Leo</span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">Sophisticated and observant. Values creative expression and a deep understanding of legacy and heritage.</p>
              <button className="w-full py-2 bg-surface-container-lowest hover:bg-surface-container-highest text-[#A3A3A3] text-xs font-bold uppercase tracking-widest rounded-lg border border-outline-variant/10 transition-colors">View Full Dossier</button>
            </div>
          </div>
        </div>
      </div>
      {/* Right Column: Case Timeline & Actions */}
      <div className="col-span-12 lg:col-span-7 space-y-6">
        {/* Action Bar */}
        <div className="bg-surface-container-high p-4 rounded-xl flex items-center gap-3 shadow-xl border border-outline-variant/10">
          <button className="flex-1 bg-surface-container-lowest hover:bg-surface-container-highest text-white p-4 rounded-lg flex flex-col items-center gap-2 transition-all">
            <span className="material-symbols-outlined text-primary-container">edit_note</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#A3A3A3]">Log Activity</span>
          </button>
          <button className="flex-1 bg-surface-container-lowest hover:bg-surface-container-highest text-white p-4 rounded-lg flex flex-col items-center gap-2 transition-all">
            <span className="material-symbols-outlined text-primary-container">calendar_month</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#A3A3A3]">Schedule Step</span>
          </button>
          <button className="flex-1 bg-surface-container-lowest hover:bg-surface-container-highest text-white p-4 rounded-lg flex flex-col items-center gap-2 transition-all">
            <span className="material-symbols-outlined text-primary-container">contact_page</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#A3A3A3]">Contact Info</span>
          </button>
          <button className="flex-1 bg-surface-container-lowest hover:bg-surface-container-highest text-white p-4 rounded-lg flex flex-col items-center gap-2 transition-all">
            <span className="material-symbols-outlined text-primary-container">priority_high</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#A3A3A3]">Mark Urgent</span>
          </button>
        </div>
        {/* Case Timeline */}
        <div className="bg-surface p-8 rounded-xl border border-outline-variant/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-white tracking-tight">Activity Stream</h3>
            <span className="text-[10px] font-bold text-primary-container uppercase tracking-[0.2em] bg-primary-container/10 px-3 py-1 rounded">Real-time Update</span>
          </div>
          <div className="relative space-y-12">
            {/* Vertical line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-outline-variant/20" />
            {/* Timeline Item: Date Scheduled */}
            <div className="relative flex gap-6">
              <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center z-10 shadow-[0_0_15px_rgba(245,180,26,0.3)]">
                <span className="material-symbols-outlined text-on-primary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>calendar_today</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-white font-bold">Third Date Scheduled</h4>
                  <span className="text-[10px] font-bold text-[#A3A3A3] uppercase tracking-widest">Oct 24, 2023</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-3">Dinner at 'Le Bernardin', Manhattan. Private cellar reservation confirmed. Concierge has arranged transport.</p>
                <div className="flex gap-2">
                  <span className="bg-surface-container-highest text-[10px] px-2 py-0.5 rounded text-primary-container font-bold border border-primary-container/20">Action Required</span>
                </div>
              </div>
            </div>
            {/* Timeline Item: Contacted */}
            <div className="relative flex gap-6">
              <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-white text-sm">chat_bubble</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-white font-bold">Follow-up Call: Seraphina</h4>
                  <span className="text-[10px] font-bold text-[#A3A3A3] uppercase tracking-widest">Oct 20, 2023</span>
                </div>
                <p className="text-sm text-on-surface-variant">Confirmed positive feedback from the second meeting. She appreciates Julian's attention to detail regarding her recent exhibition.</p>
              </div>
            </div>
            {/* Timeline Item: Matched */}
            <div className="relative flex gap-6">
              <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-white text-sm">link</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-white font-bold">Mutual Match Confirmed</h4>
                  <span className="text-[10px] font-bold text-[#A3A3A3] uppercase tracking-widest">Oct 15, 2023</span>
                </div>
                <p className="text-sm text-on-surface-variant">Both parties reviewed dossiers and expressed high interest. Initial introduction handled by Lead Matchmaker.</p>
              </div>
            </div>
            {/* Timeline Item: Discovery */}
            <div className="relative flex gap-6">
              <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-white text-sm">search</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-white font-bold">Case Initialized</h4>
                  <span className="text-[10px] font-bold text-[#A3A3A3] uppercase tracking-widest">Oct 12, 2023</span>
                </div>
                <p className="text-sm text-on-surface-variant">System identified core value alignment and lifestyle synergy across 42 data points.</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-12 py-4 border border-outline-variant/20 rounded-xl text-xs font-bold text-[#A3A3A3] uppercase tracking-[0.3em] hover:bg-surface-container hover:text-white transition-all">Load Archive History</button>
        </div>
      </div>
    </div>
  </div></div>

  )
}
