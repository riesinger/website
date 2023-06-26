import { Rss } from "lucide-react";
import Link from "next/link";

const SiteFooter = () => {
  return (
    <footer className="mt-8 border-box px-8 w-full">
      <div className="max-w-2xl mx-auto border-t-2 border-t-gray-200 dark:border-t-gray-800 py-4">
        <div className="flex items-center justify-between text-sm">
          <span>&copy; {new Date().getFullYear()} Pascal Riesinger</span>
          <Link
            href="/feeds/"
            className="inline-flex items-center hover:dark:text-lime-400 hover:text-lime-600"
          >
            <Rss className="w-4 h-4 mr-2" />
            Feed
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
