import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Hi, I'm [Your Name] 👋</h1>
        <p className="text-xl text-muted-foreground">
          Full Stack Developer specializing in modern web technologies
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "TypeScript",
            "Node.js",
            "Next.js",
            "TailwindCSS",
            "PostgreSQL",
          ].map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Add your project cards here */}
          {/* Example Project Card */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold">Project Name</h3>
            <p className="text-muted-foreground">
              Project description goes here
            </p>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm">
                View Demo
              </Button>
              <Button variant="outline" size="sm">
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
