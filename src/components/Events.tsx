'use client';
import { useState } from 'react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('ongoing');

  const switchTab = (tabId: string) => {
    // Hide all
    document.querySelectorAll('.tab-content').forEach(el => {
      el.classList.add('hidden');
      el.classList.remove('block');
    });

    // Reset buttons
    const buttons = ['ongoing', 'past', 'future'];
    buttons.forEach(id => {
      const btn = document.getElementById('tab-' + id);
      if (btn) btn.classList.remove('bg-gray-100');
    });

    // Show active
    const activeContent = document.getElementById('content-' + tabId);
    if (activeContent) {
      activeContent.classList.remove('hidden');
      activeContent.classList.add('block');
    }

    const activeButton = document.getElementById('tab-' + tabId);
    if (activeButton) {
      activeButton.classList.add('bg-gray-100');
    }

    setActiveTab(tabId);
  };

  return (
    <section id="events" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="serif-heading text-3xl font-bold text-slate-900">Official Events Calendar</h2>
            <p className="text-slate-500 mt-2">Upcoming competitions and rounds.</p>
          </div>

          <div className="flex bg-white rounded-lg shadow-sm border border-gray-200 p-1 mt-6 md:mt-0">
            <button onClick={() => switchTab('ongoing')} id="tab-ongoing" className={`px-6 py-2 rounded-md text-sm font-bold text-slate-600 hover:text-teal-700 ${activeTab === 'ongoing' ? 'bg-gray-100' : ''} transition-colors`}>
              Current
            </button>
            <button onClick={() => switchTab('past')} id="tab-past" className={`px-6 py-2 rounded-md text-sm font-bold text-slate-600 hover:text-teal-700 ${activeTab === 'past' ? 'bg-gray-100' : ''} transition-colors`}>
              Past
            </button>
            <button onClick={() => switchTab('future')} id="tab-future" className={`px-6 py-2 rounded-md text-sm font-bold text-slate-600 hover:text-teal-700 ${activeTab === 'future' ? 'bg-gray-100' : ''} transition-colors`}>
              Upcoming
            </button>
          </div>
        </div>

        {/* Content: Ongoing */}
        <div id="content-ongoing" className={`tab-content ${activeTab === 'ongoing' ? 'block' : 'hidden'} fade-up`}>
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-slate-900 relative">
              <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50" />
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <span className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-bold uppercase rounded w-fit">Open Now</span>
                <div>
                  <div className="text-white/60 text-sm uppercase tracking-widest mb-1">Season 2</div>
                  <h3 className="text-white text-3xl serif-heading">International GSO</h3>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <div className="grid grid-cols-3 gap-6 mb-8 border-b border-gray-100 pb-8">
                <div>
                  <div className="text-slate-400 text-xs uppercase font-bold mb-1">Deadline</div>
                  <div className="text-slate-900 font-bold">Oct 30, 2025</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs uppercase font-bold mb-1">Entry Fee</div>
                  <div className="text-slate-900 font-bold">$1.00 USD</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs uppercase font-bold mb-1">Mode</div>
                  <div className="text-slate-900 font-bold">Online / Hybrid</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-slate-600 text-sm max-w-sm">
                  The ultimate test of logic and science. Participants from 80+ countries competing for the championship.
                </p>
                <a href="https://sciencebaze.com/direct-reg/second-igso" className="btn-gold px-8 py-3 rounded-md font-bold text-white shadow-md">Register</a>
              </div>
            </div>
          </div>
        </div>

        {/* Content: Past (Hidden by default) */}
        <div id="content-past" className={`tab-content ${activeTab === 'past' ? 'block' : 'hidden'} fade-up`}>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50 font-bold text-slate-700 flex justify-between">
              <span>Event Name</span>
              <span>Type</span>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="p-4 flex justify-between items-center hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => document.getElementById('first-ngso-details')?.scrollIntoView({ behavior: 'smooth' })}>
                <div className="font-medium text-slate-800">1st National General Science Olympiad</div>
                <span className="text-xs px-2 py-1 bg-gray-200 rounded text-gray-600">National</span>
              </div>
              <div className="p-4 flex justify-between items-center hover:bg-slate-50 transition-colors">
                <div className="font-medium text-slate-800">2nd IGSO Chandpur District Round</div>
                <span className="text-xs px-2 py-1 bg-teal-100 rounded text-teal-700">Regional</span>
              </div>
              <div className="p-4 flex justify-between items-center hover:bg-slate-50 transition-colors">
                <div className="font-medium text-slate-800">2nd IGSO Barguna District Round</div>
                <span className="text-xs px-2 py-1 bg-teal-100 rounded text-teal-700">Regional</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content: Future (Hidden by default) */}
        <div id="content-future" className={`tab-content ${activeTab === 'future' ? 'block' : 'hidden'} fade-up`}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <span className="text-indigo-600 font-bold text-xs uppercase mb-2 block">Next Month</span>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Science Discussion Season 2</h4>
              <p className="text-slate-600 text-sm">Episode 1: The Future of Biotech.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <span className="text-teal-600 font-bold text-xs uppercase mb-2 block">Regional</span>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Sylhet District Round</h4>
              <p className="text-slate-600 text-sm">Venue: Scholarshome Campus.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;