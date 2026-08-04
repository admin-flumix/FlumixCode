import React from 'react';
import { PageId } from '../types';
import { FileText, CheckCircle2, ShieldAlert, Mail, Globe, Lock, AlertCircle, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

interface TermsOfServiceProps {
  setCurrentPage: (page: PageId) => void;
}

export default function TermsOfService({ setCurrentPage }: TermsOfServiceProps) {
  const lastUpdated = "July 2026";

  return (
    <div className="relative overflow-hidden py-16 sm:py-20 bg-slate-50  text-slate-800 " id="terms-of-service-page">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50  border border-blue-100  text-blue-600  text-xs font-bold uppercase tracking-widest"
          >
            <FileText className="h-3.5 w-3.5 text-blue-500" />
            Legal Terms
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 "
          >
            Terms of Service
          </motion.h1>

          <p className="text-xs font-mono text-slate-500 ">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Welcome Intro */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-3 shadow-sm">
          <p className="text-sm sm:text-base text-slate-700  leading-relaxed">
            Welcome to <strong>Flumix</strong>. These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of our website and services. By accessing our website or engaging with our services, you agree to be bound by these Terms.
          </p>
          <p className="text-sm text-slate-650  leading-relaxed pt-2 border-t border-slate-100  text-amber-700 dark:text-amber-400 font-medium">
            If you do not agree with these Terms, please do not use our website or services.
          </p>
        </div>

        {/* About Flumix */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-3 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">About Flumix</h2>
          <p className="text-sm text-slate-650  leading-relaxed">
            Flumix is a specialist data consultancy providing modern data platform solutions, cloud data engineering, business intelligence, analytics, AI readiness, and related consulting services.
          </p>
        </div>

        {/* Use of Our Website */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">Use of Our Website</h2>
          <p className="text-sm text-slate-650 ">
            You agree to use our website only for lawful purposes and in a manner that does not:
          </p>
          <ul className="space-y-2.5 text-sm text-slate-650 ">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
              <span>Violate any applicable laws or regulations</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
              <span>Infringe the rights of others</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
              <span>Interfere with the security or operation of the website</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
              <span>Introduce malicious software, viruses, or harmful code</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
              <span>Attempt to gain unauthorised access to our systems or data</span>
            </li>
          </ul>
          <p className="text-xs text-slate-500  italic pt-2">
            We reserve the right to suspend or restrict access where misuse is identified.
          </p>
        </div>

        {/* Consultancy Services */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-3 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">Consultancy Services</h2>
          <p className="text-sm text-slate-650  leading-relaxed">
            Information provided on this website is intended for general informational purposes only and does not constitute professional, legal, financial, or technical advice.
          </p>
          <p className="text-sm text-slate-650  leading-relaxed">
            Any consultancy engagement, project scope, pricing, timelines, and deliverables will be agreed separately in a written proposal, quotation, or service agreement.
          </p>
        </div>

        {/* Intellectual Property */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">Intellectual Property</h2>
          <p className="text-sm text-slate-650 ">
            Unless otherwise stated, all content on this website, including but not limited to:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-700 ">
            {["Text", "Graphics", "Logos", "Icons", "Images", "Documents", "Branding", "Website design", "Software and code"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded bg-slate-50  border border-slate-100  font-semibold">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-650  leading-relaxed pt-2">
            is the property of Flumix or its licensors and is protected by applicable intellectual property laws.
          </p>
          <p className="text-xs text-slate-500  italic">
            You may not reproduce, distribute, modify, publish, or commercially exploit any content without prior written permission.
          </p>
        </div>

        {/* Client Content */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-3 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">Client Content</h2>
          <p className="text-sm text-slate-650  leading-relaxed">
            Any information, documents, datasets, or materials provided by clients remain the property of the respective client.
          </p>
          <p className="text-sm text-slate-650  leading-relaxed">
            Flumix treats all client information as confidential and only uses it for the purpose of delivering agreed services, unless otherwise required by law.
          </p>
        </div>

        {/* Confidentiality */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">Confidentiality</h2>
          <p className="text-sm text-slate-650  leading-relaxed">
            Both Flumix and its clients agree to protect confidential information shared during projects. Confidential information will not be disclosed to third parties except:
          </p>
          <ul className="space-y-2 text-sm text-slate-650 ">
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
              <span>With prior written consent</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
              <span>Where required by law</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
              <span>Where necessary to deliver agreed services through authorised partners or subcontractors</span>
            </li>
          </ul>
        </div>

        {/* Third-Party Services */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-3 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">Third-Party Services</h2>
          <p className="text-sm text-slate-650  leading-relaxed">
            Our website or services may integrate with or link to third-party platforms, cloud providers, or software services.
          </p>
          <p className="text-sm text-slate-650  leading-relaxed">
            Flumix is not responsible for the availability, content, or policies of third-party services. Use of such services is subject to their own terms and conditions.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">Limitation of Liability</h2>
          <p className="text-sm text-slate-650  leading-relaxed">
            To the maximum extent permitted by applicable law, Flumix shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-650 ">
            {["Use of our website", "Business interruption", "Loss of profits", "Loss of data", "Loss of business opportunities", "Reliance on website content"].map((item, i) => (
              <li key={i} className="flex items-center gap-2 p-2 rounded bg-slate-50  border border-slate-100 ">
                <AlertCircle className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500  italic pt-1">
            Our total liability relating to any consultancy engagement will be governed by the relevant service agreement.
          </p>
        </div>

        {/* Service Availability & Accuracy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200  bg-white  p-6 space-y-3 shadow-sm">
            <h2 className="font-display text-lg font-bold text-slate-900 ">Service Availability</h2>
            <p className="text-xs sm:text-sm text-slate-650  leading-relaxed">
              We aim to maintain a reliable and secure website but do not guarantee uninterrupted availability. We may update, modify, suspend, or discontinue any part of the website or services without prior notice.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200  bg-white  p-6 space-y-3 shadow-sm">
            <h2 className="font-display text-lg font-bold text-slate-900 ">Accuracy of Information</h2>
            <p className="text-xs sm:text-sm text-slate-650  leading-relaxed">
              We strive to ensure that information on our website is accurate and up to date. However, we do not guarantee that all information is complete, current, or free from errors. Website content may be updated without notice.
            </p>
          </div>
        </div>

        {/* Data Protection & Termination */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200  bg-white  p-6 space-y-3 shadow-sm">
            <h2 className="font-display text-lg font-bold text-slate-900 ">Data Protection</h2>
            <p className="text-xs sm:text-sm text-slate-650  leading-relaxed">
              Your use of our website is also governed by our Privacy Policy, which explains how we collect, process, and protect your personal information.
            </p>
            <button
              onClick={() => setCurrentPage('privacy')}
              className="text-xs font-bold text-blue-600  hover:underline pt-1 inline-block cursor-pointer"
            >
              View Privacy Policy →
            </button>
          </div>

          <div className="rounded-2xl border border-slate-200  bg-white  p-6 space-y-3 shadow-sm">
            <h2 className="font-display text-lg font-bold text-slate-900 ">Termination</h2>
            <p className="text-xs sm:text-sm text-slate-650  leading-relaxed">
              We reserve the right to restrict or terminate access to our website or services if these Terms are breached or where continued access could compromise our systems, security, or business operations.
            </p>
          </div>
        </div>

        {/* Governing Law & Changes to These Terms */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="space-y-2">
            <h2 className="font-display text-xl font-bold text-slate-900 ">Governing Law</h2>
            <p className="text-sm text-slate-650  leading-relaxed">
              These Terms shall be governed by and interpreted in accordance with the laws of England and Wales, unless otherwise agreed in writing. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </div>
          
          <div className="space-y-2 pt-4 border-t border-slate-100 ">
            <h2 className="font-display text-xl font-bold text-slate-900 ">Changes to These Terms</h2>
            <p className="text-sm text-slate-650  leading-relaxed">
              We may update these Terms from time to time to reflect changes in our services, legal obligations, or business practices. The latest version will always be available on this page with the updated revision date. Continued use of our website after any changes constitutes acceptance of the updated Terms.
            </p>
          </div>
        </div>

        {/* Contact Us */}
        <div className="rounded-2xl border border-blue-200 /50 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30    p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">Contact Us</h2>
          <p className="text-sm text-slate-650  leading-relaxed">
            If you have any questions regarding these Terms of Service, please contact us.
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
            &ldquo;At Flumix, we believe successful partnerships are built on transparency, trust, and delivering measurable business value. These Terms are designed to provide a clear framework for working together while ensuring a secure and professional experience for every client.&rdquo;
          </p>
        </div>

      </div>
    </div>
  );
}
