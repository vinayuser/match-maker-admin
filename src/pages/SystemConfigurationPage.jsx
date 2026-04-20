export function SystemConfigurationPage() {
  return (
    <div className="h-full overflow-y-auto px-4 pb-4"><div className="max-w-5xl mx-auto">
    {/* Page Header */}
    <div className="flex justify-between items-end mb-12">
      <div>
        <span className="text-primary-container text-[10px] font-black uppercase tracking-[0.4em]">Administration</span>
        <h2 className="text-4xl font-black text-white tracking-tighter mt-1">System Configuration</h2>
        <p className="text-on-surface-variant text-sm mt-2 font-medium">Fine-tune the halachic logic and global behavioral parameters of the Kesher engine.</p>
      </div>
      <div className="flex gap-4">
        <button className="px-6 py-2 border border-outline-variant/30 text-on-surface-variant font-semibold text-xs uppercase tracking-widest hover:bg-surface-container transition-all">Cancel</button>
        <button className="px-8 py-2 bg-primary-container text-on-primary font-bold text-xs uppercase tracking-widest shadow-[0_10px_20px_rgba(245,180,26,0.1)] hover:scale-105 transition-all">Save Changes</button>
      </div>
    </div>
    {/* Settings Grid */}
    <div className="grid grid-cols-12 gap-8">
      {/* Section 1: Halachic Rules */}
      <div className="col-span-12 lg:col-span-7 bg-surface border border-outline-variant/10 rounded-xl p-8 space-y-8">
        <div className="flex items-center space-x-3 mb-2">
          <span className="material-symbols-outlined text-primary-container text-2xl" data-icon="menu_book">menu_book</span>
          <h3 className="text-lg font-bold text-white tracking-tight">Halachic Rules Engine</h3>
        </div>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-6 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors group">
            <div>
              <h4 className="text-on-surface font-semibold text-sm">Block Divorced Women for Kohanim</h4>
              <p className="text-xs text-[#A3A3A3] mt-1">Automatically flags and prevents matches between Cohanim and women with a status of 'Divorced'.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input defaultChecked className="sr-only peer" type="checkbox" />
              <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#A3A3A3] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container peer-checked:after:bg-on-primary" />
            </label>
          </div>
          <div className="flex items-center justify-between p-6 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors group">
            <div>
              <h4 className="text-on-surface font-semibold text-sm">Block Widows for Kohanim</h4>
              <p className="text-xs text-[#A3A3A3] mt-1">Stricter validation for Kohanim Gadolim lineage checks (Custom Advisory Setting).</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input className="sr-only peer" type="checkbox" />
              <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#A3A3A3] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container peer-checked:after:bg-on-primary" />
            </label>
          </div>
        </div>
      </div>
      {/* Section 2 & 3: Radius & Behavior */}
      <div className="col-span-12 lg:col-span-5 space-y-8">
        {/* Matching Radius */}
        <div className="bg-surface border border-outline-variant/10 rounded-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <span className="material-symbols-outlined text-primary-container text-2xl" data-icon="distance">distance</span>
            <h3 className="text-lg font-bold text-white tracking-tight">Geographic Bounds</h3>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <span className="text-xs font-bold text-on-surface uppercase tracking-widest">Matching Radius</span>
              <span className="text-xl font-black text-primary-container">50 KM</span>
            </div>
            <input className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary-container" max={500} min={5} type="range" defaultValue={50} />
            <div className="flex justify-between text-[10px] text-[#A3A3A3] font-bold uppercase tracking-widest">
              <span>5 KM</span>
              <span>Global (500 KM)</span>
            </div>
          </div>
        </div>
        {/* Lock Behavior */}
        <div className="bg-surface border border-outline-variant/10 rounded-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <span className="material-symbols-outlined text-primary-container text-2xl" data-icon="lock_person">lock_person</span>
            <h3 className="text-lg font-bold text-white tracking-tight">Access Control</h3>
          </div>
          <div className="p-4 rounded-lg bg-surface-container-low border-l-2 border-primary-container">
            <div className="flex items-start justify-between">
              <div className="pr-4">
                <h4 className="text-on-surface font-semibold text-sm">Auto-lock on mutual match</h4>
                <p className="text-[11px] text-[#A3A3A3] mt-1 leading-relaxed">Once a pair mutually accepts a match, their profiles are hidden from the discovery pool automatically.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer shrink-0">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="w-10 h-5 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#A3A3A3] after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container peer-checked:after:bg-on-primary" />
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Section 4: Branding */}
      <div className="col-span-12 bg-surface border border-outline-variant/10 rounded-xl p-8">
        <div className="flex items-center space-x-3 mb-8">
          <span className="material-symbols-outlined text-primary-container text-2xl" data-icon="palette">palette</span>
          <h3 className="text-lg font-bold text-white tracking-tight">Identity &amp; Branding</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Logo Upload */}
          <div className="space-y-4">
            <label className="text-xs font-bold text-[#A3A3A3] uppercase tracking-[0.2em]">Application Logo</label>
            <div className="border-2 border-dashed border-outline-variant/20 rounded-xl p-12 flex flex-col items-center justify-center bg-surface-container-lowest hover:border-primary-container/40 transition-all cursor-pointer group">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:scale-110 transition-transform mb-4" data-icon="cloud_upload">cloud_upload</span>
              <p className="text-sm font-semibold text-on-surface">Upload vector logo</p>
              <p className="text-[11px] text-on-surface-variant mt-1">SVG, PNG or WEBP (Max 2MB)</p>
            </div>
          </div>
          {/* Brand Colors */}
          <div className="space-y-6">
            <div className="space-y-4">
              <label className="text-xs font-bold text-[#A3A3A3] uppercase tracking-[0.2em]">Primary Interface Color</label>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-primary-container shadow-[0_0_20px_rgba(245,180,26,0.3)] border-4 border-surface ring-1 ring-outline-variant/20" />
                <div className="flex-1">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-on-surface-variant">#</span>
                    <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg py-3 pl-8 text-sm font-mono text-white focus:ring-1 focus:ring-primary-container" type="text" defaultValue="F5B41A" />
                  </div>
                  <p className="text-[10px] text-on-surface-variant mt-2 font-medium italic">Active brand accent: Kesher Gold</p>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-outline-variant/10">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary-container text-sm" data-icon="info">info</span>
                <p className="text-[11px] text-on-surface-variant">Changing the brand color will update all global accent tokens immediately across the portal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Meta */}
    <div className="mt-12 flex items-center justify-between opacity-40">
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#A3A3A3]">Version 4.2.0-Alpha • High-Density Control</p>
      <div className="flex space-x-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#A3A3A3]">Security Level: 10</span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#A3A3A3]">Last Audit: 2h ago</span>
      </div>
    </div>
  </div></div>

  )
}
