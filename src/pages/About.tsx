import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { SectionHeading, LogoStrip, Badge } from '@/components/ui/section';
import { ReactNode } from 'react';
import { 
  Eye, Target, Handshake, CheckCircle2, 
  Shirt, Briefcase, Gift, Users, Megaphone, 
  Search, PenTool, Rocket, ArrowRight
} from 'lucide-react';

export function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full bg-neutral-50 pr-4 pl-2 py-1.5 border border-neutral-100 mb-8"
          >
            <div className="h-2 w-2 rounded-full bg-brand-orange ml-1" />
            <span className="font-accent text-xs font-bold tracking-widest text-brand-charcoal uppercase">
              Corporate Branding & Engagement Solutions
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-brand-dark leading-[1.1] mb-8"
          >
            We help businesses amplify their brand impact.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-600 font-body leading-relaxed max-w-3xl mx-auto"
          >
            We are a dynamic and innovative marketing solutions provider dedicated to helping businesses amplify their brand impact through high-quality corporate branding and engagement solutions. Our approach is simple — Understand, Design, Execute.
          </motion.p>
        </div>
      </section>

      {/* 2. Company Overview */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading 
                eyebrow="Company Overview"
                title="A partner in your brand's journey."
                description="Promaxify is built on the foundation of delivering excellence. We collaborate closely with our clients to transform their vision into tangible brand touchpoints. From premium merchandise to comprehensive engagement programs, we handle every detail so you can focus on what matters most — growing your business."
                className="mb-0"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {/* Placeholder stats to be confirmed by client */}
              <StatCard value="15+" label="Years Active" />
              <StatCard value="250+" label="Industries Served" />
              <StatCard value="100%" label="Pan-India Delivery" className="sm:col-span-2" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Vision / Mission */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-brand-charcoal text-white p-12 rounded-[2rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700">
                <Eye size={200} />
              </div>
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/20">
                  <Eye className="h-7 w-7 text-brand-orange" />
                </div>
                <h3 className="text-3xl font-sans font-bold mb-6">Our Vision</h3>
                <p className="text-neutral-300 font-body leading-relaxed text-lg">
                  "To become a trusted corporate branding and engagement solutions partner that helps organizations enhance their brand identity and create meaningful experiences through innovative products and programs."
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="bg-brand-orange text-white p-12 rounded-[2rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-12 opacity-10 translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700">
                <Target size={200} />
              </div>
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center mb-8 border border-white/30">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-3xl font-sans font-bold mb-6">Our Mission</h3>
                <p className="text-white/90 font-body leading-relaxed text-lg">
                  "Our mission is to deliver high-quality corporate branding solutions that strengthen relationships, enhance brand visibility, and create memorable experiences for organizations and their stakeholders."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. What We Do */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <SectionHeading 
            align="center"
            eyebrow="What We Do"
            title="Comprehensive Solutions"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard icon={<Shirt />} title="Corporate Apparel & Uniforms" />
            <ServiceCard icon={<Briefcase />} title="Bags & Baggage" />
            <ServiceCard icon={<Gift />} title="Promotional Merchandise" />
            <ServiceCard 
              icon={<Users />} 
              title="Employee Engagement Programs" 
              subtext="Including Corporate Events & Experiences and Incentive Travel (MICE) Programs."
              className="lg:col-span-2"
            />
            <ServiceCard icon={<Megaphone />} title="Influencer Marketing Services" />
          </div>
        </div>
      </section>

      {/* 5. Our Approach */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 text-center">
          <SectionHeading 
            align="center"
            eyebrow="Our Methodology"
            title="Our Approach"
            className="mb-20"
          />

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-neutral-200" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              <ProcessStep 
                icon={<Search />} 
                title="Understand" 
                desc="We start by deeply analyzing your brand identity, audience, and campaign objectives."
                delay={0}
              />
              <ProcessStep 
                icon={<PenTool />} 
                title="Design" 
                desc="Creating custom, tailored solutions and visual concepts that align with your goals."
                delay={0.2}
              />
              <ProcessStep 
                icon={<Rocket />} 
                title="Execute" 
                desc="Flawless production, quality assurance, and timely delivery of the final product."
                delay={0.4}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Organizations Choose Us */}
      <section className="py-24 bg-brand-charcoal text-white relative">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-8">
                Why Organizations Choose <span className="text-brand-orange">Promaxify</span>
              </h2>
              <p className="text-neutral-400 font-body text-lg leading-relaxed mb-10">
                We don't just supply products; we build partnerships. Our commitment to excellence ensures your brand is always represented at its best.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                "Customized corporate solutions tailored to brand identity.",
                "Premium quality product sourcing.",
                "Creative engagement strategies.",
                "Reliable vendor and manufacturing network.",
                "End-to-end project execution."
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-brand-orange shrink-0" />
                  <span className="font-sans font-medium text-lg text-white">{point}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Partner Network (PPP) */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-orange/5 rounded-[2rem] border border-brand-orange/10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left"
          >
            <div className="max-w-2xl">
              <div className="inline-flex h-12 w-12 rounded-xl bg-brand-orange/20 text-brand-orange items-center justify-center mb-6">
                <Handshake className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-sans font-bold text-brand-dark mb-4">Promaxify Partner Network</h2>
              <p className="text-lg text-neutral-600 font-body leading-relaxed">
                We actively collaborate with consultants, agencies, and professionals through our specialized Partner Network. This enables organizations to seamlessly access premium corporate branding and engagement solutions through trusted referrals.
              </p>
            </div>
            <div className="shrink-0">
              <Button variant="primary" size="lg" className="h-14 px-8 text-base shadow-xl shadow-brand-orange/20">
                Become a Partner
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Who We Work With */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-200/50">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 text-center">
          <SectionHeading 
            align="center"
            eyebrow="Our Clients"
            title="Who We Work With"
            className="mb-12"
          />
          
          <div className="flex flex-wrap items-center justify-center gap-4 max-w-5xl mx-auto">
            {[
              "Corporate & Enterprise Teams",
              "HR & People Teams",
              "Marketing & Brand Teams",
              "Event Agencies & Organisers",
              "Hospitality & Healthcare",
              "MICE & Travel Agencies",
              "Retail & E-Commerce",
              "Startups & Institutions",
              "Education Institutions",
              "Government & NGOs",
              "Exhibitions/Conferences & Events"
            ].map((industry, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="px-6 py-3 rounded-full bg-white border border-neutral-200 text-neutral-600 font-medium text-sm hover:border-brand-orange hover:text-brand-orange shadow-sm transition-colors cursor-default"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Associate Companies */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-sans font-bold tracking-tight text-brand-dark mb-6">Associate Companies</h2>
            <p className="text-neutral-600 font-body leading-relaxed">
              Together with our associate companies, we are dedicated to catering to all your diverse requirements through our combined professional skillsets.
            </p>
          </div>
          
          <LogoStrip logos={[
            { name: "PrintCraft Pro", src: "" },
            { name: "DesignSphere", src: "" },
            { name: "LogisticsPlus", src: "" },
            { name: "EventHorizon", src: "" },
          ]} className="opacity-100" />
        </div>
      </section>

      {/* 10. Closing CTA */}
      <section className="py-24 bg-brand-charcoal text-white text-center px-6 border-t border-white/10">
        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-10 max-w-2xl mx-auto">
          Let's Work Together
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg">Become a Partner</Button>
          <Button variant="outline-white" size="lg">Request Proposal</Button>
        </div>
      </section>
    </div>
  );
}

function StatCard({ value, label, className }: { value: string, label: string, className?: string }) {
  return (
    <div className={`bg-white p-8 rounded-[2rem] border border-neutral-100 shadow-sm flex flex-col items-center justify-center text-center ${className || ''}`}>
      <span className="text-4xl md:text-5xl font-sans font-bold text-brand-orange mb-2">{value}</span>
      <span className="font-accent text-sm tracking-widest text-neutral-500 uppercase">{label}</span>
    </div>
  );
}

function ServiceCard({ icon, title, subtext, className }: { icon: ReactNode, title: string, subtext?: string, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`bg-white p-8 rounded-2xl border border-neutral-100 hover:border-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300 group ${className || ''}`}
    >
      <div className="h-12 w-12 rounded-xl bg-neutral-50 text-brand-orange flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h4 className="font-sans font-semibold text-xl text-brand-dark mb-2">{title}</h4>
      {subtext && (
        <p className="text-neutral-500 text-sm leading-relaxed font-body mt-2 border-t border-neutral-100 pt-3">{subtext}</p>
      )}
    </motion.div>
  );
}

function ProcessStep({ icon, title, desc, delay }: { icon: ReactNode, title: string, desc: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center relative z-10"
    >
      <div className="h-24 w-24 rounded-full bg-white border-4 border-brand-orange/20 text-brand-orange flex items-center justify-center mb-6 shadow-xl shadow-brand-orange/5 relative">
        <div className="absolute inset-2 bg-brand-orange/5 rounded-full flex items-center justify-center">
          <div className="scale-150">
            {icon}
          </div>
        </div>
      </div>
      <h4 className="text-2xl font-sans font-bold text-brand-dark mb-3">{title}</h4>
      <p className="text-neutral-500 font-body leading-relaxed max-w-sm">{desc}</p>
    </motion.div>
  );
}
