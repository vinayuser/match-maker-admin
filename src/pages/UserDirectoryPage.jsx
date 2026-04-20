export function UserDirectoryPage() {
  return (
    <div className="h-full overflow-y-auto px-4 pb-4">{/* TopNavBar */}
  {/* Content Canvas */}
  <section className="flex-1 overflow-y-auto p-8 space-y-8">
    {/* Page Header / Filter Bar */}
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white mb-1">User Directory</h2>
        <p className="text-[#A3A3A3] text-sm">Managing <span className="text-primary-container">1,248</span> active members in the obsidian network.</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex bg-surface-container rounded-xl p-1">
          <button className="px-4 py-1.5 text-xs font-bold text-on-primary bg-primary-container rounded-lg">All Users</button>
          <button className="px-4 py-1.5 text-xs font-bold text-[#A3A3A3] hover:text-white transition-colors">Verified</button>
          <button className="px-4 py-1.5 text-xs font-bold text-[#A3A3A3] hover:text-white transition-colors">Pending</button>
        </div>
        <button className="px-4 py-2 border border-[#9D8F79]/30 text-white text-xs font-bold rounded-xl hover:bg-[#201F1F] transition-all flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">filter_list</span>
          Advanced Filters
        </button>
        <button className="px-4 py-2 bg-white text-black text-xs font-bold rounded-xl hover:bg-gray-200 transition-all">
          Export CSV
        </button>
      </div>
    </div>
    {/* Bento Data Table */}
    <div className="bg-surface-container rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/10">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-surface-container-low border-b border-outline-variant/10">
            <th className="px-6 py-4 text-[0.6875rem] uppercase tracking-widest text-[#A3A3A3] font-bold">Member</th>
            <th className="px-6 py-4 text-[0.6875rem] uppercase tracking-widest text-[#A3A3A3] font-bold">Identity</th>
            <th className="px-6 py-4 text-[0.6875rem] uppercase tracking-widest text-[#A3A3A3] font-bold">Spiritual Tier</th>
            <th className="px-6 py-4 text-[0.6875rem] uppercase tracking-widest text-[#A3A3A3] font-bold">Vitals</th>
            <th className="px-6 py-4 text-[0.6875rem] uppercase tracking-widest text-[#A3A3A3] font-bold text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant/10">
          {/* User Row 1 */}
          <tr className="hover:bg-[#2a2a2a]/40 transition-colors group">
            <td className="px-6 py-5">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all border border-outline-variant/20" data-alt="portrait of a confident woman with short hair in a minimalist dark studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI34GLHXMwHGFPttBs5jmP0vq8CwHzN1zVN8qrWDGQrdUbs2im0iwibq7PjG9ZvTotnDaoRsuDqUnvZzaD12JSJDJlZgUW_QEnAwbE-x-lzob_tdO595v1KClKoH34BOE4nAAIYrVkA0M05695e4fIRR2Q40O2pVoEt0KMfUi_plHCVrfyT9_ty2HDVpncA6HNjuL__m1-WrKaEzhgyLSwN3fajDYMuaFxA7xS5Gg1k4uBw52-Ki3_oXzfN4fob2iVNul6H4v1pws" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#10b981] rounded-full border-2 border-surface" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Sarah Bernstein</p>
                  <p className="text-[0.7rem] text-[#A3A3A3]">Joined Oct 2023</p>
                </div>
              </div>
            </td>
            <td className="px-6 py-5">
              <p className="text-sm font-medium text-white">s•••••n@domain.com</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[0.8rem] text-primary-container" style={{fontVariationSettings: '"FILL" 1'}}>verified</span>
                <span className="text-[0.65rem] text-primary-container font-bold uppercase tracking-tight">Level III Verified</span>
              </div>
            </td>
            <td className="px-6 py-5">
              <span className="gold-pill px-3 py-1 rounded-full text-[0.65rem] font-black text-on-primary uppercase tracking-tighter">Gold Tier</span>
            </td>
            <td className="px-6 py-5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(245,180,26,0.5)]" />
                <p className="text-xs font-semibold text-on-surface">Active Listing</p>
              </div>
            </td>
            <td className="px-6 py-5">
              <div className="flex items-center justify-end gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-highest text-[#A3A3A3] hover:text-white transition-all">
                  <span className="material-symbols-outlined text-lg">visibility</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-highest text-[#A3A3A3] hover:text-white transition-all">
                  <span className="material-symbols-outlined text-lg">edit</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-error/10 text-error/60 hover:text-error transition-all">
                  <span className="material-symbols-outlined text-lg">lock</span>
                </button>
              </div>
            </td>
          </tr>
          {/* User Row 2 */}
          <tr className="hover:bg-[#2a2a2a]/40 transition-colors group">
            <td className="px-6 py-5">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all border border-outline-variant/20" data-alt="modern portrait of a young man with beard and clean style in a urban setting with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR8bpX58O7zISXpOE_S4GDbPCTc2QlCLldRgd9PjpbVP0tbCizlbo8-YU77rMTbnb34PTHhZXmaje2LXxgroYG8W8xBwSse6OYA2t0d28FUYtOQWmfSzEzENBKvSrdZOqdiLS51VnBTzZS9ViECb9hD1yg_2-E9kGkDtjeQgVtBGJKGoRtrw01-DQWmen6BD0ymEqwu9lFL5PDl_eyulg8UMcj4ziscU9orpW5S2LZEaIs0W_72fkYCnZWBBRL5_qh5nhhJwxYJQI" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-surface" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">David Goldman</p>
                  <p className="text-[0.7rem] text-[#A3A3A3]">Joined Sep 2023</p>
                </div>
              </div>
            </td>
            <td className="px-6 py-5">
              <p className="text-sm font-medium text-white">d•••••n@provider.net</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[0.8rem] text-[#A3A3A3]">info</span>
                <span className="text-[0.65rem] text-[#A3A3A3] font-bold uppercase tracking-tight">Identity Pending</span>
              </div>
            </td>
            <td className="px-6 py-5">
              <span className="bg-surface-container-highest px-3 py-1 rounded-full text-[0.65rem] font-black text-[#A3A3A3] border border-outline-variant/30 uppercase tracking-tighter">Silver Tier</span>
            </td>
            <td className="px-6 py-5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <p className="text-xs font-semibold text-on-surface">In Review</p>
              </div>
            </td>
            <td className="px-6 py-5">
              <div className="flex items-center justify-end gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-highest text-[#A3A3A3] hover:text-white transition-all">
                  <span className="material-symbols-outlined text-lg">visibility</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-highest text-[#A3A3A3] hover:text-white transition-all">
                  <span className="material-symbols-outlined text-lg">edit</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-error/10 text-error/60 hover:text-error transition-all">
                  <span className="material-symbols-outlined text-lg">lock</span>
                </button>
              </div>
            </td>
          </tr>
          {/* User Row 3 */}
          <tr className="hover:bg-[#2a2a2a]/40 transition-colors group">
            <td className="px-6 py-5">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all border border-outline-variant/20" data-alt="portrait of a professional woman with glasses and intelligent expression in editorial lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc14U-FudAyhsmhv8-ymWvb25W3ChOve6qdUwdpmmlXJ-OuRcRWfowsDNIJVSY_i8KUzsjTXmY4GELMou8_2r6qdeFQ8J3eUsC3maTw8FLZIQQQLX04wXyLSWe07ITWgf8SrFFalr84mQbej_Iwpn4v_3M7bs4TgWqA6AMTsPHUvyjo9gqawbyUAGj-tTbF1ktW9yYehjwWj_D_NlIhNXyb0sOKd-FeQBGgS7sd7NigeieP35OiOqh0Xw0tbterrGWoCg5WU3PZsQ" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-error rounded-full border-2 border-surface" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Rivka Levy</p>
                  <p className="text-[0.7rem] text-[#A3A3A3]">Joined Jan 2024</p>
                </div>
              </div>
            </td>
            <td className="px-6 py-5">
              <p className="text-sm font-medium text-white">r•••••y@enterprise.co</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[0.8rem] text-primary-container" style={{fontVariationSettings: '"FILL" 1'}}>verified</span>
                <span className="text-[0.65rem] text-primary-container font-bold uppercase tracking-tight">Level II Verified</span>
              </div>
            </td>
            <td className="px-6 py-5">
              <span className="gold-pill px-3 py-1 rounded-full text-[0.65rem] font-black text-on-primary uppercase tracking-tighter">Gold Tier</span>
            </td>
            <td className="px-6 py-5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-error" />
                <p className="text-xs font-semibold text-on-surface">On Hold</p>
              </div>
            </td>
            <td className="px-6 py-5">
              <div className="flex items-center justify-end gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-highest text-[#A3A3A3] hover:text-white transition-all">
                  <span className="material-symbols-outlined text-lg">visibility</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-highest text-[#A3A3A3] hover:text-white transition-all">
                  <span className="material-symbols-outlined text-lg">edit</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-error text-on-error transition-all">
                  <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: '"FILL" 1'}}>lock_open</span>
                </button>
              </div>
            </td>
          </tr>
          {/* User Row 4 */}
          <tr className="hover:bg-[#2a2a2a]/40 transition-colors group">
            <td className="px-6 py-5">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all border border-outline-variant/20" data-alt="portrait of an older man with gray hair and warm smile in a well lit room with soft depth of field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd6khaxjV4_kKqT0k0YtGkfw8FPDK-xCf-nyenXV8h52DBdoEQwb6QweB_GUXoVHTzzisgPyn63MTHBKNISlU7ELnHSHVGUk0XYCxQAwgTHK2DIaZR4L4A1JYy6rxVTAxtswhHIZzHV9M9a1Uf5EtKhV4KV-p30FfrUOFjO74-68IlS4J4j6JphNRTZVT1tunF0XCVq8C6Wky_JiGT3dY5Ax7kj-9e8ptpQpagw2VCFwwFus6UEDy3YRbKsZ_R3bgby7TIHpVlG8I" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#10b981] rounded-full border-2 border-surface" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Aaron Fried</p>
                  <p className="text-[0.7rem] text-[#A3A3A3]">Joined Dec 2023</p>
                </div>
              </div>
            </td>
            <td className="px-6 py-5">
              <p className="text-sm font-medium text-white">a•••••d@domain.com</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[0.8rem] text-primary-container" style={{fontVariationSettings: '"FILL" 1'}}>verified</span>
                <span className="text-[0.65rem] text-primary-container font-bold uppercase tracking-tight">Level III Verified</span>
              </div>
            </td>
            <td className="px-6 py-5">
              <span className="gold-pill px-3 py-1 rounded-full text-[0.65rem] font-black text-on-primary uppercase tracking-tighter">Gold Tier</span>
            </td>
            <td className="px-6 py-5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(245,180,26,0.5)]" />
                <p className="text-xs font-semibold text-on-surface">Active Listing</p>
              </div>
            </td>
            <td className="px-6 py-5">
              <div className="flex items-center justify-end gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-highest text-[#A3A3A3] hover:text-white transition-all">
                  <span className="material-symbols-outlined text-lg">visibility</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-highest text-[#A3A3A3] hover:text-white transition-all">
                  <span className="material-symbols-outlined text-lg">edit</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-error/10 text-error/60 hover:text-error transition-all">
                  <span className="material-symbols-outlined text-lg">lock</span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Pagination */}
      <div className="px-6 py-4 bg-surface-container-low flex items-center justify-between border-t border-outline-variant/10">
        <p className="text-[0.6875rem] font-medium text-[#A3A3A3]">Showing 1-10 of 1,248 results</p>
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-[#A3A3A3] hover:bg-surface-container-highest transition-all">
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-container text-on-primary font-bold text-xs">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-[#A3A3A3] hover:bg-surface-container-highest transition-all text-xs">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-[#A3A3A3] hover:bg-surface-container-highest transition-all text-xs">3</button>
          <span className="text-[#A3A3A3] mx-1">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-[#A3A3A3] hover:bg-surface-container-highest transition-all text-xs">125</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-[#A3A3A3] hover:bg-surface-container-highest transition-all">
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
    {/* Dashboard Quick Insights (Bento Tiles) */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-5 flex flex-col gap-1">
        <p className="text-[0.6rem] uppercase tracking-widest text-[#A3A3A3] font-bold">Verification Rate</p>
        <div className="flex items-end gap-3 mt-2">
          <span className="text-3xl font-black text-white tracking-tighter">84.2%</span>
          <span className="text-[0.65rem] text-primary-container font-bold mb-1">+1.2% Δ</span>
        </div>
      </div>
      <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-5 flex flex-col gap-1">
        <p className="text-[0.6rem] uppercase tracking-widest text-[#A3A3A3] font-bold">New Registrations</p>
        <div className="flex items-end gap-3 mt-2">
          <span className="text-3xl font-black text-white tracking-tighter">42</span>
          <span className="text-[0.65rem] text-[#A3A3A3] font-bold mb-1">Last 24h</span>
        </div>
      </div>
      <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-5 flex flex-col gap-1">
        <p className="text-[0.6rem] uppercase tracking-widest text-[#A3A3A3] font-bold">Active Matches</p>
        <div className="flex items-end gap-3 mt-2">
          <span className="text-3xl font-black text-primary-container tracking-tighter">112</span>
          <span className="text-[0.65rem] text-[#A3A3A3] font-bold mb-1">Across Tiers</span>
        </div>
      </div>
      <div className="bg-primary-container rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group cursor-pointer transition-transform active:scale-95">
        <div className="z-10">
          <p className="text-[0.6rem] uppercase tracking-widest text-on-primary font-black">Admin Support</p>
          <p className="text-sm font-bold text-on-primary mt-1">Audit Log Required?</p>
        </div>
        <span className="material-symbols-outlined absolute -bottom-2 -right-2 text-7xl text-on-primary/10 group-hover:scale-110 transition-transform">history_edu</span>
        <button className="bg-on-primary text-primary-container text-[0.6rem] font-black uppercase px-2 py-1 rounded w-fit mt-4 z-10">Generate Report</button>
      </div>
    </div>
  </section></div>

  )
}
