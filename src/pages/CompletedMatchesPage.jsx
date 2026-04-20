export function CompletedMatchesPage() {
  return (
    <div className="h-full overflow-y-auto px-4 pb-4">{/* Header Section */}
  <div className="flex justify-between items-end mb-10">
    <div>
      <h1 className="text-display-md font-bold text-white tracking-tight leading-none">Match Archive</h1>
      <p className="mt-3 text-on-surface-variant max-w-lg">
        Comprehensive ledger of historical unions, closed files, and successful placements curated through the Obsidian methodology.
      </p>
    </div>
    <div className="flex gap-4">
      <button className="px-5 py-2.5 border border-outline/30 rounded-xl text-sm font-semibold hover:bg-surface-container transition-colors flex items-center gap-2">
        <span className="material-symbols-outlined text-lg" data-icon="file_download">file_download</span>
        Export PDF
      </button>
      <button className="px-5 py-2.5 metallic-glow rounded-xl text-on-primary text-sm font-bold shadow-lg flex items-center gap-2">
        <span className="material-symbols-outlined text-lg" data-icon="add">add</span>
        New Entry
      </button>
    </div>
  </div>
  {/* Dashboard Stats Grid (Bento Style) */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
    <div className="col-span-1 p-6 bg-surface-container rounded-xl border-l-2 border-primary-container">
      <p className="text-label-sm text-on-surface-variant uppercase tracking-widest font-bold">Total Matches</p>
      <p className="text-3xl font-black text-white mt-2">1,284</p>
      <div className="flex items-center mt-2 text-[10px] text-primary-container">
        <span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
        <span className="ml-1">+12% vs last quarter</span>
      </div>
    </div>
    <div className="col-span-1 p-6 bg-surface-container rounded-xl">
      <p className="text-label-sm text-on-surface-variant uppercase tracking-widest font-bold">Success Rate</p>
      <p className="text-3xl font-black text-white mt-2">78.4%</p>
      <div className="flex items-center mt-2 text-[10px] text-[#A3A3A3]">
        <span className="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span>
        <span className="ml-1">Verified Placement</span>
      </div>
    </div>
    <div className="col-span-1 p-6 bg-surface-container rounded-xl">
      <p className="text-label-sm text-on-surface-variant uppercase tracking-widest font-bold">Closed Files</p>
      <p className="text-3xl font-black text-white mt-2">342</p>
      <div className="flex items-center mt-2 text-[10px] text-error">
        <span className="material-symbols-outlined text-sm" data-icon="cancel">cancel</span>
        <span className="ml-1">Incompatibility noted</span>
      </div>
    </div>
    <div className="col-span-1 p-6 bg-surface-container rounded-xl">
      <p className="text-label-sm text-on-surface-variant uppercase tracking-widest font-bold">Outstanding</p>
      <p className="text-3xl font-black text-white mt-2">12</p>
      <div className="flex items-center mt-2 text-[10px] text-primary-container">
        <span className="material-symbols-outlined text-sm" data-icon="payments">payments</span>
        <span className="ml-1">Pending payments</span>
      </div>
    </div>
  </div>
  {/* Table Section */}
  <div className="bg-surface rounded-2xl overflow-hidden border border-outline-variant/10 shadow-2xl">
    <div className="px-8 py-5 flex items-center justify-between bg-surface-container-low">
      <div className="flex items-center gap-6">
        <h2 className="text-headline-sm font-bold text-white">Archive Ledger</h2>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-primary-container/10 text-primary-container rounded-full text-[10px] font-bold tracking-widest uppercase">Success</span>
          <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant rounded-full text-[10px] font-bold tracking-widest uppercase">Closed</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs text-on-surface-variant">Showing 1-10 of 1,284 entries</span>
        <div className="flex border border-outline-variant/30 rounded-lg overflow-hidden">
          <button className="px-3 py-1.5 hover:bg-surface-container transition-colors border-r border-outline-variant/30"><span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span></button>
          <button className="px-3 py-1.5 hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span></button>
        </div>
      </div>
    </div>
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-surface-container-low">
          <th className="px-8 py-4 text-label-sm font-bold uppercase tracking-widest text-[#A3A3A3]">Match ID</th>
          <th className="px-8 py-4 text-label-sm font-bold uppercase tracking-widest text-[#A3A3A3]">Couple Names</th>
          <th className="px-8 py-4 text-label-sm font-bold uppercase tracking-widest text-[#A3A3A3]">Matchmaker</th>
          <th className="px-8 py-4 text-label-sm font-bold uppercase tracking-widest text-[#A3A3A3]">Final Outcome</th>
          <th className="px-8 py-4 text-label-sm font-bold uppercase tracking-widest text-[#A3A3A3]">Payment Status</th>
          <th className="px-8 py-4 text-label-sm font-bold uppercase tracking-widest text-[#A3A3A3]">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant/10">
        {/* Row 1 */}
        <tr className="hover:bg-surface-container transition-colors group">
          <td className="px-8 py-5">
            <span className="font-mono text-xs text-primary-container font-bold">#KS-8892</span>
          </td>
          <td className="px-8 py-5">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white">Sarah Jenkins &amp; David Chen</span>
              <span className="text-[10px] text-on-surface-variant mt-0.5">Matched June 12, 2023</span>
            </div>
          </td>
          <td className="px-8 py-5">
            <div className="flex items-center gap-3">
              <img alt="Matchmaker Sarah" className="w-6 h-6 rounded-full" data-alt="Close-up profile of a woman with auburn hair in professional studio lighting, warm skin tones, sophisticated look" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv6724gKuExgxLGHuJEfXwS9NerjJXqS1_0YJbip0p6txlGCz9QKzfIie9XNYOMn4cGF-R6yG4FVAcIiHszWjkUTi6Ss6fRYWcMhQhJUl8Hs_w2drMIOWTz6EY5QHREpUyfblSM_9hb1baPNl03ywUWtHZ4izdPrL5ZOSTHLuzhwU9vQRkjCArq6iCog-SZHkFFaUrrHCVxRZtmZitlXwxvTmiLBWgltuW6X0PZHamqwfUe3zhZcbdd0tPHqxb2L-hggmXhufXM58" />
              <span className="text-sm text-on-surface">Elena Vance</span>
            </div>
          </td>
          <td className="px-8 py-5">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-container" />
              <span className="text-sm font-semibold text-primary-container">Success</span>
            </div>
          </td>
          <td className="px-8 py-5">
            <span className="px-3 py-1 bg-primary-container/10 text-primary-container text-[10px] font-black rounded-full uppercase">Paid</span>
          </td>
          <td className="px-8 py-5">
            <button className="p-2 text-on-surface-variant hover:text-white transition-colors">
              <span className="material-symbols-outlined text-lg" data-icon="more_vert">more_vert</span>
            </button>
          </td>
        </tr>
        {/* Row 2 */}
        <tr className="hover:bg-surface-container transition-colors group">
          <td className="px-8 py-5">
            <span className="font-mono text-xs text-primary-container font-bold">#KS-9012</span>
          </td>
          <td className="px-8 py-5">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white">Rachel Weiss &amp; Mark Thompson</span>
              <span className="text-[10px] text-on-surface-variant mt-0.5">Matched August 24, 2023</span>
            </div>
          </td>
          <td className="px-8 py-5">
            <div className="flex items-center gap-3">
              <img alt="Matchmaker Julian" className="w-6 h-6 rounded-full" data-alt="Portrait of a young man with glasses and short beard, wearing a charcoal turtleneck, professional headshot style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_b_t8_89F83NrJUjZSyeQN-kKsD89VxbZQZKnBFyxhMqdFKAFPXilh2pmKHjNpjNp4dNnXs26r6zW4GsmjlOKd7xwSwOiaocvitePhdjRZNoihMAU2GvYj6vgS_MDwPJQjV_OSwARIeatdDxUcWwqAzhq_5T8OuVZEFR1NIQMaRc_0b7Y7hIwd5WWCUTjyeLUIJuSjrhwkIxUIzJ5wTGb4cLx7E0KyDHKZSzr9mYSF7-GnpdbMOyQqC4cyuAfjTz5yYD6s6J4LpA" />
              <span className="text-sm text-on-surface">Julian Thorne</span>
            </div>
          </td>
          <td className="px-8 py-5">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/40" />
              <span className="text-sm font-semibold text-on-surface-variant">Closed</span>
            </div>
          </td>
          <td className="px-8 py-5">
            <span className="px-3 py-1 bg-surface-container-highest text-[#A3A3A3] text-[10px] font-black rounded-full uppercase">Paid</span>
          </td>
          <td className="px-8 py-5">
            <button className="p-2 text-on-surface-variant hover:text-white transition-colors">
              <span className="material-symbols-outlined text-lg" data-icon="more_vert">more_vert</span>
            </button>
          </td>
        </tr>
        {/* Row 3 */}
        <tr className="hover:bg-surface-container transition-colors group">
          <td className="px-8 py-5">
            <span className="font-mono text-xs text-primary-container font-bold">#KS-9104</span>
          </td>
          <td className="px-8 py-5">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white">Amara Okafor &amp; Samuel Adeyemi</span>
              <span className="text-[10px] text-on-surface-variant mt-0.5">Matched October 05, 2023</span>
            </div>
          </td>
          <td className="px-8 py-5">
            <div className="flex items-center gap-3">
              <img alt="Matchmaker Elena" className="w-6 h-6 rounded-full" data-alt="Professional woman with curly hair wearing a white blazer, minimalist grey background, bright high-end photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8lg6phoamSAI1TkYqqCAeR9uuwz6twJ8cTk6t_91RjgOz1_IWVpH_3sEaM8OL503G5LPdZbrsgUVbE4V_qro5V0zbKmA7DgN7NAQj3o__7lbApIWDc1TmZeGqCuF9yi_IjJLUFU6qXGLX0y91N8o8-tMh-viBuvD9X3B5kCab7BzFo-lB6Wqf--mMJCZGj2ugclip0cBpdoXJSZd26ba2P9cU2IKwlRKi9sj44s0uSiEvqOSsrzMnoz_KYrGPuB4-LlQ2rQx9krI" />
              <span className="text-sm text-on-surface">Elena Vance</span>
            </div>
          </td>
          <td className="px-8 py-5">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-container" />
              <span className="text-sm font-semibold text-primary-container">Success</span>
            </div>
          </td>
          <td className="px-8 py-5">
            <span className="px-3 py-1 border border-primary-container/30 text-primary-container text-[10px] font-black rounded-full uppercase">Pending</span>
          </td>
          <td className="px-8 py-5">
            <button className="p-2 text-on-surface-variant hover:text-white transition-colors">
              <span className="material-symbols-outlined text-lg" data-icon="more_vert">more_vert</span>
            </button>
          </td>
        </tr>
        {/* Row 4 */}
        <tr className="hover:bg-surface-container transition-colors group">
          <td className="px-8 py-5">
            <span className="font-mono text-xs text-primary-container font-bold">#KS-9182</span>
          </td>
          <td className="px-8 py-5">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white">Chloe Dubois &amp; Luc Girard</span>
              <span className="text-[10px] text-on-surface-variant mt-0.5">Matched November 14, 2023</span>
            </div>
          </td>
          <td className="px-8 py-5">
            <div className="flex items-center gap-3">
              <img alt="Matchmaker Julian" className="w-6 h-6 rounded-full" data-alt="Professional male with kind features, office environment blurred in background, high contrast lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpu1sgDSHtwe_z7-og8WOjd_jqBAlwkuxSnp4A3DF7oGUlgX4sbPrsVEn6d-IAx5DNc26UVhOy2bvy9bofMKgKRLviQ8SWuG4zl6LaOgCxqy3qqpJc1iLkstGtBpsKZw2dlAZASEQlY7tz0FP9vGP0yl6Pi6Qe2LKKdLC6EmQkZwWN7q2E2otpNqqEDJih7FjXT9kCpF9knXmGujH1Sbl2hTtVeqDsl5H5fTMTHKMQVY1pSKlEYieTewko-XUGc5zkq4ZSXAM4-rQ" />
              <span className="text-sm text-on-surface">Julian Thorne</span>
            </div>
          </td>
          <td className="px-8 py-5">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-container" />
              <span className="text-sm font-semibold text-primary-container">Success</span>
            </div>
          </td>
          <td className="px-8 py-5">
            <span className="px-3 py-1 bg-primary-container/10 text-primary-container text-[10px] font-black rounded-full uppercase">Paid</span>
          </td>
          <td className="px-8 py-5">
            <button className="p-2 text-on-surface-variant hover:text-white transition-colors">
              <span className="material-symbols-outlined text-lg" data-icon="more_vert">more_vert</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div className="px-8 py-6 bg-surface-container-low flex items-center justify-center">
      <button className="text-sm font-bold text-[#A3A3A3] hover:text-white transition-colors flex items-center gap-2">
        View Complete Archive
        <span className="material-symbols-outlined text-sm" data-icon="keyboard_double_arrow_down">keyboard_double_arrow_down</span>
      </button>
    </div>
  </div>
  {/* Bottom Filter/Action Section (Asymmetric) */}
  <div className="mt-8 flex flex-col md:flex-row gap-6">
    <div className="flex-1 glass-panel p-6 rounded-2xl border border-outline-variant/10">
      <h3 className="text-white font-bold mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary-container" data-icon="filter_list">filter_list</span>
        Advanced Refinement
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">Date Range</label>
          <select className="w-full bg-surface-container-lowest border-none rounded-lg text-xs focus:ring-1 focus:ring-primary-container">
            <option>Last 12 Months</option>
            <option>2022 Archive</option>
            <option>All Time</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">Success Tier</label>
          <select className="w-full bg-surface-container-lowest border-none rounded-lg text-xs focus:ring-1 focus:ring-primary-container">
            <option>All Outcomes</option>
            <option>Verified Success</option>
            <option>Administrative Closure</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">Assigned To</label>
          <select className="w-full bg-surface-container-lowest border-none rounded-lg text-xs focus:ring-1 focus:ring-primary-container">
            <option>All Matchmakers</option>
            <option>Elena Vance</option>
            <option>Julian Thorne</option>
          </select>
        </div>
        <div className="flex items-end">
          <button className="w-full py-2 bg-surface-container-highest text-white text-xs font-bold rounded-lg hover:bg-surface-bright transition-colors">
            Apply Filter
          </button>
        </div>
      </div>
    </div>
    <div className="w-full md:w-80 bg-gradient-to-br from-primary-container/20 to-transparent p-6 rounded-2xl border border-primary-container/20">
      <h3 className="text-white font-bold mb-2">Audit Logs</h3>
      <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">System-generated records for all compliance and match closure actions.</p>
      <button className="w-full py-3 border border-primary-container/50 text-primary-container text-xs font-bold rounded-xl hover:bg-primary-container/10 transition-colors uppercase tracking-widest">
        Download Manifest
      </button>
    </div>
  </div></div>

  )
}
