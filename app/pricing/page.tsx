"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Check, X, Star, Zap, Code, Crown, Building, ArrowRight, Sparkles } from "lucide-react"

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, yearly: 0 },
      description: "Perfect for getting started with AI-powered coding",
      features: [
        "10 AI interactions per day",
        "Basic code suggestions",
        "Community support",
        "Web-based chat interface",
        "Basic analytics",
      ],
      limitations: ["Limited project saves", "No custom context storage", "No priority support"],
      cta: "Get Started Free",
      popular: false,
      icon: Code,
    },
    {
      name: "Pro",
      price: { monthly: 9.99, yearly: 99 },
      description: "Unlimited AI power for serious developers",
      features: [
        "Unlimited AI interactions",
        "Enhanced code suggestions",
        "Save & resume projects",
        "Custom context storage",
        "VS Code integration",
        "Priority support",
        "Advanced analytics",
        "Export conversation history",
      ],
      limitations: [],
      cta: "Upgrade to Pro",
      popular: true,
      icon: Zap,
    },
    {
      name: "Enterprise",
      price: { monthly: "Custom", yearly: "Custom" },
      description: "Advanced features for teams and organizations",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Admin dashboard",
        "Custom integrations",
        "SLA guarantee",
        "Dedicated support",
        "On-premise deployment",
        "Custom AI training",
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
      icon: Building,
    },
  ]

  const comparisonFeatures = [
    { feature: "AI Suggestions/Day", free: "10", pro: "∞", enterprise: "∞" },
    { feature: "Save Projects", free: false, pro: true, enterprise: true },
    { feature: "Custom Context Storage", free: false, pro: true, enterprise: true },
    { feature: "VS Code Integration", free: false, pro: true, enterprise: true },
    { feature: "Team Collaboration", free: false, pro: false, enterprise: true },
    { feature: "Priority Support", free: false, pro: true, enterprise: true },
    { feature: "Admin Dashboard", free: false, pro: false, enterprise: true },
    { feature: "SLA Guarantee", free: false, pro: false, enterprise: true },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Developer",
      company: "TechCorp",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "CodeGenie Pro has transformed my development workflow. The unlimited AI interactions are a game-changer.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Full Stack Engineer",
      company: "StartupXYZ",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "The VS Code integration is seamless. It's like having a senior developer pair programming with me 24/7.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      role: "Tech Lead",
      company: "DataFlow Inc",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "Enterprise features help our entire team collaborate better. The admin dashboard is incredibly useful.",
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences.",
    },
    {
      question: "Will my data be saved if I cancel my subscription?",
      answer:
        "Your conversation history and saved projects will be preserved for 30 days after cancellation. You can export your data anytime from your dashboard.",
    },
    {
      question: "What happens if I exceed the free plan limits?",
      answer:
        "If you reach the daily limit on the free plan, you'll be prompted to upgrade to Pro for unlimited access. Your progress and conversations are always saved.",
    },
    {
      question: "Do you offer student discounts?",
      answer:
        "Yes! We offer a 50% discount for students with a valid .edu email address. Contact our support team to apply for the student discount.",
    },
    {
      question: "Is there a free trial for Pro features?",
      answer: "Yes, new users get a 14-day free trial of Pro features. No credit card required to start your trial.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers for Enterprise customers. All payments are processed securely through Stripe.",
    },
  ]

  const getPrice = (plan: any) => {
    if (typeof plan.price.monthly === "string") return plan.price.monthly
    return isYearly ? `$${plan.price.yearly}` : `$${plan.price.monthly}`
  }

  const getPeriod = (plan: any) => {
    if (typeof plan.price.monthly === "string") return ""
    return isYearly ? "/year" : "/month"
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0D1B2A] via-[#0B0B0B] to-[#0B0B0B]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Choose the Plan That
              <span className="block text-transparent bg-gradient-to-r from-[#00C7B1] to-[#2563EB] bg-clip-text">
                Elevates Your Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Unlock the full potential of AI-powered coding with plans designed for every developer, from solo creators
              to enterprise teams.
            </p>

            {/* Pricing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <div className="bg-[#111827] p-1 rounded-lg border border-gray-800">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    !isYearly ? "bg-[#00C7B1] text-black" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    isYearly ? "bg-[#00C7B1] text-black" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Yearly
                  <Badge className="ml-2 bg-[#2563EB] text-white text-xs">Save 17%</Badge>
                </button>
              </div>
            </div>

            <Button size="lg" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-3">
              Try for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Plan Cards Section */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800 hover:border-[#00C7B1] transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-[#00C7B1] scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-[#00C7B1] to-[#2563EB] text-white px-4 py-1">
                      <Crown className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00C7B1] to-[#2563EB] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">{getPrice(plan)}</span>
                    <span className="text-gray-400">{getPeriod(plan)}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-[#00C7B1] mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-center">
                        <X className="h-4 w-4 text-gray-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-500 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#00C7B1] to-[#2563EB] hover:from-[#00A693] hover:to-[#1D4ED8] text-white"
                        : "bg-[#1F2937] hover:bg-[#374151] text-white border border-gray-700"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gradient-to-br from-[#0D1B2A] to-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Compare Plans</h2>
            <p className="text-xl text-gray-400">See exactly what's included in each plan</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#111827] border-gray-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left p-6 text-white font-semibold">Features</th>
                      <th className="text-center p-6 text-white font-semibold">Free</th>
                      <th className="text-center p-6 text-white font-semibold">
                        <div className="flex items-center justify-center">
                          Pro
                          <Crown className="h-4 w-4 ml-1 text-[#00C7B1]" />
                        </div>
                      </th>
                      <th className="text-center p-6 text-white font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((item, index) => (
                      <tr key={index} className="border-b border-gray-800/50">
                        <td className="p-6 text-gray-300">{item.feature}</td>
                        <td className="p-6 text-center">
                          {typeof item.free === "boolean" ? (
                            item.free ? (
                              <Check className="h-5 w-5 text-[#00C7B1] mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-500 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-300">{item.free}</span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {typeof item.pro === "boolean" ? (
                            item.pro ? (
                              <Check className="h-5 w-5 text-[#00C7B1] mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-500 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-300">{item.pro}</span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {typeof item.enterprise === "boolean" ? (
                            item.enterprise ? (
                              <Check className="h-5 w-5 text-[#00C7B1] mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-500 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-300">{item.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Loved by developers worldwide</h2>
            <p className="text-xl text-gray-400">See what our community has to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-[#00C7B1] text-black">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gradient-to-br from-[#0D1B2A] to-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Everything you need to know about CodeGenie</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[#111827] border border-gray-800 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-white hover:text-[#00C7B1] text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#00C7B1] to-[#2563EB]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Sparkles className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Start building smarter with CodeGenie today
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 leading-relaxed">
              Join thousands of developers who are already coding faster, debugging smarter, and building better
              applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#00C7B1] hover:bg-gray-100 font-semibold px-8 py-3">
                Try for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#00C7B1] px-8 py-3"
              >
                Upgrade to Pro
              </Button>.
            </div>
            <p className="text-sm text-white opacity-75 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
