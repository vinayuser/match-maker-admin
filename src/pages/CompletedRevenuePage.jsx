export function CompletedRevenuePage() {
  return (
    <div className="h-full overflow-y-auto px-4 pb-4">{/* TopNavBar Shell */}
  {/* Content Area */}
  <div className="p-8 overflow-y-auto">
    {/* Page Header */}
    <div className="flex justify-between items-end mb-10">
      <div className="space-y-1">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#F5B41A]">Audit Dashboard</span>
        <h2 className="text-4xl font-extrabold tracking-tight text-white">Completed Cycles &amp; Revenue</h2>
        <p className="text-[#A3A3A3] text-sm max-w-lg">Monitor historical match success rates and financial reconciliations for the current fiscal quarter.</p>
      </div>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#0E0E0E] border border-outline/30 text-white rounded-lg text-sm font-semibold hover:bg-surface-container-high transition-all">
          <span className="material-symbols-outlined text-lg" data-icon="download">download</span>
          Export Report
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#FDBB24] to-[#F5B41A] text-[#412D00] rounded-lg text-sm font-bold shadow-[0_8px_24px_-8px_rgba(245,180,26,0.5)] hover:scale-[1.02] transition-transform">
          <span className="material-symbols-outlined text-lg" data-icon="add">add</span>
          New Matchmaking Case
        </button>
      </div>
    </div>
    {/* Bento Stats Grid */}
    <div className="grid grid-cols-4 gap-6 mb-8">
      <div className="col-span-1 p-6 bg-surface-container border border-outline-variant/10 rounded-2xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#F5B41A]" />
        <p className="text-[10px] uppercase tracking-widest font-bold text-[#A3A3A3] mb-4">Quarterly Success Rate</p>
        <div className="flex items-end justify-between">
          <h3 className="text-3xl font-black text-white">84.2%</h3>
          <span className="text-emerald-500 text-xs font-bold flex items-center bg-emerald-500/10 px-2 py-0.5 rounded-full">+4.1%</span>
        </div>
        <div className="mt-4 h-1 w-full bg-[#0E0E0E] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#FDBB24] to-[#F5B41A]" style={{width: '84%'}} />
        </div>
      </div>
      <div className="col-span-1 p-6 bg-surface-container border border-outline-variant/10 rounded-2xl">
        <p className="text-[10px] uppercase tracking-widest font-bold text-[#A3A3A3] mb-4">Total Revenue Generated</p>
        <div className="flex items-end justify-between">
          <h3 className="text-3xl font-black text-white">$2.48M</h3>
          <span className="text-emerald-500 text-xs font-bold flex items-center bg-emerald-500/10 px-2 py-0.5 rounded-full">+12%</span>
        </div>
        <p className="text-[10px] text-[#A3A3A3] mt-2 italic">Excludes pending commissions</p>
      </div>
      <div className="col-span-1 p-6 bg-surface-container border border-outline-variant/10 rounded-2xl">
        <p className="text-[10px] uppercase tracking-widest font-bold text-[#A3A3A3] mb-4">Cycles Completed</p>
        <div className="flex items-end justify-between">
          <h3 className="text-3xl font-black text-white">1,204</h3>
          <span className="material-symbols-outlined text-[#F5B41A]" data-icon="check_circle">check_circle</span>
        </div>
        <p className="text-[10px] text-[#A3A3A3] mt-2 italic">Current Fiscal Year</p>
      </div>
      <div className="col-span-1 p-6 bg-surface-container border border-outline-variant/10 rounded-2xl">
        <p className="text-[10px] uppercase tracking-widest font-bold text-[#A3A3A3] mb-4">Pending Settlements</p>
        <div className="flex items-end justify-between">
          <h3 className="text-3xl font-black text-white">42</h3>
          <span className="text-amber-500 text-xs font-bold flex items-center bg-amber-500/10 px-2 py-0.5 rounded-full">Action Req</span>
        </div>
        <p className="text-[10px] text-[#A3A3A3] mt-2 italic">Requiring Admin Approval</p>
      </div>
    </div>
    {/* Main Data Table Container */}
    <div className="bg-surface border border-outline-variant/10 rounded-2xl overflow-hidden shadow-2xl">
      <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low">
        <div className="flex gap-4">
          <button className="px-4 py-1.5 bg-[#F5B41A]/10 text-[#F5B41A] text-[10px] font-bold uppercase tracking-widest rounded-full border border-[#F5B41A]/20">All Outcomes</button>
          <button className="px-4 py-1.5 text-[#A3A3A3] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-surface-container-high transition-colors">Success Only</button>
          <button className="px-4 py-1.5 text-[#A3A3A3] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-surface-container-high transition-colors">Audit Required</button>
        </div>
        <div className="flex items-center gap-2 text-[#A3A3A3] text-xs font-medium">
          <span className="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span>
          Sort by: Completion Date
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low">
              <th className="px-6 py-4 text-[10px] font-bold text-[#A3A3A3] uppercase tracking-widest">Match ID</th>
              <th className="px-6 py-4 text-[10px] font-bold text-[#A3A3A3] uppercase tracking-widest">Couple Names</th>
              <th className="px-6 py-4 text-[10px] font-bold text-[#A3A3A3] uppercase tracking-widest">Matchmaker</th>
              <th className="px-6 py-4 text-[10px] font-bold text-[#A3A3A3] uppercase tracking-widest">Cycle Period</th>
              <th className="px-6 py-4 text-[10px] font-bold text-[#A3A3A3] uppercase tracking-widest">Outcome</th>
              <th className="px-6 py-4 text-[10px] font-bold text-[#A3A3A3] uppercase tracking-widest">Payment Status</th>
              <th className="px-6 py-4 text-[10px] font-bold text-[#A3A3A3] uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10">
            {/* Row 1 */}
            <tr className="hover:bg-surface-container-low transition-colors group">
              <td className="px-6 py-5">
                <span className="text-xs font-mono font-bold text-[#F5B41A]">#KS-49201</span>
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">Alexander V. &amp; Elena R.</span>
                  <span className="text-[10px] text-[#A3A3A3]">Executive Elite Tier</span>
                </div>
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-2">
                  <img className="w-6 h-6 rounded-full" data-alt="portrait of a professional female matchmaker with glasses and a friendly smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChZX5EVaDgx5pd99UDUi3IumJqwRm4YFZAh_NeR3ygOVLRVDo0TL2nMpE2A9HlYh0DFtxm67h1fyDa4sx7HVdwfTEntVQseSgyGOOekaK3Ptl-L8sAgB70dWHU_BOR2fQTvRuyzsCTKHBfJ0ajCtnm0s5prSGSF-668o8hrl3ufIeYvnrRvhGHETtSp4mt8XQJF3EKgBoOA5dd4Ych7ZWGyLb0Cl3zkObx_gy5GBsJvxbh9Rhc1n4IchMRzv-3p_aIegPjzkn7NAs" />
                  <span className="text-xs font-medium text-[#E5E2E1]">Sarah Sterling</span>
                </div>
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-col">
                  <span className="text-xs text-[#E5E2E1]">Jan 12 — Oct 15, 2023</span>
                  <span className="text-[10px] text-[#A3A3A3]">276 Days</span>
                </div>
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 uppercase tracking-tighter">
                  <span className="material-symbols-outlined text-xs mr-1" data-icon="favorite" style={{fontVariationSettings: '"FILL" 1'}}>favorite</span>
                  Success
                </span>
              </td>
              <td className="px-6 py-5">
                <span className="text-xs font-bold text-emerald-400">Paid</span>
              </td>
              <td className="px-6 py-5 text-right">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity text-[#A3A3A3] hover:text-white material-symbols-outlined" data-icon="more_vert">more_vert</button>
              </td>
            </tr>
            {/* Row 2 */}
            <tr className="hover:bg-surface-container-low transition-colors group">
              <td className="px-6 py-5">
                <span className="text-xs font-mono font-bold text-[#F5B41A]">#KS-49185</span>
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">Julian M. &amp; Sofia L.</span>
                  <span className="text-[10px] text-[#A3A3A3]">Diamond Private Client</span>
                </div>
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-2">
                  <img className="w-6 h-6 rounded-full" data-alt="portrait of a male senior matchmaker in a grey suit looking professional" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiaRxKGECFp-JcCUIn3WLxz1pdGXWxFa8M-dEo5_swbhE0HaomvmkNbSz6d274PKgLUrcgc7i7c5KBSv-u5uxPFeX6hKPhw76dEBCRbylJABuWNYb7f1IU46X0VDexWpfVV6RbBEjvZQXaN82K4rxbSZILdbKvz4rAHe-_zZlW0jQiwRskVvcMNd1S1W8DmJSPRitVxvpcPfKa1UA2VhSqYNdLR1OrhAd1gJfR-6v69aHholh-d9sMEdK8i-OqgRljrlRbNUtmP-g" />
                  <span className="text-xs font-medium text-[#E5E2E1]">David Chen</span>
                </div>
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-col">
                  <span className="text-xs text-[#E5E2E1]">Feb 02 — Nov 01, 2023</span>
                  <span className="text-[10px] text-[#A3A3A3]">272 Days</span>
                </div>
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 uppercase tracking-tighter">
                  <span className="material-symbols-outlined text-xs mr-1" data-icon="favorite" style={{fontVariationSettings: '"FILL" 1'}}>favorite</span>
                  Success
                </span>
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-amber-500">Pending</span>
                  <button className="px-3 py-1 bg-[#F5B41A] text-[#412D00] text-[10px] font-bold rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all">Mark as Paid</button>
                </div>
              </td>
              <td className="px-6 py-5 text-right">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity text-[#A3A3A3] hover:text-white material-symbols-outlined" data-icon="more_vert">more_vert</button>
              </td>
            </tr>
            {/* Row 3 */}
            <tr className="hover:bg-surface-container-low transition-colors group">
              <td className="px-6 py-5">
                <span className="text-xs font-mono font-bold text-[#F5B41A]">#KS-49177</span>
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">Marcus T. &amp; Olivia G.</span>
                  <span className="text-[10px] text-[#A3A3A3]">Founding Member</span>
                </div>
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-2">
                  <img className="w-6 h-6 rounded-full" data-alt="portrait of a professional female matchmaker with glasses and a friendly smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgenZR9TDqMTEW5Z24iQ2jRCD4YtMpaJCDmFpCaoMICD_ljpsn0l1bmtbD0JGDH5wPx-6t2H-lnKTk_2JHtTxmDZp7jpH2PPuBuUTIlbqrxaphGiPAtvkmIZU8sZbZ1I3pEWGvm721cLG04zqzbi71C_DqOjsqmEtcMrOKwA-hAm_vVS7P04OkKLmyZWQ6kHyL2_p4euFWlIBki9NtyZYSRcv8dEUeiH4tkfWOq4fw-Tm5GPaaiBICgMhPYhXzDoG7Q6FomNsrOqU" />
                  <span className="text-xs font-medium text-[#E5E2E1]">Sarah Sterling</span>
                </div>
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-col">
                  <span className="text-xs text-[#E5E2E1]">May 15 — Nov 05, 2023</span>
                  <span className="text-[10px] text-[#A3A3A3]">174 Days</span>
                </div>
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#353534] text-[#A3A3A3] border border-outline-variant/30 uppercase tracking-tighter">
                  <span className="material-symbols-outlined text-xs mr-1" data-icon="block">block</span>
                  Closed
                </span>
              </td>
              <td className="px-6 py-5">
                <span className="text-xs font-bold text-emerald-400">Paid</span>
              </td>
              <td className="px-6 py-5 text-right">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity text-[#A3A3A3] hover:text-white material-symbols-outlined" data-icon="more_vert">more_vert</button>
              </td>
            </tr>
            {/* Row 4 */}
            <tr className="hover:bg-surface-container-low transition-colors group">
              <td className="px-6 py-5">
                <span className="text-xs font-mono font-bold text-[#F5B41A]">#KS-49162</span>
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">Victor S. &amp; Diane K.</span>
                  <span className="text-[10px] text-[#A3A3A3]">Legacy Elite</span>
                </div>
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-2">
                  <img className="w-6 h-6 rounded-full" data-alt="portrait of a middle-aged professional matchmaker in a creative office environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADw97J_AByAj-mGC_WygNMM7L1UnzAVvUmV9nkP-BPeGA6v6u-zCqG4e984qoPvkLUUA66S6TKc6P0Dt3mfgKbgQ27KsZdz3l2FTfAqlePbxzs_rcIV9Y00JRq6YW1eeZtpEJs8MC-bBYXcdNiM-3RS_wHlO2MJK88gX2ZiOkqGc6FqsmvJesT24ggFzLg6GV_jkfNnU52R7oZRWXz3qz3uqdBlTbBAtjGGceL1iYR-Y_kxBmAxAF6zpOGxxPtIpg5KEw-M8iSWig" />
                  <span className="text-xs font-medium text-[#E5E2E1]">Robert Lawson</span>
                </div>
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-col">
                  <span className="text-xs text-[#E5E2E1]">Aug 21 — Nov 10, 2023</span>
                  <span className="text-[10px] text-[#A3A3A3]">81 Days</span>
                </div>
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 uppercase tracking-tighter">
                  <span className="material-symbols-outlined text-xs mr-1" data-icon="favorite" style={{fontVariationSettings: '"FILL" 1'}}>favorite</span>
                  Success
                </span>
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-amber-500">Pending</span>
                  <button className="px-3 py-1 bg-[#F5B41A] text-[#412D00] text-[10px] font-bold rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all">Mark as Paid</button>
                </div>
              </td>
              <td className="px-6 py-5 text-right">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity text-[#A3A3A3] hover:text-white material-symbols-outlined" data-icon="more_vert">more_vert</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="p-6 border-t border-outline-variant/10 flex justify-between items-center bg-surface-container-low">
        <span className="text-xs text-[#A3A3A3]">Showing 1–10 of 1,204 results</span>
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 text-[#A3A3A3] hover:text-white transition-colors" disabled>
            <span className="material-symbols-outlined text-lg" data-icon="chevron_left">chevron_left</span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#F5B41A] text-[#412D00] text-xs font-bold">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 text-[#A3A3A3] hover:text-white transition-colors text-xs font-bold">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 text-[#A3A3A3] hover:text-white transition-colors text-xs font-bold">3</button>
          <span className="px-2 text-[#A3A3A3] flex items-center">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 text-[#A3A3A3] hover:text-white transition-colors text-xs font-bold">120</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 text-[#A3A3A3] hover:text-white transition-colors">
            <span className="material-symbols-outlined text-lg" data-icon="chevron_right">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
    {/* Bottom Information Panels */}
    <div className="grid grid-cols-2 gap-8 mt-8">
      {/* Matchmaking Insights */}
      <div className="p-8 bg-[#201f1f] rounded-2xl border border-outline-variant/10 shadow-xl overflow-hidden relative">
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        <h4 className="text-lg font-bold text-white mb-6">Financial Reconciliation Summary</h4>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-emerald-500" data-icon="account_balance_wallet">account_balance_wallet</span>
              </div>
              <span className="text-sm font-medium text-[#E5E2E1]">Total Billed</span>
            </div>
            <span className="text-lg font-bold text-white">$452,300.00</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-amber-500" data-icon="pending_actions">pending_actions</span>
              </div>
              <span className="text-sm font-medium text-[#E5E2E1]">Unsettled Match Fees</span>
            </div>
            <span className="text-lg font-bold text-white">$12,400.00</span>
          </div>
          <div className="pt-6 border-t border-outline-variant/10 flex items-center justify-between">
            <span className="text-sm font-bold uppercase tracking-widest text-[#A3A3A3]">Net Revenue After Commissions</span>
            <span className="text-2xl font-black text-[#F5B41A]">$398,150.00</span>
          </div>
        </div>
      </div>
      {/* Recent System Logs */}
      <div className="p-8 bg-[#201f1f] rounded-2xl border border-outline-variant/10 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-lg font-bold text-white">Recent Audit Activity</h4>
          <span className="text-[10px] font-bold text-[#A3A3A3] uppercase tracking-widest bg-surface-container-highest px-3 py-1 rounded-full">Real-time</span>
        </div>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500" />
            <div className="flex-1">
              <p className="text-xs font-bold text-white leading-tight">Payment Verified for #KS-49110</p>
              <p className="text-[10px] text-[#A3A3A3] mt-1">Processed by System Automator • 4 mins ago</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500" />
            <div className="flex-1">
              <p className="text-xs font-bold text-white leading-tight">New "Success" Outcome Declared</p>
              <p className="text-[10px] text-[#A3A3A3] mt-1">Matchmaker Sarah Sterling logged final cycle for #KS-49205 • 28 mins ago</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#A3A3A3]" />
            <div className="flex-1">
              <p className="text-xs font-bold text-white leading-tight">Audit Report Generated: Q3 Financials</p>
              <p className="text-[10px] text-[#A3A3A3] mt-1">Super Admin requested full PDF export • 1 hour ago</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500" />
            <div className="flex-1">
              <p className="text-xs font-bold text-white leading-tight">Mark as Paid: #KS-49052</p>
              <p className="text-[10px] text-[#A3A3A3] mt-1">Manually authorized by Chief Auditor • 2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>

  )
}
