import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, CalendarIcon, CheckCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { categories } from '@/data/categories';
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';

export default function BookNow() {
  const [date, setDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [waUrl, setWaUrl] = useState('');
  const [tgUrl, setTgUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selectedCat, setSelectedCat] = useState('');

  // form field refs via controlled state
  const [fields, setFields] = useState({
    yourName: '', phone: '', email: '',
    groomName: '', brideName: '', groomPhone: '', bridePhone: '',
    venue: '', city: '', district: '', state: '', pincode: '', days: '',
  });

  const set = (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setFields(f => ({ ...f, [key]: e.target.value }));

  const buildMessage = () => {
    const cat = categories.find(c => c.id === selectedCat);
    const startDateStr = date ? format(date, 'dd MMM yyyy') : 'Not selected';
    const endDateStr   = endDate ? format(endDate, 'dd MMM yyyy') : 'Not selected';
    return [
      '🎉 *NEW BOOKING REQUEST — S.R.K Studio*',
      '',
      '👤 *Applicant Details*',
      `Name: ${fields.yourName}`,
      `Phone: ${fields.phone}`,
      `Email: ${fields.email || 'N/A'}`,
      '',
      '💑 *Couple Details*',
      `Groom: ${fields.groomName}  |  Phone: ${fields.groomPhone || 'N/A'}`,
      `Bride:  ${fields.brideName}  |  Phone: ${fields.bridePhone || 'N/A'}`,
      '',
      '📍 *Event Location*',
      `Venue: ${fields.venue}`,
      `City/Village: ${fields.city}`,
      `District: ${fields.district}  |  State: ${fields.state}`,
      `Pincode: ${fields.pincode}`,
      `No. of Days: ${fields.days || 'N/A'}`,
      '',
      '📅 *Dates*',
      `Start: ${startDateStr}`,
      `End:   ${endDateStr}`,
      '',
      '📦 *Package Selected*',
      cat ? `${cat.name} — ${cat.price}` : 'Not selected',
      '',
      '---',
      'Sent via S.R.K Studio — srkstudio.replit.app',
    ].join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildMessage();
    const encoded = encodeURIComponent(msg);
    setWaUrl(`https://wa.me/919110066743?text=${encoded}`);
    setTgUrl(`https://t.me/+919110066743`);
    setSubmitted(true);
  };

  return (
    <div className="pb-24 bg-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#1a0010] via-[#7B1C3A] to-[#4a0a20] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 20px)' }} />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="inline-block bg-yellow-400 text-[#7B1C3A] font-bold text-xs uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-4">
            S.R.K Studio — Saharsa, Bihar
          </motion.div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-white uppercase tracking-widest font-bold mb-4">
            Book Your Wedding
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-rose-200 text-lg max-w-xl mx-auto">
            Fill the form below and we'll confirm your booking within 24 hours
          </motion.p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-yellow-400 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-[#7B1C3A] text-sm font-bold uppercase tracking-widest">
            {['500+ Weddings Covered', '10+ Years Experience', 'Bihar\'s Most Trusted', 'Free Quote in 1 Hour'].map((b, i) => (
              <span key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />{b}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">

            <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
              className="bg-gradient-to-br from-[#7B1C3A] to-[#4a0a20] rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-lg font-serif font-bold text-yellow-400 uppercase tracking-widest mb-6 border-b border-white/20 pb-4">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a href="https://wa.me/919110066743" target="_blank" rel="noreferrer"
                  className="flex items-center gap-4 bg-green-500/20 border border-green-400/30 rounded-xl p-4 hover:bg-green-500/30 transition-colors group">
                  <div className="bg-green-500 p-2.5 rounded-full shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-rose-300">WhatsApp</p>
                    <p className="text-white font-bold group-hover:text-green-300 transition-colors">9110066743</p>
                  </div>
                </a>

                <a href="https://t.me/+919110066743" target="_blank" rel="noreferrer"
                  className="flex items-center gap-4 bg-blue-500/20 border border-blue-400/30 rounded-xl p-4 hover:bg-blue-500/30 transition-colors group">
                  <div className="bg-blue-500 p-2.5 rounded-full shrink-0">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-rose-300">Telegram</p>
                    <p className="text-white font-bold group-hover:text-blue-300 transition-colors">9110066743</p>
                  </div>
                </a>

                <a href="tel:9110066743"
                  className="flex items-center gap-4 bg-yellow-400/20 border border-yellow-400/30 rounded-xl p-4 hover:bg-yellow-400/30 transition-colors group">
                  <div className="bg-yellow-400 p-2.5 rounded-full shrink-0">
                    <Phone className="w-5 h-5 text-[#7B1C3A]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-rose-300">Direct Call</p>
                    <p className="text-white font-bold group-hover:text-yellow-300 transition-colors">9110066743</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-xl p-4">
                  <div className="bg-white/20 p-2.5 rounded-full shrink-0">
                    <MapPin className="w-5 h-5 text-yellow-300" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-rose-300">Studio</p>
                    <p className="text-sm text-white mt-0.5">Yadav Chowk, Dumrail<br />Saharsa, Bihar 852201</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Package Quick View */}
            {selectedCat && (() => {
              const cat = categories.find(c => c.id === selectedCat);
              return cat ? (
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                  className="bg-rose-50 border-2 border-[#7B1C3A]/30 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#7B1C3A] mb-3">Selected Package</h4>
                  <p className="font-serif font-bold text-foreground">{cat.name}</p>
                  <p className="text-[#7B1C3A] font-bold text-lg mt-1">{cat.price}</p>
                  <p className="text-muted-foreground text-sm mt-2">{cat.description}</p>
                </motion.div>
              ) : null;
            })()}

            {/* Note */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <p className="text-[#7B1C3A] font-bold text-sm mb-1">📌 Booking Note</p>
              <p className="text-gray-600 text-xs leading-relaxed">Advance payment required to confirm your booking date. We'll contact you within 1-2 hours after form submission.</p>
            </div>

            {/* UPI Payment Card */}
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 text-white shadow-2xl">
              <h3 className="text-sm font-bold uppercase tracking-widest text-purple-200 mb-4 border-b border-white/20 pb-3">
                💳 Digital Payment — UPI
              </h3>
              {/* QR Code */}
              <div className="flex justify-center mb-4">
                <div className="bg-white rounded-xl p-2 shadow-lg">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent('upi://pay?pa=9110066743@ybl&pn=Meena+Devi&tn=SRK+Studio+Booking')}`}
                    alt="UPI QR Code"
                    className="w-40 h-40 rounded"
                  />
                </div>
              </div>
              {/* UPI Details */}
              <div className="space-y-2 text-center">
                <div className="bg-white/15 rounded-xl p-3">
                  <p className="text-purple-200 text-xs uppercase tracking-widest mb-1">PhonePe UPI ID</p>
                  <p className="text-white font-bold text-lg tracking-wide">9110066743@ybl</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <p className="text-purple-200 text-xs uppercase tracking-widest mb-1">Account Name</p>
                  <p className="text-white font-bold">Meena Devi</p>
                </div>
                <p className="text-purple-200 text-xs mt-3 leading-relaxed">
                  📱 PhonePe / GPay / Paytm — kisi bhi UPI app se scan karke pay karein
                </p>
              </div>
            </motion.div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
              className="bg-white border-2 border-rose-100 rounded-2xl p-8 md:p-12 shadow-2xl">

              {submitted ? (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 gap-6">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-14 h-14 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-[#7B1C3A]">🎉 Booking Ready!</h2>
                  <p className="text-muted-foreground max-w-sm text-base">
                    Neeche <strong>WhatsApp ya Telegram</strong> pe click karo — poori booking details automatically jayegi!
                  </p>

                  <div className="w-full space-y-4 max-w-sm">
                    {/* target="_top" escapes the iframe so WhatsApp/Telegram actually opens */}
                    <a
                      href={waUrl}
                      target="_top"
                      className="flex items-center justify-center gap-3 w-full h-16 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-base shadow-lg transition-colors"
                    >
                      <MessageCircle className="w-6 h-6" />
                      📲 WhatsApp pe Bhejo
                    </a>
                    <a
                      href={tgUrl}
                      target="_top"
                      onClick={() => navigator.clipboard?.writeText(buildMessage()).catch(() => {})}
                      className="flex items-center justify-center gap-3 w-full h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold text-base shadow-lg transition-colors"
                    >
                      <Send className="w-6 h-6" />
                      ✈️ Telegram pe Bhejo
                    </a>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-5 py-3 text-sm text-yellow-800 max-w-sm">
                    💡 <strong>WhatsApp:</strong> Click karo → app khulega → bas Send dabao!<br/>
                    💡 <strong>Telegram:</strong> Message auto-copy hoga → Telegram mein Paste karke Send karo
                  </div>

                  {/* UPI Advance Payment */}
                  <div className="w-full max-w-sm bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl p-5 text-center">
                    <p className="text-purple-800 font-bold text-sm uppercase tracking-widest mb-3">💳 Advance Payment (UPI)</p>
                    <div className="flex justify-center mb-3">
                      <div className="bg-white rounded-xl p-1.5 shadow">
                        <img
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=${encodeURIComponent('upi://pay?pa=9110066743@ybl&pn=Meena+Devi&tn=SRK+Studio+Booking')}`}
                          alt="UPI QR"
                          className="w-32 h-32 rounded"
                        />
                      </div>
                    </div>
                    <p className="text-indigo-700 font-bold text-base">9110066743@ybl</p>
                    <p className="text-purple-600 text-sm">Meena Devi · PhonePe</p>
                    <p className="text-gray-500 text-xs mt-2">GPay / Paytm / kisi bhi UPI app se scan karein</p>
                  </div>

                  <p className="text-sm text-muted-foreground">Koi dikkat ho to seedha call karein:</p>
                  <a href="tel:+919110066743" className="flex items-center gap-2 bg-yellow-400 text-[#7B1C3A] font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition-colors">
                    <Phone className="w-5 h-5" /> Call: 9110066743
                  </a>
                  <button onClick={() => { setSubmitted(false); setWaUrl(''); setTgUrl(''); }}
                    className="text-sm text-[#7B1C3A] underline mt-2">← Wapas Form pe Jao</button>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-8 border-b border-rose-100 pb-6">
                    <div className="w-10 h-10 bg-[#7B1C3A] rounded-full flex items-center justify-center shrink-0">
                      <span className="text-yellow-300">📷</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-serif font-bold text-[#7B1C3A] uppercase tracking-widest">Comprehensive Booking Form</h2>
                      <p className="text-muted-foreground text-sm">Fill all details — we'll get back within 1-2 hours</p>
                    </div>
                  </div>

                  <form className="space-y-10" onSubmit={handleSubmit}>

                    {/* Step 1 */}
                    <div className="space-y-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#7B1C3A] rounded-full flex items-center justify-center text-yellow-300 font-bold text-sm shrink-0">1</div>
                        <h3 className="font-bold text-[#7B1C3A] uppercase tracking-widest text-sm">Applicant Details</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-5 pl-11">
                        <div className="space-y-1.5">
                          <Label className="font-semibold text-foreground text-sm">Your Full Name *</Label>
                          <Input required value={fields.yourName} onChange={set('yourName')} placeholder="Enter your name" className="border-[#7B1C3A]/20 focus-visible:ring-[#7B1C3A] h-12" />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="font-semibold text-foreground text-sm">Your Phone Number *</Label>
                          <Input required type="tel" value={fields.phone} onChange={set('phone')} placeholder="+91 XXXXXXXXXX" className="border-[#7B1C3A]/20 focus-visible:ring-[#7B1C3A] h-12" />
                        </div>
                        <div className="space-y-1.5 md:col-span-2">
                          <Label className="font-semibold text-foreground text-sm">Email Address (Optional)</Label>
                          <Input type="email" value={fields.email} onChange={set('email')} placeholder="you@example.com" className="border-[#7B1C3A]/20 focus-visible:ring-[#7B1C3A] h-12" />
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="space-y-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#7B1C3A] rounded-full flex items-center justify-center text-yellow-300 font-bold text-sm shrink-0">2</div>
                        <h3 className="font-bold text-[#7B1C3A] uppercase tracking-widest text-sm">Couple Details</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-5 pl-11">
                        <div className="space-y-1.5">
                          <Label className="font-semibold text-foreground text-sm">🤵 Groom Name</Label>
                          <Input value={fields.groomName} onChange={set('groomName')} placeholder="Groom's full name" className="border-[#7B1C3A]/20 focus-visible:ring-[#7B1C3A] h-12" />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="font-semibold text-foreground text-sm">👰 Bride Name</Label>
                          <Input value={fields.brideName} onChange={set('brideName')} placeholder="Bride's full name" className="border-[#7B1C3A]/20 focus-visible:ring-[#7B1C3A] h-12" />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="font-semibold text-foreground text-sm">Groom Phone</Label>
                          <Input type="tel" value={fields.groomPhone} onChange={set('groomPhone')} placeholder="Groom's number" className="border-[#7B1C3A]/20 focus-visible:ring-[#7B1C3A] h-12" />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="font-semibold text-foreground text-sm">Bride Phone</Label>
                          <Input type="tel" value={fields.bridePhone} onChange={set('bridePhone')} placeholder="Bride's number" className="border-[#7B1C3A]/20 focus-visible:ring-[#7B1C3A] h-12" />
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="space-y-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#7B1C3A] rounded-full flex items-center justify-center text-yellow-300 font-bold text-sm shrink-0">3</div>
                        <h3 className="font-bold text-[#7B1C3A] uppercase tracking-widest text-sm">Event Location & Date</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-5 pl-11">
                        <div className="space-y-1.5">
                          <Label className="font-semibold text-foreground text-sm">Venue / Marriage Hall Name</Label>
                          <Input value={fields.venue} onChange={set('venue')} placeholder="Venue name" className="border-[#7B1C3A]/20 focus-visible:ring-[#7B1C3A] h-12" />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="font-semibold text-foreground text-sm">City / Village</Label>
                          <Input value={fields.city} onChange={set('city')} placeholder="City or village name" className="border-[#7B1C3A]/20 focus-visible:ring-[#7B1C3A] h-12" />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="font-semibold text-foreground text-sm">District</Label>
                          <Input value={fields.district} onChange={set('district')} placeholder="District" className="border-[#7B1C3A]/20 focus-visible:ring-[#7B1C3A] h-12" />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="font-semibold text-foreground text-sm">State</Label>
                          <Input value={fields.state} onChange={set('state')} placeholder="State" className="border-[#7B1C3A]/20 focus-visible:ring-[#7B1C3A] h-12" />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="font-semibold text-foreground text-sm">Pincode</Label>
                          <Input value={fields.pincode} onChange={set('pincode')} placeholder="852201" className="border-[#7B1C3A]/20 focus-visible:ring-[#7B1C3A] h-12" />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="font-semibold text-foreground text-sm">Number of Days</Label>
                          <Input type="number" min="1" value={fields.days} onChange={set('days')} placeholder="1, 2, 3..." className="border-[#7B1C3A]/20 focus-visible:ring-[#7B1C3A] h-12" />
                        </div>

                        <div className="space-y-1.5">
                          <Label className="font-semibold text-foreground text-sm">Wedding Start Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className={cn("w-full justify-start text-left font-normal border-[#7B1C3A]/20 h-12", !date && "text-muted-foreground")}>
                                <CalendarIcon className="mr-2 h-4 w-4 text-[#7B1C3A]" />
                                {date ? format(date, "PPP") : <span>Pick start date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-white border-[#7B1C3A]/20" align="start">
                              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div className="space-y-1.5">
                          <Label className="font-semibold text-foreground text-sm">Wedding End Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className={cn("w-full justify-start text-left font-normal border-[#7B1C3A]/20 h-12", !endDate && "text-muted-foreground")}>
                                <CalendarIcon className="mr-2 h-4 w-4 text-[#7B1C3A]" />
                                {endDate ? format(endDate, "PPP") : <span>Pick end date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-white border-[#7B1C3A]/20" align="start">
                              <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="space-y-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#7B1C3A] rounded-full flex items-center justify-center text-yellow-300 font-bold text-sm shrink-0">4</div>
                        <h3 className="font-bold text-[#7B1C3A] uppercase tracking-widest text-sm">Package Selection</h3>
                      </div>
                      <div className="pl-11">
                        <Select onValueChange={setSelectedCat}>
                          <SelectTrigger className="border-[#7B1C3A]/20 focus-visible:ring-[#7B1C3A] h-12">
                            <SelectValue placeholder="Select your camera package" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-[#7B1C3A]/20">
                            {categories.map(cat => (
                              <SelectItem key={cat.id} value={cat.id}>
                                {cat.name} — {cat.price}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Booking Button */}
                    <div className="mt-4">
                      <Button
                        type="submit"
                        className="w-full h-16 text-lg bg-[#7B1C3A] hover:bg-[#5a1229] text-white rounded-xl font-bold transition-colors shadow-lg flex items-center justify-center gap-3"
                      >
                        <CheckCircle className="w-6 h-6" />
                        Book Now — WhatsApp / Telegram
                      </Button>
                    </div>
                    <p className="text-center text-xs text-muted-foreground pt-2">
                      ✅ Submit karte hi WhatsApp aur Telegram dono ka option milega — apni marzi se bhejo
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
