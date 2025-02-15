import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Sparkles } from "lucide-react";

export default function Hero() {
  const benefits = [
    "India's Most Advanced Auto Dialer Solution",
    "Boost Agent Productivity by up to 300%",
    "Seamless Integration with Popular CRM Systems",
    "Advanced AI-Powered Features",
    "Multi-Language Support for Indian Markets",
  ];

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Next-Gen Auto Dialer</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-[#1E293B] leading-tight">
              Transform Your Call Center with{" "}
              <span className="text-[#2563EB] relative">
                CallPlus
                <motion.div
                  className="absolute -z-10 inset-0 bg-blue-100/50 rounded-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                />
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Experience the power of AI-driven predictive dialing, real-time analytics, 
              and intelligent call routing. Perfect for Indian businesses looking to scale 
              their outbound operations.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="text-[#10B981] h-5 w-5 flex-shrink-0" />
                  <span className="text-[#1E293B]">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-[#2563EB] hover:bg-[#2563EB]/90">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-[#2563EB] text-[#2563EB]">
                Schedule Demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-[#2563EB]/5 absolute inset-0">
              <motion.div
                className="absolute inset-0 rounded-full bg-[#2563EB]/10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <Phone className="w-full h-full text-[#2563EB] relative z-10" />

            <motion.div
              className="absolute -right-4 -bottom-4 bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Live Calls Active</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}