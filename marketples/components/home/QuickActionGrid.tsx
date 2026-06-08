export function QuickActionGrid() {
  return (
    <section className="section-gap mb-section-gap px-8 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="bg-surface-container p-10 rounded-[12px] group cursor-pointer hover:bg-surface-container-high transition-colors">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
            <span className="material-symbols-outlined text-[32px]">add</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-2">List for Free</h3>
          <p className="text-on-surface-variant font-body-md">Connect with millions of buyers and renters. No listing fees, no hidden costs.</p>
        </div>
        <div className="bg-surface-container p-10 rounded-[12px] group cursor-pointer hover:bg-surface-container-high transition-colors">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
            <span className="material-symbols-outlined text-[32px]">description</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-2">Rental Application</h3>
          <p className="text-on-surface-variant font-body-md">Apply for your dream home directly through our secure, paperless application portal.</p>
        </div>
        <div className="bg-surface-container p-10 rounded-[12px] group cursor-pointer hover:bg-surface-container-high transition-colors">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
            <span className="material-symbols-outlined text-[32px]">insights</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-2">Local Market Trends</h3>
          <p className="text-on-surface-variant font-body-md">Get expert data and valuation reports for any neighborhood in real-time.</p>
        </div>
      </div>
    </section>
  );
}
