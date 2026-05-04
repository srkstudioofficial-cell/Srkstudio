import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, User } from 'lucide-react';

type Msg = {
  id: number;
  role: 'bot' | 'user';
  text: string;
  quickReplies?: string[];
};

const STUDIO = {
  name: 'S.R.K Studio',
  ceo: 'Sharvan Yadav',
  phone: '9110066743',
  whatsapp: 'https://wa.me/919110066743',
  telegram: 'https://t.me/+919110066743',
  address: 'Yadav Chowk, Dumrail, Saharsa, Bihar 852201',
  city: 'Saharsa, Bihar',
  email: 'srkstudio@gmail.com',
};

const PACKAGES = [
  { code: 'A+', price: '₹1,00,000', desc: 'Royal Cinematic — Drone, 4K Film, 500+ edited photos, Pre-wedding shoot' },
  { code: 'A',  price: '₹75,000',  desc: 'Premium Wedding — 4K Video, Drone, 400+ photos, Same Day Edit' },
  { code: 'B',  price: '₹55,000',  desc: 'Classic Wedding — Full HD Video, 300+ photos, Cinematic film' },
  { code: 'C',  price: '₹40,000',  desc: 'Standard Wedding — HD Video + 250+ edited photos' },
  { code: 'D',  price: '₹30,000',  desc: 'Essential — Photo + Basic Video coverage' },
  { code: 'E',  price: '₹22,000',  desc: 'Starter — Photo coverage with album' },
  { code: 'F',  price: '₹18,000',  desc: 'Budget — Basic photo coverage' },
];

