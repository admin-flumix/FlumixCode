import React from 'react';
import { PageId } from '../types';
import { 
  Sparkles, 
  Database, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  Target, 
  Eye, 
  HeartHandshake, 
  Lightbulb, 
  ChevronRight, 
  Building2, 
  Cpu, 
  BarChart3, 
  ArrowRight, 
  Zap,
  Award,
  Sliders,
  Server,
  Workflow
} from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  setCurrentPage: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export default function About({ setCurrentPage, onOpenConsultation }: AboutProps) {
  
  let storeDataforContactUs = (e?: any) =>{
    localStorage.setItem('inputName','Page');
    localStorage.setItem('inputData','About Us');
  }

  const whatWeDoList = [
    { title: "Data Strategy & Architecture", icon: CompassIcon },
    { title: "Cloud Data Platforms", icon: Server },
    { title: "Data Warehousing", icon: Database },
    { title: "ETL & ELT Engineering", icon: Workflow },
    { title: "Business Intelligence & Dashboards", icon: BarChart3 },
    { title: "Data Governance & Quality", icon: ShieldCheck },
    { title: "AI & Advanced Analytics", icon: Cpu },
    { title: "Performance Optimisation", icon: Sliders },
    { title: "Managed Data Services", icon: Layers }
  ];

  const principles = [
    {
      title: "Clarity",
      tagline: "Simple solutions to complex problems",
      description: "We focus on what delivers value rather than unnecessary complexity. Clear architecture, clear roadmaps, and clear results.",
      icon: Lightbulb
    },
    {
      title: "Partnership",
      tagline: "Extension of your team",
      description: "We work as an extension of your team, collaborating closely with stakeholders to understand your goals and challenges.",
      icon: HeartHandshake
    },
    {
      title: "Excellence",
      tagline: "Robust, scalable, maintainable",
      description: "From architecture to implementation, we follow best practices to deliver robust, scalable, and maintainable solutions.",
      icon: Award
    }
  ];

  const values = [
    {
      title: "Business First",
      description: "Technology is only valuable when it solves real business problems.",
      icon: Target
    },
    {
      title: "Simplicity",
      description: "Elegant solutions outperform complicated ones every single time.",
      icon: Zap
    },
    {
      title: "Quality",
      description: "We build solutions that are reliable, maintainable, and designed to last.",
      icon: ShieldCheck
    },
    {
      title: "Innovation",
      description: "We embrace modern technologies while keeping practicality at the centre of every decision.",
      icon: Sparkles
    },
    {
      title: "Trust",
      description: "Long-term partnerships are built through transparency, accountability, and consistently delivering results.",
      icon: HeartHandshake
    }
  ];

  const industries = [
    "Finance & Banking", "Retail & E-commerce", "Healthcare & Life Sciences", 
    "Logistics & Supply Chain", "Manufacturing", "Technology & SaaS"
  ];

  return (
    <div className="relative overflow-hidden py-16 sm:py-20 bg-slate-50  text-slate-800 " id="about-page">
      {/* Background radial accent glow */}
      <div className="absolute right-1/4 top-10 h-[500px] w-[500px] rounded-full bg-blue-300/10  glow-blur pointer-events-none" />
      <div className="absolute left-1/4 bottom-20 h-[500px] w-[500px] rounded-full bg-indigo-300/10  glow-blur pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Page Header / Hero Intro */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50  border border-blue-100  text-blue-600  text-xs font-bold uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              About Flumix
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-extrabold tracking-tight text-slate-900  sm:text-5xl md:text-6xl"
          >
            Turning Data into <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Clear Direction
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-650  leading-relaxed max-w-3xl mx-auto"
          >
            At <strong>Flumix</strong>, we believe data should do more than fill reports—it should drive better decisions, unlock opportunities, and create measurable business value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-slate-200/80  bg-white/80 /60 p-6 sm:p-8 backdrop-blur-sm text-left space-y-4 shadow-sm"
          >
            <p className="text-sm sm:text-base text-slate-700  leading-relaxed">
              We partner with organisations to design, build, and optimise modern data platforms that transform complex information into actionable insights. Whether you&apos;re modernising your data warehouse, implementing cloud analytics, or laying the foundations for AI, we provide the expertise to help you move forward with confidence.
            </p>
            <p className="text-sm sm:text-base text-slate-700  leading-relaxed pt-2 border-t border-slate-100 ">
              Our approach combines deep technical knowledge with a strong understanding of business needs, ensuring every solution delivers lasting impact rather than unnecessary complexity.
            </p>
          </motion.div>
        </div>

        {/* Shorter Modern Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-gray-900 to-slate-900 p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-blue-500/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-300 font-bold">Data. Simplified. Delivered.</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Build smarter. Scale faster. Make better decisions with Flumix.</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Flumix is a specialist data consultancy helping organisations design, build, and optimise modern data platforms in the cloud. We combine technical expertise with business understanding to deliver scalable solutions that transform data into meaningful insights.
            </p>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="space-y-10" id="what-we-do">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50  border border-indigo-100  text-indigo-600  text-xs font-bold uppercase tracking-widest">
              Capabilities
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 ">What We Do</h2>
            <p className="text-sm text-slate-600 ">
              We specialise in delivering end-to-end data solutions across the modern data ecosystem:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeDoList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-center gap-4 rounded-xl border border-slate-200  bg-white  p-5 shadow-3xs hover:border-blue-500/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 border border-blue-100  text-blue-600 ">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <span className="font-display text-sm font-bold text-slate-900 ">
                    {item.title}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <div className="rounded-xl border border-slate-200  bg-slate-100/60 /40 p-6 text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm text-slate-700  font-medium">
              Whether you&apos;re starting your cloud journey or scaling an existing platform, we help build solutions that are <span className="text-blue-600  font-bold">secure</span>, <span className="text-blue-600  font-bold">scalable</span>, and <span className="text-blue-600  font-bold">future-ready</span>.
            </p>
          </div>
        </div>

        {/* Why Flumix? + Core Principles */}
        <div className="space-y-12" id="why-flumix">
          <div className="rounded-2xl border border-blue-200/60 /50 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30    p-8 sm:p-12 shadow-sm space-y-6 text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80  border border-blue-200  text-blue-700  text-xs font-bold uppercase tracking-widest">
              The Origin & Name
            </span>
            <h2 className="font-display text-3xl font-extrabold text-slate-900 ">Why Flumix?</h2>
            <p className="text-base text-slate-700  leading-relaxed max-w-2xl mx-auto">
              The name <strong className="text-blue-600  font-bold">Flumix</strong> represents the seamless <em className="not-italic text-slate-900  font-semibold">flow</em> and intelligent <em className="not-italic text-slate-900  font-semibold">mixing</em> of data—bringing together information from across your business to create clarity, insight, and better outcomes.
            </p>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <h3 className="font-display text-2xl font-bold text-slate-900 ">Three Principles We Build On</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {principles.map((p, idx) => {
                const IconComp = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="rounded-2xl border border-slate-200  bg-white  p-8 space-y-4 hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50  border border-blue-100  text-blue-600 ">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-display text-xl font-bold text-slate-900 ">{p.title}</h4>
                        <p className="text-xs font-mono text-blue-600  font-semibold mt-1 uppercase tracking-wider">{p.tagline}</p>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600  leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="mission-vision">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200  bg-white  p-8 space-y-4 shadow-sm relative overflow-hidden"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50  border border-blue-100  text-blue-600 ">
              <Target className="h-6 w-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600  font-bold">Purpose</span>
            <h3 className="font-display text-2xl font-bold text-slate-900 ">Our Mission</h3>
            <p className="text-sm text-slate-650  leading-relaxed">
              To empower organisations with trusted, intelligent data solutions that enable confident decision-making and sustainable growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200  bg-white  p-8 space-y-4 shadow-sm relative overflow-hidden"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50  border border-indigo-100  text-indigo-600 ">
              <Eye className="h-6 w-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600  font-bold">Horizon</span>
            <h3 className="font-display text-2xl font-bold text-slate-900 ">Our Vision</h3>
            <p className="text-sm text-slate-650  leading-relaxed">
              To become a trusted partner for businesses seeking modern, scalable data platforms that accelerate innovation and unlock the full potential of their data.
            </p>
          </motion.div>
        </div>

        {/* Our Values Section */}
        <div className="space-y-10" id="our-values">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50  border border-blue-100  text-blue-600  text-xs font-bold uppercase tracking-widest">
              Core Ethics
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 ">Our Values</h2>
            <p className="text-xs text-slate-500 ">Guided by practicality, precision, and long-term partnership.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, idx) => {
              const IconComp = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-xl border border-slate-200  bg-white  p-6 space-y-3 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50  border border-blue-100  text-blue-600 ">
                      <IconComp className="h-4.5 w-4.5" />
                    </div>
                    <h4 className="font-display text-base font-bold text-slate-900 ">{v.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600  leading-relaxed">
                    {v.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Who We Work With */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-8 sm:p-12 space-y-8 shadow-sm" id="who-we-work-with">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50  border border-indigo-100  text-indigo-600  text-xs font-bold uppercase tracking-widest">
              Client Profile & Reach
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 ">Who We Work With</h2>
            <p className="text-sm sm:text-base text-slate-650  leading-relaxed">
              We support organisations of all sizes—from growing businesses building their first cloud data platform to enterprises modernising complex analytics ecosystems.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100 ">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 ">Industries & Domains Served</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {industries.map((ind, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg bg-slate-50  border border-slate-200/80  p-3 text-xs font-semibold text-slate-700 ">
                  <Building2 className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                  <span>{ind}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section: Let's Build Something Better */}
        <div className="rounded-3xl border border-blue-200 /60 bg-gradient-to-b from-gray-900 to-gray-500 p-8 sm:p-14 text-center text-white space-y-8 shadow-2xl relative overflow-hidden" id="about-cta">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-32 bg-blue-500/10 blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono font-bold uppercase tracking-widest">
              Get Started
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">Let&apos;s Build Something Better</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you need expert guidance on a single project, additional delivery capacity, or a long-term strategic data partner, Flumix is ready to help.
            </p>
            <p className="text-base font-bold text-blue-400">
              Transform your data into your competitive advantage.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
            <button
              onClick={()=>{
                storeDataforContactUs();
                onOpenConsultation();
              }}
              className="px-5 py-2.5 bg-gray-900 hover:bg-gray-500 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/10 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Schedule Consultation</span>
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => setCurrentPage('services')}
              className="px-5 py-2.5 bg-gray-400 hover:bg-gray-700 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/10 flex items-center gap-1.5 cursor-pointer"
            >
              Explore Services
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

function CompassIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
  );
}
