export function MatchmakerPermissionsPage() {
  return (
    <div className="h-full overflow-y-auto px-4 pb-4">{/* TopNavBar Component */}
  {/* Content Area */}
  <div className="p-10 max-w-6xl mx-auto w-full">
    <div className="flex items-end justify-between mb-12">
      <div>
        <h1 className="text-display-md font-extrabold text-white tracking-tight leading-none mb-2">Matchmaker Profile</h1>
        <p className="text-on-surface-variant text-body-md">Configure access and identity for premium onboarding.</p>
      </div>
      <div className="flex gap-4">
        <button className="px-6 py-2 border border-outline-variant/30 text-on-surface font-medium hover:bg-surface-container transition-all">Cancel</button>
        <button className="px-8 py-2 bg-gradient-to-br from-primary-fixed-dim to-primary-container text-on-primary font-bold shadow-lg shadow-primary-container/10">Save Record</button>
      </div>
    </div>
    {/* Bento Layout for Form */}
    <div className="grid grid-cols-12 gap-6">
      {/* Identity Section */}
      <div className="col-span-12 lg:col-span-8 bg-surface-container rounded-xl p-8 border-l-4 border-primary-container">
        <div className="flex items-center gap-2 mb-8">
          <span className="material-symbols-outlined text-primary-container">person_add</span>
          <h2 className="text-xl font-bold text-white">Basic Credentials</h2>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-2 md:col-span-1">
            <label className="block text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Full Legal Name</label>
            <input className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded py-3 px-4 text-on-surface focus:border-primary-container transition-colors focus:ring-0" placeholder="e.g. Miriam Steinberg" type="text" />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Primary Email Address</label>
            <input className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded py-3 px-4 text-on-surface focus:border-primary-container transition-colors focus:ring-0" placeholder="miriam@kesher-obsidian.com" type="email" />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Contact Phone</label>
            <input className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded py-3 px-4 text-on-surface focus:border-primary-container transition-colors focus:ring-0" placeholder="+1 (555) 000-0000" type="tel" />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Internal Title</label>
            <select className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded py-3 px-4 text-on-surface focus:border-primary-container transition-colors focus:ring-0 appearance-none">
              <option>Senior Matchmaker</option>
              <option>Associate Lead</option>
              <option>Success Manager</option>
            </select>
          </div>
        </div>
      </div>
      {/* Profile Image Card */}
      <div className="col-span-12 lg:col-span-4 bg-surface-container rounded-xl p-8 flex flex-col items-center justify-center text-center">
        <div className="relative group">
          <div className="w-32 h-32 rounded-full border-2 border-dashed border-outline-variant flex items-center justify-center overflow-hidden mb-4 bg-surface-container-lowest">
            <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-primary-container transition-colors">add_a_photo</span>
          </div>
          <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
            <span className="text-xs font-bold uppercase tracking-tighter">Upload Photo</span>
          </div>
        </div>
        <h3 className="text-white font-bold mb-1">Avatar Display</h3>
        <p className="text-xs text-on-surface-variant leading-relaxed">Required for internal portal visibility and client correspondence.</p>
      </div>
      {/* Permissions Checklist Section */}
      <div className="col-span-12 bg-surface-container rounded-xl p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container" style={{fontVariationSettings: '"FILL" 1'}}>verified_user</span>
            <h2 className="text-xl font-bold text-white">Permissions Checklist</h2>
          </div>
          <span className="text-[0.6875rem] font-bold text-primary-container bg-primary-container/10 px-3 py-1 rounded-full uppercase tracking-widest">Administrative Rights</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Permission Item */}
          <div className="flex items-start gap-4 p-5 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors group cursor-pointer border border-transparent hover:border-outline-variant/30">
            <div className="mt-1">
              <input className="w-5 h-5 rounded border-outline-variant/30 bg-surface-container-lowest text-primary-container focus:ring-0 focus:ring-offset-0" type="checkbox" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-primary-container transition-colors">View User Profiles</h4>
              <p className="text-xs text-on-surface-variant mt-1">Full read access to all candidate dossiers and historical data.</p>
            </div>
          </div>
          {/* Permission Item */}
          <div className="flex items-start gap-4 p-5 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors group cursor-pointer border border-transparent hover:border-outline-variant/30">
            <div className="mt-1">
              <input defaultChecked className="w-5 h-5 rounded border-outline-variant/30 bg-surface-container-lowest text-primary-container focus:ring-0 focus:ring-offset-0" type="checkbox" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-primary-container transition-colors">Approve New Profiles</h4>
              <p className="text-xs text-on-surface-variant mt-1">Authority to validate and activate pending client registrations.</p>
            </div>
          </div>
          {/* Permission Item */}
          <div className="flex items-start gap-4 p-5 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors group cursor-pointer border border-transparent hover:border-outline-variant/30">
            <div className="mt-1">
              <input className="w-5 h-5 rounded border-outline-variant/30 bg-surface-container-lowest text-primary-container focus:ring-0 focus:ring-offset-0" type="checkbox" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-primary-container transition-colors">Manage Team</h4>
              <p className="text-xs text-on-surface-variant mt-1">Invite new members and modify organizational roles.</p>
            </div>
          </div>
          {/* Permission Item */}
          <div className="flex items-start gap-4 p-5 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors group cursor-pointer border border-transparent hover:border-outline-variant/30">
            <div className="mt-1">
              <input className="w-5 h-5 rounded border-outline-variant/30 bg-surface-container-lowest text-primary-container focus:ring-0 focus:ring-offset-0" type="checkbox" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-primary-container transition-colors">Financial Reporting</h4>
              <p className="text-xs text-on-surface-variant mt-1">Export transaction logs and view commission breakdowns.</p>
            </div>
          </div>
          {/* Permission Item */}
          <div className="flex items-start gap-4 p-5 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors group cursor-pointer border border-transparent hover:border-outline-variant/30">
            <div className="mt-1">
              <input className="w-5 h-5 rounded border-outline-variant/30 bg-surface-container-lowest text-primary-container focus:ring-0 focus:ring-offset-0" type="checkbox" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-primary-container transition-colors">Match Finalization</h4>
              <p className="text-xs text-on-surface-variant mt-1">Confirm matches and move them to the Obsidian stage.</p>
            </div>
          </div>
          {/* Permission Item */}
          <div className="flex items-start gap-4 p-5 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors group cursor-pointer border border-transparent hover:border-outline-variant/30">
            <div className="mt-1">
              <input className="w-5 h-5 rounded border-outline-variant/30 bg-surface-container-lowest text-primary-container focus:ring-0 focus:ring-offset-0" type="checkbox" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-primary-container transition-colors">Content Moderation</h4>
              <p className="text-xs text-on-surface-variant mt-1">Edit or remove sensitive profile content and imagery.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Meta Info Section */}
      <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface-container-low rounded-xl p-6 flex items-center gap-4 border border-outline-variant/10">
          <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
            <span className="material-symbols-outlined">info</span>
          </div>
          <div>
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Last Modified</p>
            <p className="text-white font-medium">October 24, 2023 by Admin</p>
          </div>
        </div>
        <div className="bg-surface-container-low rounded-xl p-6 flex items-center gap-4 border border-outline-variant/10">
          <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-surface">
            <span className="material-symbols-outlined">security</span>
          </div>
          <div>
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Security Level</p>
            <p className="text-white font-medium">Tier 3 Obsidian Standard</p>
          </div>
        </div>
      </div>
    </div>
  </div></div>

  )
}
