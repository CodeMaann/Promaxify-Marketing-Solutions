import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { 
    name: 'Services', 
    path: '/services',
    dropdown: [
      { name: 'Corporate Solutions', path: '/services/corporate', items: ['Customized Apparel', 'Bags & Baggage', 'Promotional Merchandise', 'Custom Printing'] },
      { name: 'Engagement Solutions', path: '/services/engagement', items: ['Employee Engagement', 'Events & Experiences', 'Incentive Travel (MICE)', 'Influencer Marketing', 'Digital Marketing', 'Advertisement Solutions'] },
    ]
  },
  { 
    name: 'Insights', 
    path: '/insights',
    dropdown: [
      { name: 'Corporate Programs', path: '/insights/programs', items: ['Welcome Kits', 'Corporate Festive Gifting', 'Events & Exhibition Collateral', 'Promotional Kits', 'Dealer Incentive Programs', 'Corporate Retreat Experiences', 'Rewards & Recognitions'] },
      { name: 'Insights & Resources', path: '/insights/resources', items: ['Corporate Gifting Trends', 'Employee Engagement Ideas', 'Event & Exhibition Collaterals', 'Promotional Merchandise Guides'] },
      { name: 'Partner Network', path: '/insights/network', items: ['Partner Network', 'Partner Benefits', 'Submit a Referral', 'Become a Partner'] },
    ]
  },
  { 
    name: 'About', 
    path: '/about',
    dropdown: [
      { name: 'About Us', path: '/about', items: ['About Promaxify', 'Our Approach', 'Our Network', 'Associate Companies'] }
    ]
  },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // Handle sticky header state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-sm py-0" 
          : "bg-white/80 backdrop-blur-md py-2 border-b border-neutral-200/50"
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 z-50 relative">
          <span className="font-sans text-2xl font-bold tracking-tight text-brand-orange">
            pro
          </span>
          <span className="font-sans text-2xl font-bold tracking-tight text-brand-charcoal">
            maxify
          </span>
          <div className="h-2 w-2 rounded-full bg-brand-orange mt-2 ml-0.5" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="relative group h-20 flex items-center"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to={item.path}
                className={cn(
                  "flex items-center gap-1 font-sans text-sm font-medium transition-colors hover:text-brand-orange py-2",
                  activeDropdown === item.name ? "text-brand-orange" : "text-brand-charcoal"
                )}
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", activeDropdown === item.name && "rotate-180")} />
                )}
              </Link>
              
              {/* Desktop Megamenu */}
              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-1/2 top-[76px] -translate-x-1/2 w-max min-w-[600px] rounded-2xl border border-neutral-100 bg-white shadow-xl shadow-brand-charcoal/5 overflow-hidden"
                    >
                      <div className="grid grid-cols-2 lg:grid-cols-auto-fit gap-8 p-8">
                        {item.dropdown.map((dropGroup) => (
                          <div key={dropGroup.name} className="space-y-4">
                            <Link 
                              to={dropGroup.path} 
                              className="font-sans font-semibold text-brand-dark hover:text-brand-orange flex items-center gap-1"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropGroup.name}
                            </Link>
                            <ul className="space-y-3">
                              {dropGroup.items.map((subItem) => (
                                <li key={subItem}>
                                  <Link 
                                    to={dropGroup.path} 
                                    className="text-sm text-neutral-500 hover:text-brand-orange transition-colors"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {subItem}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="bg-neutral-50 p-6 flex justify-between items-center border-t border-neutral-100">
                        <div>
                          <p className="font-sans font-medium text-brand-dark text-sm">Need a customized solution?</p>
                          <p className="text-neutral-500 text-xs mt-1">Speak directly with our brand specialists.</p>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-2">
                          Contact Sales <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50 relative">
          <Button variant="primary" className="hidden md:inline-flex">
            Request Proposal
          </Button>
          
          <button
            className="lg:hidden text-brand-charcoal hover:text-brand-orange transition-colors p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-charcoal/20 backdrop-blur-sm lg:hidden z-40"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-[85vw] max-w-sm bg-white border-l border-neutral-200 z-50 flex flex-col lg:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-neutral-100">
                {/* Icon Logo for Drawer */}
                <div className="h-10 w-10 rounded-xl border-2 border-brand-orange flex items-center justify-center relative">
                  <div className="absolute inset-2 bg-brand-orange/10 rounded-lg" />
                  <span className="font-sans font-bold text-lg text-brand-orange leading-none relative z-10 -ml-0.5">P</span>
                </div>
                <button
                  className="p-2 min-h-[44px] min-w-[44px] text-neutral-500 hover:text-brand-orange bg-neutral-50 rounded-full flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-6 space-y-6">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-neutral-100 pb-4 last:border-0">
                    {item.dropdown ? (
                      <div>
                        <button 
                          className="flex items-center justify-between w-full min-h-[44px] font-sans text-xl font-medium text-brand-dark py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-md px-2 -mx-2"
                          onClick={() => setOpenMobileAccordion(openMobileAccordion === item.name ? null : item.name)}
                          aria-expanded={openMobileAccordion === item.name}
                        >
                          {item.name}
                          <ChevronDown className={cn("h-5 w-5 transition-transform", openMobileAccordion === item.name && "rotate-180")} />
                        </button>
                        <AnimatePresence>
                          {openMobileAccordion === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 pb-2 space-y-6">
                                {item.dropdown.map(dropGroup => (
                                  <div key={dropGroup.name}>
                                    <Link 
                                      to={dropGroup.path} 
                                      className="font-sans font-semibold text-brand-charcoal text-base mb-3 block"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {dropGroup.name}
                                    </Link>
                                    <div className="space-y-3 pl-3 border-l-2 border-neutral-100">
                                      {dropGroup.items.map(sub => (
                                        <Link 
                                          key={sub}
                                          to={dropGroup.path} 
                                          className="block text-sm text-neutral-500"
                                          onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                          {sub}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className="block font-sans text-xl font-medium text-brand-dark py-2 min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-md px-2 -mx-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="p-6 bg-neutral-50 border-t border-neutral-100">
                <Button variant="primary" className="w-full h-12 text-base">Request Proposal</Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
