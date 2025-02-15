import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "CallPlus Auto Dialer: The Future of Call Center Technology in India",
    description: "Discover how CallPlus's AI-powered predictive dialing technology is revolutionizing Indian call centers with 300% increased efficiency.",
    category: "Product Features",
    date: "Feb 15, 2024",
    readTime: "5 min read",
  },
  {
    title: "Maximizing ROI with CallPlus's Multi-Language Support",
    description: "Learn how our advanced multi-language IVR system helps businesses connect with customers across different Indian states effectively.",
    category: "Case Study",
    date: "Feb 14, 2024",
    readTime: "7 min read",
  },
  {
    title: "Advanced Call Analytics: Transform Your Decision Making",
    description: "Explore CallPlus's real-time analytics and AI-powered insights that help optimize your call center operations and agent performance.",
    category: "Technology",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
            <span className="text-sm font-medium">CallPlus Insights</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
            Auto Dialer Expertise & Industry Trends
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Expert insights on auto dialer technology, call center optimization, and customer engagement strategies
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
              <Card className="h-full hover:shadow-lg border-2 border-transparent hover:border-[#2563EB]/10 bg-white/50 backdrop-blur-sm group">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl mb-2 line-clamp-2 group-hover:text-[#2563EB] transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-[#2563EB] hover:no-underline gap-2 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Read Full Article
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
          <Button 
            size="lg" 
            variant="outline" 
            className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/5"
          >
            Explore All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
}