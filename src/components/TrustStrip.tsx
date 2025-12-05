const TrustStrip = () => {
  return (
    <div className="bg-white border-b border-gray-100 py-8 relative z-20 -mt-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted by leading educational institutions</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          {/* Text based logos for clean look if images fail */}
          <span className="text-xl font-bold text-slate-400 serif-heading">Imperial Int.</span>
          <span className="text-xl font-bold text-slate-400 serif-heading">Kidlon</span>
          <span className="text-xl font-bold text-slate-400 serif-heading">Panjeree</span>
          <span className="text-xl font-bold text-slate-400 serif-heading">Pentagon</span>
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;