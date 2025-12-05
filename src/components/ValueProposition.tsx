const ValueProposition = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
          <h2 className="serif-heading text-3xl md:text-4xl text-slate-900 mb-4">Why Participate?</h2>
          <p className="text-slate-600 text-lg">We don't just test knowledge; we build careers. Every participant receives internationally recognized credentials.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all fade-up">
            <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center text-teal-700 text-2xl mb-6">
              <i className="fas fa-certificate"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Global Certification</h3>
            <p className="text-slate-600">Receive a verifiable digital certificate recognized by 1000+ institutions globally. A powerful addition to your academic CV.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 text-2xl mb-6">
              <i className="fas fa-medal"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Prestigious Awards</h3>
            <p className="text-slate-600">Compete for the STEM Family Award, Super Parent Award, and STEM Educator Award. Total prize pool exceeding 7 Lakh BDT.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 text-2xl mb-6">
              <i className="fas fa-globe-americas"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">International Network</h3>
            <p className="text-slate-600">Connect with peers from 80+ countries. Join an exclusive alumni network of future scientists and innovators.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;