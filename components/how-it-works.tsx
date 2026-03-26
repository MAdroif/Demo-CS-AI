import { FileText, Settings, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Share Your Requirements",
    description: "Tell us about your business, common customer questions, and support goals. We handle the rest.",
  },
  {
    number: "02",
    icon: Settings,
    title: "We Configure Your Bot",
    description: "Our team trains your AI bot with your specific knowledge base, brand voice, and workflows.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Go Live in Minutes",
    description: "Deploy to WhatsApp and your preferred channels. Start automating customer conversations instantly.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Get started in 3 simple steps
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            We make it incredibly easy to launch your AI customer service bot. No technical expertise required.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full -translate-x-1/2 bg-border md:block" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <step.icon className="h-10 w-10 text-primary" />
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
