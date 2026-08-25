import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col font-body text-brand-dark bg-neutral-50 selection:bg-brand-orange/20 selection:text-brand-dark">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
