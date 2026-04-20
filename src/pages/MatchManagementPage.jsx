export function MatchManagementPage() {
  return (
    <div className="h-full overflow-y-auto px-4 pb-4">{/* TopNavBar Component */}
  {/* Page Canvas */}
  <section className="p-8 overflow-x-auto flex-1 bg-[#0E0E0E]">
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white mb-1">Match Management</h1>
        <p className="text-on-surface-variant text-sm font-medium">Overseeing 24 active high-net-worth matchmaking cycles</p>
      </div>
      <div className="flex items-center bg-surface-container-low p-1 rounded-xl border border-outline-variant/10">
        <button className="px-4 py-2 rounded-lg bg-primary-container text-on-primary text-xs font-bold uppercase tracking-wider flex items-center">
          <span className="material-symbols-outlined text-sm mr-2" data-icon="grid_view">grid_view</span>
          Board View
        </button>
        <button className="px-4 py-2 rounded-lg text-[#A3A3A3] hover:text-white text-xs font-bold uppercase tracking-wider flex items-center transition-colors">
          <span className="material-symbols-outlined text-sm mr-2" data-icon="list">list</span>
          List View
        </button>
      </div>
    </div>
    {/* Kanban Board */}
    <div className="flex gap-6 pb-8 overflow-x-auto">
      {/* Column: New Matches */}
      <div className="kanban-column flex flex-col space-y-4">
        <div className="flex items-center justify-between px-2 mb-2">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#A3A3A3]">New Matches</h3>
          <span className="bg-surface-container-highest px-2 py-0.5 rounded text-[10px] font-bold text-primary-container">4</span>
        </div>
        <div className="flex-1 space-y-4">
          {/* Match Card */}
          <div className="group surface bg-surface-container border-l-2 border-primary-container/40 p-5 rounded-xl shadow-lg transition-all hover:scale-[1.02] cursor-grab active:cursor-grabbing">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary-container to-[#FDBB24] flex items-center justify-center text-[10px] font-black text-on-primary">JD</div>
                <span className="text-primary-container"><span className="material-symbols-outlined text-sm" data-icon="favorite" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>favorite</span></span>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-tertiary-container to-tertiary flex items-center justify-center text-[10px] font-black text-on-tertiary">SA</div>
              </div>
              <span className="text-[10px] text-on-surface-variant font-medium">ID: #8821</span>
            </div>
            <div className="space-y-4 mb-5">
              <div className="flex items-center justify-between">
                <div className="text-[11px]">
                  <p className="text-white font-bold">Julian D.</p>
                  <p className="text-[#A3A3A3]">34 • London • Cohen</p>
                </div>
                <div className="material-symbols-outlined text-outline text-xs" data-icon="sync_alt">sync_alt</div>
                <div className="text-[11px] text-right">
                  <p className="text-white font-bold">Sarah A.</p>
                  <p className="text-[#A3A3A3]">31 • London • Yes</p>
                </div>
              </div>
            </div>
            <button className="w-full py-2.5 rounded-lg border border-outline/30 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-colors">
              Log Initial Contact
            </button>
          </div>
        </div>
      </div>
      {/* Column: Contact Initiated */}
      <div className="kanban-column flex flex-col space-y-4">
        <div className="flex items-center justify-between px-2 mb-2">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#A3A3A3]">Contact Initiated</h3>
          <span className="bg-surface-container-highest px-2 py-0.5 rounded text-[10px] font-bold text-primary-container">3</span>
        </div>
        <div className="flex-1 space-y-4">
          {/* Match Card */}
          <div className="surface bg-surface-container p-5 rounded-xl shadow-lg border-l-2 border-transparent">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-black text-white">MK</div>
                <span className="text-on-surface-variant opacity-30"><span className="material-symbols-outlined text-sm" data-icon="favorite" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>favorite</span></span>
                <div className="h-8 w-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-black text-white">EL</div>
              </div>
              <span className="bg-primary-container/10 text-primary-container text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">Waiting for Sarah</span>
            </div>
            <div className="space-y-4 mb-5">
              <div className="flex items-center justify-between">
                <div className="text-[11px]">
                  <p className="text-white font-bold">Michael K.</p>
                  <p className="text-[#A3A3A3]">42 • New York • Cohen</p>
                </div>
                <div className="material-symbols-outlined text-outline text-xs" data-icon="sync_alt">sync_alt</div>
                <div className="text-[11px] text-right">
                  <p className="text-white font-bold">Elena L.</p>
                  <p className="text-[#A3A3A3]">38 • New Jersey • No</p>
                </div>
              </div>
            </div>
            <button className="w-full py-2.5 rounded-lg border border-outline/30 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-colors">
              Send Reminder
            </button>
          </div>
        </div>
      </div>
      {/* Column: First Date Scheduled */}
      <div className="kanban-column flex flex-col space-y-4">
        <div className="flex items-center justify-between px-2 mb-2">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#A3A3A3]">First Date Scheduled</h3>
          <span className="bg-surface-container-highest px-2 py-0.5 rounded text-[10px] font-bold text-primary-container">6</span>
        </div>
        <div className="flex-1 space-y-4">
          {/* Match Card High Priority */}
          <div className="surface bg-surface-container p-5 rounded-xl shadow-lg border-l-2 border-primary-container">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-black text-white">RB</div>
                <span className="text-primary-container"><span className="material-symbols-outlined text-sm" data-icon="favorite" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>favorite</span></span>
                <div className="h-8 w-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-black text-white">TM</div>
              </div>
              <div className="flex items-center space-x-1 text-primary-container">
                <span className="material-symbols-outlined text-sm" data-icon="event">event</span>
                <span className="text-[9px] font-bold">TONIGHT</span>
              </div>
            </div>
            <div className="space-y-4 mb-5">
              <div className="flex items-center justify-between">
                <div className="text-[11px]">
                  <p className="text-white font-bold">Robert B.</p>
                  <p className="text-[#A3A3A3]">29 • Tel Aviv • No</p>
                </div>
                <div className="material-symbols-outlined text-outline text-xs" data-icon="sync_alt">sync_alt</div>
                <div className="text-[11px] text-right">
                  <p className="text-white font-bold">Tali M.</p>
                  <p className="text-[#A3A3A3]">27 • Herzliya • No</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-2 rounded-lg text-[10px] italic text-[#A3A3A3] border border-outline-variant/10">
                "Reservations confirmed at Aria for 8:00 PM."
              </div>
            </div>
            <button className="w-full py-2.5 rounded-lg bg-primary-container/10 border border-primary-container/20 text-primary-container text-[10px] font-bold uppercase tracking-widest hover:bg-primary-container/20 transition-colors">
              Confirm Attendance
            </button>
          </div>
        </div>
      </div>
      {/* Column: Dating Process */}
      <div className="kanban-column flex flex-col space-y-4">
        <div className="flex items-center justify-between px-2 mb-2">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#A3A3A3]">Dating Process</h3>
          <span className="bg-surface-container-highest px-2 py-0.5 rounded text-[10px] font-bold text-primary-container">8</span>
        </div>
        <div className="flex-1 space-y-4">
          {/* Match Card */}
          <div className="surface bg-surface-container p-5 rounded-xl shadow-lg border-l-2 border-transparent">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-black text-white">AL</div>
                <span className="text-primary-container"><span className="material-symbols-outlined text-sm" data-icon="favorite" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>favorite</span></span>
                <div className="h-8 w-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-black text-white">DW</div>
              </div>
              <div className="text-[9px] font-bold text-tertiary uppercase">3rd Date</div>
            </div>
            <div className="space-y-4 mb-5">
              <div className="flex items-center justify-between">
                <div className="text-[11px]">
                  <p className="text-white font-bold">Avi L.</p>
                  <p className="text-[#A3A3A3]">36 • Miami • Cohen</p>
                </div>
                <div className="material-symbols-outlined text-outline text-xs" data-icon="sync_alt">sync_alt</div>
                <div className="text-[11px] text-right">
                  <p className="text-white font-bold">Dani W.</p>
                  <p className="text-[#A3A3A3]">33 • Miami • No</p>
                </div>
              </div>
            </div>
            <button className="w-full py-2.5 rounded-lg border border-outline/30 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-colors">
              Log Feedback
            </button>
          </div>
        </div>
      </div>
      {/* Column: Final Decision */}
      <div className="kanban-column flex flex-col space-y-4">
        <div className="flex items-center justify-between px-2 mb-2">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#A3A3A3]">Final Decision</h3>
          <span className="bg-surface-container-highest px-2 py-0.5 rounded text-[10px] font-bold text-primary-container">3</span>
        </div>
        <div className="flex-1 space-y-4">
          {/* Match Card Closing */}
          <div className="surface bg-surface-container p-5 rounded-xl shadow-lg border-l-2 border-transparent relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-5">
              <span className="material-symbols-outlined text-6xl" data-icon="handshake">handshake</span>
            </div>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-black text-white">NM</div>
                <span className="text-primary-container animate-pulse"><span className="material-symbols-outlined text-sm" data-icon="favorite" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>favorite</span></span>
                <div className="h-8 w-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-black text-white">SY</div>
              </div>
            </div>
            <div className="space-y-4 mb-5">
              <div className="flex items-center justify-between">
                <div className="text-[11px]">
                  <p className="text-white font-bold">Noah M.</p>
                  <p className="text-[#A3A3A3]">30 • Paris • No</p>
                </div>
                <div className="material-symbols-outlined text-outline text-xs" data-icon="sync_alt">sync_alt</div>
                <div className="text-[11px] text-right">
                  <p className="text-white font-bold">Sophie Y.</p>
                  <p className="text-[#A3A3A3]">28 • Paris • Yes</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-primary-container text-[11px] font-black uppercase tracking-widest">Exclusivity Requested</p>
              </div>
            </div>
            <button className="w-full py-2.5 rounded-lg bg-primary-container text-on-primary text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-md">
              Finalize Success
            </button>
          </div>
        </div>
      </div>
    </div>
  </section></div>

  )
}
