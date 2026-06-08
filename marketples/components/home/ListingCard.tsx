export interface ListingCardProps {
  imageSrc: string;
  imageAlt: string;
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
}

export function ListingCard({
  imageSrc,
  imageAlt,
  price,
  title,
  location,
  beds,
  baths,
  sqft
}: ListingCardProps) {
  return (
    <div className="min-w-[380px] group cursor-pointer bg-surface-container-lowest rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden transition-all hover:translate-y-[-4px]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt={imageAlt} src={imageSrc}/>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
          <span className="font-headline-md text-primary text-body-md">{price}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-headline-md text-headline-md mb-1 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-outline mb-4 flex items-center gap-1">
          <span className="material-symbols-outlined text-[18px]">location_on</span>
          {location}
        </p>
        <div className="flex items-center gap-6 border-t border-slate-50 pt-4">
          <div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px]">bed</span> {beds} Beds
          </div>
          <div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px]">bathtub</span> {baths} Baths
          </div>
          <div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px]">square_foot</span> {sqft} sqft
          </div>
        </div>
      </div>
    </div>
  );
}
