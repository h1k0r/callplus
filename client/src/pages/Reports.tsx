import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, BarChart2, FileText, Users, Globe, Shield, Zap } from "lucide-react";

const marketStats = [
  {
    icon: Globe,
    value: "45%",
    label: "Market Share in India",
    description: "Leading the auto dialer market"
  },
  {
    icon: Users,
    value: "10K+",
    label: "Active Users",
    description: "Trusted by businesses"
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Uptime",
    description: "Enterprise reliability"
  },
  {
    icon: Zap,
    value: "300%",
    label: "Efficiency Boost",
    description: "Average improvement"
  }
];

const reportCategories = [
  {
    title: "Market Analysis",
    description: "In-depth analysis of the auto dialer industry",
    reports: [
      {
        title: "CallPlus Market Leadership Report 2024",
        description: "Comprehensive analysis showing CallPlus's dominance in India's auto dialer market",
        fileSize: "2.4 MB",
        icon: TrendingUp,
        category: "Market Research"
      },
      {
        title: "Auto Dialer Industry Growth Trends",
        description: "Detailed market trends and future predictions for auto dialer technology",
        fileSize: "3.1 MB",
        icon: BarChart2,
        category: "Industry Analysis"
      }
    ]
  },
  {
    title: "Performance Studies",
    description: "Real-world impact and success stories",
    reports: [
      {
        title: "CallPlus ROI Analysis 2024",
        description: "Detailed ROI calculations and success metrics from enterprise deployments",
        fileSize: "1.8 MB",
        icon: FileText,
        category: "Case Studies"
      },
      {
        title: "Enterprise Success Stories",
        description: "Collection of case studies from major Indian enterprises using CallPlus",
        fileSize: "2.2 MB",
        icon: Users,
        category: "Customer Stories"
      }
    ]
  }
];

export default function Reports() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Market Leadership Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">#1 in India</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6">
              India's Leading Auto Dialer Solution
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Access comprehensive market research and analysis reports showcasing CallPlus's dominant position in India's auto dialer market
            </p>

            {/* Market Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {marketStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-12 w-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-[#2563EB]" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-[#1E293B] mb-2">{stat.value}</div>
                  <div className="font-medium text-[#1E293B] mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Report Categories */}
          {reportCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + categoryIndex * 0.1 }}
              className="mb-16"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#1E293B] mb-2">{category.title}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.reports.map((report, reportIndex) => (
                  <motion.div
                    key={reportIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + reportIndex * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="transform transition-all duration-300"
                  >
                    <Card className="h-full hover:shadow-lg border-2 border-transparent hover:border-[#2563EB]/10 bg-white/50 backdrop-blur-sm group">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="h-12 w-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4 group-hover:bg-[#2563EB] transition-colors duration-300">
                            <report.icon className="h-6 w-6 text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <span className="text-sm text-gray-500">{report.fileSize}</span>
                        </div>
                        <CardTitle className="mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
                          {report.title}
                        </CardTitle>
                        <CardDescription className="mb-6">
                          {report.description}
                        </CardDescription>
                        <Button 
                          className="w-full bg-[#2563EB] hover:bg-[#2563EB]/90 text-white gap-2"
                        >
                          <Download className="h-4 w-4" />
                          Download Report
                        </Button>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}