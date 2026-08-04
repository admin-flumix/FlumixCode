import React from 'react';
import { PageId } from '../types';
import { Shield, CheckCircle2, Lock, Mail, Globe, Cookie, HeartHandshake, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface PrivacyPolicyProps {
  setCurrentPage: (page: PageId) => void;
}

export default function PrivacyPolicy({ setCurrentPage }: PrivacyPolicyProps) {
  const lastUpdated = "July 2026";

  return (
    <div className="relative overflow-hidden py-16 sm:py-20 bg-slate-50  text-slate-800 " id="privacy-policy-page">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50  border border-blue-100  text-blue-600  text-xs font-bold uppercase tracking-widest"
          >
            <Shield className="h-3.5 w-3.5 text-blue-500" />
            Privacy & Security
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 "
          >
            Privacy Policy
          </motion.h1>

          <p className="text-xs font-mono text-slate-500 ">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Introduction */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-4 shadow-sm">
          <p className="text-sm sm:text-base text-slate-700  leading-relaxed">
            At <strong>Flumix</strong>, we are committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or engage with our services.
          </p>
          <p className="text-sm text-slate-650  leading-relaxed pt-2 border-t border-slate-100 ">
            We believe that trust is the foundation of every successful partnership. Our approach to data privacy reflects the same principles that guide our consulting services—transparency, security, and accountability.
          </p>
        </div>

        {/* Section 1: Information We Collect */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-6 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">Information We Collect</h2>
          <p className="text-sm text-slate-650 ">We may collect the following types of information:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="p-5 rounded-xl border border-slate-100  bg-slate-50/50 /50 space-y-3">
              <h3 className="font-display text-base font-bold text-slate-900  flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>Personal Information</span>
              </h3>
              <p className="text-xs text-slate-500 ">When you contact us or request our services, we may collect:</p>
              <ul className="space-y-1.5 text-xs text-slate-700 ">
                <li className="flex items-center gap-2">• Full name</li>
                <li className="flex items-center gap-2">• Email address</li>
                <li className="flex items-center gap-2">• Phone number</li>
                <li className="flex items-center gap-2">• Company name</li>
                <li className="flex items-center gap-2">• Job title</li>
                <li className="flex items-start gap-2">• Any information you choose to provide in enquiries or consultation requests</li>
              </ul>
            </div>

            {/* Technical Information */}
            <div className="p-5 rounded-xl border border-slate-100  bg-slate-50/50 /50 space-y-3">
              <h3 className="font-display text-base font-bold text-slate-900  flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                <span>Technical Information</span>
              </h3>
              <p className="text-xs text-slate-500 ">When you browse our website, we may automatically collect:</p>
              <ul className="space-y-1.5 text-xs text-slate-700 ">
                <li className="flex items-center gap-2">• IP address</li>
                <li className="flex items-center gap-2">• Browser type and version</li>
                <li className="flex items-center gap-2">• Device information</li>
                <li className="flex items-center gap-2">• Operating system</li>
                <li className="flex items-center gap-2">• Pages visited</li>
                <li className="flex items-center gap-2">• Date and time of access</li>
                <li className="flex items-center gap-2">• Referral source</li>
                <li className="flex items-center gap-2">• Cookies and similar technologies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: How We Use Your Information */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">How We Use Your Information</h2>
          <p className="text-sm text-slate-650 ">We use your information to:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-650 ">
            {[
              "Respond to enquiries and consultation requests",
              "Deliver our consulting and data services",
              "Improve our website and user experience",
              "Communicate important updates",
              "Analyse website performance",
              "Maintain website security",
              "Meet legal and regulatory obligations"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 p-2 rounded bg-slate-50  border border-slate-100 ">
                <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500  italic pt-2">
            We only collect information that is necessary for these purposes.
          </p>
        </div>

        {/* Section 3: Cookies */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-3 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-slate-900 ">Cookies</h2>
            <button
              onClick={() => setCurrentPage('cookie-policy')}
              className="text-xs font-bold text-blue-600  hover:underline cursor-pointer"
            >
              Read Cookie Policy →
            </button>
          </div>
          <p className="text-sm text-slate-650  leading-relaxed">
            Our website may use cookies and similar technologies to improve functionality, understand website usage, and enhance your browsing experience.
          </p>
          <p className="text-sm text-slate-650  leading-relaxed">
            You can control or disable cookies through your browser settings. Please note that some features of the website may not function correctly if cookies are disabled.
          </p>
        </div>

        {/* Section 4: Data Security */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-3 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">Data Security</h2>
          <p className="text-sm text-slate-650  leading-relaxed font-semibold">
            Protecting your information is a core part of our business.
          </p>
          <p className="text-sm text-slate-650  leading-relaxed">
            We implement appropriate technical and organisational security measures to help safeguard your personal information from unauthorised access, disclosure, alteration, or destruction.
          </p>
          <p className="text-xs text-slate-500  italic pt-1">
            While no online system can guarantee complete security, we continually review and improve our security practices to reduce risk.
          </p>
        </div>

        {/* Section 5: Data Sharing */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">Data Sharing</h2>
          <p className="text-sm font-semibold text-blue-600 ">
            Flumix does not sell, rent, or trade your personal information.
          </p>
          <p className="text-sm text-slate-650 ">We may share information only when necessary:</p>
          <ul className="space-y-2 text-sm text-slate-650 ">
            <li className="flex items-start gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
              <span>With trusted service providers who support our business operations</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
              <span>To comply with legal obligations or regulatory requirements</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
              <span>To protect our legal rights or investigate fraudulent activity</span>
            </li>
          </ul>
          <p className="text-xs text-slate-500  italic pt-1">
            Any third-party service providers are required to protect your information and use it only for authorised purposes.
          </p>
        </div>

        {/* Section 6: Data Retention */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-3 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">Data Retention</h2>
          <p className="text-sm text-slate-650  leading-relaxed">
            We retain personal information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy or to comply with applicable legal, contractual, or regulatory obligations.
          </p>
          <p className="text-sm text-slate-650  leading-relaxed">
            When information is no longer required, it is securely deleted or anonymised.
          </p>
        </div>

        {/* Section 7: Your Rights */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">Your Rights</h2>
          <p className="text-sm text-slate-650 ">
            Depending on your location and applicable privacy laws, you may have the right to:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 ">
            {[
              "Access your personal information",
              "Correct inaccurate information",
              "Request deletion of your data",
              "Restrict or object to processing",
              "Withdraw consent where applicable",
              "Request a copy of your personal information"
            ].map((right, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2.5 rounded bg-slate-50  border border-slate-100 ">
                <FileCheck className="h-4 w-4 text-blue-500 shrink-0" />
                <span>{right}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500  italic pt-2">
            To exercise these rights, please contact us using the details provided below.
          </p>
        </div>

        {/* Section 8 & 9: Third-Party & International Transfers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200  bg-white  p-6 space-y-3 shadow-sm">
            <h2 className="font-display text-lg font-bold text-slate-900 ">Third-Party Services</h2>
            <p className="text-xs sm:text-sm text-slate-650  leading-relaxed">
              Our website may contain links to third-party websites or use third-party services such as analytics or cloud hosting providers. These services operate under their own privacy policies, and Flumix is not responsible for their privacy practices.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200  bg-white  p-6 space-y-3 shadow-sm">
            <h2 className="font-display text-lg font-bold text-slate-900 ">International Data Transfers</h2>
            <p className="text-xs sm:text-sm text-slate-650  leading-relaxed">
              Where necessary, your information may be processed or stored in countries outside your jurisdiction. When this occurs, we take appropriate safeguards to ensure your information remains protected in accordance with applicable data protection laws.
            </p>
          </div>
        </div>

        {/* Section 10: Changes to This Privacy Policy */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-3 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">Changes to This Privacy Policy</h2>
          <p className="text-sm text-slate-650  leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our services, legal obligations, or business practices.
          </p>
          <p className="text-sm text-slate-650  leading-relaxed">
            The latest version will always be published on this page with the updated revision date.
          </p>
        </div>

        {/* Section 11: Contact Us */}
        <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">Contact Us</h2>
          <p className="text-sm text-slate-650  leading-relaxed">
            If you have any questions about this Privacy Policy or how we handle your personal information, please contact us.
          </p>
          <div className="pt-2 space-y-2 text-sm text-slate-700 ">
            <p className="font-bold text-base text-slate-900 ">Flumix Data & AI Ltd</p>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-500 shrink-0" />
              <span>Email: <a href="mailto:info@flumix.co.uk" className="text-blue-600  hover:underline">info@flumix.co.uk</a></span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-blue-500 shrink-0" />
              <span>Website: <a href="https://flumix.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600  hover:underline">www.flumix.co.uk</a></span>
            </div>
          </div>
        </div>

        {/* Our Commitment Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-gray-900 to-slate-500 p-8 text-white shadow-lg space-y-3 relative overflow-hidden">
          <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="h-4 w-4" />
            <span>Our Commitment</span>
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
            &ldquo;At Flumix, data is more than information—it is a valuable business asset. We are committed to handling your personal information with the same care, security, and integrity that we bring to every data platform we design and deliver.&rdquo;
          </p>
        </div>

      </div>
    </div>
  );
}
