import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  return (
    <article className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg max-w-none"
        >
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-4">
              <span>Product Features</span>
              <span>•</span>
              <time dateTime="2024-02-15">Feb 15, 2024</time>
              <span>•</span>
              <span>5 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6">
              CallPlus Auto Dialer: The Future of Call Center Technology in India
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how our AI-powered predictive dialing technology is revolutionizing Indian call centers with 300% increased efficiency.
            </p>
          </header>

          <div className="space-y-8">
            <section>
              <h2>Revolutionary Auto Dialer Technology</h2>
              <p>
                In today's competitive Indian market, call centers need cutting-edge solutions to stay ahead. CallPlus Auto Dialer combines AI-powered predictive dialing with advanced analytics to transform how businesses handle outbound calls. Our solution has helped companies across India achieve unprecedented levels of efficiency and customer engagement.
              </p>
            </section>

            <section>
              <h2>Key Features That Set CallPlus Apart</h2>
              <ul>
                <li>
                  <strong>AI-Powered Predictive Dialing</strong>: Our advanced algorithm predicts agent availability and optimizes dialing patterns, increasing productive talk time by up to 300%.
                </li>
                <li>
                  <strong>Multi-Language Support</strong>: Native support for multiple Indian languages ensures effective communication across different regions.
                </li>
                <li>
                  <strong>Real-time Analytics</strong>: Comprehensive dashboards and reporting tools provide actionable insights into campaign performance.
                </li>
              </ul>
            </section>

            <section>
              <h2>Advanced Integration Capabilities</h2>
              <p>
                CallPlus seamlessly integrates with popular CRM systems and business tools, including:
              </p>
              <ul>
                <li>Salesforce, Zoho, and other leading CRM platforms</li>
                <li>Custom API integration options</li>
                <li>Real-time data synchronization</li>
                <li>Automated workflow management</li>
              </ul>
            </section>

            <section>
              <h2>Compliance and Security</h2>
              <p>
                We understand the importance of regulatory compliance in the Indian market. CallPlus Auto Dialer includes:
              </p>
              <ul>
                <li>TRAI and NDNC compliance features</li>
                <li>Advanced encryption for data security</li>
                <li>Robust access control systems</li>
                <li>Regular security updates and patches</li>
              </ul>
            </section>

            <div className="my-12">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-white">
                <h3 className="text-2xl font-semibold text-[#1E293B] mb-4">
                  Experience the CallPlus Difference
                </h3>
                <p className="text-gray-600 mb-6">
                  Join the growing number of Indian businesses transforming their call center operations with CallPlus Auto Dialer.
                </p>
                <Button 
                  className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90 hover:scale-105 transform transition-all duration-300"
                >
                  Schedule a Demo
                </Button>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}