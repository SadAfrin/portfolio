export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5" data-purpose="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white tracking-tighter">SADIA.A</span>
          </div>
          <p className="text-xs font-medium text-gray-500 uppercase tracking-[0.2em]">
            © 2024 Developer Portfolio. Built with high-fidelity execution.
          </p>
          <div className="flex items-center gap-6">
            <a 
              className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-wider transition-colors" 
              href="https://www.linkedin.com/in/-sadiaafrin-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <a 
              className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-wider transition-colors" 
              href="https://github.com/SadAfrin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
