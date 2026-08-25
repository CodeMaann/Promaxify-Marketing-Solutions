import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section';
import { Image } from '@/components/ui/image';
import { useState, useEffect, ReactNode } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Users, Tent, Plane, Megaphone, Laptop, LayoutTemplate } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Services() {
  const [activeSection, setActiveSection] = useState('corporate');
  const location = useLocation();
  const { sectionId } = useParams();

  // Handle deep linking and scrolling
  useEffect(() => {
    setTimeout(() => {
      const targetId = location.hash ? location.hash.substring(1) : sectionId;
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 140; // Offset for header + sticky nav
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  }, [location, sectionId]);

  // Handle scroll spy for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['corporate', 'engagement'];
      let current = sections[0];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            current = section;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Intro */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-[1440px] mx-auto text-center">
        <SectionHeading
          as="h1"
          align="center"
          eyebrow="Services"
          title="Integrated Solutions for Modern Brands"
          description="Promaxify provides integrated corporate branding and engagement solutions designed to enhance brand visibility and strengthen business relationships."
          className="mx-auto max-w-3xl mb-0"
        />
      </section>

      {/* Sticky Sub-nav */}
      <div className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-md border-y border-neutral-200 shadow-sm transition-all">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-center gap-8 h-16">
          <button 
            onClick={() => scrollToSection('corporate')}
            className={cn(
              "text-sm font-sans font-medium h-full border-b-2 transition-colors",
              activeSection === 'corporate' ? "border-brand-orange text-brand-orange" : "border-transparent text-neutral-500 hover:text-brand-dark"
            )}
          >
            Corporate Solutions
          </button>
          <button 
            onClick={() => scrollToSection('engagement')}
            className={cn(
              "text-sm font-sans font-medium h-full border-b-2 transition-colors",
              activeSection === 'engagement' ? "border-brand-orange text-brand-orange" : "border-transparent text-neutral-500 hover:text-brand-dark"
            )}
          >
            Engagement Solutions
          </button>
        </div>
      </div>

      {/* Corporate Solutions */}
      <section id="corporate" className="py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 mb-16">
          <SectionHeading 
            eyebrow="Corporate Solutions"
            title="Tangible brand impact."
            className="mb-0"
          />
        </div>

        <div className="space-y-0">
          <CorporateZigZag 
            id="apparel"
            title="Customized Apparel"
            description="At Promaxify, we help your brand make a lasting impression through customized apparel and promotional merchandise that blend style, comfort, and identity. From corporate uniforms and sports jerseys to promotional t-shirts, hoodies, caps, and sashes, every product is crafted with precision and designed to reflect your brand's personality. Whether it's for a corporate event, trade show, tour, or marketing campaign, our apparel and accessories ensure your team looks cohesive and professional. Beyond clothing, we offer an extensive range of branded merchandise and giveaway items — including lanyards, umbrellas, flags, and other customized promotional products — designed to enhance brand recall and strengthen client relationships. With advanced printing and embroidery technologies, Promaxify ensures superior quality, vibrant finishes, and comfort that lasts."
            image="https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80"
            reverse={false}
          />
          <CorporateZigZag 
            id="bags"
            title="Bags & Baggage"
            description="At Promaxify, we design and deliver premium, functional, and sustainable bags that serve as powerful brand ambassadors wherever they go. Our extensive collection includes everything from paper, jute, cotton, and canvas bags to non-woven, tote, and foldable shopping bags, as well as corporate backpacks, laptop sleeves, duffle and trolley bags — all customizable with your branding. Crafted with care and creativity, our bags combine style, durability, and practicality, making them perfect for events, promotions, gifting, and corporate use."
            image="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80"
            reverse={true}
          />
          <CorporateZigZag 
            id="merchandise"
            title="Promotional Merchandise"
            description="At Promaxify, we specialize in creating innovative promotional collaterals and memorable corporate gifts that help your brand connect, communicate, and captivate. From trophies, mementos, and certificates to ID cards, lanyards, badges, and branded stationery, every product is crafted with purpose. Our curated range of corporate gifting items includes elegant pens, diaries, bottles, mugs, tech accessories, and sustainable gift options, designed to delight your clients, employees, and partners alike."
            image="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80"
            reverse={false}
          />
          <CorporateZigZag 
            id="printing"
            title="Custom Printing"
            description="At Promaxify, we understand that great packaging and print aren't just about presentation — they're about perception. We specialize in Cardboard, Paper, MDF, and Tin packaging along with custom-designed gift boxes that blend functionality with aesthetics. Our state-of-the-art printing infrastructure delivers exceptional color accuracy and clarity across brochures, business cards, catalogues, calendars, invitations, and large-format prints like banners and signage."
            image="https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=80"
            reverse={true}
          />
        </div>
      </section>

      {/* Engagement Solutions */}
      <section id="engagement" className="py-24 bg-neutral-50 border-t border-neutral-200/50">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <SectionHeading 
            eyebrow="Engagement Solutions"
            title="Building connections that last."
            description="Strategic programs designed to motivate teams and captivate audiences."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Content pending - copy to be finalized by client */}
            <EngagementCard icon={<Users />} title="Employee Engagement" description="Tailored programs to boost morale and foster workplace culture." />
            <EngagementCard icon={<Tent />} title="Events & Experiences" description="Conferences, product launches, dealership meets." />
            <EngagementCard icon={<Plane />} title="Incentive Travel (MICE)" description="Curated corporate retreats and reward travel experiences." />
            <EngagementCard icon={<Megaphone />} title="Influencer Marketing" description="Strategic brand partnerships and influencer-driven campaigns." />
            <EngagementCard icon={<Laptop />} title="Digital Marketing" description="Comprehensive digital strategies to amplify your brand presence." />
            <EngagementCard icon={<LayoutTemplate />} title="Advertisement Solutions" description="Targeted advertising solutions across print and digital media." />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-charcoal text-white text-center px-6">
        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-10 max-w-2xl mx-auto">
          Ready to transform your brand's presence?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg">Become a Partner</Button>
          <Button variant="outline-white" size="lg">Request Proposal</Button>
        </div>
      </section>
    </div>
  );
}

function CorporateZigZag({ id, title, description, image, reverse }: { id: string, title: string, description: string, image: string, reverse: boolean }) {
  return (
    <div id={id} className="scroll-mt-[160px] group overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-24 border-t border-neutral-100 first:border-0">
        <div className={cn("flex flex-col lg:flex-row items-center gap-16 lg:gap-24", reverse && "lg:flex-row-reverse")}>
          <div className="w-full lg:w-1/2">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-sans font-bold text-brand-dark mb-6"
            >
              {title}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-neutral-600 font-body leading-relaxed"
            >
              {description}
            </motion.p>
          </div>
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative rounded-[2rem] overflow-hidden aspect-video lg:aspect-[4/3] shadow-lg group-hover:shadow-2xl transition-shadow duration-500"
            >
              <Image src={image} alt={`${title} case study`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-brand-charcoal/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EngagementCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white p-8 rounded-2xl border border-neutral-100 hover:border-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300 group"
    >
      <div className="h-12 w-12 rounded-xl bg-neutral-50 text-brand-orange flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h4 className="font-sans font-semibold text-xl text-brand-dark mb-3">{title}</h4>
      <p className="text-neutral-500 text-sm leading-relaxed font-body">{description}</p>
    </motion.div>
  );
}
