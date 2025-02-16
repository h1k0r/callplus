import { Link } from "wouter";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Link href="/">
              <span className="text-2xl font-bold text-[#2563EB] cursor-pointer">
                CallPlus
              </span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-xs">
              Transform your call center operations with our intelligent auto-dialer solution.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <FaPhone className="h-4 w-4 text-[#2563EB]" />
                <span>+91 8406831511</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaPhone className="h-4 w-4 text-[#2563EB]" />
                <span>+91 6207123633</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaEnvelope className="h-4 w-4 text-[#2563EB]" />
                <span>callplus.in@gmail.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold text-[#1E293B]">Features</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#features" className="text-gray-600 hover:text-[#2563EB]">
                  Predictive Dialing
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-[#2563EB]">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-[#2563EB]">
                  Integration
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold text-[#1E293B]">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#contact" className="text-gray-600 hover:text-[#2563EB]">
                  Get in Touch
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-[#2563EB]">
                  Support
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-gray-600">
            © {currentYear} CallPlus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}