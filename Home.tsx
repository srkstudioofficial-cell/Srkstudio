import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  Star,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Play,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
  Camera,
  Award,
  Heart,
  Clock,
  Users,
  Sparkles,
  Shield,
  Video,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Quote,
  MapIcon,
} from 'lucide-react';
import { categories } from '@/data/categories';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AnimatedCounter } from '@/components/AnimatedCounter';

const socialLinks = [
  { icon: Instagram, name: 'Instagram', handle: '@srk.studio', followers: '25K+', url: '#', color: 'from-pink-500 via-rose-500 to-orange-500' },
  { icon: Facebook, name: 'Facebook', handle: 'S.R.K Studio', followers: '18K+', url: '#', color: 'from-blue-600 to-blue-800' },
  { icon: Youtube, name: 'YouTube', handle: 'S.R.K Studio', followers: '10K+', url: '#', color: 'from-red-600 to-red-800' },
  { icon: Twitter, name: 'X / Twitter', handle: '@srkstudio', followers: '5K+', url: '#', color: 'from-slate-700 to-slate-900' },
  { icon: Linkedin, name: 'LinkedIn', handle: 'S.R.K Studio', followers: '3K+', url: '#', color: 'from-blue-500 to-cyan-600' },
];

const features = [
  { icon: Award, title: 'Award Winning', desc: 'Recognized as Bihar\'s top wedding studio with multiple industry awards' },
  { icon: Camera, title: 'Latest Equipment', desc: 'Sony A7IV, Canon R5, DJI drones — only the best gear for your wedding' },
  { icon: Video, title: 'Cinematic Films', desc: 'Hollywood-style edits with color grading, slow motion & drone shots' },
  { icon: Users, title: '500+ Weddings', desc: 'A decade of experience capturing every kind of Indian wedding' },
  { icon: Shield, title: '100% Trust', desc: 'Advance protection, contract-based booking, no hidden charges' },
  { icon: Clock, title: 'Fast Delivery', desc: 'Highlight reel in 7 days, full album in 30 days — guaranteed' },
];

const process = [
  { num: '01', title: 'Discovery Call', desc: 'WhatsApp / call us to discuss date, venue, package & vision', icon: Phone },
  { num: '02', title: 'Custom Quote', desc: 'We create a personalised plan based on your wedding scale & needs', icon: Sparkles },
  { num: '03', title: 'Book & Plan', desc: 'Confirm date with token amount, pre-wedding planning & shot list', icon: CheckCircle2 },
  { num: '04', title: 'Capture & Deliver', desc: 'Wedding day magic, then highlight in 7 days, full delivery in 30', icon: Heart },
];

