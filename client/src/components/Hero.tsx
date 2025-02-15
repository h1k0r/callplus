import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle } from "lucide-react";

export default function Hero() {
  const benefits = [
    "Increase call center efficiency",
    "Reduce agent idle time",
    "Improve customer engagement",
  ];

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#1E293B] leading-tight">
              Automate Your Outbound Calls with{" "}
              <span className="text-[#2563EB]">CallPlus</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Transform your call center operations with our intelligent auto-dialer solution. 
              Boost productivity and reach more customers efficiently.
            </p>
            <div className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-[#10B981] h-5 w-5" />
                  <span className="text-[#1E293B]">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-[#0EA5E9]/10 absolute inset-0 animate-pulse" />
            <Phone className="w-full h-full text-[#2563EB] relative z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
