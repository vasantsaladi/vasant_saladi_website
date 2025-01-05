"use client";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Github, FileText } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  content: string;
  githubUrl: string;
  demoUrl: string;
}

export function ProjectCard({
  title,
  description,
  content,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{content}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" asChild>
          <Link href={githubUrl} target="_blank">
            <Github className="mr-2 h-4 w-4" />
            View Code
          </Link>
        </Button>
        <Button size="sm" asChild>
          <Link href={demoUrl} target="_blank">
            <FileText className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
