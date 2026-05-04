import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Send, X, ChevronUp } from 'lucide-react';

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll to top button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-[#7B1C3A] text-yellow-300 shadow-xl flex items-center justify-center hover:bg-[#9B2C4A] transition-colors glow-burgundy"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating contact menu */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {open && (
            <>
              <motion.a
                initial={{ opacity: 0, x: 30, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 30, scale: 0.5 }}
                transition={{ delay: 0.05 }}
                href="https://wa.me/919110066743"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-xl hover:bg-green-600 transition-colors group"
              >
                <span className="text-sm font-bold uppercase tracking-wider hidden sm:inline">WhatsApp</span>
                <MessageCircle className="w-5 h-5" />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: 30, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 30, scale: 0.5 }}
                transition={{ delay: 0.1 }}
                href="https://t.me/+919110066743"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-blue-500 text-white px-4 py-3 rounded-full shadow-xl hover:bg-blue-600 transition-colors"
              >
                <span className="text-sm font-bold uppercase tracking-wider hidden sm:inline">Telegram</span>
                <Send className="w-5 h-5" />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: 30, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 30, scale: 0.5 }}
                transition={{ delay: 0.15 }}
                href="tel:+919110066743"
                className="flex items-center gap-3 bg-yellow-400 text-[#7B1C3A] px-4 py-3 rounded-full shadow-xl hover:bg-yellow-300 transition-colors"
              >
                <span className="text-sm font-bold uppercase tracking-wider hidden sm:inline">Call Now</span>
                <Phone className="w-5 h-5" />
              </motion.a>
            </>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
          className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#7B1C3A] to-[#9B2C4A] text-yellow-300 shadow-2xl flex items-center justify-center"
          aria-label="Contact options"
        >
          {/* Pulsing rings */}
          {!open && (
            <>
              <span className="absolute inset-0 rounded-full bg-[#7B1C3A] opacity-40 animate-ping" />
              <span className="absolute inset-0 rounded-full bg-yellow-400 opacity-20 animate-pulse" />
            </>
          )}
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                className="relative z-10"
              >
                <X className="w-7 h-7" />
              </motion.div>
            ) : (
              <motion.div
                key="msg"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="relative z-10"
              >
                <MessageCircle className="w-7 h-7" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
