'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '@/lib/portfolio-data';
import {
  Code,
  Smartphone,
  Cpu,
  ShoppingBag,
  Database,
  Search,
  ArrowUpRight,
  CheckCircle2,
  Briefcase
} from 'lucide-react';
import { HireMeModal } from '@/components/modals/hire-me-modal';
import { TechIcon } from '@/components/ui/tech-icons';
import { AnimatedHeadline, FadeInView } from '@/components/ui/animated-text';

function ServiceCard({ service, idx, getServiceIcon, handleOpenHire }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <FadeInView
      delay={0.15 + (idx % 3) * 0.1}
      direction="up"
      distance={30}
      className="h-full"
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="group p-7 rounded-3xl bg-neutral-900/80 backdrop-blur-xl border border-neutral-800/90 hover:border-orange-500/50 transition-all flex flex-col justify-between space-y-6 shadow-xl hover:shadow-2xl hover:shadow-orange-950/20 h-full"
      >
        <div className="space-y-4">
          {/* Icon and Service ID */}
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-neutral-950/90 border border-neutral-800 flex items-center justify-center group-hover:border-orange-500/40 group-hover:scale-110 transition-all shadow-md">
              {getServiceIcon(service.iconName)}
            </div>
            <span className="text-xs font-mono text-neutral-400">
              0{idx + 1}
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {service.shortDesc}
            </p>
          </div>

          {/* Highlights Toggle */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-neutral-400 hover:text-orange-400 transition-colors"
            >
              <span>{isExpanded ? 'Hide Deliverables' : 'View Core Deliverables'}</span>
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </motion.div>
            </button>
            
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
              className="overflow-hidden"
            >
              <ul className="space-y-1.5 text-xs text-neutral-300 pt-3">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-neutral-800/80">
          {/* Tech stack logos */}
          <div className="flex flex-wrap gap-1.5">
            {service.technologies.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-950/80 text-neutral-300 text-[11px] font-mono border border-neutral-800 hover:border-orange-500/40 transition-colors"
              >
                <TechIcon name={t} className="w-3.5 h-3.5" />
                <span>{t}</span>
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => handleOpenHire(service.title)}
            className="w-full flex items-center justify-between text-xs font-semibold text-orange-400 hover:text-orange-300 group-hover:underline pt-1 cursor-pointer"
          >
            <span>Discuss this service</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </motion.div>
    </FadeInView>
  );
}

export function ServicesSection() {
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState();

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-6 h-6 text-orange-500" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-orange-500" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-orange-500" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-orange-500" />;
      case 'Database':
        return <Database className="w-6 h-6 text-orange-500" />;
      case 'Search':
        return <Search className="w-6 h-6 text-orange-500" />;
      default:
        return <Briefcase className="w-6 h-6 text-orange-500" />;
    }
  };

  const handleOpenHire = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setHireModalOpen(true);
  };

  return (
    <section
      id="services"
      aria-label="Services"
      className="py-24 bg-neutral-950/50 backdrop-blur-md border-t border-neutral-800/80 text-neutral-100 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header with Staggered Words */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-800/80">
          <div className="space-y-2 max-w-2xl">
            <FadeInView delay={0.1} direction="up" distance={15}>
              <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-wider">
                Services &amp; Capabilities
              </span>
            </FadeInView>

            <AnimatedHeadline
              text="Full Stack Engineering & Product Delivery"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
              tag="h2"
              delay={0.15}
            />

            <FadeInView delay={0.3} direction="up" distance={15}>
              <p className="text-base text-neutral-300">
                End-to-end software development and search engine optimization tailored for startups, businesses, and entrepreneurs.
              </p>
            </FadeInView>
          </div>

          <FadeInView delay={0.4} direction="up" distance={15}>
            <button
              type="button"
              onClick={() => handleOpenHire()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs transition-colors self-start md:self-auto shadow-md shadow-orange-950/40 cursor-pointer"
            >
              <span>Request Custom Proposal</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </FadeInView>
        </div>

        {/* Services Grid with Cascading Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              idx={idx} 
              getServiceIcon={getServiceIcon} 
              handleOpenHire={handleOpenHire} 
            />
          ))}
        </div>
      </div>

      <HireMeModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        initialService={selectedService}
      />
    </section>
  );
}