function getReply(q: string): { text: string; quickReplies?: string[] } {
  const t = q.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|hii|namaste|namaskar|salaam|pranam|good\s*(morning|evening|night)|kaise|kese)/i.test(t)) {
    return {
      text: `Namaste! 🙏 Main S.R.K Studio ka AI assistant hoon. Aap kya jaanna chahte hain — pricing, packages, ya booking?`,
      quickReplies: ['Pricing dikhao', 'Packages kya hai?', 'Location kya hai?', 'Booking kaise karu?'],
    };
  }

  // Pricing
  if (/(price|pric|cost|kitne|kitna|charge|fee|kharcha|paisa|rate|rupee|rupees|rs|₹)/i.test(t)) {
    const list = PACKAGES.map((p) => `• **${p.code}** — ${p.price} (${p.desc.split('—')[0].trim()})`).join('\n');
    return {
      text: `Hamare 7 packages hain:\n\n${list}\n\nKisi specific package ki details chahiye?`,
      quickReplies: ['A+ Royal details', 'B Classic details', 'D Essential details', 'Booking karu'],
    };
  }

  // Specific package
  for (const p of PACKAGES) {
    const codeRegex = new RegExp(`\\b${p.code.toLowerCase().replace('+', '\\+')}\\b|package\\s*${p.code.toLowerCase()}`, 'i');
    if (codeRegex.test(t)) {
      return {
        text: `**Package ${p.code}** — ${p.price}\n\n${p.desc}\n\nIs package ke liye book karna chahte hain? WhatsApp pe message karein: ${STUDIO.phone}`,
        quickReplies: ['WhatsApp pe baat karu', 'Doosre package dikhao', 'Booking form bharo'],
      };
    }
  }

  // Location / Address
  if (/(location|address|where|kaha|kahan|jagah|studio|saharsa|bihar|map)/i.test(t)) {
    return {
      text: `📍 ${STUDIO.name} ka address:\n\n**${STUDIO.address}**\n\nHum poore Bihar aur all-India weddings cover karte hain — destination weddings bhi karwate hain!`,
      quickReplies: ['Travel charges?', 'Phone number?', 'Booking karu'],
    };
  }

  // Travel
  if (/(travel|destination|out\s*of\s*station|outstation|bahar|baahar|other state|delhi|mumbai|patna|kolkata)/i.test(t)) {
    return {
      text: `Bilkul! Hum **all-India destination weddings** karte hain. Travel + accommodation charges actual basis pe add hote hain. Exact quote ke liye seedha CEO Sharvan ji se baat karein.`,
      quickReplies: ['WhatsApp pe baat karu', 'Call karu', 'Pricing dikhao'],
    };
  }

  // Contact / Phone / WhatsApp / Telegram
  if (/(contact|phone|number|call|whats?app|telegram|baat|baat\s*kar)/i.test(t)) {
    return {
      text: `📞 Aap teen tarike se contact kar sakte hain:\n\n• **Call:** ${STUDIO.phone}\n• **WhatsApp:** ${STUDIO.phone}\n• **Telegram:** ${STUDIO.phone}\n\nCEO **${STUDIO.ceo}** seedha respond karte hain!`,
      quickReplies: ['WhatsApp pe baat karu', 'Pricing dikhao', 'Booking form'],
    };
  }

  // Booking
  if (/(book|booking|reserve|date|advance|confirm|hire|hir)/i.test(t)) {
    return {
      text: `Booking process simple hai:\n\n1️⃣ Apni wedding date confirm karein\n2️⃣ Package select karein (A+ se F)\n3️⃣ Booking page form bharein **ya** WhatsApp pe seedha message karein\n4️⃣ 25% advance pe date lock ho jaati hai\n\nKya help chahiye?`,
      quickReplies: ['Booking page kholo', 'WhatsApp pe baat karu', 'Pricing dikhao'],
    };
  }

  // Services
  if (/(service|services|kya\s*karte|offer|kaam|works?|camera|drone|video|photo|cinematic|pre\s*wedding|sangeet|haldi|reception)/i.test(t)) {
    return {
      text: `Hum ye sab services dete hain:\n\n📸 **Wedding Photography** (candid + traditional)\n🎬 **Cinematic Videography** (4K films)\n🚁 **Drone Shots** (aerial coverage)\n💕 **Pre-Wedding Shoots**\n🎵 **Sangeet, Haldi, Mehendi, Reception coverage**\n📀 **Same Day Edit** (highlight reel jaldi)\n📷 **Portrait & Maternity shoots**`,
      quickReplies: ['Pricing dikhao', 'Drone available?', 'Booking karu'],
    };
  }

  // Drone
  if (/(drone|aerial|sky|udne|udta)/i.test(t)) {
    return {
      text: `Haan ji! 🚁 Hamare paas professional **DJI drones** hain. Drone shots **A+ aur A package** mein included hain. Doosre packages mein add-on ke roop mein available hain.`,
      quickReplies: ['A+ details', 'Pricing dikhao', 'Booking karu'],
    };
  }

  // Experience / about
  if (/(experience|exp|year|saal|kitne\s*saal|how\s*long|since|established|kab\s*se|company|about|kaun|who|ceo|owner|sharvan|founder)/i.test(t)) {
    return {
      text: `${STUDIO.name} ko **CEO ${STUDIO.ceo}** ji 10+ saal se chala rahe hain. Humne **500+ weddings** aur 1000+ events cover kiye hain — sab 5★ rated! Bihar ka #1 cinematic studio.`,
      quickReplies: ['Real weddings dikhao', 'Pricing dikhao', 'Contact'],
    };
  }

  // Time / how long delivery
  if (/(time|kab|kitne\s*din|deliver|delivery|edit|days|when|ready|finish)/i.test(t)) {
    return {
      text: `⏱️ Delivery time:\n\n• **Same Day Edit (Highlight Reel)** — wedding ke din hi\n• **Edited Photos** — 15-20 din\n• **Cinematic Film (Final)** — 30-45 din\n• **Album & USB** — 45-60 din\n\nUrgent ke liye fast-track option bhi available hai.`,
      quickReplies: ['Pricing dikhao', 'Booking karu', 'WhatsApp baat'],
    };
  }

  // Payment
  if (/(payment|pay|advance|emi|kist|installment|upi|gpay|phonepe|bank|account)/i.test(t)) {
    return {
      text: `💳 Payment options:\n\n• **25% advance** date confirm karne ke liye\n• **50%** wedding day pe\n• **25%** delivery par\n\nUPI, GPay, PhonePe, Bank Transfer — sab accept karte hain. EMI bhi possible hai bade packages pe.`,
      quickReplies: ['Booking karu', 'Pricing dikhao', 'WhatsApp pe baat'],
    };
  }

  // Cancel / refund
  if (/(cancel|refund|wapas|return|change\s*date)/i.test(t)) {
    return {
      text: `Date change ya cancellation ke liye seedha CEO Sharvan ji se baat karein WhatsApp pe — case ke hisaab se policy decide hoti hai. Hum customer-friendly approach rakhte hain.`,
      quickReplies: ['WhatsApp pe baat karu', 'Call karu'],
    };
  }

  // Languages
  if (/(language|hindi|english|bhojpuri|maithili|bhasha)/i.test(t)) {
    return {
      text: `Hum **Hindi, English, Bhojpuri aur Maithili** — saari local languages mein comfortable hain. Aapke ghar wale comfortable feel karenge!`,
      quickReplies: ['Pricing dikhao', 'Booking karu'],
    };
  }

  // Thanks
  if (/(thank|dhanya|shukriya|thx|ty)/i.test(t)) {
    return {
      text: `Aapka swagat hai! 🙏 Aur kuch puchhna ho to bataiye — ya seedha CEO Sharvan ji se baat karein WhatsApp pe.`,
      quickReplies: ['WhatsApp pe baat karu', 'Pricing dikhao'],
    };
  }

  // Bye
  if (/(bye|tata|alvida|baad\s*mein|goodbye|gn)/i.test(t)) {
    return {
      text: `Phir milte hain! 🙏 S.R.K Studio aapki khoobsurat memories ka intezaar karega. Jab bhi help chahiye, yahan aa jaiye!`,
    };
  }

  // Fallback
  return {
    text: `Hmm, main is sawaal ka exact jawab nahi de pa raha. **Best option** — seedha CEO Sharvan ji se WhatsApp pe baat karein, woh turant reply karenge!\n\n📞 ${STUDIO.phone}`,
    quickReplies: ['WhatsApp pe baat karu', 'Pricing dikhao', 'Packages dikhao', 'Location'],
  };
}

