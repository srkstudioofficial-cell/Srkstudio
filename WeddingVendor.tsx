import React from 'react';
import { Star, MapPin, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

const vendorCategories = [
  {
    emoji: '📷',
    type: 'Photography & Videography',
    name: 'S.R.K Studio',
    highlight: true,
    location: 'Dumrail, Saharsa, Bihar',
    phone: '9110066743',
    rating: 5,
    image: '/images/hero.png',
    services: ['Cinematic Videography', 'DSLR Photography', 'Drone Aerial Shots', 'Same-Day Edit', 'Photo Album Design', 'Digital Delivery'],
    description: 'World-class wedding photography & videography. 7 camera packages from budget to luxury. Bihar\'s most trusted studio.',
    price: 'Rs 18,000 – Rs 1,00,000',
    badge: 'Featured Partner',
  },
  {
    emoji: '🏰',
    type: 'Wedding Venue',
    name: 'Royal Garden Palace',
    highlight: false,
    location: 'Patna, Bihar',
    phone: '9110066743',
    rating: 5,
    image: '/images/gallery-1.png',
    services: ['Indoor Hall', 'Outdoor Lawn', 'AC Banquet', 'Parking', 'Stage Setup', 'Lighting'],
    description: 'Grand wedding venues for all budgets. Capacity from 100 to 2000 guests. Beautiful mandap setup included.',
    price: 'Contact for pricing',
    badge: '',
  },
  {
    emoji: '🌸',
    type: 'Floral Decoration',
    name: 'Bloom Wedding Decor',
    highlight: false,
    location: 'Saharsa, Bihar',
    phone: '9110066743',
    rating: 5,
    image: '/images/gallery-2.png',
    services: ['Mandap Decoration', 'Stage Flowers', 'Car Decoration', 'Table Centerpieces', 'Entrance Arch', 'Floral Trails'],
    description: 'Exquisite floral arrangements for every wedding style — traditional, modern, and royal themes.',
    price: 'Contact for pricing',
    badge: '',
  },
  {
    emoji: '💄',
    type: 'Bridal Makeup & Salon',
    name: 'Glamour Glow Studio',
    highlight: false,
    location: 'Saharsa, Bihar',
    phone: '9110066743',
    rating: 5,
    image: '/images/a-1.png',
    services: ['Bridal Makeup', 'Pre-Bridal Package', 'Hair Styling', 'Saree Draping', 'Nail Art', 'Mehndi Design'],
    description: 'Complete bridal beauty services from mehndi to final look. Traditional and modern styles available.',
    price: 'Contact for pricing',
    badge: '',
  },
  {
    emoji: '🍽️',
    type: 'Catering & Food',
    name: 'Royal Feast Caterers',
    highlight: false,
    location: 'Saharsa, Bihar',
    phone: '9110066743',
    rating: 5,
    image: '/images/b-1.png',
    services: ['Full Wedding Menu', 'Welcome Drinks', 'Live Counter', 'Sweet Stall', 'Bihari Cuisine', 'North Indian Thali'],
    description: 'Authentic Bihari and North Indian wedding cuisine. Live counters, buffet, and full-service catering.',
    price: 'Contact for pricing',
    badge: '',
  },
  {
    emoji: '🎵',
    type: 'DJ & Sound System',
    name: 'Beat Masters DJ',
    highlight: false,
    location: 'Saharsa, Bihar',
    phone: '9110066743',
    rating: 5,
    image: '/images/c-1.png',
    services: ['DJ with Lighting', 'Sound System', 'LED Dance Floor', 'Laser Show', 'Flower Cannon', 'Fog Machine'],
    description: 'Professional DJ services with top sound systems and lighting effects for the perfect wedding atmosphere.',
    price: 'Contact for pricing',
    badge: '',
  },
  {
    emoji: '🐎',
    type: 'Baraat & Procession',
    name: 'Royal Baraat Services',
    highlight: false,
    location: 'Saharsa, Bihar',
    phone: '9110066743',
    rating: 5,
    image: '/images/d-1.png',
    services: ['Decorated Horse', 'Buggy Chariot', 'Band Baja', 'LED Rath', 'Fireworks', 'Dhol Party'],
    description: 'Make your baraat unforgettable with decorated horses, LED raths, and traditional band baja.',
    price: 'Contact for pricing',
    badge: '',
  },
  {
    emoji: '🎪',
    type: 'Tent & Shamiana',
    name: 'Grand Tent House',
    highlight: false,
    location: 'Saharsa, Bihar',
    phone: '9110066743',
    rating: 5,
    image: '/images/gallery-1.png',
    services: ['AC Tent Setup', 'Shamiana', 'Chair & Table', 'Generator Backup', 'Chandelier Lighting', 'Carpet'],
    description: 'Complete tent and outdoor wedding setup. AC shamiana, royal chairs, full lighting and generator backup.',
    price: 'Contact for pricing',
    badge: '',
  },
  {
    emoji: '💍',
    type: 'Jewellery & Accessories',
    name: 'Bridal Jewel House',
    highlight: false,
    location: 'Saharsa, Bihar',
    phone: '9110066743',
    rating: 5,
    image: '/images/gallery-2.png',
    services: ['Bridal Set Rental', 'Gold Jewellery', 'Artificial Jewellery', 'Hair Accessories', 'Bangles', 'Nath & Tikka'],
    description: 'Complete bridal jewellery on rent and sale. Gold, kundan, and artificial sets for all budgets.',
    price: 'Contact for pricing',
    badge: '',
  },
  {
    emoji: '🎂',
    type: 'Wedding Cake & Sweets',
    name: 'Sweet Memories Bakery',
    highlight: false,
    location: 'Saharsa, Bihar',
    phone: '9110066743',
    rating: 5,
    image: '/images/a-1.png',
    services: ['Multi-Tier Cake', 'Traditional Sweets', 'Mithai Box', 'Welcome Sweets', 'Cake Cutting', 'Custom Design'],
    description: 'Custom wedding cakes and traditional sweets. All occasions, all sizes, pure ingredients.',
    price: 'Contact for pricing',
    badge: '',
  },
  {
    emoji: '🚗',
    type: 'Wedding Cars',
    name: 'Luxury Bridal Cars',
    highlight: false,
    location: 'Saharsa, Bihar',
    phone: '9110066743',
    rating: 5,
    image: '/images/b-1.png',
    services: ['Decorated Car', 'SUV Rental', 'Vintage Car', 'Bus for Baraat', 'Airport Transfer', 'VIP Convoy'],
    description: 'Luxury and decorated wedding cars for bride & groom. SUVs, vintage classics, and baraat buses.',
    price: 'Contact for pricing',
    badge: '',
  },
  {
    emoji: '📿',
    type: 'Mehndi & Haldi',
    name: 'Mehendi Magic Artists',
    highlight: false,
    location: 'Saharsa, Bihar',
    phone: '9110066743',
    rating: 5,
    image: '/images/c-1.png',
    services: ['Bridal Mehndi', 'Haldi Setup', 'Arabic Designs', 'Rajasthani Design', 'Bulk Mehndi', 'Haldi Decor'],
    description: 'Professional mehndi artists for bridal and all ceremony designs. Haldi ceremony setup included.',
    price: 'Contact for pricing',
    badge: '',
  },
];

export default function WeddingVendor() {
  return (
    <div className="pb-24 bg-white">
      {/* Hero */}
      <div className="relative h-[55vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/vendor-hero.png" alt="Vendor" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0010] via-[#7B1C3A]/60 to-[#7B1C3A]/30" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-block bg-yellow-400 text-[#7B1C3A] font-bold text-xs uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-4"
          >
            All-In-One Wedding Planning
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-white uppercase tracking-widest font-bold mb-4"
          >
            Wedding Vendors
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-yellow-100 font-light max-w-2xl mx-auto"
          >
            Everything you need for your perfect wedding — all in one place.
          </motion.p>
        </div>
      </div>

      {/* Section Title */}
      <div className="bg-[#7B1C3A] py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80 uppercase tracking-widest">
            {['Photography', 'Venue', 'Decoration', 'Makeup', 'Catering', 'DJ', 'Baraat', 'Tent', 'Jewellery', 'Cake', 'Cars', 'Mehndi'].map((s, i) => (
              <span key={i} className="flex items-center gap-1"><span className="text-yellow-400">✦</span> {s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {vendorCategories.map((vendor, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: (i % 3) * 0.1 }}
              viewport={{ once: true }}
              className={`group bg-white border-2 ${vendor.highlight ? 'border-[#7B1C3A] shadow-[0_0_30px_rgba(123,28,58,0.18)]' : 'border-rose-100'} overflow-hidden rounded-2xl hover:border-[#7B1C3A]/60 transition-all duration-300 hover:shadow-xl`}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img src={vendor.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={vendor.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0010]/80 to-transparent" />
                {vendor.badge && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-[#7B1C3A] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
                    {vendor.badge}
                  </div>
                )}
                <div className="absolute bottom-4 left-4">
                  <span className="text-2xl">{vendor.emoji}</span>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: vendor.rating }).map((_, idx) => (
                      <Star key={idx} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs text-[#7B1C3A] uppercase tracking-widest font-bold mb-1">{vendor.type}</p>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">{vendor.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{vendor.description}</p>

                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-3 h-3 shrink-0 text-[#7B1C3A]" />
                  <span className="text-xs">{vendor.location}</span>
                </div>

                {/* Services List */}
                <div className="grid grid-cols-2 gap-1 mb-5">
                  {vendor.services.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-1 text-xs text-foreground/80">
                      <CheckCircle className="w-3 h-3 text-[#7B1C3A] shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-rose-100 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Starting from</p>
                    <p className="text-sm font-bold text-[#7B1C3A]">{vendor.price}</p>
                  </div>
                  {vendor.highlight ? (
                    <Link href="/book-now"
                      className="bg-[#7B1C3A] text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#9B2C4A] transition-colors whitespace-nowrap">
                      Book Now
                    </Link>
                  ) : (
                    <a href="https://wa.me/919110066743" target="_blank" rel="noreferrer"
                      className="border border-[#7B1C3A] text-[#7B1C3A] hover:bg-[#7B1C3A] hover:text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap">
                      Enquire
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 bg-gradient-to-r from-[#7B1C3A] to-[#9B2C4A] py-14">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-serif font-bold text-white mb-4">Plan Your Perfect Wedding with S.R.K Studio</h3>
          <p className="text-rose-200 mb-8 max-w-xl mx-auto">Get complete wedding photography + all vendor coordination in one place.</p>
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
