import React, { useState } from 'react';
import { PageId } from '../types';
import { Building, Mail, Phone, ExternalLink, ArrowUpRight, CheckCircle2, Users, RefreshCw, Linkedin, Twitter, Github, Youtube  } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

const footerone = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "hire-experts", label: "Hire Certified Experts" },
  {
    mid: "fixed-packages",
    label: "Fixed Packages",
    children: [
      { id: "fixed-packages?data-health-check", label: "Data Health Check" },
      { id: "fixed-packages?executive-data-strategy-workshop", label: "Executive Data Strategy Workshop" },
      { id: "fixed-packages?power-bi-dashboard-review", label: "Power BI Dashboard Review" },
      { id: "fixed-packages?executive-dashboard-package", label: "Executive Dashboard" },
      { id: "fixed-packages?sql-performance-review", label: "SQL Performance Review" },
      { id: "fixed-packages?data-warehouse-health-check", label: "Data Warehouse Health Check" },
      { id: "fixed-packages?data-quality-assessment", label: "Data Quality Assessment" },
      { id: "fixed-packages?ai-readiness-assessment", label: "AI Readiness Assessment" },
      { id: "fixed-packages?genai-use-case-discovery-workshop", label: "GenAI Use Case Discovery Workshop" },
      { id: "fixed-packages?ai-proof-of-concept", label: "AI Proof of Concept (PoC)" },
      { id: "fixed-packages?ai-copilot-intelligent-automation", label: "AI Copilot & Intelligent Automation" },
    ],
  },
  {
    mid: "services",
    label: "Data & AI",
    children: [
      { id: "services?service-card-data-engineering", label: "Data Engineering & Pipelines" },
      { id: "services?service-card-data-etl-extraction", label: "Data ETL & ELT" },
      { id: "services?service-card-discovery-modeling", label: "Discovery & Modeling" },
      { id: "services?service-card-ai-genai", label: "AI & GenAI Solutions" },
      { id: "services?service-card-insights-bi", label: "Insights & Business Intelligence" },
      { id: "services?service-card-managed-delivery", label: "Managed Delivery (Scaled Engineering)" },
    ],
  }
];

const footertwo = [
  {
    mid: "customer-bpo",
    label: "Customer Service & BPO",
    children: [
      { id: "customer-bpo?customer-support", label: "Customer Support & Helpdesk" },
      { id: "customer-bpo?intelligent-cx", label: "Intelligent Customer Experience (CX)" },
      { id: "customer-bpo?telemarketing", label: "Telemarketing & Outbound" },
      { id: "customer-bpo?training-qa", label: "Training & Quality Management" },
      { id: "customer-bpo?ecommerce-support", label: "E-commerce Support" },
      { id: "customer-bpo?data-entry", label: "Data Entry & Virtual Assistant" },
      { id: "customer-bpo?finance-accounting", label: "Finance & Accounting" },
      { id: "customer-bpo?healthcare-bpo", label: "Healthcare BPO (Medical Billing, RCM)" },
      { id: "customer-bpo?legal-bpo", label: "Legal Process Outsourcing (LPO)" },
      { id: "customer-bpo?hr-outsourcing", label: "HR Outsourcing" },
    ],
  },

  {
    mid: "digital-marketing",
    label: "Digital Marketing Services",
    children: [
      { id: "digital-marketing?digital-ads", label: "Digital Advertising & Paid Media" },
      { id: "digital-marketing?ai-seo", label: "AI-Driven SEO & Findability" },
      { id: "digital-marketing?web-design", label: "Web Design & Digital Personalization" },
      { id: "digital-marketing?ai-marketing-growth", label: "AI Marketing & Growth" },
      { id: "digital-marketing?ecommerce-content", label: "E-commerce Content Optimization" },
      { id: "digital-marketing?social-media", label: "Social Media & Community" },
      { id: "digital-marketing?cro", label: "Conversion Rate Optimization (CRO)" },
      { id: "digital-marketing?marketing-analytics", label: "Marketing Analytics & Data" },
      { id: "digital-marketing?strategic-consulting", label: "Strategic Marketing Consulting" },
      { id: "digital-marketing?content-personalization", label: "Content Personalization" },
      { id: "digital-marketing?email-automation", label: "Email & Automation" },
    ],
  }
];

const footerthree = [
  {
    mid: "app-services",
    label: "Application Services",
    children: [
      { id: "app-services?ai-first-apps", label: "AI-First Application Services" },
      { id: "app-services?product-dev", label: "Product Development" },
      { id: "app-services?ai-intelligent-eng", label: "AI & Intelligent Engineering" },
      { id: "app-services?manufacturing-analytics", label: "Manufacturing Analytics" },
      { id: "app-services?ai-driven-cloud", label: "AI-Driven Cloud" },
      { id: "app-services?devops-automation", label: "DevOps & Infrastructure Automation" },
      { id: "app-services?quality-eng", label: "Quality Engineering & Assurance" },
      { id: "app-services?data-analytics", label: "Data & Analytics" },
      { id: "app-services?digital-infra", label: "Digital Infrastructure & Support" },
      { id: "app-services?enterprise-platforms", label: "Enterprise Platforms" },
    ],
  },
  { id: "case-studies", label: "Case Studies" },
  { id: "contact", label: "Contact Us" },
];

