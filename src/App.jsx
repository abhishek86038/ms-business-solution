import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Accounting from './pages/Accounting';
import Taxation from './pages/Taxation';
import Contact from './pages/Contact';
import OurPeople from './pages/OurPeople';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/accounting" element={<Accounting />} />
            <Route path="/services/taxation" element={<Taxation />} />
            <Route path="/our-people" element={<OurPeople />} />
            <Route path="/leadership" element={<Navigate to="/our-people" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-consultation" element={<Navigate to="/contact" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
