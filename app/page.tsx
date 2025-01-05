import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <div className="flex flex-col gap-8 pb-8">
          <h1 className="text-4xl font-bold tracking-tight">
            Data Engineer | Data Analyst
            <br />| Data Scientist
          </h1>
          <div className="max-w-[600px] space-y-4">
            <p className="text-xl text-muted-foreground">
              Hello, I'm Vasant, a Computer and Information Science student at
              the University of Maryland, specializing in Data Science.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about leveraging technology to solve real-world problems
              through data science and machine learning. Contact me if you'd like to
              work together!
            </p>
          </div>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/cv">Download CV</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

