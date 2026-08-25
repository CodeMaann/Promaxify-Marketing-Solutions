import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="h-24 w-24 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-8">
          <FileQuestion className="h-12 w-12" />
        </div>
        <h1 className="text-5xl md:text-7xl font-sans font-bold text-brand-dark mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-sans font-semibold text-neutral-800 mb-6">Page Not Found</h2>
        <p className="text-lg text-neutral-500 font-body mb-10 max-w-md">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg" className="h-14 px-8 text-base">
            Return to Homepage
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
