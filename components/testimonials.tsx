import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Mr Tia",
    role: "CEO & Co-Founder of DevOps Easy Learning",
    company: "DevOps Easy Learning",
    content:
      "CodeGenie has revolutionized my development workflow. The AI suggestions are incredibly accurate and save me hours every day.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Collins Lagat",
    role: "Senior DevOps Engineer",
    company: "Angaza Technologies",
    content:
      "The debugging assistance is phenomenal. CodeGenie explains errors in a way that actually makes sense and provides actionable solutions.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Mr. Alianda",
    role: "Mobile Developer & Lecturer",
    company: "Umma University",
    content:
      "Integration with VS Code is seamless. It feels like having a senior developer pair programming with me 24/7.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-[#0B0B0B]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Loved by developers worldwide</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of developers who have transformed their coding experience with CodeGenie
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
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
  )
}
