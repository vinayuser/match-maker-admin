export function MatchmakerDashboardPage() {
  return (
    <div className="h-full overflow-y-auto px-4 pb-4">{/* Welcome Header */}
  <div className="flex justify-between items-end mb-12">
    <div>
      <p className="text-[#A3A3A3] text-xs font-bold uppercase tracking-[0.3em] mb-2">Internal Management Portal</p>
      <h1 className="text-4xl font-extrabold text-white tracking-tight">Shalom, <span className="text-[#F5B41A]">Benjamin</span></h1>
    </div>
    <div className="text-right">
      <p className="text-[#A3A3A3] text-[10px] uppercase font-bold tracking-widest">Local Time</p>
      <p className="text-xl font-medium text-white">Jerusalem, 14:32</p>
    </div>
  </div>
  {/* Stats Bento Row */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
    {/* Stat 1 */}
    <div className="bg-[#131313] p-6 rounded-xl border-l-4 border-[#F5B41A] shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <span className="material-symbols-outlined text-[#A3A3A3]" data-icon="analytics">analytics</span>
        <span className="text-[10px] bg-white/5 text-[#A3A3A3] px-2 py-1 rounded uppercase font-bold tracking-tighter">Current</span>
      </div>
      <h3 className="text-3xl font-black text-white mb-1">12</h3>
      <p className="text-xs text-[#A3A3A3] uppercase font-bold tracking-widest">Active Cases</p>
    </div>
    {/* Stat 2 */}
    <div className="bg-[#131313] p-6 rounded-xl border-l-4 border-tertiary shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <span className="material-symbols-outlined text-[#A3A3A3]" data-icon="outgoing_mail">outgoing_mail</span>
        <span className="text-[10px] bg-white/5 text-[#A3A3A3] px-2 py-1 rounded uppercase font-bold tracking-tighter">Priority</span>
      </div>
      <h3 className="text-3xl font-black text-white mb-1">3</h3>
      <p className="text-xs text-[#A3A3A3] uppercase font-bold tracking-widest">Pending First Contact</p>
    </div>
    {/* Stat 3 */}
    <div className="bg-[#131313] p-6 rounded-xl border-l-4 border-[#F5B41A] shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <span className="material-symbols-outlined text-[#A3A3A3]" data-icon="trending_up">trending_up</span>
        <span className="text-[10px] bg-white/5 text-primary px-2 py-1 rounded uppercase font-bold tracking-tighter">+2% vs LY</span>
      </div>
      <h3 className="text-3xl font-black text-white mb-1">78%</h3>
      <p className="text-xs text-[#A3A3A3] uppercase font-bold tracking-widest">Success Rate</p>
    </div>
    {/* Stat 4 */}
    <div className="bg-[#131313] p-6 rounded-xl border-l-4 border-on-surface-variant shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <span className="material-symbols-outlined text-[#A3A3A3]" data-icon="verified">verified</span>
        <span className="text-[10px] bg-white/5 text-[#A3A3A3] px-2 py-1 rounded uppercase font-bold tracking-tighter">Month</span>
      </div>
      <h3 className="text-3xl font-black text-white mb-1">4</h3>
      <p className="text-xs text-[#A3A3A3] uppercase font-bold tracking-widest">Completed This Month</p>
    </div>
  </div>
  {/* Main Card: My Assigned Matches */}
  <section className="bg-[#131313] rounded-2xl overflow-hidden shadow-2xl border border-[#504533]/10">
    <div className="p-8 border-b border-[#504533]/10 flex justify-between items-center bg-[#1c1b1b]">
      <div className="flex items-center gap-3">
        <div className="w-2 h-8 bg-[#F5B41A]" />
        <h2 className="text-lg font-bold text-white uppercase tracking-wider">My Assigned Matches - Action Needed</h2>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-[#A3A3A3] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
          <span className="material-symbols-outlined text-base" data-icon="filter_list">filter_list</span> Filter
        </button>
        <button className="flex items-center gap-2 text-[#F5B41A] text-xs font-bold uppercase tracking-widest hover:brightness-125 transition-colors">
          View All <span className="material-symbols-outlined text-base" data-icon="arrow_forward">arrow_forward</span>
        </button>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-surface-container-low">
            <th className="px-8 py-4 text-[#A3A3A3] uppercase text-[10px] font-bold tracking-widest">Couple Names</th>
            <th className="px-8 py-4 text-[#A3A3A3] uppercase text-[10px] font-bold tracking-widest">Match Date</th>
            <th className="px-8 py-4 text-[#A3A3A3] uppercase text-[10px] font-bold tracking-widest">Current Status</th>
            <th className="px-8 py-4 text-[#A3A3A3] uppercase text-[10px] font-bold tracking-widest text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#504533]/10">
          {/* Match 1 */}
          <tr className="hover:bg-[#201f1f] transition-colors group">
            <td className="px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img className="h-10 w-10 rounded-full border-2 border-[#131313] object-cover" data-alt="profile portrait of an elegant woman with professional lighting and minimalist background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe18SVdrgPbccyFqy9vM3p0ExF7nri-dFyU5Cwm-FIejHF8T09HtvxlNskN-lCQiIkPH1SJLu1vDH6qhsSx_CdR9253rH0J4zFK6sLfCdDyeKK3_D9MLr5HjlF6Q4yySe9fuJftBi2368hdpXrBAA0RjATDwMpX_P_Ssrerm_hAt_RkMZ8Sa7P0NN-WXogiHQY5yGeGXJpNhTOD_mbR2cNgzm4IgJRhLJ7L369DEocTERNO-1ZjfE6_6dOHyiVVI9BgnDFX6rRyVg" />
                  <img className="h-10 w-10 rounded-full border-2 border-[#131313] object-cover" data-alt="profile portrait of a sophisticated man with studio lighting and clean aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjXQI-kRVzoS9JPdqPvsy5hbsmh_1t2Up5R3KdIk_ttLWVt1PGsVsuU_6kKK1ieZ_BEDkbdxrI-JM8FAegjlrb7TvmHIG8Muv_peEQqa3Ar0h2gA5oZEcWjZGHPzuPTMmGr-eOn_cFHw7u1QGPjk04M0ZmVDY0EdudfuuorUqPy5VwCAt4kv9Cqg1scs0dgd_ZDcvIV5rBlFTctKJNUYcnDl7FlHaFVujMzgvIinGe8lk8-hv4tmGQLO6sbzonPVejkq67iMevn-g" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm tracking-tight">Sarah Gold &amp; David Levine</p>
                  <p className="text-[10px] text-[#A3A3A3] font-medium">92% Compatibility Score</p>
                </div>
              </div>
            </td>
            <td className="px-8 py-6">
              <p className="text-[#A3A3A3] text-xs font-semibold">Oct 24, 2023</p>
            </td>
            <td className="px-8 py-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary-container/10 text-primary-container border border-primary-container/20">
                Awaiting Initial Response
              </span>
            </td>
            <td className="px-8 py-6 text-right">
              <button className="p-2 text-[#A3A3A3] hover:text-[#F5B41A] transition-colors">
                <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
              </button>
            </td>
          </tr>
          {/* Match 2 */}
          <tr className="hover:bg-[#201f1f] transition-colors group">
            <td className="px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img className="h-10 w-10 rounded-full border-2 border-[#131313] object-cover" data-alt="portrait of a cheerful woman with warm backlighting and soft focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1qtQqxZTviCvHqrJEBGxrScTZdqCviZt9jTiuOS-nx2FZLofYgG5ymrJtdykwaExpNRN0QMqiFG1saR2vqKApIhGHTyPRovcmphIr8wHWzGRhhyPUPyncLFIjPcTU7KnxktVpzOY5K83y6gSyHSpQawVhAmeDLm_htK7n1VpMa2mikB_ybRkZRBox1yTBjbi_p_5m3Lt51jqOQ7mwmeVyFT7onZSHpQGqg3dzXSbUF8Wnta871pK6niewiJyd70ai4BPxu7voYao" />
                  <img className="h-10 w-10 rounded-full border-2 border-[#131313] object-cover" data-alt="portrait of a confident man with natural outdoor lighting and blurred city background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsAkdum53cnsvsXDaJNoNDgbv3JAgeigBIAOq86W1Ph6jJmpOUDwvfOcNXjg3ww5LFt2YcLLzYnrd6AgRMvFC9nDn9AIVP3x7gE1K68GJ6gQhtnRk3ekeoj9YF3yxRTqG_QgFfJvzW_M4snl43KkWd0t2kXyb9VHaG7Te0pa1C9M8hDZg7kXtmPdNDRPHc0sFVRXNp2YquF0X5TMU2nZnQHlOWMIxMz4w2aNXXUQi1vQIu2nRaxKhaFJpj5Dm-D_WyI7WUG51J2wo" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm tracking-tight">Miriam Weiss &amp; Aaron Cohen</p>
                  <p className="text-[10px] text-[#A3A3A3] font-medium">85% Compatibility Score</p>
                </div>
              </div>
            </td>
            <td className="px-8 py-6">
              <p className="text-[#A3A3A3] text-xs font-semibold">Oct 22, 2023</p>
            </td>
            <td className="px-8 py-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#F5B41A]/10 text-[#F5B41A] border border-[#F5B41A]/20">
                Follow-up Required
              </span>
            </td>
            <td className="px-8 py-6 text-right">
              <button className="p-2 text-[#A3A3A3] hover:text-[#F5B41A] transition-colors">
                <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
              </button>
            </td>
          </tr>
          {/* Match 3 */}
          <tr className="hover:bg-[#201f1f] transition-colors group">
            <td className="px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img className="h-10 w-10 rounded-full border-2 border-[#131313] object-cover" data-alt="close-up portrait of a woman with vibrant lighting and artistic blur" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo0dmtPUi6eVKITgotsZi51Kr1O_JTKTRCMQJ9v9ls0tVkftK72aBggxMpPF2nCuBiuNQ1KWbCZ2QsQy5VQ_7ZhqPTQYmqcwpxZI_qDpUA51m3C4QYhZ6Y0b5gSXqU3vX1Oxm_LYYQI_0HFxLweTn464b2aDmeZp2Zg_p3z7Tk7wuvsj4r3bqo2FbxyYzEC3TDKjY3CmjdSNerfaybU1dq6FIb9FiWgSJ1kTU4QkZo67zECZjER1MJu35CAjLpchNJke2chsjxw3E" />
                  <img className="h-10 w-10 rounded-full border-2 border-[#131313] object-cover" data-alt="close-up portrait of a man with dramatic shadows and dark aesthetic background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6GGwx8ghozzxsovQNXjUctyFcJROWy931KoOYKQnD0BcDp8uYbEaKyk1k0cgbuaRL1gFqlJihVx2KFdmQnw80Uj3ZSTBCw81FL40Zjeh-a0BKL6AiFEC2hmcXr0Px8SD4VOeBo_uhtHmGxHRq4BAlqDbnN05s8u8QoWPl9bdX683NPUWVUBX395ML0geTyt75NjnpyicabJd5GR4LG11YXBDqjAL2aq9V6xMjxMk-ssny41DGx7kRvRoSITmiIGCiJ1Pk17r2lzU" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm tracking-tight">Rachel Stern &amp; Isaac Blau</p>
                  <p className="text-[10px] text-[#A3A3A3] font-medium">96% Compatibility Score</p>
                </div>
              </div>
            </td>
            <td className="px-8 py-6">
              <p className="text-[#A3A3A3] text-xs font-semibold">Oct 21, 2023</p>
            </td>
            <td className="px-8 py-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-tertiary-container/10 text-tertiary border border-tertiary/20">
                First Meeting Set
              </span>
            </td>
            <td className="px-8 py-6 text-right">
              <button className="p-2 text-[#A3A3A3] hover:text-[#F5B41A] transition-colors">
                <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* List Footer */}
    <div className="p-6 bg-[#0E0E0E]/50 flex justify-center border-t border-[#504533]/10">
      <button className="text-[10px] font-bold text-[#A3A3A3] uppercase tracking-[0.2em] hover:text-white transition-colors">
        Load More Assignments
      </button>
    </div>
  </section>
  {/* Secondary Insights Area */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
    {/* Pipeline Health */}
    <div className="bg-[#131313] p-8 rounded-2xl shadow-xl border border-[#504533]/5 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5B41A]/5 blur-3xl group-hover:bg-[#F5B41A]/10 transition-colors" />
      <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-sm" data-icon="insights">insights</span> Pipeline Health
      </h4>
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2 text-[#A3A3A3]">
            <span>Interviewing</span>
            <span className="text-white">84%</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{width: '84%'}} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2 text-[#A3A3A3]">
            <span>Matching</span>
            <span className="text-white">62%</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{width: '62%'}} />
          </div>
        </div>
      </div>
    </div>
    {/* Recent Activity */}
    <div className="bg-[#131313] p-8 rounded-2xl shadow-xl border border-[#504533]/5 col-span-2">
      <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6">Recent Activity</h4>
      <div className="space-y-5">
        <div className="flex items-start gap-4">
          <div className="mt-1 w-2 h-2 rounded-full bg-primary ring-4 ring-primary/10" />
          <div>
            <p className="text-xs text-on-surface font-medium">New match suggested for <span className="text-white font-bold">Benjamin Shapiro</span> based on updated preferences.</p>
            <p className="text-[10px] text-[#A3A3A3] mt-1 font-bold uppercase">2 hours ago</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="mt-1 w-2 h-2 rounded-full bg-tertiary ring-4 ring-tertiary/10" />
          <div>
            <p className="text-xs text-on-surface font-medium">Interview notes uploaded for <span className="text-white font-bold">Chana Feldman</span>. Profile moved to Ready stage.</p>
            <p className="text-[10px] text-[#A3A3A3] mt-1 font-bold uppercase">5 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  </div></div>

  )
}
