import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Services from './components/Sections/Services';
import Fees from './components/Sections/Fees';
import Schedule from './components/Sections/Schedule';
import Staff from './components/Sections/Staff';
import Flow from './components/Sections/Flow';
import Access from './components/Sections/Access';
import Contact from './components/Sections/Contact';
import Philosophy from './components/Sections/Philosophy';
import StickyCallButton from './components/UI/StickyCallButton';
import PageTransition from './components/UI/PageTransition';

import Features from './components/Sections/Features';
import NewsSection from './components/Sections/NewsSection';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <main className="flex-grow">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><div className="bg-white/80"><Hero /><Features /><NewsSection /></div></PageTransition>} />
          <Route path="/philosophy" element={<PageTransition><Philosophy /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/fees" element={<PageTransition><Fees /></PageTransition>} />
          <Route path="/schedule" element={<PageTransition><Schedule /></PageTransition>} />
          <Route path="/staff" element={<PageTransition><Staff /></PageTransition>} />
          <Route path="/flow" element={<PageTransition><Flow /></PageTransition>} />
          <Route path="/access" element={<PageTransition><Access /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col pt-32">
        <Header />
        <AnimatedRoutes />
        <Footer />
        <StickyCallButton />
      </div>
    </Router>
  );
}

export default App;
