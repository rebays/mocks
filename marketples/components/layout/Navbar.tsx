export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <nav className="flex justify-between items-center px-8 h-20 max-w-[1440px] mx-auto w-full">
        <div className="flex items-center gap-12">
          <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">marketples</span>
          <div className="hidden md:flex items-center gap-8 font-['Manrope'] text-sm font-medium tracking-tight">
            <a className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-1 active:scale-[0.98] transition-transform duration-200" href="#">Buy</a>
            <a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 active:scale-[0.98]" href="#">Rent</a>
            <a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 active:scale-[0.98]" href="#">List Property</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2.5 rounded-full font-['Manrope'] text-sm font-medium text-slate-600 hover:text-blue-600 transition-all active:scale-[0.98]">Sign In</button>
        </div>
      </nav>
    </header>
  );
}
