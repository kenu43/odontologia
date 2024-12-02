import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Marketing } from './components/Marketing';
import { Comparison } from './components/Comparison';
import { About } from './components/About';
import { DashboardPreview } from './components/DashboardPreview';
import { Reviews } from './components/Reviews';
import { AppPromo } from './components/AppPromo';
import { Pricing } from './components/Pricing';
import { QuoteRequest } from './components/QuoteRequest';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Marketing />
      <Comparison />
      <About />
      <DashboardPreview />
      <Reviews />
      <AppPromo />
      <Pricing />
      <QuoteRequest />
      <Footer />
    </div>
  );
}

export default App;