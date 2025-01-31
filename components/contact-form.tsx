"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      const message = formData.get("message") as string;

      // For now, just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", { email, message });
      setIsSubmitted(true);
      e.currentTarget.reset();
    } catch (_) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg border bg-card text-card-foreground p-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Mail className="h-12 w-12 text-blue-600" />
          <div className="space-y-2">
            <h3 className="font-semibold tracking-tight text-2xl">
              Thanks for reaching out!
            </h3>
            <p className="text-muted-foreground">
              I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => setIsSubmitted(false)}
            className="mt-4"
          >
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="space-y-2">
        <Textarea
          id="message"
          name="message"
          placeholder="Your message"
          required
          disabled={isSubmitting}
          className="min-h-[150px]"
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
