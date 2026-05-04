import React, { useState } from 'react';
import { useParams, Link } from 'wouter';
import { categories } from '@/data/categories';
import { Star, CheckCircle, ArrowRight, Phone, MessageCircle, Award, Camera, Video, Plane } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Category() {
  const params = useParams();
  const category = categories.find(c => c.id === params.id);
  const [activeImg, setActiveImg] = useState(0);

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-white">
        <div className="text-6xl mb-6">📷</div>
        <h1 className="text-4xl font-serif text-[#7B1C3A] mb-4">Category Not Found</h1>
        <Link href="/" className="text-[#7B1C3A] hover:underline font-bold">← Return to Home</Link>
      </div>
    );
  }

  const catIndex = categories.findIndex(c => c.id === params.id);
  const prevCat = categories[catIndex - 1];
  const nextCat = categories[catIndex + 1];

  const features = [
    ...(category.cameras ? [{ icon: Camera, label: 'Cameras', value: category.cameras }] : []),
    ...(category.drones ? [{ icon: Plane, label: 'Drones', value: category.drones }] : []),
  ];

  return (
    <div className="bg-white pb-24">
      {/* Hero Banner */}
      <div className="relative h-[65vh] w-full flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={category.samples[activeImg] || category.image}
            alt={category.name}
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0010] via-[#1a0010]/40 to-transparent" />
        </div>

        {/* Thumbnail selector */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
          {category.samples.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${activeImg === i ? 'border-yellow-400 scale-110 shadow-lg' : 'border-white/30 hover:border-white/60'}`}
            >
              <img src={src} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 pb-10">
          <div className="flex gap-1 mb-3">
            {Array.from({ length: category.rating }).map((_, idx) => (
              <Star key={idx} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-widest font-bold mb-3"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
            {category.name}
          </h1>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="bg-yellow-400 text-[#7B1C3A] font-bold text-lg px-5 py-2 rounded-full shadow-lg">{category.price}</span>
            <span className="bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
              ✦ S.R.K Studio Exclusive
            </span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-[#7B1C3A] py-3">
        <div className="container mx-auto px-4 flex items-center gap-2 text-sm text-rose-200">
          <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-yellow-300">{category.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">

        {/* Package Details Grid */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-10">

            {/* Description */}
            <motion.div
              initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
              className="bg-white border-2 border-rose-100 rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-serif font-bold uppercase tracking-wider mb-4 text-[#7B1C3A] border-b border-rose-100 pb-4">Package Description</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{category.description}</p>
            </motion.div>

            {/* Equipment */}
            {features.length > 0 && (
              <motion.div
                initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
                className="bg-gradient-to-br from-rose-50 to-yellow-50 border-2 border-rose-100 rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-serif font-bold uppercase tracking-wider mb-6 text-[#7B1C3A]">Equipment Included</h2>
                <div className="space-y-6">
                  {features.map((f, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 bg-[#7B1C3A] rounded-xl flex items-center justify-center shrink-0">
                        <f.icon className="w-6 h-6 text-yellow-300" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-[#7B1C3A] font-bold mb-1">{f.label} Used</p>
                        <p className="text-gray-700 font-medium leading-relaxed">{f.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Custom Options (F category) */}
            {category.options && (
              <motion.div
                initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
                className="bg-white border-2 border-rose-100 rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-serif font-bold uppercase tracking-wider mb-6 text-[#7B1C3A]">Customizable Options</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {category.options.map((opt, i) => (
                    <div key={i} className="flex items-center gap-3 bg-rose-50 rounded-xl p-4 border border-rose-100">
                      <CheckCircle className="w-5 h-5 text-[#7B1C3A] shrink-0" />
                      <span className="font-medium text-gray-800">{opt}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-[#7B1C3A] bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm font-medium">
                  📌 Price for F Category is custom — depends on services you select. Contact us for a free quote!
                </p>
              </motion.div>
            )}

            {/* What's Included */}
            <motion.div
              initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
              className="bg-white border-2 border-rose-100 rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-serif font-bold uppercase tracking-wider mb-6 text-[#7B1C3A]">What You Get</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Professional RAW Photo Editing', 'Full HD / 4K Video Editing', 'Cinematic Color Grading',
                  'Digital Delivery (Pen Drive / Cloud)', 'Same-Day Preview Clip', 'Photo Album Design',
                  'Pre-Wedding Shoot Coverage', 'Highlight Reel Video', 'All Function Coverage',
                  'Candid Photography', 'Group & Family Portraits', 'Lifetime Backup Available'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#7B1C3A] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sample Gallery */}
            <motion.div
              initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold uppercase tracking-wider mb-6 text-[#7B1C3A]">Sample Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {category.samples.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`aspect-[3/4] overflow-hidden rounded-xl border-2 transition-all ${activeImg === i ? 'border-[#7B1C3A] shadow-xl scale-[1.02]' : 'border-rose-100 hover:border-[#7B1C3A]/50'}`}
                  >
                    <img src={src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Sample" />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">

              {/* Pricing Card */}
              <motion.div
                initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
                className="bg-gradient-to-br from-[#7B1C3A] to-[#4a0a20] rounded-2xl p-8 text-white shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-xs uppercase tracking-widest text-rose-300">Best Value</span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-yellow-300 mb-1">{category.price}</h3>
                <p className="text-rose-300 text-sm mb-6">Inclusive of all taxes</p>

                <div className="space-y-3 mb-8">
                  {[
                    category.id === 'aplus' ? '2 Cinema Cameras' : category.id === 'a' ? '2 DSLR Cameras' : '1 DSLR Camera',
                    category.drones ? 'Drone Aerial Coverage' : 'Ground Coverage',
                    'All Day Coverage',
                    'Edited Photos & Video',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                      <span className="text-rose-100">{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="/book-now"
                  className="w-full flex items-center justify-center gap-2 bg-yellow-400 text-[#7B1C3A] font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-yellow-300 transition-colors shadow-lg text-sm">
                  Book This Package <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Contact Card */}
              <motion.div
                initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="bg-white border-2 border-rose-100 rounded-2xl p-6 shadow-lg"
              >
                <h3 className="font-serif font-bold text-[#7B1C3A] uppercase tracking-wider mb-4 text-sm">Quick Contact</h3>
                <div className="space-y-3">
                  <a href="https://wa.me/919110066743" target="_blank" rel="noreferrer"
                    className="flex items-center gap-3 bg-green-500 text-white rounded-xl px-4 py-3 hover:bg-green-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-bold text-sm">WhatsApp: 9110066743</span>
                  </a>
                  <a href="tel:9110066743"
                    className="flex items-center gap-3 bg-[#7B1C3A] text-white rounded-xl px-4 py-3 hover:bg-[#9B2C4A] transition-colors">
                    <Phone className="w-5 h-5" />
                    <span className="font-bold text-sm">Call: 9110066743</span>
                  </a>
                </div>
              </motion.div>

              {/* Category Navigation */}
              <div className="flex gap-3">
                {prevCat && (
                  <Link href={`/category/${prevCat.id}`}
                    className="flex-1 text-center text-xs bg-rose-50 border border-rose-200 text-[#7B1C3A] rounded-xl px-3 py-3 font-bold hover:bg-rose-100 transition-colors">
                    ← {prevCat.id.toUpperCase()} Cat
                  </Link>
                )}
                {nextCat && (
                  <Link href={`/category/${nextCat.id}`}
                    className="flex-1 text-center text-xs bg-[#7B1C3A] text-white rounded-xl px-3 py-3 font-bold hover:bg-[#9B2C4A] transition-colors">
                    {nextCat.id.toUpperCase()} Cat →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
