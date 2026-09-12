'use client';

import { useState } from 'react';
import { PERSONAL_INFO } from '@/lib/portfolio-data';
import { X, Send, CheckCircle2, Clock } from 'lucide-react';

export function HireMeModal({ isOpen, onClose, initialService }) {
  const [projectType, setProjectType] = useState(initialService || 'Full Stack Web App');
  const [timeline, setTimeline] = useState('1-2 Months');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/bs4434t@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Hire Request: ${projectType} from ${name || 'Client'}`,
          name,
          email,
          projectType,
          timeline,
          message: details,
          _template: 'box'
        })
      });
      
      if (response.ok) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setDetails('');
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

  const projectOptions = [
    'Full Stack Web App',
    'Advanced SEO & Core Web Vitals',
    'Next.js & Frontend Architecture',
    'AI SaaS Platform',
    'E-Commerce Store',
    'Backend & API Development'
  ];

  const timelineOptions = ['Immediate / ASAP', '2 - 4 Weeks', '1 - 2 Months', 'Ongoing'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-neutral-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <h3 className="text-xl font-bold text-white tracking-tight">Hire Bhavya Sharma</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            title="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-white">Proposal Sent Successfully!</h4>
            <p className="text-sm text-neutral-400 max-w-md mx-auto">
              Thank you for reaching out. I have received your proposal and will get back to you within 24 hours to discuss the details.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-semibold transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="pt-5 space-y-5">
            <div>
              <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                Select Project Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {projectOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => setProjectType(opt)}
                    className={`p-2.5 rounded-lg text-xs font-medium text-left transition-all border disabled:opacity-50 cursor-pointer ${
                      projectType === opt
                        ? 'bg-orange-500/20 text-orange-400 border-orange-500'
                        : 'bg-neutral-950/60 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                Expected Timeline
              </label>
              <div className="grid grid-cols-4 gap-2">
                {timelineOptions.map((t) => (
                  <button
                    key={t}
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => setTimeline(t)}
                    className={`p-2 rounded-lg text-xs font-medium text-center transition-all border disabled:opacity-50 cursor-pointer ${
                      timeline === t
                        ? 'bg-orange-500/20 text-orange-400 border-orange-500 font-semibold'
                        : 'bg-neutral-950/60 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  disabled={isSubmitting}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Connor"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500 disabled:opacity-50"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  disabled={isSubmitting}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500 disabled:opacity-50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                Brief Scope / Requirements
              </label>
              <textarea
                rows={3}
                value={details}
                disabled={isSubmitting}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="What are you aiming to build? Tell me about your goals and constraints..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500 disabled:opacity-50"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                <Clock className="w-3.5 h-3.5 text-orange-500" />
                <span>Response within 24 hours</span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Proposal</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
