import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Sparkles, Globe2, Shield, Zap } from "lucide-react";

export default function Hero() {
  const benefits = [
    "India's Most Advanced Auto Dialer Solution",
    "Boost Agent Productivity by up to 300%",
    "Seamless Integration with Popular CRM Systems",
    "Advanced AI-Powered Features",
    "Multi-Language Support for Indian Markets",
  ];

  const stats = [
    { icon: Globe2, value: "10M+", label: "Calls Handled" },
    { icon: Shield, value: "99.9%", label: "Uptime" },
    { icon: Zap, value: "2x", label: "Faster Resolution" },
  ];

  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/30" />
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzRUIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2NEgzNnpNNDAgMzBoNHY0aC00ek00NCAzNGg0djRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6"
            >
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Next-Gen Auto Dialer</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-[#1E293B] leading-tight">
              Transform Your Call Center with{" "}
              <span className="text-[#2563EB] relative inline-block">
                CallPlus
                <motion.div
                  className="absolute -z-10 inset-0 bg-blue-100/50 rounded-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                />
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-lg text-gray-600"
            >
              Experience the power of AI-driven predictive dialing, real-time analytics, 
              and intelligent call routing. Perfect for Indian businesses looking to scale 
              their outbound operations.
            </motion.p>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="flex-shrink-0 h-5 w-5 relative">
                    <motion.div
                      className="absolute inset-0 bg-green-100 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: index * 0.2 }}
                    />
                    <CheckCircle className="text-[#10B981] h-5 w-5 relative z-10" />
                  </div>
                  <span className="text-[#1E293B]">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="bg-[#2563EB] hover:bg-[#2563EB]/90 hover:scale-105 transform transition-all duration-300"
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/5 hover:scale-105 transform transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="aspect-square rounded-full bg-gradient-to-br from-[#2563EB]/5 to-[#2563EB]/20 absolute inset-0">
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#2563EB]/10"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <Phone className="w-full h-full text-[#2563EB] relative z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute inset-0 z-0"
            >
              <div className="absolute top-1/4 -left-4 w-8 h-8 bg-blue-200 rounded-full blur-xl" />
              <div className="absolute bottom-1/4 -right-4 w-8 h-8 bg-blue-200 rounded-full blur-xl" />
            </motion.div>

            <motion.div
              className="absolute -right-4 -bottom-4 bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <stat.icon className="h-5 w-5 text-[#2563EB]" />
                    </div>
                    <div className="font-bold text-[#1E293B]">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}