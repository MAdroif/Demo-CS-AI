import { Bot, Globe, BarChart3, Shield, Headphones, Sparkles } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "Smart AI Conversations",
    description: "Our bots understand context, handle complex queries, and learn from every interaction to improve over time.",
  },
  {
    icon: Globe,
    title: "Multi-Platform Support",
    description: "Deploy on WhatsApp, Facebook Messenger, your website, and more. One bot, everywhere your customers are.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track customer satisfaction, response times, and conversation trends with detailed dashboards.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and GDPR compliance keep your customer data safe and secure.",
  },
  {
    icon: Headphones,
    title: "Seamless Handoff",
    description: "Complex issues automatically escalate to human agents with full conversation context.",
  },
  {
    icon: Sparkles,
    title: "Easy Customization",
    description: "Train your bot with your own FAQs, product info, and brand voice. No technical skills needed.",
  },
]

export function Features() {
  return (
    <section id="features" className="bg-card py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything you need to automate customer support
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Powerful features designed for modern businesses that want to scale their customer service without scaling costs.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
