"use client";

import { useState, useCallback } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Github, Link as LinkIcon, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "./ui/skeleton";
import { useInView } from "react-intersection-observer";

// Categories array
const CATEGORIES = [
  "All",
  "Data Engineering",
  "Analytics",
  "Software Engineering",
] as const;

type Category = (typeof CATEGORIES)[number];
type ProjectCategory = Exclude<Category, "All">;

// Projects data
const PROJECTS: Project[] = [
  {
    title: "FORG3D",
    description:
      "3rd Place at CMU TartanHacks 2025 (Blockchain Track). Built a blockchain-powered marketplace using Story Protocol to protect digital creators' intellectual property in the $22B 3D modeling industry, featuring secure asset authentication and IP management.",
    tags: ["Blockchain", "3D Modeling", "IP Protection"],
    categories: ["Software Engineering", "Data Engineering"],
    githubUrl: "https://github.com/vasantsaladi/cmu_hackathon",
    linkedInUrl:
      "https://www.linkedin.com/posts/activity-7295651967895293952-T_b7",
    technologies: [
      "Story Protocol",
      "Next.js",
      "Three.js",
      "TypeScript",
      "Clerk Web3",
    ],
    image: "/images/projects/FORG3D.png",
  },
  {
    title: "GroceryLink DC",
    description:
      "A geospatial simulator using Mapbox and DC Open Data to optimize grocery store placements, improving food access by modeling resident movement and store impact in underserved communities.",
    tags: ["GIS", "Urban Planning", "Data Analysis"],
    categories: ["Analytics", "Software Engineering"],
    githubUrl: "https://github.com/vasantsaladi/gtown_hack",
    liveUrl: "https://gtownhack.vercel.app",
    technologies: ["Mapbox", "Python", "DC Open Data", "Geospatial Analysis"],
    image: "/images/projects/grocery_link_dc.png",
  },
  {
    title: "On NJ Transit",
    description:
      'Winner of "Best Use of NJ Transit Data" and "Best Transit Solution". Built an AI-driven delay prediction model with real-time commuter predictions and mechanical prediction with 24/7 AI support assistant.',
    tags: ["AI", "Machine Learning", "Real-time Data"],
    categories: ["Data Engineering", "Analytics"],
    githubUrl: "https://github.com/vasantsaladi/nj_transit_data_ru_hack",
    liveUrl: "https://on-nj-transit.streamlit.app",
    technologies: ["Python", "Streamlit", "Machine Learning", "NLP"],
    image: "/images/projects/nj_transit.png",
  },
  {
    title: "GCCI Partnerships",
    description:
      "Winner of York College Innovation Challenge. Built a digital platform for the Graham Center to streamline industry partnerships using Streamlit and OpenAI, featuring AI-powered partner matching and collaboration suggestions.",
    tags: ["AI", "Platform", "Partnerships"],
    categories: ["Software Engineering", "Analytics"],
    githubUrl: "https://github.com/vasantsaladi/gcci",
    liveUrl: "https://gcci-partnerships.streamlit.app",
    technologies: ["Streamlit", "OpenAI", "Python", "Data Analysis"],
    image: "/images/projects/gcci.png",
  },
  {
    title: "Spotted Lantern Fly",
    description:
      'Winner of "Best Environmental & Sustainability Hack". Developed geospatial visualization tool using Geopandas and iNaturalist datasets to track and analyze Lanternfly spread patterns.',
    tags: ["GIS", "Environmental", "Data Visualization"],
    categories: ["Data Engineering", "Analytics"],
    githubUrl: "https://github.com/vasantsaladi/spotted_lantern_fly/tree/main",
    liveUrl: "https://devpost.com/software/begone-spotted-lanternfly",
    technologies: [
      "Geopandas",
      "Python",
      "Data Visualization",
      "iNaturalist API",
    ],
    image: "/images/projects/spotted.png",
  },
  {
    title: "House Hackers",
    description:
      "Interactive neighborhood analysis tool using ZIP code data to help first-time homebuyers. Features custom ranking algorithms based on schools, hospitals, and housing metrics with Mapbox GL visualization.",
    tags: ["Real Estate", "Data Analysis", "Visualization"],
    categories: ["Analytics", "Software Engineering"],
    githubUrl: "https://github.com/0ETERATION1/house_hackers",
    liveUrl: "https://househackers.vercel.app",
    technologies: ["Mapbox GL", "React", "Data Analysis", "Custom Algorithms"],
    image: "/images/projects/house_hackers.png",
  },
  {
    title: "Heisenberg.ai",
    description:
      "Machine learning platform for drug discovery using ChEMBL database. Features 3D molecular visualization and OpenAI-powered insights for pharmaceutical compound analysis.",
    tags: ["ML", "Drug Discovery", "3D Visualization"],
    categories: ["Data Engineering", "Analytics", "Software Engineering"],
    githubUrl: "https://github.com/vasantsaladi/drugdiscovery",
    liveUrl: "https://www.heisenbergai.us",
    technologies: ["Machine Learning", "OpenAI", "3D Visualization", "ChEMBL"],
    image: "/images/projects/heisenberg.png",
  },
  {
    title: "Currency Prediction Model",
    description:
      "LSTM-based currency forecasting model using FRED and World Bank data. Interactive Streamlit dashboard with Plotly visualizations for trend analysis and predictions.",
    tags: ["LSTM", "Finance", "Forecasting"],
    categories: ["Data Engineering", "Analytics"],
    githubUrl: "https://github.com/vasantsaladi/hackotc",
    liveUrl: "https://jhuhackv.streamlit.app",
    technologies: ["LSTM", "Streamlit", "Plotly", "Python"],
    image: "/images/projects/currency.png",
  },
];

