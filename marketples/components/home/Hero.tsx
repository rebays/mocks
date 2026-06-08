export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-8 max-w-[1440px] mx-auto text-center">
      <h1 className="font-display-xl text-display-xl md:text-[80px] text-on-surface mb-12 tracking-tight leading-none">Find your space.</h1>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-full p-2 shadow-[0_12px_40px_rgba(0,0,0,0.08)] flex flex-col md:flex-row items-center gap-2 border border-slate-50">
          <div className="flex-1 flex items-center px-6 gap-3 w-full">
            <span className="material-symbols-outlined text-outline">location_on</span>
            <input className="w-full bg-transparent border-none focus:ring-0 font-body-md text-on-surface placeholder:text-outline-variant" placeholder="Search by location..." type="text"/>
          </div>
          <div className="h-8 w-[1px] bg-slate-100 hidden md:block"></div>
          <div className="flex-1 flex items-center px-4 gap-3 w-full">
            <span className="material-symbols-outlined text-outline">home</span>
            <select className="w-full bg-transparent border-none focus:ring-0 font-body-md text-on-surface appearance-none">
              <option>House</option>
              <option>Land</option>
              <option>Apartment</option>
            </select>
          </div>
          <div className="h-8 w-[1px] bg-slate-100 hidden md:block"></div>
          <div className="flex-1 flex items-center px-4 gap-3 w-full">
            <span className="material-symbols-outlined text-outline">sell</span>
            <select className="w-full bg-transparent border-none focus:ring-0 font-body-md text-on-surface appearance-none">
              <option>Buy</option>
              <option>Rent</option>
            </select>
          </div>
          <button className="w-full md:w-auto bg-primary-container text-white px-10 py-4 rounded-full font-headline-md text-body-md hover:bg-primary transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[20px]">search</span>
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
