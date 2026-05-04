import React, { useState } from 'react';
import { categories } from '@/data/categories';
import { Star, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function RealWedding() {
  const [filter, setFilter] = useState('all');
  const filteredCats = filter === 'all' ? categories.filter(c => c.id !== 'f') : categories.filter(c => c.id === filter);

  return (
    <div className="pb-24 bg-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#1a0010] via-[#7B1C3A] to-[#4a0a20] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 20px)' }} />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="inline-block bg-yellow-400 text-[#7B1C3A] font-bold text-xs uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-4">
            Portfolio Gallery
          </motion.div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-white uppercase tracking-widest font-bold mb-4">
            Real Weddings
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-rose-200 text-lg max-w-xl mx-auto">
            A showcase of love, beauty & cinematic excellence — captured across all our packages.
          </motion.p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-[#7B1C3A] py-4 overflow-x-auto">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 justify-center flex-wrap">
            <button onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${filter === 'all' ? 'bg-yellow-400 text-[#7B1C3A]' : 'bg-white/20 text-white hover:bg-white/30'}`}>
              All Categories
            </button>
            {categories.filter(c => c.id !== 'f').map(cat => (
              <button key={cat.id} onClick={() => setFilter(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${filter === cat.id ? 'bg-yellow-400 text-[#7B1C3A]' : 'bg-white/20 text-white hover:bg-white/30'}`}>
                {cat.id.toUpperCase()} Category
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Sections */}
      <div className="container mx-auto px-4 mt-16 max-w-7xl">
        {filteredCats.map((category, idx) => (
          <motion.div
            key={category.id}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-24 last:mb-0"
          >
            {/* Category Header */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-end justify-between mb-8 pb-6 border-b-2 border-rose-100">
              <div>
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: category.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h2 className="text-3xl font-serif font-bold text-[#7B1C3A] uppercase tracking-widest mb-1">{category.name}</h2>
                <p className="text-muted-foreground max-w-xl">{category.description}</p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <span className="bg-[#7B1C3A] text-yellow-300 font-bold px-5 py-2 rounded-full text-sm">{category.price}</span>
                <Link href={`/category/${category.id}`}
                  className="flex items-center gap-1 text-[#7B1C3A] border-2 border-[#7B1C3A] px-4 py-2 rounded-full text-sm font-bold hover:bg-[#7B1C3A] hover:text-white transition-colors">
                  <LinkIcon className="w-3 h-3" /> Details
                </Link>
              </div>
            </div>

            {/* Image Grid - Masonry Style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {category.samples.map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className={`group relative overflow-hidden rounded-2xl bg-rose-50 border border-rose-100 shadow-md ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                >
                  <img
                    src={src}
                    alt={`${category.name} sample ${i + 1}`}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i === 0 ? 'h-[500px] md:h-[600px]' : 'h-[290px]'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0010]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">{category.id.toUpperCase()} Category</p>
                      <p className="text-white font-bold">{category.name}</p>
                    </div>
                  </div>
                  {i === 0 && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-[#7B1C3A] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
                        Featured Shot
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link href={`/category/${category.id}`}
                className="inline-block bg-rose-50 border-2 border-[#7B1C3A]/20 text-[#7B1C3A] font-bold uppercase tracking-widest px-8 py-3 rounded-xl hover:bg-[#7B1C3A] hover:text-white transition-colors text-sm">
                View {category.id.toUpperCase()} Category Details →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-gradient-to-r from-[#7B1C3A] to-[#9B2C4A] py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-serif font-bold text-white mb-3">Ready to Book Your Wedding?</h3>
          <p className="text-rose-200 mb-8">Contact us now — we cover all of Bihar and surrounding states.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/book-now"
              className="bg-yellow-400 text-[#7B1C3A] font-bold uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors shadow-lg">
              Book Now
            </Link>
            <a href="https://wa.me/919110066743" target="_blank" rel="noreferrer"
              className="bg-white/20 text-white font-bold uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-white/30 transition-colors border border-white/30">
              WhatsApp: 9110066743
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