const QUICK_ACTIONS: Record<string, string> = {
  'WhatsApp pe baat karu': '__whatsapp__',
  'Call karu': '__call__',
  'Booking page kholo': '__book__',
  'Booking form bharo': '__book__',
  'Booking form': '__book__',
};

export function AIChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(true);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      id: 1,
      role: 'bot',
      text: `Namaste! 🙏 Main **S.R.K Studio** ka AI assistant hoon. Pricing, booking, ya kuch bhi puchhiye — main turant help karunga!`,
      quickReplies: ['Pricing dikhao', 'Packages kya hai?', 'Location?', 'Booking kaise karu?'],
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [msgs, typing]);

  useEffect(() => {
    if (open) setUnread(false);
  }, [open]);

  const handleSend = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    // Quick action shortcuts
    const action = QUICK_ACTIONS[trimmed];
    if (action === '__whatsapp__') {
      window.open(STUDIO.whatsapp, '_blank');
      return;
    }
    if (action === '__call__') {
      window.location.href = `tel:+91${STUDIO.phone}`;
      return;
    }
    if (action === '__book__') {
      window.location.href = '/book-now';
      return;
    }

    const userMsg: Msg = { id: Date.now(), role: 'user', text: trimmed };
    setMsgs((m) => [...m, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const reply = getReply(trimmed);
      setMsgs((m) => [
        ...m,
        { id: Date.now() + 1, role: 'bot', text: reply.text, quickReplies: reply.quickReplies },
      ]);
      setTyping(false);
    }, 600 + Math.random() * 500);
  };

  return (
    <>
      {/* Floating chatbot button (bottom-LEFT to avoid clash with FloatingContact on right) */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.05 }}
        className="fixed bottom-6 left-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white"
        style={{
          background: 'linear-gradient(135deg, #7B1C3A 0%, #FACC15 100%)',
        }}
        aria-label="Open AI Chat Assistant"
      >
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full bg-yellow-400 opacity-30 animate-ping" />
            <span className="absolute inset-0 rounded-full bg-[#7B1C3A] opacity-20 animate-pulse" />
          </>
        )}
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="relative z-10"
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="bot"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="relative z-10"
            >
              <Bot className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>
        {unread && !open && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white z-20">
            1
          </span>
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-28 left-6 z-50 w-[calc(100vw-3rem)] sm:w-[400px] max-w-[400px] h-[560px] max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col bg-white border-2 border-yellow-400/40"
          >
            {/* Header */}
            <div
              className="px-4 py-3 flex items-center gap-3 text-white"
              style={{ background: 'linear-gradient(135deg, #7B1C3A 0%, #4a1024 100%)' }}
            >
              <div className="relative w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-[#7B1C3A]">
                <Sparkles className="w-5 h-5" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-sm">S.R.K AI Assistant</div>
                <div className="text-[10px] text-yellow-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Online • Reply in seconds
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-rose-50 to-white"
            >
              {msgs.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-2 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                      m.role === 'user'
                        ? 'bg-yellow-400 text-[#7B1C3A]'
                        : 'bg-[#7B1C3A] text-yellow-300'
                    }`}
                  >
                    {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`max-w-[78%] flex flex-col gap-2 ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div
                      className={`px-3 py-2 rounded-2xl text-sm whitespace-pre-line leading-relaxed ${
                        m.role === 'user'
                          ? 'bg-[#7B1C3A] text-white rounded-tr-sm'
                          : 'bg-white border border-rose-200 text-gray-800 rounded-tl-sm shadow-sm'
                      }`}
                      dangerouslySetInnerHTML={{
                        __html: m.text
                          .replace(/&/g, '&amp;')
                          .replace(/</g, '&lt;')
                          .replace(/>/g, '&gt;')
                          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\n/g, '<br/>'),
                      }}
                    />
                    {m.quickReplies && m.quickReplies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {m.quickReplies.map((q) => (
                          <button
                            key={q}
                            onClick={() => handleSend(q)}
                            className="px-3 py-1 text-xs rounded-full bg-yellow-400/90 text-[#7B1C3A] font-semibold hover:bg-yellow-400 hover:scale-105 transition-all border border-yellow-500/40"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex gap-2">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-[#7B1C3A] text-yellow-300 flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white border border-rose-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#7B1C3A] animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-[#7B1C3A] animate-bounce" style={{ animationDelay: '0.15s' }} />
                      <span className="w-2 h-2 rounded-full bg-[#7B1C3A] animate-bounce" style={{ animationDelay: '0.3s' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="border-t border-rose-200 p-3 bg-white flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Apna sawaal type karein..."
                className="flex-1 px-3 py-2 text-sm rounded-full border border-rose-300 focus:outline-none focus:border-[#7B1C3A] focus:ring-2 focus:ring-yellow-200"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7B1C3A] to-[#9B2C4A] text-yellow-300 flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="text-center text-[10px] text-gray-400 py-1.5 bg-white border-t border-rose-100">
              ⚡ Powered by S.R.K AI • Reply in seconds
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
