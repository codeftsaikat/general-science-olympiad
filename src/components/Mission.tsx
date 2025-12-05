const Mission = () => {
  return (
    <section className="py-24 bg-slate-900 text-white" id="mission">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">Our Mandate</div>
            <h2 className="serif-heading text-4xl mb-6 leading-tight">Empowering young minds to think logically, create fearlessly, and build a truth-driven world.</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We are creating a learning ecosystem where Wisdom becomes Power, logic becomes strength, and every learner becomes a Changemaker.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-4xl font-bold text-white mb-1 counter-num">1,000+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Institutions</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1 counter-num">1M+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Reach</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white">
                  <i className="fas fa-quote-left"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg">The 1st NGSO Legacy</h4>
                  <p className="text-slate-400 text-sm">Where it all began</p>
                </div>
              </div>
              <p className="text-slate-300 italic mb-6">
                "The 1st National General Science Festival set the benchmark for scientific excellence in Bangladesh. It was the spark that ignited a movement."
              </p>
              <a href="#first-ngso-details" className="text-[#D4AF37] hover:text-white transition-colors text-sm font-bold uppercase tracking-wide flex items-center gap-2">
                Read the 2023 Report <i className="lucide-arrow-right w-4 h-4"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;