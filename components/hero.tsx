"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Zap, Clock } from "lucide-react"

export function Hero() {
  const scrollToDemo = () => {
    document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e0e7ff_1px,transparent_1px),linear-gradient(to_bottom,#e0e7ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Zap className="h-4 w-4" />
            AI-Powered Customer Service
          </div>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Transform Your Customer Service with{" "}
            <span className="text-primary">Intelligent AI</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Deploy AI-powered chatbots that understand your customers, answer questions 24/7, and scale your support team instantly. No coding required.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" onClick={scrollToDemo} className="gap-2 px-8 text-base font-medium">
              Start Free 3-Day Demo
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2 px-8 text-base font-medium">
              <MessageSquare className="h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2 rounded-2xl border bg-card p-6 text-center shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <span className="text-3xl font-bold text-foreground">24/7</span>
            <span className="text-sm text-muted-foreground">Always Available</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-2xl border bg-card p-6 text-center shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <span className="text-3xl font-bold text-foreground">90%</span>
            <span className="text-sm text-muted-foreground">Faster Response Time</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-2xl border bg-card p-6 text-center shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <span className="text-3xl font-bold text-foreground">500+</span>
            <span className="text-sm text-muted-foreground">Businesses Trust Us</span>
          </div>
        </div>
      </div>
    </section>
  )
}
