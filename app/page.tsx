import { Hero } from "@/components/hero"
import { ProductOverview } from "@/components/product-overview"
import { FeatureHighlight } from "@/components/feature-highlight"
import { Testimonials } from "@/components/testimonials"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Hero />
      <ProductOverview />
      <FeatureHighlight />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  )
}
