const Categories = () => {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="serif-heading text-3xl md:text-4xl text-slate-900 mb-12 text-center">Eligibility Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          <div className="group border border-gray-200 rounded-lg p-4 text-center hover:border-teal-600 hover:bg-teal-50 transition-all cursor-default">
            <div className="text-2xl mb-2">🌱</div>
            <div className="font-bold text-slate-900 text-sm">Wonderist</div>
            <div className="text-xs text-slate-500">Class 1-2</div>
          </div>
          <div className="group border border-gray-200 rounded-lg p-4 text-center hover:border-teal-600 hover:bg-teal-50 transition-all cursor-default">
            <div className="text-2xl mb-2">🔭</div>
            <div className="font-bold text-slate-900 text-sm">Explorers</div>
            <div className="text-xs text-slate-500">Class 3-4</div>
          </div>
          <div className="group border border-gray-200 rounded-lg p-4 text-center hover:border-teal-600 hover:bg-teal-50 transition-all cursor-default">
            <div className="text-2xl mb-2">💡</div>
            <div className="font-bold text-slate-900 text-sm">Innovators</div>
            <div className="text-xs text-slate-500">Class 5-6</div>
          </div>
          <div className="group border border-gray-200 rounded-lg p-4 text-center hover:border-teal-600 hover:bg-teal-50 transition-all cursor-default">
            <div className="text-2xl mb-2">🛡️</div>
            <div className="font-bold text-slate-900 text-sm">Vanguard</div>
            <div className="text-xs text-slate-500">Class 7-8</div>
          </div>
          <div className="group border border-gray-200 rounded-lg p-4 text-center hover:border-teal-600 hover:bg-teal-50 transition-all cursor-default">
            <div className="text-2xl mb-2">🚀</div>
            <div className="font-bold text-slate-900 text-sm">Pioneers</div>
            <div className="text-xs text-slate-500">Class 9-10</div>
          </div>
          <div className="group border border-gray-200 rounded-lg p-4 text-center hover:border-teal-600 hover:bg-teal-50 transition-all cursor-default">
            <div className="text-2xl mb-2">⛰️</div>
            <div className="font-bold text-slate-900 text-sm">Trailblazers</div>
            <div className="text-xs text-slate-500">Class 11-12</div>
          </div>
          <div className="group border border-gray-200 rounded-lg p-4 text-center hover:border-teal-600 hover:bg-teal-50 transition-all cursor-default">
            <div className="text-2xl mb-2">🎓</div>
            <div className="font-bold text-slate-900 text-sm">Scholars</div>
            <div className="text-xs text-slate-500">Uni Level</div>
          </div>
          <div className="group border border-gray-200 rounded-lg p-4 text-center hover:border-teal-600 hover:bg-teal-50 transition-all cursor-default">
            <div className="text-2xl mb-2">🧠</div>
            <div className="font-bold text-slate-900 text-sm">Masterminds</div>
            <div className="text-xs text-slate-500">Grad+</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;