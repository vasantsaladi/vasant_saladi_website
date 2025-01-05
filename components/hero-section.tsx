"use client";

import { Button } from "./ui/button";
import { Mail, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="container flex min-h-[calc(100vh-3.5rem)] items-center justify-between py-20">
      <div className="flex flex-col gap-8 max-w-[600px]">
        <h1 className="text-5xl font-bold tracking-tight">
          Data Engineer | Data Analyst | Data Scientist
        </h1>
        <p className="text-xl text-muted-foreground/80">
          Hello, I'm Vasant, a Computer and Information Science student at the
          University of Maryland, specializing in Data Science.
        </p>
        <p className="text-lg text-muted-foreground">
          I'm passionate about leveraging technology to solve real-world
          problems through data science and machine learning. Contact me if
          you'd like to work together!
        </p>
        <div className="flex gap-4 mt-4">
          <Button
            className="bg-[#111] text-white hover:bg-[#222] rounded-full px-6"
            asChild
          >
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-6 border-[#111]"
            asChild
          >
            <Link href="/cv.pdf" target="_blank">
              <FileText className="mr-2 h-4 w-4" />
              Download CV
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative w-[450px] h-[450px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#f5f5f5] rounded-full" />
        <Image
          src="/hero.png"
          alt="Profile illustration"
          width={400}
          height={400}
          className="relative z-10"
          priority
        />
      </div>
    </div>
  );
}
