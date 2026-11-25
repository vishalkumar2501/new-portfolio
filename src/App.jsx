import React, { useState } from 'react';
import SmoothScroll from './components/motion/SmoothScroll';
import CustomCursor from './components/motion/CustomCursor';
import LeftRail from './components/rails/LeftRail';
import RightRail from './components/rails/RightRail';
import Navbar from './components/navigation/Navbar';
import Hero from './components/sections/Hero';
import SkillsMarquee from './components/sections/SkillsMarquee';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import ScheduleModal from './components/modals/ScheduleModal';

function App() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenScheduleModal = () => {
    setIsScheduleModalOpen(true);
  };

  const handleCloseScheduleModal = () => {
    setIsScheduleModalOpen(false);
  };

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  return (
    <SmoothScroll>
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Fixed Overlay Navigation & Screen Rails */}
      <Navbar />
      <LeftRail />
      <RightRail />

      {/* Main Content Layout */}
      <main className="relative w-full min-h-screen bg-[#0C0C0C] text-[#EDEDED] font-sans antialiased overflow-x-hidden">
        {/* Central Framed Portfolio Container with Side Animated Lines */}
        <div className="relative max-w-[1100px] mx-auto border-x border-white/[0.08] bg-[#0C0C0C] shadow-[0_0_80px_rgba(0,0,0,0.95)]">
          {/* Left Animated Glowing Beam / Line */}
          <div className="absolute -left-[1px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none z-30">
            <div className="side-beam-glow" />
          </div>

          {/* Right Animated Glowing Beam / Line */}
          <div className="absolute -right-[1px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none z-30">
            <div className="side-beam-glow-delayed" />
          </div>

          {/* Hero Section */}
          <Hero onOpenScheduleModal={handleOpenScheduleModal} />

          {/* Complete Visible Tech Stack */}
          <SkillsMarquee />

          {/* About & Coding Profiles Section */}
          <About />

          {/* Experience & Education Timeline */}
          <Experience />

          {/* Services Section */}
          <Services onSelectService={handleSelectService} />

          {/* Featured Projects (3D Sticky Stacking Cards) */}
          <Projects />

          {/* Contact Section & Giant VISHAL Watermark */}
          <Contact
            selectedService={selectedService}
            onOpenScheduleModal={handleOpenScheduleModal}
          />
        </div>
      </main>

      {/* Interactive Schedule Call Modal */}
      <ScheduleModal
        isOpen={isScheduleModalOpen}
        onClose={handleCloseScheduleModal}
      />
    </SmoothScroll>
  );
}

export default App;
