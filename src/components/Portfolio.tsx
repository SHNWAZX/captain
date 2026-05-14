import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Github,
  Send,
  Zap,
  Palette,
  BarChart3,
  Shield,
  Menu,
  X,
} from "lucide-react";
import HlsVideo from "./HlsVideo";
import BlurText from "./BlurText";
import AnimatedCursor from "./AnimatedCursor";
import CopyGuard from "./CopyGuard";
import ScrollAudio from "./ScrollAudio";
import heroVideoUrl from "@/assets/hero-video.mp4?url";

const NAV = [
  
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 backdrop-blur-md bg-black/30" : "py-5"
      }`}
    >
      <div className="px-5 sm:px-8 lg:px-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-heading italic text-white text-lg sm:text-xl">
            Captain
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-white/60 hover:text-white text-xs tracking-[0.2em] uppercase font-body transition"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex liquid-glass-strong rounded-full px-4 py-2 items-center gap-1.5 text-white text-xs font-body font-medium"
        >
          Hire me <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 rounded-full liquid-glass-strong flex items-center justify-center text-white"
          aria-label="Menu"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mx-5 mt-3 rounded-2xl liquid-glass p-5 flex flex-col gap-4"
        >
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="text-white/80 text-sm font-body tracking-wide"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-white text-black rounded-full px-4 py-2.5 text-xs font-body font-semibold inline-flex items-center justify-center gap-1.5"
          >
            Hire me <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideoUrl}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      <div className="relative z-10 min-h-[100svh] flex flex-col justify-end px-5 sm:px-8 lg:px-16 pb-20 pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="liquid-glass rounded-full inline-flex items-center gap-2 pl-1 pr-3 py-1 self-start mb-5"
        >
          <span className="bg-white text-black rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider">
            Open
          </span>
          <span className="text-white/70 text-[11px] font-light">
            Available for new work · 2026
          </span>
        </motion.div>

        <BlurText
          text="Crafting interfaces that feel inevitable."
          delay={70}
          className="text-[2.6rem] leading-[0.95] sm:text-6xl lg:text-8xl xl:text-[7rem] font-heading italic text-white tracking-[-1.5px] mb-6 max-w-5xl"
        />

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          className="text-sm sm:text-base lg:text-lg text-white/55 font-body font-light leading-relaxed max-w-xl mb-8"
        >
          I'm <span className="text-white">Captain</span> — a full-stack web developer
          designing, coding and hosting websites that load fast, look sharp and actually convert.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0 }}
          className="text-xs sm:text-sm text-white/40 font-body font-light leading-relaxed max-w-xl mb-8"
        >
          Websites · Web hosting · Clean code · Responsive on every screen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex items-center gap-3 flex-wrap"
        >
          <a
            href="https://github.com/IFlexElite?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full px-5 py-3 text-sm font-body font-semibold inline-flex items-center gap-2"
          >
            View work <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="liquid-glass-strong rounded-full px-5 py-3 text-sm font-body font-medium text-white inline-flex items-center gap-2"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    Icon: Zap,
    title: "Web Development",
    desc: "Production-grade React & TypeScript builds. Fast, accessible, SEO-ready.",
  },
  {
    Icon: Palette,
    title: "UX & Interface",
    desc: "Interfaces refined to the pixel. Motion, hierarchy, and micro-interactions that feel alive.",
  },
  {
    Icon: BarChart3,
    title: "Conversion Strategy",
    desc: "Layouts informed by data. Decisions backed by performance. Results you can measure.",
  },
  {
    Icon: Shield,
    title: "Performance & Care",
    desc: "Edge-deployed, secure by default, and quietly maintained long after launch.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative bg-black py-20 sm:py-28 px-5 sm:px-8 lg:px-16 overflow-hidden"
    >
      <HlsVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "saturate(0)", opacity: 0.35 }}
      />
      <div className="relative z-10">
        <motion.span
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="block text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-3"
        >
          What I do
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-3xl sm:text-5xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-10 sm:mb-14 max-w-3xl"
        >
          Services built for momentum.
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            className="liquid-glass rounded-2xl p-6 sm:p-8 flex flex-col transition-transform duration-500 hover:-translate-y-1"
            >
            <motion.div
              whileHover={{ rotate: 12, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-5"
            >
              <Icon className="w-4 h-4 text-white" />
            </motion.div>
              <h3 className="text-base sm:text-lg font-body font-semibold text-white mb-2">
                {title}
              </h3>
              <p className="text-xs sm:text-sm font-body font-light text-white/45 leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SKILLS = [
  {
    title: "Website Design",
    desc: "Conversion-focused, unforgettable brand interfaces.",
  },
  {
    title: "Web Hosting",
    desc: "cPanel, free migration, lightning-fast performance.",
  },
  {
    title: "Code Development",
    desc: "HTML, CSS, JS, React — clean, scalable code.",
  },
  {
    title: "Responsive Builds",
    desc: "Perfect on any screen size, every time.",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-black py-20 sm:py-28 px-5 sm:px-8 lg:px-16"
    >
      <motion.span
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="block text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-3"
      >
        Skills
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="text-3xl sm:text-5xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-10 sm:mb-14 max-w-3xl"
      >
        Crafted with precision.
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="liquid-glass rounded-2xl p-6 sm:p-8 flex flex-col transition-transform duration-500 hover:-translate-y-1"
          >
            <span className="text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-4">
              0{i + 1}
            </span>
            <h3 className="text-base sm:text-lg font-body font-semibold text-white mb-2">
              {s.title}
            </h3>
            <p className="text-xs sm:text-sm font-body font-light text-white/45 leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const STATS = [
  { num: "60+", desc: "Sites shipped across SaaS, brand, and editorial" },
  { num: "98%", desc: "Client satisfaction across the last two years" },
  { num: "3.2x", desc: "Average conversion uplift after a redesign" },
  { num: "5d", desc: "From concept to a production-ready launch" },
];

function Stats() {
  return (
    <section
      id="about"
      className="relative bg-black py-20 sm:py-28 px-5 sm:px-8 lg:px-16 overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="relative z-10">
        <motion.span
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="block text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-3"
        >
          About
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-3xl sm:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.95] mb-6 max-w-3xl"
        >
          I'm Captain — a developer who builds the kind of websites people actually remember.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/55 font-body font-light text-sm sm:text-base leading-relaxed max-w-2xl mb-10"
        >
          I work with founders, creators and small teams to ship websites that load
          fast, look sharp and convert. From a single landing page to a full
          storefront or dashboard — I handle the design, the code and the hosting,
          so you get one person who actually owns the outcome.
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {STATS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-black p-5 sm:p-8 flex flex-col gap-2"
            >
              <span className="text-4xl sm:text-6xl lg:text-7xl font-heading italic text-white leading-none">
                {s.num}
              </span>
              <p className="text-[11px] sm:text-sm font-body font-light text-white/50 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "A complete rebuild in five days. The result outperformed everything we'd spent months on before.",
    name: "Priya Sharma",
    role: "CEO, Luminary",
    initials: "PS",
  },
  {
    quote:
      "Conversions up 4x. The design just works differently when it's built on real data.",
    name: "Ananya Iyer",
    role: "Head of Growth, Arcline",
    initials: "AI",
  },
  {
    quote:
      "Didn't just design our site — defined our brand. World-class doesn't begin to cover it.",
    name: "Meera Kapoor",
    role: "Brand Director, Helix",
    initials: "MK",
  },
];

function RedBanner() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-5 sm:px-8 lg:px-16 py-24 sm:py-32"
      style={{
        background:
          "radial-gradient(ellipse at 70% 50%, #b30000 0%, #8a0000 45%, #5a0000 100%)",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
        src={heroVideoUrl}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#5a0000]/40 via-transparent to-[#3a0000]/60" />
      <div className="relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-full inline-flex items-center gap-2 pl-1 pr-3 py-1 mb-8 ring-1 ring-white/20"
        >
          <span className="bg-white text-black rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
            Open
          </span>
          <span className="text-white/90 text-[11px] font-light">
            Available for new work · 2026
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="text-[2.6rem] leading-[0.95] sm:text-6xl lg:text-8xl xl:text-[7rem] font-heading italic text-white tracking-[-1.5px] max-w-5xl"
        >
          Crafting interfaces that feel inevitable.
        </motion.h2>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-black overflow-hidden px-5 sm:px-8 lg:px-16 py-20 sm:py-28"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_024928_1efd0b0d-6c02-45a8-8847-1030900c4f63.mp4"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="block text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-4"
          >
            Let's talk
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-heading italic text-white leading-[0.9] tracking-tight mb-5 whitespace-pre-line"
          >
            {"Your next website\nstarts here."}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/55 font-body font-light text-sm sm:text-base leading-relaxed max-w-md mb-8"
          >
            Tell me about the project. I'll get back within 24 hours with a clear
            plan, timeline, and price.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3 flex-wrap"
          >
            <a
              href="https://github.com/IFlexElite"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black rounded-full px-5 py-3 text-sm font-body font-semibold inline-flex items-center gap-2"
            >
              Start a project <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/IFlexElite"
              target="_blank"
              rel="noreferrer"
              className="liquid-glass-strong rounded-full px-5 py-3 text-sm font-body font-medium text-white inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="liquid-glass rounded-2xl p-7 sm:p-9"
        >
          <div className="flex items-center gap-3 mb-6">
            <img
              src="https://avatars.githubusercontent.com/u/190835907?v=4"
              alt="Captain"
              className="w-12 h-12 rounded-full object-cover ring-1 ring-white/20"
            />
            <div>
              <div className="text-white font-body text-sm font-medium">
                Captain
              </div>
              <div className="text-white/40 text-[11px] font-body">
                Web Developer & UX Strategist
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <a
              href="https://github.com/captain108"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 text-white/70 hover:text-white text-sm font-body transition border-t border-white/10 pt-3"
            >
              <span className="inline-flex items-center gap-2.5">
                <Github className="w-4 h-4" /> github.com/captain108
              </span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://t.me/captain_tfx"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 text-white/70 hover:text-white text-sm font-body transition border-t border-white/10 pt-3"
            >
              <span className="inline-flex items-center gap-2.5">
                <Send className="w-4 h-4" /> t.me/captain_tfx
              </span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-black px-5 sm:px-8 lg:px-16 py-8 border-t border-white/10"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <span className="text-white/30 text-xs font-body">
          © 2026 Captain. All rights reserved.
        </span>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/captain108"
            className="text-white/40 hover:text-white text-xs font-body"
          >
            GitHub
          </a>
          <a
            href="https://t.me/captain_tfx"
            className="text-white/40 hover:text-white text-xs font-body"
          >
            Telegram
          </a>
        </div>
      </div>
    </motion.footer>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-body antialiased">
      <AnimatedCursor />
      <CopyGuard />
      <ScrollAudio src="/ambient.m4a" targetId="testimonials" />
      <Nav />
      <main>
        <Hero />
        
        <Services />
        <Skills />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}