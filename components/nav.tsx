import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold">Vasant Saladi</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
