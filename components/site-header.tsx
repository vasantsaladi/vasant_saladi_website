"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
// import {
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-lg font-semibold">
            Vasant Saladi
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <button
              onClick={() => scrollToSection("about")}
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Projects
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button
            className="bg-[#111] text-white hover:bg-[#222] text-sm"
            size="sm"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="mr-2 h-4 w-4 md:inline-block" />
            <span className="hidden md:inline">Contact Me</span>
            <span className="md:hidden">Contact</span>
          </Button>
          {/* <SignedOut>
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                size="sm"
                className="font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button
                variant="default"
                size="sm"
                className="bg-[#111] text-white hover:bg-[#222] hidden md:inline-flex"
              >
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn> */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
