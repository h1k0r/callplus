import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Insights />
        <Blog />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}