type Project = {
  title: string;
  description: string;
  tags: string[];
  categories: ProjectCategory[];
  githubUrl: string;
  liveUrl?: string;
  linkedInUrl?: string;
  technologies: string[];
  image: string;
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="flex flex-col hover:shadow-xl transition-all duration-300 border-2 h-full">
        <div className="relative w-full pt-[85%] rounded-t-lg overflow-hidden bg-gray-50">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Skeleton className="w-full h-full" />
            </div>
          )}
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            className={`object-cover transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            priority={index < 2}
            quality={85}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <CardHeader className="pb-3 space-y-2">
          <CardTitle className="text-2xl font-bold line-clamp-2">
            {project.title}
          </CardTitle>
          <CardDescription className="text-base text-gray-600 line-clamp-3">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="bg-blue-50 text-blue-700 px-4 py-1.5 text-sm font-medium"
              >
                {category}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-gray-700 bg-gray-50/80 px-3 py-1"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-700">Technologies:</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs bg-gray-50/50 px-2.5 py-1"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex gap-4 pt-6 pb-4">
          <Button
            variant="outline"
            size="lg"
            className="flex-1 font-medium hover:bg-gray-100 transition-colors"
            asChild
          >
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
          {project.liveUrl && (
            <Button
              variant="outline"
              size="lg"
              className="flex-1 font-medium hover:bg-gray-100 transition-colors"
              asChild
            >
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon className="mr-2 h-4 w-4" />
                Demo
              </Link>
            </Button>
          )}
          {project.linkedInUrl && (
            <Button
              variant="outline"
              size="lg"
              className="flex-1 font-medium hover:bg-gray-100 transition-colors"
              asChild
            >
              <Link
                href={project.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Post
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof CATEGORIES)[number]>("All");

  const filteredProjects = useCallback(() => {
    return PROJECTS.filter(
      (project) =>
        selectedCategory === "All" ||
        project.categories.includes(selectedCategory as ProjectCategory)
    );
  }, [selectedCategory]);

  return (
    <section className="container py-12" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-3 mb-10"
      >
        {CATEGORIES.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="rounded-full px-8 py-2.5 text-sm font-medium transition-colors"
          >
            {category}
          </Button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects().map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
