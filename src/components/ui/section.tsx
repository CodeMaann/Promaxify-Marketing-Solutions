import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export function SectionHeading({ eyebrow, title, description, align = 'left', className, as: Component = 'h2' }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl mb-16", align === 'center' && "mx-auto text-center", className)}>
      {eyebrow && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className={cn("flex items-center gap-3 mb-4", align === 'center' && "justify-center")}
        >
          <div className="h-2 w-2 rounded-full bg-brand-orange" />
          <span className="font-accent text-sm font-bold tracking-widest text-neutral-500 uppercase">
            {eyebrow}
          </span>
        </motion.div>
      )}
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Component className={cn(
          "font-sans font-bold tracking-tight text-brand-dark mb-6 leading-tight",
          Component === 'h1' ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-5xl"
        )}>
          {title}
        </Component>
      </motion.div>
      
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-neutral-600 font-body leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  linkText?: string;
  href?: string;
  delay?: number;
  className?: string;
}

export function ServiceCard({ icon, title, description, linkText = "Learn more", href = "#", delay = 0, className }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className={cn(
        "relative bg-white p-10 rounded-[2rem] border border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300 group cursor-pointer overflow-hidden",
        className
      )}
    >
      {/* Top Border Reveal */}
      <div className="absolute top-0 left-0 h-1 w-0 bg-brand-orange transition-all duration-300 group-hover:w-full" />
      
      <div className="h-14 w-14 rounded-2xl bg-neutral-50 flex items-center justify-center text-brand-orange mb-8 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-sans font-semibold text-2xl mb-4 text-brand-dark">{title}</h3>
      <p className="text-neutral-600 leading-relaxed mb-8 font-body">
        {description}
      </p>
      <Link to={href} className="flex items-center text-sm font-medium text-brand-charcoal group-hover:text-brand-orange transition-colors">
        {linkText} <ArrowRight className="h-4 w-4 ml-2" />
      </Link>
    </motion.div>
  );
}

interface LogoStripProps {
  logos: { name: string; src?: string }[];
  className?: string;
}

export function LogoStrip({ logos, className }: LogoStripProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-70", className)}>
      {logos.map((logo, i) => (
        <motion.div
          key={logo.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          {/* Placeholder for actual logos, using text for now if src is empty or not image */}
          {logo.src ? (
             <img src={logo.src} alt={logo.name} className="h-8 md:h-12 object-contain" />
          ) : (
             <span className="font-sans font-bold text-2xl text-neutral-400">{logo.name}</span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-medium text-brand-orange font-accent tracking-wider uppercase", className)}>
      {children}
    </span>
  );
}
