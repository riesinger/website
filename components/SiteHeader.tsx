import { Code2, Scroll } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { Button } from "./ui/button";

const SiteHeader = () => {
  return (
    <header className="border-t-4 border-t-indigo-500 dark:border-t-indigo-400 w-full box-border py-4">
      <div className="max-w-2xl flex justify-between items-center mx-auto px-8">
        <Link
          href="/"
          title="Back to riesinger.dev"
          className="hover:text-gray-950 dark:hover:text-gray-50"
        >
          <Logo />
        </Link>
        <nav className="gap-4 ml-auto mr-4">
          <Button asChild variant="ghost">
            <Link href="/projects">
              <Code2 className="w-4 h-4 mr-2" />
              Projects
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/posts">
              <Scroll className="w-4 h-4 mr-2" />
              Posts
            </Link>
          </Button>
        </nav>
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default SiteHeader;
