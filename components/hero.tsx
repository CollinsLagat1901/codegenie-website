"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export function Hero() {
  const router = useRouter();
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0D1B2A] via-[#0B0B0B] to-[#0B0B0B]">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your AI-Powered
                <span className="block text-transparent bg-gradient-to-r from-[#00C7B1] to-[#6366F1] bg-clip-text">
                  Coding Partner
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Transform your development workflow with intelligent code assistance, real-time debugging, and seamless
                IDE integration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => router.push("/sign-in")} size="lg" className="bg-[#00C7B1] hover:bg-[#00A693] text-black font-semibold px-8 py-3">
                Try for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
              onClick={() => router.push("/profile")}
                size="lg"
                variant="outline"
                className="border-[#00C7B1] text-[#00C7B1] hover:bg-[#00C7B1] hover:text-black px-8 py-3"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#00C7B1] rounded-full"></div>
                <span>Free to start</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#6366F1] rounded-full"></div>
                <span>No credit card required</span>
              </div>
            </div>
          </div>

          {/* Right side - Screenshot/Animation */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl p-6 shadow-2xl border border-gray-800">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">VS Code - CodeGenie</span>
              </div>
              <div className="bg-[#0D1117] rounded-lg p-4 font-mono text-sm">
                <div className="text-gray-500 mb-2">// CodeGenie AI Assistant</div>
                <div className="text-[#00C7B1] mb-1">{"&gt;"} How do I optimize this React component?</div>
                <div className="text-gray-300 mb-3">
                  <span className="text-[#6366F1]">CodeGenie:</span> I can help you optimize this component by...
                </div>
                <div className="text-yellow-400">function OptimizedComponent() {"{"}</div>
                <div className="text-gray-300 ml-4">const memoizedValue = useMemo(() =&gt; {"{"}</div>
                <div className="text-gray-300 ml-8">// Optimized logic here</div>
                <div className="text-gray-300 ml-4">{"}, [dependencies]);"}</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-[#00C7B1] text-black px-3 py-1 rounded-full text-sm font-semibold">
              AI Powered
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#6366F1] text-white px-3 py-1 rounded-full text-sm font-semibold">
              Real-time
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
