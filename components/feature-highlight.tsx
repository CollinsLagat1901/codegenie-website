"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Zap, Shield, Layers } from "lucide-react"

const features = [
  {
    id: "write",
    title: "Write Code",
    icon: Code2,
    description: "Generate clean, efficient code in multiple languages",
    content: {
      title: "Intelligent Code Generation",
      description:
        "CodeGenie understands your intent and generates production-ready code snippets, functions, and entire components tailored to your project's context.",
      languages: ["Kotlin", "JavaScript", "TypeScript", "C++", "Python", "HTML/CSS"],
    },
  },
  {
    id: "debug",
    title: "Debug & Fix",
    icon: Zap,
    description: "Identify and resolve errors with AI-powered debugging",
    content: {
      title: "Smart Error Resolution",
      description:
        "Automatically detect bugs, explain error messages in plain English, and provide step-by-step solutions to fix issues in your codebase.",
      languages: ["Runtime Errors", "Syntax Issues", "Logic Problems", "Performance Issues"],
    },
  },
  {
    id: "improve",
    title: "Code Review",
    icon: Shield,
    description: "Get suggestions to improve code quality and performance",
    content: {
      title: "Automated Code Review",
      description:
        "Receive intelligent suggestions for code optimization, security improvements, and best practice recommendations.",
      languages: ["Security Audit", "Performance Optimization", "Code Style", "Best Practices"],
    },
  },
  {
    id: "support",
    title: "Multi-Language",
    icon: Layers,
    description: "Support for all major programming languages",
    content: {
      title: "Universal Language Support",
      description:
        "Work with any programming language or framework. CodeGenie adapts to your tech stack and provides relevant assistance.",
      languages: ["Frontend", "Backend", "Mobile", "Desktop", "Web", "APIs"],
    },
  },
]

export function FeatureHighlight() {
  const [activeFeature, setActiveFeature] = useState("write")
  const currentFeature = features.find((f) => f.id === activeFeature) || features[0]

  return (
    <section className="py-20 bg-gradient-to-br from-[#0D1B2A] to-[#0B0B0B]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How CodeGenie transforms your workflow</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover how our AI assistant helps you at every stage of development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature Tabs */}
          <div className="space-y-4">
            {features.map((feature) => (
              <Button
                key={feature.id}
                variant={activeFeature === feature.id ? "default" : "ghost"}
                className={`w-full justify-start p-6 h-auto ${
                  activeFeature === feature.id
                    ? "bg-gradient-to-r from-[#00C7B1] to-[#6366F1] text-black"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
                onClick={() => setActiveFeature(feature.id)}
              >
                <feature.icon className="mr-4 h-6 w-6" />
                <div className="text-left">
                  <div className="font-semibold text-lg">{feature.title}</div>
                  <div className="text-sm opacity-80">{feature.description}</div>
                </div>
              </Button>
            ))}
          </div>

          {/* Feature Content */}
          <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border-gray-800">
            <CardContent className="p-8">
              <div className="mb-6">
                <currentFeature.icon className="h-12 w-12 text-[#00C7B1] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{currentFeature.content.title}</h3>
                <p className="text-gray-300 leading-relaxed">{currentFeature.content.description}</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white">Supported:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentFeature.content.languages.map((lang, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#00C7B1] bg-opacity-20 text-[#00C7B1] rounded-full text-sm font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