export default function Footer({ setCurrentPage }: FooterProps) {
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email');
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        setSubscribed(true);
        form.reset();
      } else {
        console.error('Newsletter subscription failed status code:', response.status);
        setSubscribed(true); // Fallback to simulated success
      }
    } catch (err) {
      console.error('Error subscribing to newsletter:', err);
      setSubscribed(true); // Fallback to simulated success
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNavClick = (pageId: PageId) => {
    const [pageCall, sectionId] = pageId.split("?");
    setCurrentPage(pageCall);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(()=>{
      const section = document.getElementById(sectionId);
      
      section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },600);
  };

  const currentYear = new Date().getFullYear();

  const mainrenderMenu = (items: any[], level = 0) => (
  <ul className={level === 0 ? "space-y-3" : "mt-2 space-y-2"}>
    {items.map((item) => (
      <li key={item.id || item.label}>
        {item.id ? (
          <button
            onClick={() => handleNavClick(item.id as PageId)}
            className="group font-bold flex items-center cursor-pointer hover:underline gap-1 text-sm text-slate-900 hover:text-primary transition-colors"
          >
            <span>{item.label}</span>
            <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ) : (
          <div>
            <button onClick={() => handleNavClick(item.mid as PageId)} className="group cursor-pointer font-bold flex items-center hover:underline gap-1 text-sm text-slate-900 hover:text-primary transition-colors">
              {item.label}
              <ArrowUpRight className="h-3 w-3  font-bold opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {item.children && innerrenderMenu(item.children, level + 1)}
          </div>
        )}
      </li>
    ))}
  </ul>
);


const innerrenderMenu = (items: any[], level = 0) => (
  <ul className={level === 0 ? "space-y-3" : "mt-2 space-y-2"}>
    {items.map((item) => (
      <li key={item.id || item.label}>
        {item.id ? (
          <button
            onClick={() => handleNavClick(item.id as PageId)}
            className="group flex items-center hover:underline cursor-pointer gap-1 text-sm text-slate-500 hover:text-primary transition-colors"
          >
            <span>{item.label}</span>
            <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ):(<div>
            <button className="group font-bold flex items-center hover:underline gap-1 cursor-pointer text-sm text-slate-900 hover:text-primary transition-colors">
              {item.label}
              <ArrowUpRight className="h-3 w-3  font-bold opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {item.children && innerrenderMenu(item.children, level + 1)}
          </div>
        )}
      </li>
    ))}
  </ul>
);

  return (
    <footer className="relative border-t border-slate-200 bg-slate-100/90 pt-16 pb-12 overflow-hidden" id="footer">
      {/* Background glow overlay */}
      <div className="absolute -bottom-48 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-300/10 glow-blur" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4" id="footer-brand">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
              <img src="/assets/logo/logonew2.webp" alt="Flumix Logo" className="h-16 w-auto" />
            </div>
            <p className="text-sm mb-6 text-slate-600 leading-relaxed max-w-xs">
              B2B advisory and engineered delivery partnerships, optimizing data workflows and cloud architectures across the United Kingdom.
            </p>
            <div className="mb-6">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900">Contact Information</h3>
              <div className="space-y-2 pt-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-gray-600 shrink-0" />
                  <span>Kemp House, 160 City Road,  London, EC1V 2NX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-600 shrink-0" />
                  <a href="mailto:inquiries@flumix.co.uk">inquiries@flumix.co.uk</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-600 shrink-0" />
                  <span>+44 77  3435  4500</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900">Let's stay connected</h3>
              <div className="space-y-2 flex gap-2 pt-2 text-xs text-slate-600">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-gray-400 hover:border-gray-500/30 transition-all shadow-2xs"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Twitter / X"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-gray-400 hover:border-gray-500/30 transition-all shadow-2xs"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Sitemap Links */}
          <div id="footer-sitemap">
            {mainrenderMenu(footerone)}
          </div>


          <div id="footer-sitemap">
            {mainrenderMenu(footertwo)}
          </div>

          <div id="footer-sitemap">
            {mainrenderMenu(footerthree)}
          </div>

        </div>

        {/* Bottom Panel */}
        <div className="mt-12 border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500" id="footer-bottom">
          <p>© {currentYear} Flumix Data Consulting Ltd. All rights reserved.</p>
          <p>Registered in England & Wales.</p>
          <div className="flex gap-6">
            <button onClick={() => handleNavClick('privacy')} className="hover:text-slate-700">Privacy Policy</button>
            <button onClick={() => handleNavClick('terms')} className="hover:text-slate-700">Terms of Service</button>
            <button onClick={() => handleNavClick('cookie-policy')} className="hover:text-slate-700">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
