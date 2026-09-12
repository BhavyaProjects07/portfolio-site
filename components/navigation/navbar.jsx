'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { HireMeModal } from '@/components/modals/hire-me-modal';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', path: '/' },
    { name: 'Services', href: '#services', path: '/services' },
    { name: 'About me', href: '#about', path: '/about' },
    { name: 'Portfolio', href: '#portfolio', path: '/projects' },
    { name: 'Contact me', href: '#contact', path: '/contact' },
  ];

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/85 backdrop-blur-xl border-b border-neutral-800/80 py-3 shadow-2xl shadow-black/40'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            id="nav-logo"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-xl sm:text-2xl font-black tracking-wider text-orange-500 uppercase"
            >
              LOGO
            </motion.span>
          </Link>

          {/* Center Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-3.5 lg:gap-8 shrink-0"
          >
            {navItems.map((item, idx) => {
              const isHome = idx === 0;
              const linkHref = pathname === '/' ? item.href : item.path;

              return (
                <Link
                  key={item.name}
                  href={linkHref}
                  id={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="relative group py-1"
                >
                  <span
                    className={`text-xs lg:text-sm font-medium transition-colors whitespace-nowrap ${
                      isHome
                        ? 'text-orange-400 font-semibold'
                        : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </span>
                  {/* Subtle active / hover animated bar */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ${
                      isHome ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right: Hire Me CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <motion.button
              type="button"
              id="nav-hire-button"
              onClick={() => setHireModalOpen(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-4 lg:px-6 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs lg:text-sm transition-colors shadow-lg shadow-orange-950/40 cursor-pointer whitespace-nowrap"
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setHireModalOpen(true)}
              className="px-3.5 py-1.5 rounded-lg bg-orange-500 text-white text-xs font-semibold"
            >
              Hire Me
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden px-4 pt-3 pb-5 bg-neutral-950/95 border-b border-neutral-800 backdrop-blur-xl space-y-2"
          >
            {navItems.map((item, idx) => {
              const isHome = idx === 0;
              const linkHref = pathname === '/' ? item.href : item.path;

              return (
                <Link
                  key={item.name}
                  href={linkHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm ${
                    isHome
                      ? 'text-orange-500 font-semibold bg-orange-500/10'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </header>

      {/* Hire Me Interactive Modal */}
      <HireMeModal isOpen={hireModalOpen} onClose={() => setHireModalOpen(false)} />
    </>
  );
}
