import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gov-primary text-white">
      <div className="h-1 bg-gov-gold" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>© {new Date().getFullYear()} National Parliament of Solomon Islands</p>
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/about" className="hover:text-white transition-colors">Accessibility</Link>
          <Link href="/about" className="hover:text-white transition-colors">Disclaimer</Link>
          <a href="https://parliament.gov.sb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">parliament.gov.sb</a>
        </div>
      </div>
    </footer>
  );
}
