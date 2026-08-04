import React, { useState } from 'react';
import { PageId } from '../types';
import { Cookie, Shield, CheckCircle2, Sliders, Info, ChevronRight, Mail, Globe } from 'lucide-react';
import { motion } from 'motion/react';

interface CookiePolicyProps {
  setCurrentPage: (page: PageId) => void;
}

export default function CookiePolicy({ setCurrentPage }: CookiePolicyProps) {
  const lastUpdated = "July 2026";
  const [preferencesSaved, setPreferencesSaved] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [functionalEnabled, setFunctionalEnabled] = useState(true);

  const handleSavePreferences = () => {
    setPreferencesSaved(true);
    setTimeout(() => setPreferencesSaved(false), 4000);
  };

  return (
    <div className="relative overflow-hidden py-16 sm:py-20 bg-slate-50  text-slate-800 " id="cookie-policy-page">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50  border border-blue-100  text-blue-600  text-xs font-bold uppercase tracking-widest"
          >
            <Cookie className="h-3.5 w-3.5 text-blue-500" />
            Cookie Policy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 "
          >
            Cookie Policy
          </motion.h1>

          <p className="text-xs font-mono text-slate-500 ">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Introduction */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-4 shadow-sm">
          <p className="text-sm sm:text-base text-slate-700  leading-relaxed">
            At <strong>Flumix</strong>, we use cookies and similar technologies to ensure our website functions properly, improve your browsing experience, and better understand how visitors interact with our website.
          </p>
          <p className="text-sm text-slate-650  leading-relaxed pt-2 border-t border-slate-100 ">
            This Cookie Policy explains what cookies are, how we use them, and the choices you have regarding their use.
          </p>
        </div>

        {/* Section 1: What Are Cookies? */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-3 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">What Are Cookies?</h2>
          <p className="text-sm text-slate-650  leading-relaxed">
            Cookies are small text files that are stored on your device when you visit a website. They help websites remember information about your visit, making your experience more efficient and improving website performance.
          </p>
          <p className="text-sm text-slate-650  leading-relaxed">
            Cookies do not typically identify you personally but may be associated with information collected through your use of our website.
          </p>
        </div>

        {/* Section 2: How We Use Cookies */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">How We Use Cookies</h2>
          <p className="text-sm text-slate-650 ">We use cookies to:</p>
          <ul className="space-y-2.5 text-sm text-slate-650 ">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
              <span>Ensure the website operates correctly.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
              <span>Remember your preferences where applicable.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
              <span>Analyse website traffic and visitor behaviour.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
              <span>Improve the performance and usability of our website.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
              <span>Protect our website from spam and malicious activity.</span>
            </li>
          </ul>
        </div>

        {/* Section 3: Types of Cookies We Use */}
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-bold text-slate-900 ">Types of Cookies We Use</h2>

          <div className="space-y-4">
            {/* Essential */}
            <div className="rounded-xl border border-slate-200  bg-white  p-6 space-y-2 shadow-3xs">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-bold text-slate-900 ">Essential Cookies</h3>
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded border bg-slate-100 dark:bg-slate-800 text-slate-700  border-slate-200 dark:border-slate-700">
                  Always Active
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-650  leading-relaxed">
                These cookies are necessary for the website to function correctly. They enable core functionality such as page navigation, security features, and contact form submission. These cookies cannot be disabled through our website.
              </p>
            </div>

            {/* Analytics */}
            <div className="rounded-xl border border-slate-200  bg-white  p-6 space-y-3 shadow-3xs">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-bold text-slate-900 ">Analytics Cookies</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:after:border-slate-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <p className="text-xs sm:text-sm text-slate-650  leading-relaxed">
                Analytics cookies help us understand how visitors use our website by collecting anonymous information, including:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600  pt-1">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  <span>Pages visited</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  <span>Time spent on pages</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  <span>Device and browser information</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  <span>Website performance</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500  italic pt-1">
                This information helps us improve our website and the services we provide.
              </p>
            </div>

            {/* Functional */}
            <div className="rounded-xl border border-slate-200  bg-white  p-6 space-y-3 shadow-3xs">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-bold text-slate-900 ">Functional Cookies</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={functionalEnabled}
                    onChange={(e) => setFunctionalEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:after:border-slate-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <p className="text-xs sm:text-sm text-slate-650  leading-relaxed">
                Functional cookies remember certain preferences to enhance your browsing experience, such as language or other website settings where applicable.
              </p>
            </div>

            {/* Security */}
            <div className="rounded-xl border border-slate-200  bg-white  p-6 space-y-2 shadow-3xs">
              <h3 className="font-display text-base font-bold text-slate-900 ">Security Cookies</h3>
              <p className="text-xs sm:text-sm text-slate-650  leading-relaxed">
                Security cookies help detect fraudulent or malicious activity and protect our website from abuse, including spam prevention on enquiry forms.
              </p>
            </div>

            {/* Third-Party */}
            <div className="rounded-xl border border-slate-200  bg-white  p-6 space-y-3 shadow-3xs">
              <h3 className="font-display text-base font-bold text-slate-900 ">Third-Party Cookies</h3>
              <p className="text-xs sm:text-sm text-slate-650  leading-relaxed">
                Our website may use trusted third-party services that place cookies on your device. These may include services for:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 ">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
                  <span>Website analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
                  <span>Spam prevention</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
                  <span>Embedded maps</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
                  <span>Embedded videos</span>
                </li>
                <li className="flex items-center gap-2 sm:col-span-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
                  <span>Website performance monitoring</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500  italic pt-1">
                These providers manage their cookies in accordance with their own privacy and cookie policies.
              </p>
            </div>
          </div>

          {/* Save Preferences Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-blue-100 /50 bg-blue-50/40 dark:bg-blue-950/20 p-5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-900 ">Update Preferences</span>
              <p className="text-[11px] text-slate-500 ">Save your cookie preference settings for this browser session.</p>
            </div>

            <button
              onClick={handleSavePreferences}
              className="w-full sm:w-auto px-6 py-2.5 bg-gray-900 hover:bg-gray-500 text-white rounded-lg text-xs font-bold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Sliders className="h-3.5 w-3.5" />
              <span>Save Settings</span>
            </button>
          </div>

          {preferencesSaved && (
            <div className="p-3 rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-600 text-xs flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>Your cookie preference settings have been successfully updated.</span>
            </div>
          )}
        </div>

        {/* Section 4: Managing Cookies */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">Managing Cookies</h2>
          <p className="text-sm text-slate-650  leading-relaxed">
            Most web browsers allow you to control cookies through their settings. You can:
          </p>
          <ul className="space-y-2 text-sm text-slate-650 ">
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
              <span>View stored cookies</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
              <span>Delete existing cookies</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
              <span>Block all or selected cookies</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
              <span>Receive notifications before cookies are stored</span>
            </li>
          </ul>
          <p className="text-xs text-slate-500  italic pt-2">
            Please note that disabling certain cookies may affect the functionality of some parts of the website.
          </p>
        </div>

        {/* Section 5: Cookie Consent */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-3 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">Cookie Consent</h2>
          <p className="text-sm text-slate-650  leading-relaxed">
            Where required by applicable law, we will ask for your consent before placing non-essential cookies on your device.
          </p>
          <p className="text-sm text-slate-650  leading-relaxed">
            You can change or withdraw your cookie preferences at any time through your browser settings or our cookie consent banner, where available.
          </p>
        </div>

        {/* Section 6: Changes to This Cookie Policy */}
        <div className="rounded-2xl border border-slate-200  bg-white  p-6 sm:p-8 space-y-3 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">Changes to This Cookie Policy</h2>
          <p className="text-sm text-slate-650  leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in our website, technologies, or legal requirements.
          </p>
          <p className="text-sm text-slate-650  leading-relaxed">
            Any updates will be published on this page with the revised “Last Updated” date.
          </p>
        </div>

        {/* Section 7: Contact Us */}
        <div className="rounded-2xl border border-blue-200 /50 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30    p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 ">Contact Us</h2>
          <p className="text-sm text-slate-650  leading-relaxed">
            If you have any questions about this Cookie Policy or our use of cookies, please contact us.
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

      </div>
    </div>
  );
}
