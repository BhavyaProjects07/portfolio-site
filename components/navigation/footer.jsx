'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { PERSONAL_INFO, PROJECTS } from '@/lib/portfolio-data';
import { ArrowUpRight, Github, Linkedin, Instagram, Globe } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-neutral-950/60 backdrop-blur-md border-t border-neutral-800/80 text-neutral-400 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-wider text-orange-500 uppercase">
                LOGO
              </span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Portfolio of Bhavya Sharma — Full Stack Developer &amp; Advanced SEO Specialist based in Dehradun, India. Specializing in Next.js, React, Django, and production web applications.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                { href: PERSONAL_INFO.instagram || 'https://instagram.com', icon: Instagram, title: 'Instagram' },
                { href: PERSONAL_INFO.linkedin, icon: Linkedin, title: 'LinkedIn' },
                { href: 'https://smart-tap-system.vercel.app/', icon: Globe, title: 'Web Demos' },
                { href: PERSONAL_INFO.github, icon: Github, title: 'GitHub' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-full bg-neutral-900/90 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-orange-400 hover:border-orange-500 transition-colors shadow-sm"
                    title={item.title}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-orange-500 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-orange-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-orange-400 transition-colors">
                  About me
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-orange-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-orange-400 transition-colors">
                  Contact me
                </Link>
              </li>
            </ul>
          </div>

          {/* Live Projects (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-orange-500 font-semibold">
              Featured Projects
            </h4>
            <ul className="space-y-2.5 text-sm">
              {PROJECTS.map((proj) => (
                <li key={proj.id}>
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 hover:text-orange-400 transition-colors"
                  >
                    <span>{proj.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <p className="text-[11px] text-neutral-500">{proj.tagline}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} Bhavya Sharma. Designed with precision &amp; modern craft.</p>
          <div className="flex items-center gap-6">
            <span>Dehradun, India</span>
            <span>•</span>
            <a href="#home" className="hover:text-neutral-300 transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
