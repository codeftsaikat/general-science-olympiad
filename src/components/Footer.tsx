const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-slate-400 py-16 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-white text-xl serif-heading block mb-4">General Science Olympiad</span>
            <p className="max-w-sm mb-6">
              Empowering the next generation of scientific minds through rigorous competition and global connectivity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-colors"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Registration Guide</a></li>
              <li><a href="#mission" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#events" className="hover:text-[#D4AF37] transition-colors">Events Calendar</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Verify Certificate</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Legal & Contact</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a></li>
              <li className="flex items-center gap-2"><i className="fas fa-envelope"></i> info@sciencebaze.com</li>
              <li className="flex items-center gap-2"><i className="fas fa-map-marker-alt"></i> Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>&copy; 2025 General Science Olympiad. All rights reserved.</div>
          <div className="flex items-center gap-2 text-xs">
            <i className="fas fa-lock text-teal-600"></i> Secure 256-bit SSL Encryption
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;