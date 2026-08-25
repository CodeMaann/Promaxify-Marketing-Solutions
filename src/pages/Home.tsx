import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import { Button } from '@/components/ui/button';
import { SectionHeading, LogoStrip } from '@/components/ui/section';
import { Image } from '@/components/ui/image';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, ChevronRight, ChevronLeft, Shirt, Briefcase, Gift, 
  Printer, Users, Tent, Plane, Megaphone, Layers, Settings, 
  Lightbulb, ShieldCheck, Award, Clock, Leaf, Truck, Quote, Handshake, Star 
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ClientLogoStrip />
      <CoreSolutions />
      <ValueProposition />
      <FeaturedWork />
      <PartnerNetwork />
      <AssociateCompanies />
      <Testimonials />
    </div>
  );
}

// --- SECTIONS ---

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [stats, setStats] = useState({ years: 0, brands: 0, units: 0 });

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const slides = [
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800", // Corporate Branding
    "https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&w=800", // Gifting
    "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800", // Apparel
  ];

  useEffect(() => {
    // Simple count-up animation for stats
    let start = 0;
    const endYears = 15;
    const endBrands = 500;
    const endUnits = 50;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;

    const timer = setInterval(() => {
      start += 1;
      setStats({
        years: Math.min(Math.round((start / steps) * endYears), endYears),
        brands: Math.min(Math.round((start / steps) * endBrands), endBrands),
        units: Math.min(Math.round((start / steps) * endUnits), endUnits),
      });
      if (start >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section className="relative bg-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Background Diamond Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none overflow-hidden">
        <div className="w-[800px] h-[800px] border-[100px] border-brand-charcoal rotate-45 transform -translate-y-1/4" />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left: Text Content */}
        <div className="w-full lg:w-[45%] z-10 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full bg-neutral-50 pr-4 pl-2 py-1.5 border border-neutral-100"
          >
            <div className="h-2 w-2 rounded-full bg-brand-orange ml-1 animate-pulse" />
            <span className="font-accent text-xs font-bold tracking-widest text-brand-charcoal uppercase">
              Premium Corporate Solutions
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-[72px] font-sans font-bold tracking-tight text-brand-dark leading-[1.1]"
          >
            Corporate Branding & <span className="text-gradient-underline">Engagement</span> Solutions
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-600 font-body leading-relaxed max-w-xl"
          >
            Promaxify Marketing Solutions LLP specializes in premium corporate branding. We offer customized promotional merchandise, tailored corporate gifting, apparel, event collateral, and engagement-driven programs.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link to="/services">
              <Button variant="primary" size="lg" className="gap-2">
                Explore Solutions <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Request Proposal
              </Button>
            </Link>
          </motion.div>

          {/* Trust Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6 md:gap-10 pt-8 mt-8 border-t border-neutral-100"
          >
            <div>
              <p className="font-sans font-bold text-2xl text-brand-dark">{stats.years}+</p>
              <p className="text-xs font-accent tracking-wider text-neutral-500 uppercase mt-1">Years Experience</p>
            </div>
            <div>
              <p className="font-sans font-bold text-2xl text-brand-dark">{stats.brands}+</p>
              <p className="text-xs font-accent tracking-wider text-neutral-500 uppercase mt-1">Brands Served</p>
            </div>
            <div>
              <p className="font-sans font-bold text-2xl text-brand-dark">{stats.units}k+</p>
              <p className="text-xs font-accent tracking-wider text-neutral-500 uppercase mt-1">Units Delivered</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Layered Parallax Imagery */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[55%] h-[500px] lg:h-[650px] relative perspective-1000"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div 
            style={{ rotateX, rotateY }}
            className="w-full h-full relative preserve-3d"
          >
            {/* Background Card */}
            <div className="absolute inset-0 bg-brand-charcoal rounded-[2.5rem] transform -translate-x-4 translate-y-4 -translate-z-12 opacity-10" />
            
            {/* Main Image Slider */}
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border border-neutral-200/50 bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image src={slides[currentSlide]} alt="Corporate Branding Solution" className="w-full h-full rounded-none border-none shadow-none" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Floating Element 1 (Top Right) */}
            <motion.div 
              style={{ x: useTransform(mouseX, [-300, 300], [-15, 15]), y: useTransform(mouseY, [-300, 300], [-15, 15]) }}
              className="absolute -right-6 top-12 md:-right-12 md:top-24 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 w-48 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-medium">Pan-India</p>
                  <p className="text-sm font-bold text-brand-dark">Delivery</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ClientLogoStrip() {
  const placeholders = [
    { name: "Mocktel" }, { name: "NexaTech" }, { name: "Inventis" }, 
    { name: "GlobalWorks" }, { name: "Unisoft" }, { name: "Zenith" }
  ];

  return (
    <section className="py-12 bg-neutral-50 border-y border-neutral-200/50 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 mb-6">
        <p className="text-center font-accent text-sm font-bold tracking-widest text-neutral-400 uppercase">
          Trusted by teams at
        </p>
      </div>
      <LogoStrip logos={placeholders} />
    </section>
  );
}

function CoreSolutions() {
  const solutions = [
    { icon: <Shirt />, name: "Customized Apparel", href: "/services/corporate", img: "https://images.unsplash.com/photo-1529369623266-f5264b696110?auto=format&fit=crop&q=80" },
    { icon: <Briefcase />, name: "Bags & Baggage", href: "/services/corporate", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80" },
    { icon: <Gift />, name: "Promotional Merchandise", href: "/services/corporate", img: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=80" },
    { icon: <Printer />, name: "Custom Printing", href: "/services/corporate", img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80" },
    { icon: <Users />, name: "Employee Engagement", href: "/services/engagement", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" },
    { icon: <Tent />, name: "Events & Exhibition", href: "/services/engagement", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80" },
    { icon: <Plane />, name: "Incentive Travel (MICE)", href: "/services/engagement", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80" },
    { icon: <Megaphone />, name: "Influencer Marketing", href: "/services/engagement", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionHeading 
          align="center"
          eyebrow="Core Capabilities"
          title="Comprehensive Corporate Solutions"
          description="Everything your brand needs to make a tangible impact, all under one roof."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {solutions.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={item.href} className="group block h-64 rounded-2xl overflow-hidden hover-border-slide relative cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
                <Image src={item.img} alt={item.name} className="absolute inset-0 w-full h-full rounded-none border-none shadow-none transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-black/90 transition-colors duration-300" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-sm mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-sans font-semibold text-lg text-white mb-1">{item.name}</h3>
                  <div className="flex items-center text-sm font-medium text-brand-orange opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Learn more <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueProposition() {
  const values = [
    { icon: <Layers />, title: "End-to-End Solutions", text: "From concept to delivery, multiple branding requirements handled under one roof." },
    { icon: <Settings />, title: "Customization", text: "Products tailored to the brand, campaign, audience, occasion and budget." },
    { icon: <Lightbulb />, title: "Creative & Practical", text: "Branding that connects with people while keeping products functional and memorable." },
    { icon: <ShieldCheck />, title: "Quality You Can Rely On", text: "Carefully selected materials, production and finishing for lasting impact." },
    { icon: <Award />, title: "Premium Quality", text: "Professional merchandise and print finishes designed to represent brands well." },
    { icon: <Clock />, title: "Timely Delivery", text: "Reliable execution for planned campaigns, employee initiatives and event deadlines." },
    { icon: <Leaf />, title: "Sustainable Choices", text: "Eco-friendly products, responsible materials and greener packaging options." },
    { icon: <Truck />, title: "Bulk & Pan-India", text: "Solutions suited to large-scale orders and multi-location requirements." },
  ];

  return (
    <section className="py-24 bg-radial-mesh text-white relative overflow-hidden">
      <div className="bg-noise" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 relative z-10">
        <SectionHeading 
          eyebrow="Why Promaxify"
          title={<span className="text-white">The standard for <span className="text-brand-orange">excellence</span>.</span>}
          description="We blend creative strategy with meticulous execution to deliver results that exceed expectations."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card p-8 rounded-2xl hover-border-slide relative group overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-5xl font-accent font-bold text-white/5 group-hover:text-white/10 transition-colors">
                {(i + 1).toString().padStart(2, '0')}
              </div>
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-brand-orange border border-white/10 mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                {val.icon}
              </div>
              <h4 className="font-sans font-semibold text-lg text-white mb-2">{val.title}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">{val.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedWork() {
  const cards = [
    { title: "Employee Welcome Kits", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80", className: "md:col-span-2 md:row-span-2" },
    { title: "Festive Gifting Campaigns", img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80", className: "md:col-span-2 md:row-span-1" },
    { title: "Dealer Incentive Programs", img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80", className: "md:col-span-1 md:row-span-1" },
    { title: "Corporate Retreats", img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80", className: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <SectionHeading 
            eyebrow="Featured Work"
            title="Insights & Executions"
            className="mb-0"
          />
          <Button variant="outline" className="hidden md:inline-flex">View All Insights</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-[800px] md:h-[600px]">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn("group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow", card.className)}
            >
              <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-end justify-between translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-sans font-semibold text-2xl text-white max-w-[80%] leading-tight">
                    {card.title}
                  </h3>
                  <div className="h-10 w-10 rounded-full bg-brand-orange text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 scale-50 group-hover:scale-100">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full">View All Insights</Button>
        </div>
      </div>
    </section>
  );
}

function PartnerNetwork() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto h-24 w-24 rounded-3xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-8"
        >
          <Handshake className="h-12 w-12" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-brand-dark mb-6"
        >
          Partner Network (PPP)
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-neutral-600 font-body leading-relaxed mb-10"
        >
          We collaborate with consultants, agencies, and professionals through our Partner Network, enabling organizations to access corporate branding and engagement solutions through trusted referrals.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button variant="primary" size="lg">Become a Partner</Button>
        </motion.div>
      </div>
    </section>
  );
}

function AssociateCompanies() {
  const associates = [
    { name: "PrintCraft Pro", src: "" },
    { name: "DesignSphere", src: "" },
    { name: "LogisticsPlus", src: "" },
    { name: "EventHorizon", src: "" },
  ];

  return (
    <section className="py-24 bg-neutral-50 border-t border-neutral-200/50">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-sans font-bold tracking-tight text-brand-dark mb-6">Associate Companies</h2>
          <p className="text-neutral-600 font-body leading-relaxed">
            Yes! We are equally committed to serve your requirements by our professional skillsets — together with our associate companies we are dedicated to cater to all your diverse requirements. You may visit the respective website for more details.
          </p>
        </div>
        
        <LogoStrip logos={associates} className="opacity-100" />
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { 
      quote: "Promaxify completely transformed our end-of-year gifting. The quality and attention to detail were unmatched.", 
      name: "Sarah Jenkins", 
      title: "HR Director", 
      company: "TechCorp Global",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    { 
      quote: "Their end-to-end event merchandise solution took a massive load off our team. Everything was delivered on time and looked incredibly premium.", 
      name: "David Chen", 
      title: "VP of Marketing", 
      company: "NexaTech",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    { 
      quote: "We've worked with many vendors, but Promaxify's creative approach to our dealer incentive program yielded the highest engagement we've ever seen.", 
      name: "Anita Sharma", 
      title: "Channel Head", 
      company: "Inventis India",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-[0.02] pointer-events-none text-brand-dark">
        <Quote size={800} />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 relative z-10">
        
        {/* Featured Case Study Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 bg-brand-charcoal text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row relative"
        >
          <div className="w-full lg:w-1/2 relative h-64 lg:h-auto">
            <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" alt="Case Study" className="absolute inset-0 w-full h-full rounded-none border-none shadow-none" />
          </div>
          <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative bg-radial-mesh">
             <div className="bg-noise" />
             <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-brand-orange/20 text-brand-orange rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-brand-orange/30">Featured Case Study</span>
              <h3 className="text-3xl md:text-4xl font-sans font-bold mb-4">Scaling Welcome Kits for TechCorp Global</h3>
              <p className="text-neutral-300 font-body text-lg mb-8 italic">"Delivered 3,000 premium welcome kits across 12 cities in just 3 weeks."</p>
              <Link to="/insights" className="inline-flex items-center text-brand-orange font-semibold hover:text-orange-400 transition-colors">
                Read the full story <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
             </div>
          </div>
        </motion.div>

        <SectionHeading 
          align="center"
          eyebrow="Client Testimonials"
          title="What our partners say."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2rem] border border-neutral-100 relative group shadow-md hover:shadow-2xl hover:border-brand-orange/30 transition-all duration-500"
            >
              <Quote className="h-16 w-16 text-neutral-100 absolute top-6 right-6 rotate-180 group-hover:text-brand-orange/10 transition-colors" />
              <div className="mb-8 relative z-10">
                {/* 5-star rating */}
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="w-5 h-5 text-brand-orange fill-current" />
                  ))}
                </div>
                <p className="text-brand-charcoal text-lg leading-relaxed font-body italic">
                  "{test.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
                <Image src={test.img} alt={test.name} className="h-14 w-14 rounded-full border-2 border-white shadow-sm object-cover" />
                <div>
                  <h4 className="font-sans font-semibold text-brand-dark">{test.name}</h4>
                  <p className="text-sm text-neutral-500">{test.title}, {test.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
