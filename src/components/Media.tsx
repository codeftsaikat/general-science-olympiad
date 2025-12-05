'use client';
import { useEffect } from 'react';

const Media = () => {
  // Handle YouTube video containers
  useEffect(() => {
    const handleVideoClick = (e: Event) => {
      const container = e.currentTarget as HTMLElement;

      // If it's already active, do nothing (to avoid restarting the video)
      if (container.classList.contains('active')) return;

      const videoId = container.getAttribute('data-videoid');
      const iframe = container.querySelector('iframe');

      if (videoId && iframe) {
        // Set the iframe src to start loading and playing the video
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

        // Set the container to active to hide the overlay and show the iframe
        container.classList.add('active');
      }
    };

    // Add click listeners to all video containers
    document.querySelectorAll('.video-container').forEach(container => {
      container.addEventListener('click', handleVideoClick);
    });

    return () => {
      // Cleanup: remove event listeners
      document.querySelectorAll('.video-container').forEach(container => {
        container.removeEventListener('click', handleVideoClick);
      });
    };
  }, []);

  return (
    <section id="media" className="py-24 bg-slate-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-12">Official Partners</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-80 mb-20">
          {/* Partner Names styled as professional logos */}
          <div className="text-xl font-bold text-slate-800 logo-grayscale cursor-pointer">Kidlon</div>
          <div className="text-xl font-bold text-slate-800 logo-grayscale cursor-pointer">Pentagon</div>
          <div className="text-xl font-bold text-slate-800 logo-grayscale cursor-pointer">YGF Digital</div>
          <div className="text-xl font-bold text-slate-800 logo-grayscale cursor-pointer text-center">Imperial School</div>
          <div className="text-xl font-bold text-slate-800 logo-grayscale cursor-pointer">Panjeree</div>
          <div className="text-xl font-bold text-slate-800 logo-grayscale cursor-pointer text-center">Hikmah Al Falah</div>
        </div>

        <h2 className="text-center text-3xl serif-heading text-slate-900 mb-12">Media Coverage Showcase</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Video 1: Somoy TV (Video ID: CsGAVg0hDbk) */}
          <div className="fade-up group">
            <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl border-4 border-slate-900 ring-1 ring-white/10 transform transition-all hover:scale-[1.02]">
              {/* Frame Header */}
              <div className="bg-slate-900 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Somoy TV Report</span>
                </div>
                <i className="fab fa-youtube text-slate-600"></i>
              </div>
              {/* Video Embed Container with Thumbnail */}
              <div className="aspect-video">
                <div
                  className="video-container"
                  id="video-CsGAVg0hDbk"
                  data-videoid="CsGAVg0hDbk"
                  style={{ backgroundImage: "url('https://img.youtube.com/vi/CsGAVg0hDbk/hqdefault.jpg')" }}
                >
                  <div className="play-overlay">
                    <div className="play-button">
                      <i className="fas fa-play text-white text-2xl pl-1"></i>
                    </div>
                  </div>
                  <iframe
                    className="w-full h-full"
                    src=""
                    title="Somoy TV Coverage"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              {/* Frame Footer */}
              <div className="bg-white p-4 border-t border-gray-100">
                <h4 className="font-bold text-slate-900 text-sm mb-1">GSO sets new standard</h4>
                <p className="text-xs text-slate-500">Official News Report • Somoy TV</p>
              </div>
            </div>
          </div>

          {/* Video 2: Independent TV (Video ID: 2dMm67pg8ew) */}
          <div className="fade-up group" style={{ transitionDelay: '0.1s' }}>
            <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl border-4 border-slate-900 ring-1 ring-white/10 transform transition-all hover:scale-[1.02]">
              {/* Frame Header */}
              <div className="bg-slate-900 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-teal-500 uppercase tracking-wider">Independent TV</span>
                </div>
                <i className="fab fa-youtube text-slate-600"></i>
              </div>
              {/* Video Embed Container with Thumbnail */}
              <div className="aspect-video">
                <div
                  className="video-container"
                  id="video-2dMm67pg8ew"
                  data-videoid="2dMm67pg8ew"
                  style={{ backgroundImage: "url('https://img.youtube.com/vi/2dMm67pg8ew/hqdefault.jpg')" }}
                >
                  <div className="play-overlay">
                    <div className="play-button">
                      <i className="fas fa-play text-white text-2xl pl-1"></i>
                    </div>
                  </div>
                  <iframe
                    className="w-full h-full"
                    src=""
                    title="Independent TV Coverage"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              {/* Frame Footer */}
              <div className="bg-white p-4 border-t border-gray-100">
                <h4 className="font-bold text-slate-900 text-sm mb-1">National Science Olympiad</h4>
                <p className="text-xs text-slate-500">Feature Story • Independent TV</p>
              </div>
            </div>
          </div>

          {/* Video 3: Ekhon TV (Link Card due to Facebook Reel restrictions) - Unchanged as it's a link card */}
          <div className="fade-up group" style={{ transitionDelay: '0.2s' }}>
            <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl border-4 border-slate-900 ring-1 ring-white/10 h-full flex flex-col transform transition-all hover:scale-[1.02]">
              {/* Frame Header */}
              <div className="bg-slate-900 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">Ekhon TV Feature</span>
                </div>
                <i className="fab fa-facebook text-slate-600"></i>
              </div>
              {/* Placeholder/Link for Facebook (Reels often block direct iframe embedding) */}
              <a href="https://www.facebook.com/share/r/17ZF5ppxxj/" target="_blank" className="flex-grow bg-slate-800 relative group overflow-hidden block">
                <img src="https://images.unsplash.com/photo-1616469829718-0faf16324280?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i className="fas fa-play text-white text-2xl pl-1"></i>
                  </div>
                  <span className="text-white font-bold tracking-wider text-sm">WATCH ON FACEBOOK</span>
                </div>
              </a>
              {/* Frame Footer */}
              <div className="bg-white p-4 border-t border-gray-100">
                <h4 className="font-bold text-slate-900 text-sm mb-1">Future of Science</h4>
                <p className="text-xs text-slate-500">Social Feature • Ekhon TV</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;