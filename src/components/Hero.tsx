const Hero = () => {
  return (
    <header className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden bg-[#0B1120]">
      {/* High-End Abstract Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left fade-up">
            <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6">
              Registration Open for 2025
            </div>

            {/* Fallback if Image Fails, otherwise Image Title */}
            <div className="mb-6">
              {/* Added 'invert' class here to turn black text to white */}
              <img
                src="https://lh3.googleusercontent.com/d/1fk91ln_9whUoiV4L9nIw-AT4VMIcYNrj"

                alt="2nd IGSO Title"
                className="w-full max-w-md mx-auto lg:mx-0 drop-shadow-2xl invert brightness-0"
              />

              <h1 id="hero-title-fallback" className="hidden serif-heading text-5xl md:text-7xl text-white leading-tight mb-4">
                2nd International <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">General Science</span> <br />
                Olympiad
              </h1>
            </div>

            <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              Join the world's most prestigious science competition for young innovators.
              Certified by global educational bodies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://sciencebaze.com/direct-reg/second-igso" className="btn-gold px-8 py-4 rounded-md font-bold text-white text-center shadow-lg hover:shadow-gold-500/20 transition-all">
                Register Now - $1.00 USD
              </a>
              <a href="#first-ngso-details" className="px-8 py-4 rounded-md border border-slate-600 text-slate-300 font-medium hover:bg-white/5 hover:text-white transition-all text-center">
                View Past Winners
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1"><i className="fas fa-check-circle text-teal-500"></i> Verified Certificate</span>
              <span className="flex items-center gap-1"><i className="fas fa-check-circle text-teal-500"></i> Secure Payment</span>
              <span className="flex items-center gap-1"><i className="fas fa-check-circle text-teal-500"></i> Global Ranking</span>
            </div>
          </div>

          {/* Right Side: "The Prize" / Visual Hook */}
          <div className="hidden lg:block relative fade-up" style={{ transitionDelay: '0.2s' }}>
            {/* Glass Card showcasing stats/trophy */}
            <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-white text-2xl serif-heading">Global Impact</h3>
                  <p className="text-slate-400 text-sm">Join the league of extraordinary minds.</p>
                </div>
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-white text-xl">
                  <i className="fas fa-trophy"></i>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                  <div className="text-3xl font-bold text-white counter-num">80+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide mt-1">Countries</div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                  <div className="text-3xl font-bold text-white counter-num">10k+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide mt-1">Participants</div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/5 col-span-2">
                  <div className="text-3xl font-bold text-[#D4AF37] counter-num">7 Lakh+ BDT</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide mt-1">Prize Pool</div>
                </div>
              </div>
            </div>
            {/* Decorative blob behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-600/20 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;