import { motion } from "framer-motion";
import { Card, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    position: "Call Center Manager",
    company: "TechServe Solutions",
    image: "/avatars/rajesh.jpg",
    text: "CallPlus has revolutionized our call center operations. The AI-powered predictive dialing has increased our agent productivity by 300%. Excellent customer support and reliable service.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    position: "Operations Director",
    company: "GlobalConnect India",
    image: "/avatars/priya.jpg",
    text: "The multi-language support and advanced analytics have helped us expand our operations across different states. CallPlus is truly a game-changer for Indian call centers.",
    rating: 5
  },
  {
    name: "Amit Patel",
    position: "CEO",
    company: "VoiceReach Technologies",
    image: "/avatars/amit.jpg",
    text: "After implementing CallPlus, our call resolution rates improved significantly. The smart routing and real-time analytics have transformed how we handle customer interactions.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
            <Quote className="h-4 w-4" />
            <span className="text-sm font-medium">Customer Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
            Trusted by Leading Call Centers
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their experience with CallPlus
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="transform transition-all duration-300"
            >
              <Card className="h-full hover:shadow-lg border-2 border-transparent hover:border-[#2563EB]/10 bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-[#1E293B]">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                      <p className="text-sm font-medium text-[#2563EB]">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#2563EB] text-[#2563EB]" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 italic">
                    "{testimonial.text}"
                  </blockquote>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
