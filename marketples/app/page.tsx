
export default function Home() {
  return (
    <>
      
{/* TopAppBar */}
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
<main className="pt-20">
{/* Utility Hero Section */}
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
{/* Featured Listings (Horizontal Scroll) */}
<section className="section-gap mb-section-gap px-8 max-w-[1440px] mx-auto overflow-hidden">
<div className="flex justify-between items-end mb-stack-lg">
<h2 className="font-headline-lg text-headline-lg">Featured Listings</h2>
<a className="text-primary font-label-sm uppercase tracking-widest hover:underline" href="#">View All</a>
</div>
<div className="flex gap-gutter overflow-x-auto hide-scrollbar pb-8 -mx-4 px-4">
{/* Card 1 */}
<div className="min-w-[380px] group cursor-pointer bg-surface-container-lowest rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden transition-all hover:translate-y-[-4px]">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="luxury modern minimalist villa with large glass windows and clean white concrete lines at twilight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeoU5LGMqlDm--nHbafV79yyCbhKJLiEDMfWS0G-v5LEZ44p-GyBp88CVIhhYiLvpLScDs6nUYqVmxk_-w9u6NNlCfIt3hPp4uT1z6Maa6QR_o7uKux6WxriL9J6gnfJrioMxRGW3Aj9aqEvVbFRL8EKGsdAaK2cVdANh_EQtQoFKAR3aFaXI8TpQYICuCX1BfyTDRAMBg_anMlOzGhdvUbqPQpqcDD2cc7Oj4kixXsWkiI2LUJv6_1GiNp-zsUsQ0sY1LwR1raqE"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
<span className="font-headline-md text-primary text-body-md">$1,250,000</span>
</div>
</div>
<div className="p-6">
<h3 className="font-headline-md text-headline-md mb-1 group-hover:text-primary transition-colors">The Obsidian Villa</h3>
<p className="text-outline mb-4 flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">location_on</span>
                            Beverly Hills, CA
                        </p>
<div className="flex items-center gap-6 border-t border-slate-50 pt-4">
<div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">bed</span> 4 Beds
                            </div>
<div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">bathtub</span> 3 Baths
                            </div>
<div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">square_foot</span> 3,200 sqft
                            </div>
</div>
</div>
</div>
{/* Card 2 */}
<div className="min-w-[380px] group cursor-pointer bg-surface-container-lowest rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden transition-all hover:translate-y-[-4px]">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="contemporary luxury house with swimming pool and wooden deck in a forest clearing at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkFtRLCitU5OWPB9ul6uhcoUM9YOeUiPyzFNjkwNAyfkuw_k7ZxrThgBoEPQpYITXZpnAm2AcIt7NX3XA3v59aA0XmfdTIWMRmZdTi5pQ-d7ZyrHbweCHeLeEmdxYoqWjvkjGmj3Uz0TTOxwFw36KZAZz3fjVuDBpvVHaK7Wj2l4Xm8rSNAphHnd4yt9-HrYqttwfP5dhHOPNrxQF-nP0lzpEgSo46sUhBkAE-5CD-7tQ85e_SS_hG-XWsBTjg_-BvR2giXO-my5M"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
<span className="font-headline-md text-primary text-body-md">$890,000</span>
</div>
</div>
<div className="p-6">
<h3 className="font-headline-md text-headline-md mb-1 group-hover:text-primary transition-colors">Pine Crest Retreat</h3>
<p className="text-outline mb-4 flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">location_on</span>
                            Aspen, Colorado
                        </p>
<div className="flex items-center gap-6 border-t border-slate-50 pt-4">
<div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">bed</span> 3 Beds
                            </div>
<div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">bathtub</span> 2 Baths
                            </div>
<div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">square_foot</span> 2,450 sqft
                            </div>
</div>
</div>
</div>
{/* Card 3 */}
<div className="min-w-[380px] group cursor-pointer bg-surface-container-lowest rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden transition-all hover:translate-y-[-4px]">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="bright modern apartment interior with floor to ceiling windows overlooking a city skyline at golden hour" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAYSwWctbuSZDOa5Lq9xAY2h8WIhRV_LKHUtg3v_94BZ_-jf_PW3K9z3oh8v7uXROhkoZe8QZj5ikbSsfpNaTy-nPQ4KdtWCixXhoOF0tBlkjsU2wsHqHUBePYZQhVk6MT8aBM_qmuufYvN1Y8E42v5mjM4DqoL6sOAIzhLwdo8UWCRRz8YpV6ysQsmSy4IT3VgsL7kITHi8uL5efhpXj7lt_trN3m9begOJsR080XDHdCpOGPCLpLwF7FWvG2T5_4OHJhFPRTeOQ"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
<span className="font-headline-md text-primary text-body-md">$4,500 / mo</span>
</div>
</div>
<div className="p-6">
<h3 className="font-headline-md text-headline-md mb-1 group-hover:text-primary transition-colors">Skyline Loft 42</h3>
<p className="text-outline mb-4 flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">location_on</span>
                            New York, NY
                        </p>
<div className="flex items-center gap-6 border-t border-slate-50 pt-4">
<div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">bed</span> 2 Beds
                            </div>
<div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">bathtub</span> 2 Baths
                            </div>
<div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">square_foot</span> 1,800 sqft
                            </div>
</div>
</div>
</div>
</div>
</section>
{/* Quick Action Grid */}
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
</main>
{/* Footer */}
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

    </>
  );
}
