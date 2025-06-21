import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Code, Bug, Puzzle } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "AI Chat Assistant",
    description: "Get instant answers to your coding questions with context-aware AI responses.",
  },
  {
    icon: Code,
    title: "Code Modification",
    description: "Automatically refactor, optimize, and improve your code with intelligent suggestions.",
  },
  {
    icon: Bug,
    title: "Real-Time Debugging",
    description: "Identify and fix bugs faster with AI-powered error analysis and solutions.",
  },
  {
    icon: Puzzle,
    title: "IDE Plugin Support",
    description: "Seamlessly integrate with VS Code and other popular development environments.",
  },
]

export function ProductOverview() {
  return (
    <section className="py-20 bg-[#0B0B0B]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Everything you need to code smarter</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            CodeGenie combines the power of AI with seamless developer tools to enhance your coding experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border-gray-800 hover:border-[#00C7B1] transition-colors duration-300"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00C7B1] to-[#6366F1] rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
