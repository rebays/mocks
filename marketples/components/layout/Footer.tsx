export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full py-12 px-8 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold text-slate-900 dark:text-white">marketples</span>
          <span className="font-['Manrope'] text-xs font-normal text-slate-500 dark:text-slate-400">© 2024 marketples. All rights reserved.</span>
        </div>
        <div className="flex gap-8 font-['Manrope'] text-xs font-normal text-slate-500 dark:text-slate-400">
          <a className="hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">About</a>
          <a className="hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Careers</a>
          <a className="hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Privacy</a>
          <a className="hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Terms</a>
          <a className="hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Support</a>
        </div>
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-200/50 hover:bg-primary hover:text-white transition-all">
            <span className="material-symbols-outlined text-[20px]">public</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
