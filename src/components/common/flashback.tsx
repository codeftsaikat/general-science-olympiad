const Flashback = () => {
  return (
    <section id="first-ngso-details" className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <span className="text-slate-400 font-bold tracking-widest uppercase text-xs mb-2 block">Archive</span>
              <h2 className="serif-heading text-3xl text-slate-900 mb-6">1st National GSO Report</h2>
              <p className="text-slate-600 mb-6">The foundation of our international journey. A look back at the numbers that started it all.</p>
              <div className="p-6 bg-slate-50 rounded-xl border border-gray-100">
                <div className="font-bold text-slate-900 mb-2">Key Outcome</div>
                <p className="text-sm text-slate-500">Established GSO as the premier science platform in the region, leading to the formation of the International committee.</p>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-100 rounded-lg hover:border-teal-500 transition-colors">
                <div className="text-3xl font-bold text-slate-900 mb-1">2023</div>
                <div className="text-xs text-slate-400 uppercase">Year</div>
              </div>
              <div className="p-6 border border-gray-100 rounded-lg hover:border-teal-500 transition-colors">
                <div className="text-3xl font-bold text-slate-900 mb-1">National</div>
                <div className="text-xs text-slate-400 uppercase">Scale</div>
              </div>
              <div className="p-6 border border-gray-100 rounded-lg hover:border-teal-500 transition-colors sm:col-span-2">
                <div className="text-3xl font-bold text-slate-900 mb-1">Thousands</div>
                <div className="text-xs text-slate-400 uppercase">of Participants</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flashback;