"use client";

import { Button } from "./ui/button";
import { Github, Linkedin, FileText } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FileText, href: "/cv.pdf", label: "CV" },
];

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center gap-4 py-10">
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <Button key={link.label} variant="ghost" size="icon" asChild>
              <Link href={link.href} target="_blank">
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </Link>
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vasant Saladi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
