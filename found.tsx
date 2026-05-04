import { Link } from "wouter";
import { motion } from "framer-motion";
import { Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-xl mx-auto">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}
          className="text-8xl mb-6">📷</motion.div>
        <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
          className="text-7xl font-serif font-bold text-[#7B1C3A] mb-2">404</motion.h1>
        <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-xl text-muted-foreground mb-8">
          Oops! This page is not in our frame. Let's get you back.
        </motion.p>
        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center">
          <Link href="/"
            className="flex items-center gap-2 bg-[#7B1C3A] text-white font-bold uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-[#9B2C4A] transition-colors">
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <a href="https://wa.me/919110066743" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 bg-yellow-400 text-[#7B1C3A] font-bold uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-yellow-300 transition-colors">
            <Phone className="w-4 h-4" /> Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
}
