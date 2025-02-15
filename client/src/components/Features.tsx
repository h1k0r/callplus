import { motion } from "framer-motion";
import { PhoneCall, BarChart, Clock, Users, Shield, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    title: "Predictive Dialing",
    description: "Automatically dial numbers and connect agents with live answers",
    icon: PhoneCall,
  },
  {
    title: "Real-time Analytics",
    description: "Monitor campaign performance and agent productivity",
    icon: BarChart,
  },
  {
    title: "Call Scheduling",
    description: "Plan campaigns across different time zones",
    icon: Clock,
  },
  {
    title: "CRM Integration",
    description: "Seamlessly connect with your existing CRM system",
    icon: Users,
  },
  {
    title: "Compliance Ready",
    description: "Built-in compliance tools for TCPA and DNC regulations",
    icon: Shield,
  },
  {
    title: "High Performance",
    description: "Handle thousands of calls simultaneously",
    icon: Zap,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1E293B]"
          >
            Powerful Features for Modern Call Centers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600"
          >
            Everything you need to optimize your outbound calling operations
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-[#2563EB]" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
