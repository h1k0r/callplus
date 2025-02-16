import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Mail, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { href: "#features", label: "Features" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-[#2563EB] dark:text-blue-400 cursor-pointer"
              >
                CallPlus
              </motion.div>
            </Link>
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Phone className="h-4 w-4 text-[#2563EB] dark:text-blue-400" />
                <span>+91 8406831511</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Phone className="h-4 w-4 text-[#2563EB] dark:text-blue-400" />
                <span>+91 6207123633</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Mail className="h-4 w-4 text-[#2563EB] dark:text-blue-400" />
                <span>callplus.in@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#1E293B] dark:text-gray-300 hover:text-[#2563EB] dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button 
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="mr-2"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button>Get Started</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className="md:hidden">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-0 right-0 bg-white dark:bg-gray-900 border-b shadow-lg transition-colors duration-300"
          >
            <div className="px-6 py-4 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Phone className="h-4 w-4 text-[#2563EB] dark:text-blue-400" />
                  <span>+91 8406831511</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Phone className="h-4 w-4 text-[#2563EB] dark:text-blue-400" />
                  <span>+91 6207123633</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Mail className="h-4 w-4 text-[#2563EB] dark:text-blue-400" />
                  <span>callplus.in@gmail.com</span>
                </div>
              </div>

              <div className="space-y-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-[#1E293B] dark:text-gray-300 hover:text-[#2563EB] dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button 
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="w-full mt-4 justify-center"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
                <Button className="w-full mt-4">Get Started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}