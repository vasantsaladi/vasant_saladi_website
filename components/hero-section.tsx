"use client";

import { Button } from "./ui/button";
import { FileText, Github, Linkedin, Trophy, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="container flex min-h-[calc(100vh-3.5rem)] flex-col-reverse md:flex-row items-center justify-between py-8 md:py-12 gap-8">
        <div className="flex flex-col gap-6 md:gap-8 max-w-[600px] text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Data Engineer | Data Analyst | Data Scientist
          </h1>
          <div id="about">
            <p className="text-xl text-muted-foreground/80">
              Hello, I'm Vasant, a Computer and Information Science student at
              the University of Maryland, specializing in Data Science.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              I'm passionate about leveraging technology to solve real-world
              problems through data science and machine learning. Contact me if
              you'd like to work together!
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
            <Button
              variant="outline"
              className="rounded-full px-6 border-[#111]"
              asChild
            >
              <Link href="/cv.pdf" target="_blank">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-6 border-[#111]"
              asChild
            >
              <Link href="https://github.com/vasantsaladi" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-6 border-[#111]"
              asChild
            >
              <Link href="https://linkedin.com/in/vasantsaladi" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-6 border-[#111]"
              asChild
            >
              <Link href="https://devpost.com/vasantsaladi" target="_blank">
                <Trophy className="mr-2 h-4 w-4" />
                Devpost
              </Link>
            </Button>
          </div>
          <Button
            variant="ghost"
            className="mt-4 mx-auto md:mx-0"
            onClick={scrollToProjects}
          >
            <ChevronDown className="h-6 w-6" />
            View Projects
          </Button>
        </div>

        <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
          <div className="absolute inset-0 bg-[#f5f5f5] rounded-full overflow-hidden">
            <Image
              src="/hero.png"
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
