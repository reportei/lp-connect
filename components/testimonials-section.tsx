import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Operations",
    company: "TechFlow Inc.",
    content:
      "StreamLine transformed our workflow completely. We've reduced manual tasks by 80% and our team productivity has never been higher.",
    rating: 5,
    avatar: "/professional-woman-diverse.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder & CEO",
    company: "GrowthLab",
    content:
      "The automation capabilities are incredible. What used to take our team hours now happens automatically. It's like having an extra team member.",
    rating: 5,
    avatar: "/professional-man.jpg",
  },
  {
    name: "Emily Watson",
    role: "Head of Product",
    company: "InnovateCorp",
    content:
      "The analytics insights have been game-changing for our decision making. We can now predict trends and optimize our processes proactively.",
    rating: 5,
    avatar: "/professional-woman-glasses.png",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-4">
            Trusted by <span className="text-primary">thousands of teams</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            See what our customers have to say about their experience with StreamLine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
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
