import { Link } from 'react-router-dom';
import { Button } from './button';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export function ConversionWidgets() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 600px)
      if (window.scrollY > 600 && !isDismissed) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  return (
    <>
      {/* Sticky Top Bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="fixed top-0 left-0 right-0 z-50 bg-brand-charcoal text-white border-b border-white/10 shadow-xl"
          >
            <div className="max-w-[1440px] mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-sans font-medium text-sm md:text-base flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
                Ready to elevate your brand's presence?
              </p>
              <div className="flex items-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="sm" className="h-9">
                    Request Proposal <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <button 
                  onClick={() => setIsDismissed(true)}
                  className="text-neutral-400 hover:text-white p-1"
                  aria-label="Dismiss"
                >
                  &times;
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/910000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 h-14 w-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </>
  );
}
