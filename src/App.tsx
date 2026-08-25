/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { RootLayout } from '@/components/layouts/RootLayout';
import { Home } from '@/pages/Home';
import { StyleGuide } from '@/pages/StyleGuide';
import { Services } from '@/pages/Services';
import { Insights } from '@/pages/Insights';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import { NotFound } from '@/pages/NotFound';
import { AnimatePresence } from 'motion/react';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error React Router v6 Routes doesn't explicitly type key but AnimatePresence requires it */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="style-guide" element={<StyleGuide />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:sectionId" element={<Services />} />
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:sectionId" element={<Insights />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
