import VideoPlayer from "../../../components/common/video-player";

const Hero = () => {
    return (
        <header className="relative pt-24 pb-40 lg:pt-40 lg:pb-52 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-200/50">
            <div className="absolute inset-0 overflow-hidden">
                {/* Top-right premium glow */}
                <div className="absolute -top-60 -right-60 w-96 h-96 bg-gradient-to-br from-amber-300/60 via-amber-200/30 to-transparent rounded-full blur-3xl shadow-2xl"></div>
                {/* Bottom-left deeper accent with more opacity */}
                <div className="absolute -bottom-40 -left-90 w-80 h-80 bg-gradient-to-tr from-slate-400/25 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-64 bg-gradient-to-t from-slate-400/40 via-slate-300/20 to-transparent blur-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/5"></div>
            </div>

            {/* High-End Abstract Background */}
            {/* <div className="absolute inset-0 z-0 opacity-30">
                <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/80 to-transparent"></div>
            </div> */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left fade-up">
                        <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border rounded-full text-primary text-xs font-bold uppercase tracking-widest ">
                            Registration Open for 2025
                        </div>


                        <div className="flex flex-col items-start w-fit">
                            <img
                                src="https://lh3.googleusercontent.com/d/1fk91ln_9whUoiV4L9nIw-AT4VMIcYNrj"
                                alt="2nd IGSO Title"
                                className="h-[150px]"
                            />
                        </div>

                        <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                            Join the world's most prestigious science competition for young innovators.
                            Certified by global educational bodies.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="https://sciencebaze.com/direct-reg/second-igso" className="btn-gold px-8 py-4 rounded-md font-bold text-center shadow-lg hover:shadow-gold-500/20 transition-all">
                                Register Now - 100 BDT
                            </a>
                            <a href="#first-ngso-details" className="px-8 py-4 rounded-md border border-slate-600 font-medium hover:bg-white/5  transition-all text-center">
                                View Past Winners
                            </a>
                        </div>

                    </div>

                    <VideoPlayer
                        src="https://www.youtube.com/embed/K-Q4r37XgVw"
                    />
                </div>
            </div>
        </header>
    );
};

export default Hero;