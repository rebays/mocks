import { ListingCard } from "./ListingCard";

const listings = [
  {
    id: 1,
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeoU5LGMqlDm--nHbafV79yyCbhKJLiEDMfWS0G-v5LEZ44p-GyBp88CVIhhYiLvpLScDs6nUYqVmxk_-w9u6NNlCfIt3hPp4uT1z6Maa6QR_o7uKux6WxriL9J6gnfJrioMxRGW3Aj9aqEvVbFRL8EKGsdAaK2cVdANh_EQtQoFKAR3aFaXI8TpQYICuCX1BfyTDRAMBg_anMlOzGhdvUbqPQpqcDD2cc7Oj4kixXsWkiI2LUJv6_1GiNp-zsUsQ0sY1LwR1raqE",
    imageAlt: "luxury modern minimalist villa with large glass windows and clean white concrete lines at twilight",
    price: "$1,250,000",
    title: "The Obsidian Villa",
    location: "Beverly Hills, CA",
    beds: 4,
    baths: 3,
    sqft: "3,200",
  },
  {
    id: 2,
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkFtRLCitU5OWPB9ul6uhcoUM9YOeUiPyzFNjkwNAyfkuw_k7ZxrThgBoEPQpYITXZpnAm2AcIt7NX3XA3v59aA0XmfdTIWMRmZdTi5pQ-d7ZyrHbweCHeLeEmdxYoqWjvkjGmj3Uz0TTOxwFw36KZAZz3fjVuDBpvVHaK7Wj2l4Xm8rSNAphHnd4yt9-HrYqttwfP5dhHOPNrxQF-nP0lzpEgSo46sUhBkAE-5CD-7tQ85e_SS_hG-XWsBTjg_-BvR2giXO-my5M",
    imageAlt: "contemporary luxury house with swimming pool and wooden deck in a forest clearing at sunset",
    price: "$890,000",
    title: "Pine Crest Retreat",
    location: "Aspen, Colorado",
    beds: 3,
    baths: 2,
    sqft: "2,450",
  },
  {
    id: 3,
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAYSwWctbuSZDOa5Lq9xAY2h8WIhRV_LKHUtg3v_94BZ_-jf_PW3K9z3oh8v7uXROhkoZe8QZj5ikbSsfpNaTy-nPQ4KdtWCixXhoOF0tBlkjsU2wsHqHUBePYZQhVk6MT8aBM_qmuufYvN1Y8E42v5mjM4DqoL6sOAIzhLwdo8UWCRRz8YpV6ysQsmSy4IT3VgsL7kITHi8uL5efhpXj7lt_trN3m9begOJsR080XDHdCpOGPCLpLwF7FWvG2T5_4OHJhFPRTeOQ",
    imageAlt: "bright modern apartment interior with floor to ceiling windows overlooking a city skyline at golden hour",
    price: "$4,500 / mo",
    title: "Skyline Loft 42",
    location: "New York, NY",
    beds: 2,
    baths: 2,
    sqft: "1,800",
  }
];

export function FeaturedListings() {
  return (
    <section className="section-gap mb-section-gap px-8 max-w-[1440px] mx-auto overflow-hidden">
      <div className="flex justify-between items-end mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg">Featured Listings</h2>
        <a className="text-primary font-label-sm uppercase tracking-widest hover:underline" href="#">View All</a>
      </div>
      <div className="flex gap-gutter overflow-x-auto hide-scrollbar pb-8 -mx-4 px-4">
        {listings.map(listing => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
    </section>
  );
}
