import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "10 Ways Auto Dialers Transform Call Center Efficiency",
    description: "Discover how modern auto-dialing technology is revolutionizing call center operations and boosting productivity.",
    category: "Industry Insights",
    date: "Feb 15, 2024",
    readTime: "5 min read",
  },
  {
    title: "The Rise of AI in Call Centers: A Complete Guide",
    description: "Learn how artificial intelligence is reshaping the future of call centers and customer interactions.",
    category: "Technology",
    date: "Feb 14, 2024",
    readTime: "7 min read",
  },
  {
    title: "Best Practices for Call Center Campaign Management",
    description: "Expert tips on running successful outbound calling campaigns with maximum ROI.",
    category: "Best Practices",
    date: "Feb 13, 2024",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
            Latest Insights
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in call center technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="transform transition-all duration-300"
            >
              <Card className="h-full hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl mb-2 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0 h-auto text-[#2563EB] hover:no-underline gap-2">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button size="lg" variant="outline" className="border-[#2563EB] text-[#2563EB]">
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