const faqs = [
  { q: 'Kya aap Bihar ke bahar bhi shoot karte hain?', a: 'Bilkul! Hum poore India mein wedding shoots karte hain — Bihar, Jharkhand, UP, Delhi, Mumbai, Bangalore. Travel & stay charges actual basis pe additional honge.' },
  { q: 'Booking confirm karne ke liye kitna advance dena padega?', a: 'Date confirm karne ke liye total package ka 30% advance lagta hai (online ya cash). Baki amount delivery se pehle. UPI: 9110066743@upi.' },
  { q: 'Kitne din mein photos aur video deliver karte ho?', a: 'Highlight reel: 7 din. Edited photos (200-500): 15-20 din. Cinematic film + full album: 30 din maximum. Sab cloud aur pen drive mein milta hai.' },
  { q: 'Kya raw footage milti hai?', a: 'Haan, sab raw photos pen drive mein delivered hote hain. Edited high-quality versions Google Drive pe bhi share karte hain — lifetime access.' },
  { q: 'Drone shots aur cinematic video sab packages mein available hai?', a: 'Drone shots A+, A, B, C packages mein included hain. Cinematic film sab packages mein hai. Custom requirements ke liye baat kar sakte hain.' },
  { q: 'Pre-wedding aur engagement shoots karte ho?', a: 'Bilkul! Pre-wedding, engagement, haldi, mehendi, sangeet — sab functions cover karte hain. Standalone pre-wedding shoot Rs 25,000 se shuru.' },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-luxury-dark">
        {/* Background image — full clear, no heavy overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.png"
            alt="S.R.K Studio Wedding Photography"
            className="w-full h-full object-cover opacity-95"
          />
          {/* Very subtle dark gradient only at edges for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        </div>

        {/* Floating sparkles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-yellow-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 8px #FACC15',
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-[#7B1C3A] font-bold text-xs uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-8 glow-gold"
          >
            <Sparkles className="w-4 h-4" />
            World-Class Wedding Photography
            <Sparkles className="w-4 h-4" />
          </motion.div>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-[0.9] tracking-tight"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}
          >
            Capture the
            <br />
            <span className="text-gradient-gold italic font-elegant">Eternity</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-elegant text-xl md:text-2xl text-rose-100 italic mb-3 max-w-3xl mx-auto"
          >
            Bihar's #1 Cinematic Wedding Photography & Videography Studio
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="gold-divider w-48 mx-auto my-6"
          />

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-rose-200 font-light tracking-wide mb-12 max-w-2xl mx-auto"
          >
            From intimate moments to grand royal weddings — we craft cinematic films
            that you'll cherish forever. <span className="text-yellow-400">10+ years</span>,{' '}
            <span className="text-yellow-400">500+ weddings</span>, one promise: perfection.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/book-now"
              className="btn-luxe inline-flex items-center gap-2 px-10 py-5 rounded-xl text-base"
            >
              Book Your Wedding
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/real-wedding"
              className="btn-gold inline-flex items-center gap-2 px-10 py-5 rounded-xl text-base"
            >
              <Play className="w-5 h-5 fill-current" />
              View Our Work
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-rose-300"
          >
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              5★ on Google
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-400" />
              Award Winning
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-yellow-400" />
              100% Trusted
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <MapIcon className="w-4 h-4 text-yellow-400" />
              All India Service
            </span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-yellow-400 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* ============ ANIMATED STATS STRIP ============ */}
      <section className="bg-gradient-to-r from-[#7B1C3A] via-[#9B2C4A] to-[#7B1C3A] py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, rgba(250,204,21,0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center text-white">
            {[
              { num: 500, suffix: '+', label: 'Happy Couples', icon: Heart },
              { num: 1000, suffix: '+', label: 'Events Covered', icon: Camera },
              { num: 10, suffix: '+', label: 'Years Experience', icon: Award },
              { num: 50, suffix: '+', label: 'Cities Travelled', icon: MapPin },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-yellow-400/20 border border-yellow-400/40 flex items-center justify-center mb-3 backdrop-blur-sm">
                  <s.icon className="w-6 h-6 text-yellow-300" />
                </div>
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">
                  <AnimatedCounter end={s.num} suffix={s.suffix} />
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-rose-200 mt-2">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="py-24 bg-gradient-to-b from-white via-yellow-50/30 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#7B1C3A] uppercase tracking-[0.3em] text-sm font-bold flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" /> Why S.R.K Studio <Sparkles className="w-4 h-4" />
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-gradient-burgundy mt-3 mb-4">
              The S.R.K Difference
            </h2>
            <div className="gold-divider w-32 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-elegant italic">
              Six reasons why couples across India trust S.R.K Studio for the most
              important day of their lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-8 border-2 border-rose-100 hover:border-yellow-400 hover:shadow-2xl hover:shadow-[#7B1C3A]/10 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-200/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7B1C3A] to-[#9B2C4A] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg">
                    <f.icon className="w-8 h-8 text-yellow-300" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#7B1C3A] mb-3">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CAMERA CATEGORIES ============ */}
      <section className="py-24 bg-luxury-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(250,204,21,0.1) 0px, rgba(250,204,21,0.1) 1px, transparent 1px, transparent 30px)',
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-bold flex items-center justify-center gap-2">
              <Camera className="w-4 h-4" /> Our Packages <Camera className="w-4 h-4" />
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mt-3 mb-4">
              Choose Your Camera
            </h2>
            <div className="gold-divider w-32 mx-auto mb-6" />
            <p className="text-rose-200 max-w-2xl mx-auto text-lg font-elegant italic">
              Seven world-class packages — from intimate gatherings to grand royal celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <Link href={`/category/${cat.id}`} key={cat.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="luxury-card group cursor-pointer h-full flex flex-col overflow-hidden rounded-2xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0010] via-[#1a0010]/30 to-transparent" />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-[#7B1C3A] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                      {cat.price.split(' ')[0]} {cat.price.split(' ')[1]}
                    </div>
                    <div className="absolute top-4 left-4 bg-[#7B1C3A]/90 backdrop-blur text-yellow-300 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {cat.id.toUpperCase()}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="flex gap-1 text-yellow-400">
                        {Array.from({ length: cat.rating }).map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs uppercase tracking-widest text-rose-200 bg-black/40 px-2 py-1 rounded backdrop-blur">
                        Premium
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-xl font-bold text-white mb-2 tracking-wide group-hover:text-yellow-400 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-rose-300 line-clamp-2 mb-4 flex-1">
                      {cat.description}
                    </p>
                    <div className="pt-4 border-t border-yellow-400/20 flex justify-between items-center">
                      <span className="text-yellow-400 font-bold text-base">{cat.price}</span>
                      <span className="text-xs uppercase tracking-widest text-rose-300 group-hover:text-yellow-400 transition-colors flex items-center gap-1">
                        View <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/book-now"
              className="btn-gold inline-flex items-center gap-2 px-10 py-5 rounded-xl"
            >
              Book Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ PROCESS / HOW WE WORK ============ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#7B1C3A] uppercase tracking-[0.3em] text-sm font-bold">
              Simple 4-Step Process
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-gradient-burgundy mt-3 mb-4">
              How We Work
            </h2>
            <div className="gold-divider w-32 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-elegant italic">
              From first call to final delivery — a smooth, transparent journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white p-6 text-center"
              >
                <div className="relative z-10 mx-auto mb-5 w-20 h-20 rounded-full bg-gradient-to-br from-[#7B1C3A] to-[#9B2C4A] flex items-center justify-center shadow-xl border-4 border-white">
                  <step.icon className="w-9 h-9 text-yellow-300" />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 font-display text-7xl font-black text-yellow-100 -z-0">
                  {step.num}
                </div>
                <h3 className="font-display text-xl font-bold text-[#7B1C3A] mb-2 mt-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CINEMATIC VIDEOGRAPHY SHOWCASE ============ */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(123,28,58,0.4) 0px, rgba(123,28,58,0.4) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, rgba(123,28,58,0.4) 0px, rgba(123,28,58,0.4) 1px, transparent 1px, transparent 80px)',
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-bold flex items-center justify-center gap-2">
              <Video className="w-4 h-4" /> Cinematic Showreel
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mt-3 mb-4">
              Wedding Films
            </h2>
            <div className="gold-divider w-32 mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-elegant italic">
              Hollywood-style cinematic edits with color grading, slow motion & aerial drone shots
            </p>
          </div>

          {/* Featured large + 2 small */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Royal Wedding Highlight', sub: 'Bihar, 2024', large: true },
              { title: 'Cinematic Pre-Wedding', sub: 'Goa, 2024' },
              { title: 'Engagement Film', sub: 'Patna, 2024' },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`relative aspect-video bg-gradient-to-br from-[#7B1C3A]/40 to-black rounded-2xl overflow-hidden border-2 border-[#7B1C3A]/40 group cursor-pointer shadow-2xl hover:border-yellow-400/70 transition-all ${
                  v.large ? 'lg:row-span-2 lg:aspect-auto lg:min-h-[500px]' : ''
                }`}
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(123,28,58,0.6), rgba(0,0,0,0.8)), url(/images/${i === 0 ? 'aplus-1.png' : i === 1 ? 'a-1.png' : 'b-1.png'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-30" />
                    <div className={`relative ${v.large ? 'w-24 h-24' : 'w-16 h-16'} rounded-full bg-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl glow-gold`}>
                      <Play className={`${v.large ? 'w-10 h-10' : 'w-7 h-7'} text-[#7B1C3A] ml-1 fill-current`} />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className={`font-display ${v.large ? 'text-3xl' : 'text-xl'} font-bold text-white mb-1`}>
                    {v.title}
                  </h3>
                  <p className="text-yellow-400 text-sm uppercase tracking-widest">{v.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4 italic font-elegant text-lg">
              Want to see our full portfolio? Connect on WhatsApp
            </p>
            <a
              href="https://wa.me/919110066743"
              target="_blank"
              rel="noreferrer"
              className="btn-luxe inline-flex items-center gap-2 px-10 py-4 rounded-xl"
            >
              <MessageCircle className="w-5 h-5" /> Request Demo Reel
            </a>
          </div>
        </div>
      </section>

      {/* ============ FOLLOW US — SOCIAL MEDIA ============ */}
      <section className="py-24 bg-luxury-burgundy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(250,204,21,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,77,109,0.3) 0%, transparent 50%)',
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-bold">
              Stay Connected
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mt-3 mb-4">
              Follow Our Journey
            </h2>
            <div className="gold-divider w-32 mx-auto mb-6" />
            <p className="text-rose-200 max-w-2xl mx-auto text-lg font-elegant italic">
              Behind-the-scenes, latest weddings, and cinematic teasers — daily updates across all platforms
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-gradient-to-br ${social.color} shadow-2xl cursor-pointer group overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                <social.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform relative z-10" />
                <div className="text-center relative z-10">
                  <div className="text-white font-bold text-base">{social.name}</div>
                  <div className="text-white/80 text-xs mt-1">{social.handle}</div>
                  <div className="mt-2 inline-block px-2 py-0.5 bg-white/20 rounded-full text-white text-xs font-bold">
                    {social.followers}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-24 bg-gradient-to-b from-yellow-50/50 to-white relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-200/40 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className="text-[#7B1C3A] uppercase tracking-[0.3em] text-sm font-bold">
              Happy Clients
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-gradient-burgundy mt-3 mb-4">
              Words of Love
            </h2>
            <div className="gold-divider w-32 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Rahul & Priya', location: 'Saharsa, Bihar', text: 'S.R.K Studio ne humari shaadi ko filmi bana diya! Cinematic video dekh ke aankhon mein aansu aa gaye. Best studio in Bihar — har shot perfect!', rating: 5, pkg: 'A+ Category', date: 'Jan 2026' },
              { name: 'Amit & Sunita', location: 'Patna, Bihar', text: 'Bahut professional team hai. Photos itne achhe aaye ki humne 3 baar album print karaya! Sharvan bhai ka kaam lajawaab hai. Highly recommended!', rating: 5, pkg: 'A Category', date: 'Dec 2025' },
              { name: 'Vijay & Kavya', location: 'Muzaffarpur', text: 'Budget mein best quality! B Category liya tha lekin results A+ jaisa laga. Drone shots toh dil jeet liye. Same-day highlight reel ne sab ko shock kar diya!', rating: 5, pkg: 'B Category', date: 'Nov 2025' },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative bg-white border-2 border-rose-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:border-yellow-400 group"
              >
                <Quote className="absolute top-5 right-5 w-12 h-12 text-yellow-200 group-hover:text-yellow-300 transition-colors" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 font-elegant italic text-lg">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 border-t border-rose-100 pt-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7B1C3A] to-[#9B2C4A] rounded-full flex items-center justify-center text-yellow-300 font-bold shadow-lg">
                    {t.name[0]}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[#7B1C3A]">{t.name}</p>
                    <p className="text-xs text-gray-500">
                      {t.location} • <span className="text-yellow-600 font-semibold">{t.pkg}</span> • {t.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="py-20 bg-gradient-to-b from-white to-yellow-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#7B1C3A] uppercase tracking-[0.3em] text-sm font-bold">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-gradient-burgundy mt-3 mb-4">
              Contact Us Now
            </h2>
            <div className="gold-divider w-32 mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <motion.a
                href="https://wa.me/919110066743"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03, y: -5 }}
                className="flex flex-col items-center gap-4 p-10 rounded-3xl bg-gradient-to-br from-green-500 to-green-600 shadow-2xl text-white hover:shadow-green-500/50 transition-shadow group"
              >
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold">WhatsApp</div>
                  <div className="text-2xl font-bold mt-2 tracking-wider">9110066743</div>
                  <div className="text-white/80 text-sm mt-2 uppercase tracking-widest">
                    Chat Now • Reply in 5 mins
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://t.me/+919110066743"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03, y: -5 }}
                className="flex flex-col items-center gap-4 p-10 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-2xl text-white hover:shadow-blue-500/50 transition-shadow group"
              >
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur group-hover:scale-110 transition-transform">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold">Telegram</div>
                  <div className="text-2xl font-bold mt-2 tracking-wider">9110066743</div>
                  <div className="text-white/80 text-sm mt-2 uppercase tracking-widest">
                    Message Anytime
                  </div>
                </div>
              </motion.a>
            </div>

            <div className="bg-white rounded-3xl border-2 border-yellow-200 shadow-xl p-8 grid md:grid-cols-2 gap-8">
              <div className="text-center md:text-left flex flex-col items-center md:items-start gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center">
                  <Phone className="w-7 h-7 text-[#7B1C3A]" />
                </div>
                <p className="text-3xl font-bold text-[#7B1C3A]">9110066743</p>
                <p className="text-muted-foreground text-sm">Call • WhatsApp • Telegram</p>
              </div>
              <div className="text-center md:text-left flex flex-col items-center md:items-start gap-3 md:border-l-2 md:border-yellow-200 md:pl-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#7B1C3A] to-[#9B2C4A] flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-yellow-300" />
                </div>
                <p className="text-foreground font-bold text-lg">Yadav Chowk, Dumrail</p>
                <p className="text-muted-foreground">Saharsa, Bihar — 852201</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ACCORDION ============ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#7B1C3A] uppercase tracking-[0.3em] text-sm font-bold">
              Got Questions?
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-gradient-burgundy mt-3 mb-4">
              Frequently Asked
            </h2>
            <div className="gold-divider w-32 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-elegant italic">
              Sab kuch jo aap janna chahte hain, ek jagah
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className={`border-2 rounded-2xl overflow-hidden transition-all ${
                  openFaq === i
                    ? 'border-yellow-400 bg-yellow-50/50 shadow-lg'
                    : 'border-rose-100 bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className={`font-bold text-base md:text-lg ${openFaq === i ? 'text-[#7B1C3A]' : 'text-gray-800'}`}>
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 shrink-0 transition-transform text-[#7B1C3A] ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 text-gray-700 leading-relaxed border-t border-yellow-200 pt-4"
                  >
                    {f.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA / BOOKING FORM ============ */}
      <section className="py-24 bg-luxury-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(250,204,21,0.3) 0%, transparent 50%)',
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto luxury-card p-8 md:p-12 rounded-3xl border-yellow-400/30">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center glow-gold">
                  <Camera className="w-6 h-6 text-[#7B1C3A]" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold uppercase tracking-wider">
                  S.R.K Studio
                </h2>
              </div>
              <h3 className="font-display text-2xl text-yellow-300 italic">
                Book My Wedding Plan
              </h3>
              <p className="text-rose-300 text-sm mt-2">
                Fill the form to secure your wedding date — we reply within 1 hour
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: 'Full Name', placeholder: 'Your name', type: 'text' },
                  { label: 'Phone Number', placeholder: '9110066743', type: 'tel' },
                  { label: 'Email Address', placeholder: 'you@example.com', type: 'email' },
                  { label: 'Wedding Date', placeholder: 'DD/MM/YYYY', type: 'text' },
                  { label: 'State', placeholder: 'Bihar', type: 'text' },
                  { label: 'Venue Location', placeholder: 'City / Hotel name', type: 'text' },
                ].map((field, i) => (
                  <div key={i} className="space-y-2">
                    <Label className="text-yellow-400 font-semibold text-xs uppercase tracking-widest">
                      {field.label}
                    </Label>
                    <Input
                      type={field.type}
                      className="bg-[#1a0010]/60 border-yellow-400/30 text-white placeholder:text-rose-400/50 focus-visible:ring-yellow-400 h-12 rounded-lg"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div className="space-y-2 md:col-span-2">
                  <Label className="text-yellow-400 font-semibold text-xs uppercase tracking-widest">
                    Choose Camera Category
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-[#1a0010]/60 border-yellow-400/30 text-white focus-visible:ring-yellow-400 h-12 rounded-lg">
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name} — {cat.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full h-14 text-base btn-gold rounded-xl">
                <Send className="w-5 h-5 mr-2" /> Submit Booking Request
              </Button>
            </form>

            <div className="mt-8 text-center border-t border-yellow-400/20 pt-8">
              <p className="text-rose-300">Or directly call / message:</p>
              <p className="font-display text-3xl font-bold text-yellow-400 mt-2 flex justify-center items-center gap-3">
                <Phone className="h-6 w-6" /> 9110066743
              </p>
              <p className="text-xs text-rose-400 mt-2 uppercase tracking-widest">
                WhatsApp • Telegram • Call
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ EMAIL NEWSLETTER ============ */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Send className="w-12 h-12 text-[#7B1C3A] mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#7B1C3A] mb-3">
              Join Our Exclusive List
            </h2>
            <p className="text-[#7B1C3A]/80 max-w-xl mx-auto mb-8 font-elegant italic text-lg">
              Best wedding inspiration, behind-the-scenes & exclusive offers — directly in your inbox
            </p>
            <form
              className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 h-14 bg-white border-2 border-[#7B1C3A]/30 focus-visible:ring-[#7B1C3A] rounded-xl text-base"
                required
              />
              <Button
                type="submit"
                className="h-14 px-8 bg-[#7B1C3A] text-white hover:bg-[#9B2C4A] uppercase tracking-widest font-bold rounded-xl"
              >
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
