import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-20 h-20 rounded-full bg-gov-primary flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg">
        404
      </div>
      <h1 className="text-3xl font-bold text-gov-primary mb-3">Page Not Found</h1>
      <p className="text-gray-600 text-base mb-8 max-w-md">
        The page you are looking for does not exist or has been moved. Return to
        the home page to continue.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-gov-primary text-white font-bold rounded-xl hover:bg-gov-primary-hover transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
    </div>
  );
}
