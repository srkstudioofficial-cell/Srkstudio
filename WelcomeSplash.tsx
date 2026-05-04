import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function WelcomeSplash() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return true;
    if (window.location.search.includes('nosplash')) return false;
    return !sessionStorage.getItem('srk_splash_shown');
  });

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('srk_splash_shown', '1');
    }, 2400);
    return () => clearTimeout(timer);
  }, [isVisible]);

  const particles = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 1.2,
        duration: 1.5 + Math.random() * 1.5,
      })),
    []
  );

  const rays = useMemo(() => Array.from({ length: 12 }).map((_, i) => i * 30), []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.15,
            filter: 'blur(20px)',
            transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse at center, #2a0014 0%, #1a0010 40%, #000000 100%)',
            perspective: '1200px',
          }}
        >
          {/* Animated burgundy gradient pulse */}
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at center, rgba(123,28,58,0.6) 0%, rgba(250,204,21,0.15) 30%, transparent 60%)',
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0.7], scale: [0.5, 1.3, 1.6] }}
            transition={{ duration: 2.4, ease: 'easeOut' }}
          />

          {/* Rotating light rays */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: 360, opacity: [0, 0.6, 0.3] }}
            transition={{ duration: 2.4, ease: 'linear' }}
          >
            {rays.map((angle) => (
              <div
                key={angle}
                className="absolute w-[2px] h-[140vh] origin-center"
                style={{
                  background:
                    'linear-gradient(to bottom, transparent 0%, rgba(250,204,21,0.4) 40%, rgba(255,80,100,0.3) 50%, rgba(250,204,21,0.4) 60%, transparent 100%)',
                  transform: `rotate(${angle}deg)`,
                  filter: 'blur(2px)',
                }}
              />
            ))}
          </motion.div>

          {/* Sparkle particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                background: p.id % 3 === 0 ? '#FACC15' : p.id % 3 === 1 ? '#ffffff' : '#ff6b6b',
                boxShadow:
                  p.id % 3 === 0
                    ? '0 0 12px #FACC15, 0 0 24px #FACC15'
                    : p.id % 3 === 1
                    ? '0 0 10px #ffffff'
                    : '0 0 12px #ff4d6d',
              }}
              initial={{ opacity: 0, scale: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0, 1.2, 1, 0],
                y: [0, -60 - Math.random() * 80],
                x: [0, (Math.random() - 0.5) * 60],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                ease: 'easeOut',
              }}
            />
          ))}

          {/* Camera shutter ring */}
          <motion.div
            className="absolute rounded-full border-2"
            style={{
              borderColor: '#FACC15',
              boxShadow:
                '0 0 60px rgba(250,204,21,0.6), inset 0 0 60px rgba(250,204,21,0.3)',
            }}
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{
              width: ['0px', '600px', '900px'],
              height: ['0px', '600px', '900px'],
              opacity: [0, 0.8, 0],
            }}
            transition={{ duration: 2.2, ease: 'easeOut' }}
          />

          <motion.div
            className="absolute rounded-full border"
            style={{ borderColor: '#7B1C3A' }}
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{
              width: ['0px', '400px', '700px'],
              height: ['0px', '400px', '700px'],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 2.0, delay: 0.2, ease: 'easeOut' }}
          />

          {/* Main 3D text container */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ rotateX: 90, opacity: 0, scale: 0.3 }}
            animate={{ rotateX: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Top tagline */}
            <motion.div
              initial={{ opacity: 0, y: -20, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0.5em' }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xs md:text-sm font-light uppercase mb-4"
              style={{
                color: '#ffffff',
                textShadow: '0 0 12px rgba(255,255,255,0.8)',
              }}
            >
              ✦ Welcome To ✦
            </motion.div>

            {/* 3D layered main title */}
            <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
              {/* Shadow / depth layer 1 (burgundy back) */}
              <h1
                className="absolute inset-0 text-5xl sm:text-6xl md:text-8xl font-bold uppercase whitespace-nowrap"
                style={{
                  fontFamily: 'Georgia, serif',
                  color: '#7B1C3A',
                  transform: 'translate(8px, 8px) translateZ(-30px)',
                  filter: 'blur(2px)',
                  opacity: 0.7,
                }}
              >
                S.R.K Studio
              </h1>

              {/* Shadow layer 2 (red glow) */}
              <h1
                className="absolute inset-0 text-5xl sm:text-6xl md:text-8xl font-bold uppercase whitespace-nowrap"
                style={{
                  fontFamily: 'Georgia, serif',
                  color: '#ff4d6d',
                  transform: 'translate(4px, 4px) translateZ(-15px)',
                  filter: 'blur(1px)',
                  opacity: 0.5,
                }}
              >
                S.R.K Studio
              </h1>

              {/* Main gold text */}
              <motion.h1
                className="relative text-5xl sm:text-6xl md:text-8xl font-bold uppercase whitespace-nowrap"
                style={{
                  fontFamily: 'Georgia, serif',
                  background:
                    'linear-gradient(180deg, #fff9c4 0%, #FACC15 30%, #fff9c4 50%, #d4a017 75%, #FACC15 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter:
                    'drop-shadow(0 0 20px rgba(250,204,21,0.8)) drop-shadow(0 0 40px rgba(255,77,109,0.4))',
                }}
                animate={{
                  filter: [
                    'drop-shadow(0 0 20px rgba(250,204,21,0.8)) drop-shadow(0 0 40px rgba(255,77,109,0.4))',
                    'drop-shadow(0 0 40px rgba(250,204,21,1)) drop-shadow(0 0 60px rgba(255,77,109,0.7))',
                    'drop-shadow(0 0 20px rgba(250,204,21,0.8)) drop-shadow(0 0 40px rgba(255,77,109,0.4))',
                  ],
                }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                S.R.K Studio
              </motion.h1>
            </div>

            {/* Animated divider line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7, ease: 'easeOut' }}
              className="h-[3px] w-64 mx-auto mt-6 rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, #FACC15 25%, #ff4d6d 50%, #FACC15 75%, transparent 100%)',
                boxShadow: '0 0 20px rgba(250,204,21,0.8)',
              }}
            />

            {/* Sub tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="mt-5 text-sm md:text-base uppercase font-light"
              style={{
                color: '#ffffff',
                letterSpacing: '0.4em',
                textShadow: '0 0 10px rgba(250,204,21,0.6)',
              }}
            >
              Cinematic <span style={{ color: '#FACC15' }}>•</span> Wedding{' '}
              <span style={{ color: '#FACC15' }}>•</span> Memories
            </motion.p>

            {/* Bottom location badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="mt-6 inline-block px-5 py-1.5 rounded-full text-xs uppercase tracking-[0.3em]"
              style={{
                background: 'linear-gradient(90deg, rgba(123,28,58,0.6), rgba(250,204,21,0.2), rgba(123,28,58,0.6))',
                border: '1px solid rgba(250,204,21,0.5)',
                color: '#FACC15',
                boxShadow: '0 0 20px rgba(123,28,58,0.4)',
              }}
            >
              Saharsa, Bihar
            </motion.div>
          </motion.div>

          {/* Lens flare top-left */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(250,204,21,0.6) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.8, 0.4], scale: [0, 2, 1.5] }}
            transition={{ duration: 2.4, ease: 'easeOut' }}
          />

          {/* Lens flare bottom-right */}
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(255,77,109,0.5) 0%, transparent 70%)',
              filter: 'blur(25px)',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.7, 0.3], scale: [0, 2, 1.5] }}
            transition={{ duration: 2.4, delay: 0.3, ease: 'easeOut' }}
          />

          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
            }}
          />

          {/* Top + bottom cinematic bars */}
          <motion.div
            className="absolute top-0 left-0 right-0 bg-black"
            initial={{ height: '50vh' }}
            animate={{ height: '0vh' }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-black"
            initial={{ height: '50vh' }}
            animate={{ height: '0vh' }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
