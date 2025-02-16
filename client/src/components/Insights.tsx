import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart, LineChart, ResponsiveContainer, XAxis, YAxis, 
  Tooltip, Bar, Line, CartesianGrid 
} from "recharts";
import { 
  TrendingUp, PhoneCall, Users, Clock, 
  Download, ExternalLink, BarChart2 
} from "lucide-react";

const marketData = [
  { year: '2020', value: 2500 },
  { year: '2021', value: 3200 },
  { year: '2022', value: 4100 },
  { year: '2023', value: 5000 },
  { year: '2024', value: 6200 },
];

const industryTrends = [
  {
    title: "Market Growth",
    description: "Indian call center market projected to grow by 45% by 2025",
    icon: TrendingUp,
    value: "+45%",
    color: "text-green-500",
  },
  {
    title: "Automation Adoption",
    description: "Companies using AI-powered dialers report 3x efficiency gains",
    icon: PhoneCall,
    value: "300%",
    color: "text-blue-500",
  },
  {
    title: "Agent Productivity",
    description: "Average talk time increased by 150% with predictive dialing",
    icon: Users,
    value: "150%",
    color: "text-purple-500",
  },
  {
    title: "Response Time",
    description: "Customer wait times reduced by 65% with smart routing",
    icon: Clock,
    value: "-65%",
    color: "text-orange-500",
  },
];

const resources = [
  {
    title: "2024 Call Center Technology Report",
    description: "Comprehensive analysis of emerging trends and technologies",
    downloadLink: "#",
  },
  {
    title: "Auto Dialer ROI Calculator",
    description: "Calculate potential savings with CallPlus implementation",
    downloadLink: "#",
  },
  {
    title: "Industry Benchmark Study",
    description: "Compare your metrics with industry standards",
    downloadLink: "#",
  },
];

export default function Insights() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
            <BarChart2 className="h-4 w-4" />
            <span className="text-sm font-medium">Market Intelligence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
            CallPlus Industry Insights
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Stay ahead with our expert analysis of call center industry trends and performance metrics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Market Growth Trajectory</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#2563EB" 
                  strokeWidth={2}
                  dot={{ fill: "#2563EB" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {industryTrends.map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <trend.icon className={`h-6 w-6 ${trend.color}`} />
                  <span className={`text-2xl font-bold ${trend.color}`}>
                    {trend.value}
                  </span>
                </div>
                <h4 className="font-semibold text-[#1E293B] mb-2">{trend.title}</h4>
                <p className="text-sm text-gray-600">{trend.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {resources.map((resource, index) => (
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
                  <CardTitle className="mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="mb-4">
                    {resource.description}
                  </CardDescription>
                  <Button 
                    variant="outline"
                    className="w-full border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/5 gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download Report
                  </Button>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
