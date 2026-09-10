import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Droplet, Activity, Flame, CloudLightning, ArrowRight, ShieldCheck, Users, Handshake, Home, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle glassmorphism nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FBFBFD] font-sans text-[#1D1D1F] selection:bg-[#D5A05A] selection:text-white">
      
      {/* HEADER - Apple-style Glassmorphism */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-[#0A1628]/80 backdrop-blur-xl border-white/10 py-3 shadow-lg' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <img 
              src="/legacy_alliance_restoration_cutout.png" 
              alt="Legacy Alliance" 
              className="h-10 w-auto object-contain brightness-0 invert" 
              onError={(e) => { 
                e.currentTarget.style.display = 'none'; 
                e.currentTarget.nextElementSibling?.classList.remove('hidden'); 
              }} 
            />
            <div className="hidden text-white font-bold tracking-tight text-xl leading-none">
              LEGACY<br/><span className="text-[#D5A05A] text-sm tracking-widest uppercase">Alliance</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'About', 'Service Areas', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-white/90 hover:text-white hover:opacity-100 transition-opacity">
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="tel:7862526097" className="flex items-center gap-2 bg-[#D5A05A] hover:bg-[#C49048] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-[0_4px_14px_0_rgba(213,160,90,0.39)] hover:shadow-[0_6px_20px_rgba(213,160,90,0.23)] hover:-translate-y-0.5">
              <Phone className="w-4 h-4" />
              Call (786) 252-6097
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0A1628]/95 backdrop-blur-3xl pt-24 px-6 flex flex-col gap-6 md:hidden"
          >
            {['Home', 'Services', 'About', 'Service Areas', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-2xl font-semibold text-white/90 hover:text-white border-b border-white/10 pb-4">
                {item}
              </a>
            ))}
            <a href="tel:7862526097" className="mt-4 flex items-center justify-center gap-2 bg-[#D5A05A] text-white px-6 py-4 rounded-2xl font-bold text-lg">
              <Phone className="w-5 h-5" />
              (786) 252-6097
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0A1628]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000")' }}
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#D5A05A]"></div>
              <span className="text-[#D5A05A] font-semibold tracking-wider text-sm uppercase">24/7 Emergency Dispatch</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Restoring What <br/>
              Matters <span className="text-[#D5A05A]">Most</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed font-light max-w-xl">
              Fast, reliable, and professional restoration services for water, mold, fire and storm damage. We're here when you need us most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:7862526097" className="flex items-center justify-center gap-2 bg-[#D5A05A] hover:bg-[#C49048] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_4px_20px_0_rgba(213,160,90,0.4)] hover:shadow-[0_8px_25px_rgba(213,160,90,0.5)]">
                <Phone className="w-5 h-5" />
                Call (786) 252-6097
              </a>
              <div className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-medium text-lg transition-all">
                <MapPin className="w-5 h-5" />
                Serving Miami & Broward
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID - Apple Style Cards */}
      <section className="py-24 bg-[#F5F5F7] px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {[
              { icon: Droplet, title: 'Water Damage\nRestoration', desc: 'Quick response and expert drying to prevent further damage.' },
              { icon: Activity, title: 'Mold\nRemediation', desc: 'Safe, thorough removal and prevention of mold growth.' },
              { icon: Flame, title: 'Fire & Smoke\nDamage', desc: 'Cleaning, deodorization and full property restoration.' },
              { icon: CloudLightning, title: 'Storm\nDamage', desc: 'From hurricanes to severe weather, we restore your property.' }
            ].map((service, idx) => (
              <div key={idx} className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 cursor-pointer border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-[#F5F5F7] text-[#0A1628] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0A1628] group-hover:text-white transition-all duration-300">
                  <service.icon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1D1D1F] mb-3 whitespace-pre-line tracking-tight leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#86868B] mb-8 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <ArrowRight className="w-5 h-5 text-[#1D1D1F] group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SPLIT EXPERIENCE SECTION */}
      <section className="bg-[#0A1628] flex flex-col lg:flex-row overflow-hidden">
        {/* Left Image */}
        <div className="lg:w-1/2 min-h-[400px] lg:min-h-0 relative bg-gray-900">
          <img 
            src="/801808316_1883972419242614_407356608334256195_n.webp" 
            alt="Hernan Hernandez and Orlando Naranjo" 
            className="absolute inset-0 w-full h-full object-cover object-top"
            onError={(e) => { 
              e.currentTarget.src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000";
              e.currentTarget.classList.remove('object-top');
              e.currentTarget.classList.add('object-center');
            }}
          />
          <div className="absolute inset-0 bg-[#0A1628]/10 mix-blend-multiply"></div>
        </div>
        
        {/* Right Content */}
        <div className="lg:w-1/2 p-12 sm:p-20 lg:p-32 flex flex-col justify-center relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D5A05A] opacity-10 blur-[100px] rounded-full"></div>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#D5A05A] font-bold tracking-widest text-xs uppercase">Experience. Trust. Results.</span>
            <div className="h-px w-12 bg-[#D5A05A]/50"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            11 Years of Battle-Tested Trust
          </h2>
          
          <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
            Over a decade of handling major South Florida hurricane, storm, and plumbing disasters. We provide security, total peace of mind, and a genuine partnership with homeowners.
          </p>
          
          <div className="flex items-center gap-4 text-[#D5A05A]">
            <ShieldCheck className="w-8 h-8" />
            <span className="font-medium text-lg tracking-wide">Established 2013 • Florida Proven</span>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-[#D5A05A] font-bold tracking-widest text-xs uppercase mb-4">Why Choose Us</h4>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] mb-4 tracking-tight">
            We're More Than a Restoration Company
          </h2>
          <p className="text-[#86868B] text-lg mb-16 font-medium">
            We're your neighbors, your partners, and your peace of mind.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            {[
              { icon: ShieldCheck, title: '24/7 Emergency\nResponse' },
              { icon: Users, title: 'Skilled & Certified\nTechnicians' },
              { icon: Handshake, title: 'Direct Insurance\nAssistance' },
              { icon: Home, title: 'Residential &\nCommercial' }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center px-4">
                <feature.icon className="w-10 h-10 text-[#1D1D1F] mb-4 stroke-1" />
                <h4 className="text-[15px] font-bold text-[#1D1D1F] whitespace-pre-line leading-snug">
                  {feature.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BAR */}
      <section className="bg-[#F5F5F7] px-4 pb-12">
        <div className="max-w-5xl mx-auto bg-[#0A1628] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Decorative Background Texture */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
              <span className="text-white font-bold text-xl tracking-tighter">24/7</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-2xl tracking-tight mb-1">ORLANDO NARANJO</h3>
              <p className="text-[#D5A05A] font-medium">100% Free Inspection • 24/7</p>
            </div>
          </div>
          
          <a href="tel:7862526097" className="relative z-10 w-full md:w-auto flex items-center justify-center gap-3 bg-[#D5A05A] hover:bg-[#C49048] text-white px-8 py-5 rounded-full font-bold text-lg transition-all shadow-lg hover:scale-105">
            <Phone className="w-5 h-5" />
            CALL (786) 252-6097
          </a>
        </div>
      </section>

    </div>
  );
}
