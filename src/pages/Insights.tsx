import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { SectionHeading, Badge } from '@/components/ui/section';
import { Image } from '@/components/ui/image';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Linkedin, Target, CheckCircle2, Building2, Handshake } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- DATA ---
const FILTER_CATEGORIES = ['All', 'Jerseys', 'Welcome Kits', 'Events', 'Dealer', 'MICE', 'R&R'];

const PROGRAMS_DATA = [
  { id: 1, category: 'Jerseys', title: 'National Corporate Marathon Apparels', excerpt: 'End-to-end design and delivery of 5,000+ breathable athletic jerseys for a pan-India corporate run.', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80' },
  { id: 2, category: 'Jerseys', title: 'Tech League Annual Sports Kit', excerpt: 'Customized team kits including jerseys, track pants, and duffle bags for an inter-departmental sports league.', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80' },
  { id: 3, category: 'Welcome Kits', title: 'Global Tech Day 1 Onboarding Kits', excerpt: 'Curated premium welcome kits delivered directly to remote employees across 12 countries.', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80' },
  { id: 4, category: 'Welcome Kits', title: 'FinBank Executive Welcome Set', excerpt: 'High-end leather accessories and premium tech gadgets packaged in custom magnetic-closure boxes.', image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80' },
  { id: 5, category: 'Events', title: 'CyberSec 2026 Summit Collateral', excerpt: 'Lanyards, eco-friendly tote bags, and branded smart notebooks for 3,000+ international attendees.', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80' },
  { id: 6, category: 'Events', title: 'AutoShow Launch Press Kits', excerpt: 'Exclusive media kits containing bespoke miniature models, metal pens, and digital press release drives.', image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=80' },
  { id: 7, category: 'Dealer', title: 'Pan-India Auto Dealer Rewards', excerpt: 'A comprehensive tier-based reward program delivering customized electronics and home appliances to top dealers.', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80' },
  { id: 8, category: 'Dealer', title: 'FMCG Festive Partner Hampers', excerpt: 'Curated gourmet hampers and branded silver coins distributed to 10,000+ retail partners during Diwali.', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80' },
  { id: 9, category: 'MICE', title: 'Pharma Excellence Retreat - Dubai', excerpt: 'End-to-end travel merchandise including personalized passport holders, luggage tags, and travel adapters.', image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80' },
  { id: 10, category: 'MICE', title: 'Top Performers Bali Getaway', excerpt: 'Tropical welcome kits featuring branded beach towels, sunglasses, and waterproof dry bags.', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80' },
  { id: 11, category: 'R&R', title: 'Annual Excellence Awards Trophies', excerpt: 'Custom-designed crystal and metal trophies reflecting the client\'s core values and brand identity.', image: 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?auto=format&fit=crop&q=80' },
  { id: 12, category: 'R&R', title: 'Quarterly Star Performer Gifts', excerpt: 'A recurring program delivering personalized premium backpacks to top achievers every quarter.', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80' },
];

const CASE_STUDIES = [
  {
    id: 1,
    client: 'FinTech Innovators Ltd.',
    industry: 'Financial Technology',
    objective: 'Standardize remote onboarding experience globally while reducing logistical overhead.',
    solution: 'Designed and deployed a centralized portal for HR to trigger automated shipping of 5-piece premium welcome kits to 15+ countries.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    client: 'Global Motors India',
    industry: 'Automotive',
    objective: 'Boost Q3 sales by incentivizing the top 500 regional dealerships with aspirational rewards.',
    solution: 'Executed a 4-tier customized reward catalog featuring high-end electronics and bespoke brand merchandise, increasing engagement by 42%.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
  },
];

const LINKEDIN_ARTICLES = [
  { id: 1, title: '2026 Corporate Gifting Trends: Sustainability Leads', image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=80' },
  { id: 2, title: 'Employee Engagement Strategies for Hybrid Teams', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80' },
  { id: 3, title: 'Maximizing Brand Recall at International Trade Shows', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80' },
  { id: 4, title: 'The Ultimate Promotional Merchandise ROI Guide', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80' },
];

export function Insights() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredPrograms = activeFilter === 'All' 
    ? PROGRAMS_DATA 
    : PROGRAMS_DATA.filter(p => p.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Intro */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-[1440px] mx-auto text-center">
        <SectionHeading
          as="h1"
          align="center"
          eyebrow="Insights & Work"
          title="Delivering Excellence Across Industries"
          description="Explore how we deliver corporate branding and engagement solutions across industries through products, programs, projects, and insights."
          className="mx-auto max-w-4xl mb-0"
        />
      </section>

      {/* Corporate Programs (Filterable Grid) */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200/50">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <SectionHeading 
            eyebrow="Corporate Programs"
            title="Strategic implementations."
            className="mb-8"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {FILTER_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium font-sans transition-all duration-300",
                  activeFilter === cat 
                    ? "bg-brand-charcoal text-white shadow-md shadow-brand-charcoal/10" 
                    : "bg-white border border-neutral-200 text-neutral-600 hover:border-brand-orange hover:text-brand-orange"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Animated Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {filteredPrograms.map(program => (
                <motion.div
                  key={program.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300 flex flex-col h-full cursor-pointer"
                >
                  <div className="h-56 overflow-hidden relative">
                    <Image src={program.image} alt={program.title} className="w-full h-full transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 backdrop-blur text-brand-dark shadow-sm border border-white/20">{program.category}</Badge>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-sans font-semibold text-xl text-brand-dark mb-3 line-clamp-2">{program.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed font-body mb-6 flex-grow">{program.excerpt}</p>
                    <div className="flex items-center text-sm font-medium text-brand-charcoal group-hover:text-brand-orange transition-colors mt-auto">
                      Read case study <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {filteredPrograms.length === 0 && (
            <div className="text-center py-20 text-neutral-500 font-body">No programs found for this category.</div>
          )}
        </div>
      </section>

      {/* Portfolio & Case Studies */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <SectionHeading 
            eyebrow="Case Studies"
            title="Real challenges. Proven results."
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-neutral-50 rounded-[2rem] overflow-hidden border border-neutral-100 flex flex-col md:flex-row group"
              >
                <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <Image src={study.image} alt={`${study.client} case study overview`} className="w-full h-full transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="w-full md:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="font-sans font-bold text-2xl text-brand-dark mb-6">{study.client}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-neutral-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="block text-xs font-bold tracking-widest text-neutral-400 uppercase font-accent mb-1">Industry</span>
                        <span className="text-brand-dark font-medium text-sm">{study.industry}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-neutral-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="block text-xs font-bold tracking-widest text-neutral-400 uppercase font-accent mb-1">Objective</span>
                        <span className="text-neutral-600 text-sm font-body leading-relaxed">{study.objective}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-orange mt-0.5 shrink-0" />
                      <div>
                        <span className="block text-xs font-bold tracking-widest text-brand-orange uppercase font-accent mb-1">Solution Delivered</span>
                        <span className="text-neutral-600 text-sm font-body leading-relaxed">{study.solution}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights & Resources (LinkedIn Articles) */}
      <section className="py-24 bg-brand-charcoal text-white relative overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 relative z-10">
          <SectionHeading 
            eyebrow="Resources"
            title={<span className="text-white">Industry Insights</span>}
            description="Expert perspectives and guides on corporate branding, engagement, and merchandise trends."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LINKEDIN_ARTICLES.map((article, i) => (
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group block rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <Image src={article.image} alt={article.title} className="w-full h-full transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-3 right-3 bg-[#0A66C2] text-white p-1.5 rounded-md shadow-sm">
                    <Linkedin className="h-4 w-4" fill="currentColor" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-sans font-semibold text-lg leading-snug group-hover:text-brand-orange transition-colors mb-4 line-clamp-3">
                    {article.title}
                  </h4>
                  <div className="flex items-center text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">
                    Read on LinkedIn <ExternalLink className="h-4 w-4 ml-1.5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Network Callout */}
      <section className="py-20 bg-white">
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
              <h2 className="text-3xl font-sans font-bold text-brand-dark mb-4">Partner Network (PPP)</h2>
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

      {/* Final CTA */}
      <section className="py-24 bg-brand-charcoal text-white text-center px-6 border-t border-white/10">
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
