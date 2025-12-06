import VideoPlayerSection from '../views/hero/video-player';
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
            <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Registration Open for 2025
            </div>

            {/* Fallback if Image Fails, otherwise Image Title */}
            {/* <div className="mb-6">
              <img
                src="https://lh3.googleusercontent.com/d/1fk91ln_9whUoiV4L9nIw-AT4VMIcYNrj"
                alt="2nd IGSO Title"
                className="w-full max-w-md mx-auto lg:mx-0 drop-shadow-2xl invert brightness-0"
              />
            </div> */}

            <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              Join the world's most prestigious science competition for young innovators.
              Certified by global educational bodies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://sciencebaze.com/direct-reg/second-igso" className="btn-gold px-8 py-4 rounded-md font-bold text-white text-center shadow-lg hover:shadow-gold-500/20 transition-all">
                Register Now - 100 BDT
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

          <VideoPlayerSection />
        </div>
      </div>
    </header>
  );
};

export default Hero;