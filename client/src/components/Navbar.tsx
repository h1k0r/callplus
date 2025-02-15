import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#features", label: "Features" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-[#2563EB] cursor-pointer"
            >
              CallPlus
            </motion.div>
          </Link>

          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#1E293B] hover:text-[#2563EB] transition-colors"
              >
                {link.label}
              </a>
            ))}
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

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-b">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-[#1E293B] hover:text-[#2563EB]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
