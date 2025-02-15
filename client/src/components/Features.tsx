import { motion } from "framer-motion";
import {
  PhoneCall, BarChart, Clock, Users, Shield, Zap,
  Brain, Database, LineChart, Headphones, Globe,
  MessageSquare, Lock, Webhook, Languages, Bot,
  BarChart2, Mic, Gauge, Phone, ListChecks,
  Settings, Network, Blocks, FileText, Cloud
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const featureCategories = [
  {
    title: "Core Dialing Features",
    description: "Advanced dialing capabilities for maximum efficiency",
    features: [
      {
        title: "Predictive Dialing",
        description: "AI-based smart dialer maximizing agent talk time",
        icon: PhoneCall,
      },
      {
        title: "Multi-Level IVR",
        description: "Custom IVR with drag-and-drop call flows",
        icon: Bot,
      },
      {
        title: "Campaign Management",
        description: "Sophisticated campaign scheduling and management",
        icon: Clock,
      },
    ],
  },
  {
    title: "Smart Integration",
    description: "Seamless connectivity with your existing tools",
    features: [
      {
        title: "CRM Integration",
        description: "Sync with Zoho, Salesforce, HubSpot, and more",
        icon: Database,
      },
      {
        title: "Real-time Analytics",
        description: "Comprehensive reporting and performance tracking",
        icon: LineChart,
      },
      {
        title: "API Integration",
        description: "Robust API for custom integrations",
        icon: Webhook,
      },
    ],
  },
  {
    title: "Advanced AI Features",
    description: "Cutting-edge AI capabilities for better results",
    features: [
      {
        title: "Voice Analytics",
        description: "AI-powered call sentiment analysis",
        icon: Brain,
      },
      {
        title: "Smart Routing",
        description: "Intelligent call distribution based on agent skills",
        icon: Users,
      },
      {
        title: "Multi-Language Support",
        description: "Support for multiple Indian languages",
        icon: Languages,
      },
    ],
  },
  {
    title: "Call Quality & Monitoring",
    description: "Ensure the highest standards of call quality",
    features: [
      {
        title: "Live Call Monitoring",
        description: "Real-time agent and call status monitoring",
        icon: Headphones,
      },
      {
        title: "Quality Scoring",
        description: "AI-generated feedback for every call",
        icon: BarChart2,
      },
      {
        title: "Voice Recording",
        description: "Automatic call recording and storage",
        icon: Mic,
      },
    ],
  },
  {
    title: "Performance & Security",
    description: "Enterprise-grade reliability and protection",
    features: [
      {
        title: "High Performance",
        description: "Handle thousands of calls simultaneously",
        icon: Gauge,
      },
      {
        title: "Secure Infrastructure",
        description: "TLS/SRTP encryption for all calls",
        icon: Shield,
      },
      {
        title: "Compliance Ready",
        description: "GDPR & NDNC compliance handling",
        icon: ListChecks,
      },
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
            Industry-Leading Features
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why CallPlus is India's most advanced auto dialer solution
          </p>
        </motion.div>

        <div className="space-y-16">
          {featureCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#1E293B] mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (featureIndex * 0.05) }}
                    whileHover={{ scale: 1.03 }}
                    className="transform transition-all duration-300"
                  >
                    <Card className="h-full hover:shadow-lg border-2 border-transparent hover:border-[#2563EB]/10 bg-white/50 backdrop-blur-sm">
                      <CardHeader>
                        <div className="h-12 w-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4">
                          <feature.icon className="h-6 w-6 text-[#2563EB]" />
                        </div>
                        <CardTitle className="mb-2">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}