"use client";

import { Github, Linkedin, FileText, Trophy } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "./contact-form";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/vasantsaladi",
    label: "GitHub",
    description: "Check out my code",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/vs6",
    label: "LinkedIn",
    description: "Connect with me",
  },
  {
    icon: Trophy,
    href: "https://devpost.com/vsaladi",
    label: "Devpost",
    description: "View my hackathon projects",
  },
  {
    icon: FileText,
    href: "https://vasantresume.tiiny.site",
    label: "Resume",
    description: "Download my resume",
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t bg-gray-50/50" id="contact">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Looking to hire, collaborate, or just chat? I&apos;d love to
                connect.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-blue-600 rounded-full" />
                <p className="text-sm font-medium">
                  Let&apos;s build something amazing together
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-2 p-4 rounded-lg hover:bg-white/80 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <link.icon className="h-5 w-5 text-gray-600 group-hover:text-blue-600" />
                      <span className="font-medium">{link.label}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
        <div className="mt-16 pt-8 border-t">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} Vasant Saladi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
