"use client";

import { Button } from "./ui/button";
import { Github, Linkedin, Trophy, ChevronDown, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container flex min-h-[calc(100vh-3.5rem)] flex-col-reverse md:flex-row items-center justify-between py-8 md:py-12 gap-8"
    >
      <div className="flex flex-col gap-6 md:gap-8 max-w-[600px] text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
        >
          Software Engineer | Data Analytics | Data Scientist
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          id="about"
          className="space-y-4"
        >
          <p className="text-xl text-muted-foreground/80">
            Hello, I&apos;m Vasant, a Computer and Information Science student
            at the University of Maryland, specializing in Data Science.
          </p>
          <p className="text-lg text-muted-foreground">
            7 x Hackathon winner with experience in AI-driven platforms and
            data-driven solutions. Currently seeking full-time opportunities in
            Software Engineering, Data Engineering, Data Analytics.
          </p>
        </motion.div>
        <TooltipProvider>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-3 mt-4"
          >
            {[
              {
                href: "https://github.com/vasantsaladi",
                icon: Github,
                label: "GitHub",
                tooltip: "Check out my projects",
              },
              {
                href: "https://linkedin.com/in/vs6",
                icon: Linkedin,
                label: "LinkedIn",
                tooltip: "Connect with me",
              },
              {
                href: "https://devpost.com/vsaladi",
                icon: Trophy,
                label: "Devpost",
                tooltip: "See my hackathon wins",
              },
              {
                href: "https://vasantsaladiresume.tiiny.site",
                icon: FileText,
                label: "Resume",
                tooltip: "View my resume",
              },
            ].map(({ href, icon: Icon, label, tooltip }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-full px-6 border-[#111] hover:bg-[#111] hover:text-white transition-colors"
                    asChild
                  >
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                      <Icon className="mr-2 h-4 w-4" />
                      {label}
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{tooltip}</TooltipContent>
              </Tooltip>
            ))}
          </motion.div>
        </TooltipProvider>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            variant="default"
            size="lg"
            className="mt-4 mx-auto md:mx-0 bg-[#111] hover:bg-[#222] text-white rounded-full px-8 transition-colors"
            onClick={scrollToProjects}
          >
            <ChevronDown className="mr-2 h-5 w-5" />
            View My Projects
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]"
      >
        <div className="absolute inset-0 bg-[#f5f5f5] rounded-full overflow-hidden">
          <Image
            src="/images/my_pics/hero.png"
            alt="Profile photo of Vasant Saladi"
            fill
            sizes="(max-width: 768px) 280px, 400px"
            className="object-cover"
            priority
            quality={90}
            loading="eager"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
