"use client";

import { useState } from "react";
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
import { Github, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

// Project type definition
type Project = {
  title: string;
  description: string;
  tags: string[];
  categories: ("Data Engineering" | "Analytics" | "Software Engineering")[];
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
};

// Sample projects data
const projects: Project[] = [
  {
    title: "Financial Data Pipeline & Analytics Platform",
    description:
      "Built end-to-end data pipeline processing 1M+ financial transactions daily, with real-time analytics dashboard using Tableau.",
    tags: ["Python", "Airflow", "AWS", "Tableau"],
    categories: ["Data Engineering", "Analytics"],
    githubUrl: "https://github.com/vasantsaladi/finance-pipeline",
    liveUrl: "https://tableau-dashboard.com",
    technologies: [
      "Apache Airflow",
      "Python",
      "AWS S3",
      "Tableau",
      "PostgreSQL",
    ],
  },
  {
    title: "E-commerce Analytics Engine",
    description:
      "Full-stack analytics platform providing real-time insights into customer behavior, sales trends, and inventory management.",
    tags: ["Python", "React", "ML", "SQL"],
    categories: ["Analytics", "Software Engineering"],
    githubUrl: "https://github.com/vasantsaladi/ecommerce-analytics",
    liveUrl: "https://demo-analytics.com",
    technologies: ["Python", "React", "TensorFlow", "PostgreSQL", "Redis"],
  },
  {
    title: "Data Quality Monitoring System",
    description:
      "Automated system for monitoring data quality, detecting anomalies, and generating alerts with a web interface for data teams.",
    tags: ["Python", "React", "AWS", "ML"],
    categories: ["Data Engineering", "Software Engineering"],
    githubUrl: "https://github.com/vasantsaladi/data-quality",
    technologies: ["Python", "React", "AWS Lambda", "DynamoDB"],
  },
  {
    title: "Customer Segmentation Platform",
    description:
      "End-to-end platform combining data pipeline, ML models, and interactive dashboards for customer segmentation and targeting.",
    tags: ["Python", "ML", "Tableau", "AWS"],
    categories: ["Data Engineering", "Analytics", "Software Engineering"],
    githubUrl: "https://github.com/vasantsaladi/customer-segments",
    liveUrl: "https://segmentation-demo.com",
    technologies: [
      "Python",
      "scikit-learn",
      "Tableau",
      "AWS Redshift",
      "FastAPI",
    ],
  },
];

const categories = [
  "All",
  "Data Engineering",
  "Analytics",
  "Software Engineering",
];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" ||
      project.categories.includes(selectedCategory as any)
  );

  return (
    <section className="container py-8" id="projects">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-1 mb-4">
                {project.categories.map((category) => (
                  <Badge
                    key={category}
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold">Technologies:</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
              )}
              {project.liveUrl && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.liveUrl} target="_blank">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
