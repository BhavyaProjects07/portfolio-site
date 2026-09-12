'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '@/lib/portfolio-data';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Clock
} from 'lucide-react';
import { AnimatedHeadline, FadeInView } from '@/components/ui/animated-text';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Full Stack Web App');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !message) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/bs4434t@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Portfolio Inquiry: ${projectType} from ${name || 'Client'}`,
          name,
          email,
          projectType,
          message,
          _template: 'box'
        })
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Failed to send message. Please try again or use the email directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    'Full Stack Web App',
    'Advanced SEO Optimization',
    'AI SaaS Platform',
    'Next.js & Frontend',
    'E-Commerce Store',
    'Backend & Database'
  ];

  return (
    <section
      id="contact"
      aria-label="Contact Me"
      className="py-24 bg-neutral-950/45 backdrop-blur-md border-t border-neutral-800/80 text-neutral-100 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Quick Copy (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <FadeInView delay={0.1} direction="up" distance={15}>
                <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-wider">
                  Contact me
                </span>
              </FadeInView>

              <AnimatedHeadline
                text="Let's build something great."
                className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
                tag="h2"
                delay={0.15}
              />

              <FadeInView delay={0.3} direction="up" distance={15}>
                <p className="text-sm text-neutral-300 leading-relaxed pt-1">
                  Have a project in mind or looking for a talented Full Stack Developer and SEO Specialist? Send me a message and let&apos;s make it happen.
                </p>
              </FadeInView>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3 pt-2">
              {/* Email */}
              <FadeInView delay={0.35} direction="left" distance={20}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="p-4 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-neutral-800/90 flex items-center justify-between shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-neutral-400 uppercase">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-semibold text-white hover:text-orange-400 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    onClick={handleCopyEmail}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800 transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-orange-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </motion.button>
                </motion.div>
              </FadeInView>

              {/* Phone */}
              <FadeInView delay={0.45} direction="left" distance={20}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="p-4 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-neutral-800/90 flex items-center justify-between shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-neutral-400 uppercase">
                        Phone &amp; WhatsApp
                      </div>
                      <a
                        href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                        className="text-sm font-semibold text-white hover:text-orange-400 transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    onClick={handleCopyPhone}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800 transition-colors cursor-pointer"
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-orange-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </motion.button>
                </motion.div>
              </FadeInView>

              {/* Location */}
              <FadeInView delay={0.55} direction="left" distance={20}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="p-4 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-neutral-800/90 flex items-center gap-3 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400">
                    <MapPin className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-neutral-400 uppercase">
                      Location
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </motion.div>
              </FadeInView>
            </div>

            {/* SLA badge */}
            <FadeInView delay={0.65} direction="up" distance={15}>
              <div className="flex items-center gap-2 p-3.5 rounded-xl bg-neutral-900/60 backdrop-blur-md border border-neutral-800 text-xs text-neutral-300">
                <Clock className="w-4 h-4 text-orange-500 shrink-0" />
                <span>
                  Fast responses guaranteed within 24 hours on all project inquiries.
                </span>
              </div>
            </FadeInView>
          </div>

          {/* Right Column: Sleek Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <FadeInView delay={0.3} direction="right" distance={30}>
              <div className="p-7 sm:p-8 rounded-3xl bg-neutral-900/80 backdrop-blur-xl border border-neutral-800/90 shadow-2xl space-y-6">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Send a Message
                </h3>

                {formSubmitted ? (
                  <div className="py-10 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                    <p className="text-xs text-neutral-300 max-w-sm mx-auto">
                      Thank you for reaching out. I have received your message and will get back to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="mt-2 px-5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                        Service Type
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {projectTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            disabled={isSubmitting}
                            onClick={() => setProjectType(type)}
                            className={`p-2 rounded-lg text-xs font-medium text-center border transition-all cursor-pointer disabled:opacity-50 ${
                              projectType === type
                                ? 'bg-orange-500/20 text-orange-400 border-orange-500 font-semibold shadow-sm'
                                : 'bg-neutral-950/80 text-neutral-400 border-neutral-800 hover:border-neutral-700'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                        Message / Project Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Describe your vision, requirements, or what you'd like to collaborate on..."
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-orange-950/40 hover:shadow-orange-500/25 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
}
