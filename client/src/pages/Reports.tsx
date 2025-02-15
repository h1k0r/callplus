import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, BarChart2, FileText } from "lucide-react";

const reports = [
  {
    title: "CallPlus Market Leadership Report 2024",
    description: "Comprehensive analysis of CallPlus's position as India's #1 Auto Dialer solution",
    category: "Market Analysis",
    fileSize: "2.4 MB",
    icon: TrendingUp,
  },
  {
    title: "Auto Dialer Industry Trends 2024",
    description: "In-depth analysis of current market trends and future predictions",
    category: "Industry Research",
    fileSize: "3.1 MB",
    icon: BarChart2,
  },
  {
    title: "CallPlus ROI Case Studies",
    description: "Real success stories and ROI analysis from our enterprise clients",
    category: "Case Studies",
    fileSize: "1.8 MB",
    icon: FileText,
  },
];

export default function Reports() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
              <BarChart2 className="h-4 w-4" />
              <span className="text-sm font-medium">Market Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6">
              CallPlus Market Reports
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Download our comprehensive market research and industry analysis reports
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="transform transition-all duration-300"
              >
                <Card className="h-full hover:shadow-lg border-2 border-transparent hover:border-[#2563EB]/10 bg-white/50 backdrop-blur-sm group">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4 group-hover:bg-[#2563EB] transition-colors duration-300">
                      <report.icon className="h-6 w-6 text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
                      {report.title}
                    </CardTitle>
                    <CardDescription className="mb-6">
                      {report.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{report.fileSize}</span>
                      <Button 
                        variant="outline"
                        className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/5 gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
