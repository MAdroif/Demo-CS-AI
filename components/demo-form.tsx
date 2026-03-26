"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Building2, Phone, ArrowRight, Sparkles } from "lucide-react"

const benefits = [
  "Full access to all features",
  "Dedicated onboarding support",
  "No credit card required",
  "Cancel anytime",
]

export function DemoForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    businessName: "",
    whatsappNumber: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="demo-form" className="bg-primary py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-lg rounded-3xl bg-background p-8 text-center shadow-2xl md:p-12">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              You&apos;re All Set!
            </h3>
            <p className="mb-6 text-muted-foreground">
              Thanks for requesting a demo! Our team will contact you on WhatsApp within 24 hours to set up your free 3-day trial.
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSubmitted(false)}
              className="font-medium"
            >
              Request Another Demo
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="demo-form" className="bg-primary py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Limited Time Offer
            </div>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Start your free 3-day demo today
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Experience the power of AI-driven customer service. No commitment, no credit card, just results.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-background p-8 shadow-2xl md:p-10">
            <h3 className="mb-2 text-2xl font-bold text-foreground">
              Request Free Demo
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Fill in your details and we&apos;ll reach out within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="businessName" className="text-sm font-medium">
                  Business Name
                </Label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="businessName"
                    placeholder="Enter your business name"
                    className="h-12 pl-10"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsappNumber" className="text-sm font-medium">
                  WhatsApp Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="whatsappNumber"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="h-12 pl-10"
                    value={formData.whatsappNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsappNumber: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 text-base font-semibold"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Submitting..."
                ) : (
                  <>
                    Request Free Demo
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                By submitting, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
