import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Linkedin, Instagram, Twitter } from 'lucide-react'; // Pinterest not in lucide by default, using Twitter as placeholder if needed, actually we can just use simple icons

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-white">
      {/* Top CTA Band */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white max-w-2xl text-center md:text-left">
            Let's Create Something Exceptional
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Button variant="primary" size="lg">Request Proposal</Button>
            <Button variant="outline-white" size="lg">Schedule Consultation</Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-1 bg-white/5 inline-flex p-2 rounded-xl border border-white/10 w-fit">
              <span className="font-sans text-2xl font-bold tracking-tight text-white">
                pro
              </span>
              <span className="font-sans text-2xl font-bold tracking-tight text-neutral-300">
                maxify
              </span>
              <div className="h-2 w-2 rounded-full bg-brand-orange mt-2 ml-0.5" />
            </Link>
            <p className="font-sans font-medium text-white/90">Corporate Branding & Engagement Solutions</p>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Elevating corporate brands through premium merchandise, tailored engagement solutions, and strategic insights for industry leaders.
            </p>
            <address className="not-italic text-sm text-neutral-400 space-y-2 pt-4">
              <p>Promaxify Marketing Solutions LLP</p>
              <p>Corporate Office Address Line 1<br />City, State, ZIP</p>
              <p className="pt-2">
                <a href="mailto:hello@promaxify.com" className="hover:text-brand-orange transition-colors">hello@promaxify.com</a>
              </p>
            </address>
          </div>
          
          {/* Solutions Links */}
          <div className="lg:col-span-2">
            <h4 className="font-sans font-semibold text-lg mb-6 text-white">Solutions</h4>
            <ul className="space-y-4">
              <li><Link to="/services/corporate" className="text-neutral-400 hover:text-brand-orange transition-colors text-sm">Corporate Solutions</Link></li>
              <li><Link to="/services/engagement" className="text-neutral-400 hover:text-brand-orange transition-colors text-sm">Engagement Solutions</Link></li>
              <li><Link to="/services/apparel" className="text-neutral-400 hover:text-brand-orange transition-colors text-sm">Custom Apparel</Link></li>
              <li><Link to="/services/merchandise" className="text-neutral-400 hover:text-brand-orange transition-colors text-sm">Promo Merchandise</Link></li>
            </ul>
          </div>

          {/* Work & Insights Links */}
          <div className="lg:col-span-2">
            <h4 className="font-sans font-semibold text-lg mb-6 text-white">Work & Insights</h4>
            <ul className="space-y-4">
              <li><Link to="/insights/programs" className="text-neutral-400 hover:text-brand-orange transition-colors text-sm">Corporate Programs</Link></li>
              <li><Link to="/insights/resources" className="text-neutral-400 hover:text-brand-orange transition-colors text-sm">Resources & Guides</Link></li>
              <li><Link to="/insights/network" className="text-neutral-400 hover:text-brand-orange transition-colors text-sm">Partner Network</Link></li>
              <li><Link to="/case-studies" className="text-neutral-400 hover:text-brand-orange transition-colors text-sm">Case Studies</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <h4 className="font-sans font-semibold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-neutral-400 hover:text-brand-orange transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-brand-orange transition-colors text-sm">Contact</Link></li>
              <li><Link to="/careers" className="text-neutral-400 hover:text-brand-orange transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="lg:col-span-3">
            <h4 className="font-sans font-semibold text-lg mb-6 text-white">Subscribe for Updates</h4>
            <p className="text-sm text-neutral-400 mb-4">Get the latest trends in corporate branding and merchandise directly to your inbox.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
              />
              <Button variant="primary" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-neutral-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Promaxify Marketing Solutions LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-neutral-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-neutral-500 hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-brand-orange hover:text-white transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-brand-orange hover:text-white transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-brand-orange hover:text-white transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
