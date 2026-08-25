import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { SectionHeading, ServiceCard, LogoStrip, Badge } from '@/components/ui/section';
import { Input, Textarea, Select, Checkbox } from '@/components/ui/form';
import { ArrowRight, CheckCircle2, Briefcase, Mail, Building, User } from 'lucide-react';

export function StyleGuide() {
  return (
    <div className="py-32 px-6 lg:px-12 max-w-[1440px] mx-auto space-y-32">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-brand-orange" />
          <span className="font-accent text-sm font-bold tracking-widest text-neutral-500 uppercase">
            Design System Reference
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight max-w-3xl">
          Promaxify Style Guide.
        </h1>
        <p className="text-xl text-neutral-600 font-body max-w-2xl leading-relaxed">
          A premium, confident, and warm design system tailored for corporate branding and merchandise excellence.
        </p>
      </div>

      <section className="space-y-12">
        <h2 className="text-2xl font-sans font-semibold border-b border-neutral-200 pb-4">Brand Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ColorSwatch name="Brand Dark" hex="#333333" className="bg-brand-dark text-white" />
          <ColorSwatch name="Brand Orange" hex="#FB7E06" className="bg-brand-orange text-white" />
          <ColorSwatch name="Brand Charcoal" hex="#404040" className="bg-brand-charcoal text-white" />
          <ColorSwatch name="Brand White" hex="#FFFFFF" className="bg-white text-brand-dark border border-neutral-200" />
        </div>
        
        <h3 className="text-xl font-sans font-medium mt-12 mb-6">Neutral Scale Extrapolation</h3>
        <div className="flex overflow-hidden rounded-xl border border-neutral-200">
          <div className="flex-1 h-20 bg-neutral-50" title="50"></div>
          <div className="flex-1 h-20 bg-neutral-100" title="100"></div>
          <div className="flex-1 h-20 bg-neutral-200" title="200"></div>
          <div className="flex-1 h-20 bg-neutral-300" title="300"></div>
          <div className="flex-1 h-20 bg-neutral-400" title="400"></div>
          <div className="flex-1 h-20 bg-neutral-500" title="500"></div>
          <div className="flex-1 h-20 bg-neutral-600" title="600"></div>
          <div className="flex-1 h-20 bg-neutral-700" title="700"></div>
          <div className="flex-1 h-20 bg-neutral-800" title="800"></div>
          <div className="flex-1 h-20 bg-neutral-900" title="900"></div>
        </div>
      </section>

      <section className="space-y-12">
        <h2 className="text-2xl font-sans font-semibold border-b border-neutral-200 pb-4">Typography</h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <p className="text-sm text-neutral-500 mb-2 font-body">Primary Sans / Headings (Work Sans)</p>
              <h1 className="text-6xl font-sans font-bold">Headline 1</h1>
              <h2 className="text-5xl font-sans font-bold mt-4">Headline 2</h2>
              <h3 className="text-4xl font-sans font-semibold mt-4">Headline 3</h3>
              <h4 className="text-2xl font-sans font-medium mt-4">Headline 4</h4>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <p className="text-sm text-neutral-500 mb-2 font-body">Secondary Sans / Body (Open Sans)</p>
              <p className="text-lg font-body leading-relaxed">
                Large body text for lead paragraphs. We believe in elevating brands through meticulous attention to detail and premium merchandise solutions.
              </p>
              <p className="text-base font-body leading-relaxed mt-4">
                Standard body text. This is how normal paragraphs will look. It's legible, clean, and professional. The font weight is regular, and line height is generous for readability.
              </p>
            </div>
            
            <div className="pt-8">
              <p className="text-sm text-neutral-500 mb-2 font-body">Tertiary / Eyebrow (Montserrat)</p>
              <span className="font-accent text-sm font-bold tracking-widest uppercase text-brand-orange">
                Section Label
              </span>
            </div>

            <div className="pt-8">
              <p className="text-sm text-neutral-500 mb-2 font-body">Accent Script (Candara / Fallback)</p>
              <p className="font-script text-2xl italic text-neutral-600">
                "Excellence is not an act, but a habit."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-12">
        <h2 className="text-2xl font-sans font-semibold border-b border-neutral-200 pb-4">Components & UI</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-sans font-medium mb-4">Buttons</h3>
            <div className="flex flex-wrap gap-6 items-center bg-white p-8 rounded-2xl border border-neutral-100">
              <Button variant="primary" size="lg">Primary Action</Button>
              <Button variant="secondary" size="lg">Secondary Outline</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="link" className="gap-2">Text Link <ArrowRight className="h-4 w-4" /></Button>
            </div>
            <div className="flex flex-wrap gap-6 items-center bg-brand-charcoal p-8 rounded-2xl mt-4">
              <Button variant="primary" size="lg">Primary on Dark</Button>
              <Button variant="outline-white" size="lg">Outline White</Button>
              <Button variant="charcoal">Charcoal</Button>
            </div>
          </div>

          <div className="pt-8">
            <h3 className="text-lg font-sans font-medium mb-4">Section Heading</h3>
            <div className="bg-white p-8 rounded-2xl border border-neutral-100">
              <SectionHeading 
                eyebrow="Capabilities" 
                title={<span>Building stronger <span className="text-brand-orange">connections</span>.</span>} 
                description="We provide comprehensive corporate branding services that leave a lasting impression."
              />
              <div className="h-10" />
              <SectionHeading 
                align="center"
                eyebrow="Our Process" 
                title="Seamless end-to-end execution." 
              />
            </div>
          </div>

          <div className="pt-8">
            <h3 className="text-lg font-sans font-medium mb-4">Cards & Badges</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <ServiceCard 
                icon={<Briefcase className="h-6 w-6" />}
                title="Premium Merchandise"
                description="Curated corporate gifts and apparel that reflect your brand's unique identity."
              />
              <div className="space-y-4">
                <Badge>New Feature</Badge>
                <Badge className="bg-neutral-100 text-neutral-600">Draft</Badge>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h3 className="text-lg font-sans font-medium mb-4">Form Elements</h3>
            <div className="bg-white p-8 rounded-2xl border border-neutral-100 max-w-xl space-y-6">
              <div className="space-y-4">
                <Input placeholder="Enter your full name" icon={<User className="h-5 w-5" />} />
                <Input type="email" placeholder="Email address" icon={<Mail className="h-5 w-5" />} />
                <Input placeholder="Company name" icon={<Building className="h-5 w-5" />} />
                <Select icon={<Briefcase className="h-5 w-5" />} defaultValue="">
                  <option value="" disabled>Select an inquiry type</option>
                  <option value="corporate">Corporate Merchandising</option>
                  <option value="events">Event Gifting</option>
                  <option value="other">Other</option>
                </Select>
                <Textarea placeholder="Tell us about your project..." />
                
                {/* Validation States */}
                <div className="pt-4 border-t border-neutral-100">
                  <p className="text-sm font-medium text-neutral-500 mb-4">Validation States</p>
                  <Input error placeholder="This field has an error" defaultValue="Invalid input" icon={<Mail className="h-5 w-5" />} />
                </div>

                <div className="pt-4">
                  <Checkbox label="I agree to receive communications from Promaxify regarding this inquiry." />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8">
            <h3 className="text-lg font-sans font-medium mb-4">Logo Strip</h3>
            <div className="bg-white py-12 rounded-2xl border border-neutral-100 overflow-hidden">
               <LogoStrip logos={[
                 { name: "TechCorp", src: "" },
                 { name: "GlobalFinance", src: "" },
                 { name: "NexusGrp", src: "" },
                 { name: "VertexInc", src: "" },
               ]} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ColorSwatch({ name, hex, className }: { name: string, hex: string, className: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
      <div className={`h-32 flex items-end p-4 ${className}`}>
        <span className="font-sans font-medium">{name}</span>
      </div>
      <div className="bg-white p-4">
        <code className="text-sm text-neutral-500 font-mono">{hex}</code>
      </div>
    </div>
  );
}
