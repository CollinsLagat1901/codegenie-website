import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#00C7B1] to-[#6366F1]">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <Sparkles className="h-16 w-16 text-white" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to supercharge your coding?</h2>

          <p className="text-xl text-white opacity-90 mb-8 leading-relaxed">
            Join thousands of developers who are already coding faster, debugging smarter, and building better
            applications with CodeGenie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#00C7B1] hover:bg-gray-100 font-semibold px-8 py-3">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#00C7B1] px-8 py-3"
            >
              View Pricing
            </Button>
          </div>

          <p className="text-sm text-white opacity-75 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
