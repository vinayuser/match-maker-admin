export function MatchmakerTeamPage() {
  return (
    <div className="h-full overflow-y-auto px-4 pb-4">{/* Page Header */}
  <div className="flex justify-between items-end mb-10">
    <div>
      <nav className="flex items-center space-x-2 text-[10px] text-outline font-bold tracking-widest uppercase mb-2">
        <span>Admin</span>
        <span className="material-symbols-outlined text-[12px]" data-icon="chevron_right">chevron_right</span>
        <span className="text-primary-container">Team</span>
      </nav>
      <h2 className="text-4xl font-extrabold tracking-tighter text-white">Matchmaker Team</h2>
    </div>
    <button className="bg-primary-container text-on-primary font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary-container/10">
      <span className="material-symbols-outlined text-lg" data-icon="person_add">person_add</span>
      <span className="text-sm uppercase tracking-wider font-extrabold">Add Matchmaker</span>
    </button>
  </div>
  {/* Dashboard Stats Row */}
  <div className="grid grid-cols-4 gap-6 mb-8">
    <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
      <p className="text-outline text-[10px] font-bold tracking-widest uppercase mb-1">Total Agents</p>
      <p className="text-3xl font-black text-white tracking-tighter">24</p>
    </div>
    <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
      <p className="text-outline text-[10px] font-bold tracking-widest uppercase mb-1">Average Success</p>
      <p className="text-3xl font-black text-primary-container tracking-tighter">88.4%</p>
    </div>
    <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
      <p className="text-outline text-[10px] font-bold tracking-widest uppercase mb-1">Active Cases</p>
      <p className="text-3xl font-black text-white tracking-tighter">142</p>
    </div>
    <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
      <p className="text-outline text-[10px] font-bold tracking-widest uppercase mb-1">Team Efficiency</p>
      <p className="text-3xl font-black text-white tracking-tighter">+12%</p>
    </div>
  </div>
  {/* Data Table Section */}
  <div className="bg-surface-container rounded-xl overflow-hidden border border-outline-variant/10 shadow-2xl">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-surface-container-low border-b border-outline-variant/20">
            <th className="py-4 px-6 text-[10px] font-bold text-outline uppercase tracking-[0.15em]">Name</th>
            <th className="py-4 px-6 text-[10px] font-bold text-outline uppercase tracking-[0.15em]">Email</th>
            <th className="py-4 px-6 text-[10px] font-bold text-outline uppercase tracking-[0.15em]">Phone</th>
            <th className="py-4 px-6 text-[10px] font-bold text-outline uppercase tracking-[0.15em]">Assigned Cases</th>
            <th className="py-4 px-6 text-[10px] font-bold text-outline uppercase tracking-[0.15em]">Success Rate</th>
            <th className="py-4 px-6 text-[10px] font-bold text-outline uppercase tracking-[0.15em]">Status</th>
            <th className="py-4 px-6 text-[10px] font-bold text-outline uppercase tracking-[0.15em]">Permissions</th>
            <th className="py-4 px-6 text-[10px] font-bold text-outline uppercase tracking-[0.15em] text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant/5">
          {/* Table Row 1 */}
          <tr className="group hover:bg-white/[0.02] transition-colors">
            <td className="py-4 px-6">
              <div className="flex items-center gap-3">
                <img className="w-8 h-8 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="professional businesswoman headshot with confident expression, minimalist dark background, high contrast lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcgTo6IQh5FtTlzIUhMtiMws0GngUDUciBBsCnA8njCXukrsO7RwxNQ0XUQFyjFtxyBRIacU07WTEeZBCKP3fXiIMNykZLCdUvcyQXyX7h6BSjLTzozcpqQmJJHxbiG6e4ogRLCyXBDpZuU8x36ibRnQrOwAPX12IuhDP8HScJ4veE3bdUc0T3mukRkmWpLz10NsvNH_nxtkKabdudBrIfRcQ7mcXDCuvxOZxGgXZo69yQXIYOY0qZZzMfdINBD90NWTymjNLuqx4" />
                <span className="font-bold text-white text-sm">Alexandra Sterling</span>
              </div>
            </td>
            <td className="py-4 px-6 text-sm text-outline">a.sterling@kesher.com</td>
            <td className="py-4 px-6 text-sm text-outline">+1 212 555 0192</td>
            <td className="py-4 px-6">
              <a className="text-primary-container text-sm font-semibold hover:underline flex items-center gap-1" href="javascript:void(0)">
                12 Active <span className="material-symbols-outlined text-[14px]" data-icon="open_in_new">open_in_new</span>
              </a>
            </td>
            <td className="py-4 px-6">
              <div className="w-32">
                <div className="flex justify-between mb-1">
                  <span className="text-[10px] font-bold text-white">94%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary-container" style={{width: '94%'}} />
                </div>
              </div>
            </td>
            <td className="py-4 px-6">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-tighter bg-primary-container/10 text-primary-container">
                <span className="w-1 h-1 rounded-full bg-primary-container" /> Active
              </span>
            </td>
            <td className="py-4 px-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-lowest rounded-lg border border-outline-variant/30 w-fit cursor-pointer hover:border-primary-container transition-colors">
                <span className="text-xs font-semibold">Senior</span>
                <span className="material-symbols-outlined text-xs text-outline" data-icon="expand_more">expand_more</span>
              </div>
            </td>
            <td className="py-4 px-6 text-right">
              <div className="flex items-center justify-end gap-2">
                <button className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors text-outline hover:text-white">
                  <span className="material-symbols-outlined" data-icon="edit">edit</span>
                </button>
                <button className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors text-outline hover:text-error">
                  <span className="material-symbols-outlined" data-icon="delete">delete</span>
                </button>
              </div>
            </td>
          </tr>
          {/* Table Row 2 */}
          <tr className="group hover:bg-white/[0.02] transition-colors">
            <td className="py-4 px-6">
              <div className="flex items-center gap-3">
                <img className="w-8 h-8 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="modern businessman headshot, sharp focus on eyes, dark neutral studio setting with dramatic shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdzm_89pPZ3SkLp0ltZwT6BIBqn5wTkosfEjgLiIkifu-52JQ4RAFSU2rSINtnyw7RmelvseMaz_lEhZFUw14trv0wiVA2gw4nopgaRpWKn0bXNWSR3pD0BkvFUm8asA0cL3_GRxsxIZ_ia7nR6iqnIRGi6_636vxynlfqTxb9WBF18BF0iI4wQ_Kpw8oxoxoRA2ropq3XNeb1gmAAfHD-oolFD98X4cM6x89RK3sgW57GtdQCnCd5dwkFhDeD2ntAhWZc81cTBSE" />
                <span className="font-bold text-white text-sm">Julian Montgomery</span>
              </div>
            </td>
            <td className="py-4 px-6 text-sm text-outline">j.mont@kesher.com</td>
            <td className="py-4 px-6 text-sm text-outline">+1 212 555 0148</td>
            <td className="py-4 px-6">
              <a className="text-primary-container text-sm font-semibold hover:underline flex items-center gap-1" href="javascript:void(0)">
                8 Active <span className="material-symbols-outlined text-[14px]" data-icon="open_in_new">open_in_new</span>
              </a>
            </td>
            <td className="py-4 px-6">
              <div className="w-32">
                <div className="flex justify-between mb-1">
                  <span className="text-[10px] font-bold text-white">82%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary-container" style={{width: '82%'}} />
                </div>
              </div>
            </td>
            <td className="py-4 px-6">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-tighter bg-primary-container/10 text-primary-container">
                <span className="w-1 h-1 rounded-full bg-primary-container" /> Active
              </span>
            </td>
            <td className="py-4 px-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-lowest rounded-lg border border-outline-variant/30 w-fit cursor-pointer hover:border-primary-container transition-colors">
                <span className="text-xs font-semibold">Standard</span>
                <span className="material-symbols-outlined text-xs text-outline" data-icon="expand_more">expand_more</span>
              </div>
            </td>
            <td className="py-4 px-6 text-right">
              <div className="flex items-center justify-end gap-2">
                <button className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors text-outline hover:text-white">
                  <span className="material-symbols-outlined" data-icon="edit">edit</span>
                </button>
                <button className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors text-outline hover:text-error">
                  <span className="material-symbols-outlined" data-icon="delete">delete</span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="py-4 px-6 border-t border-outline-variant/20 bg-surface-container-low flex justify-between items-center">
      <p className="text-xs text-outline">Showing 2 of 24 matchmakers</p>
      <div className="flex gap-2">
        <button className="px-3 py-1 border border-outline-variant/30 rounded text-xs text-outline hover:text-white hover:border-white transition-all">Previous</button>
        <button className="px-3 py-1 border border-primary-container rounded text-xs text-primary-container font-bold">1</button>
        <button className="px-3 py-1 border border-outline-variant/30 rounded text-xs text-outline hover:text-white hover:border-white transition-all">2</button>
        <button className="px-3 py-1 border border-outline-variant/30 rounded text-xs text-outline hover:text-white hover:border-white transition-all">Next</button>
      </div>
    </div>
  </div></div>

  )
}
