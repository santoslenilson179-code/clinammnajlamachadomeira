import React, { useState } from 'react';
import { defaultConfig, treatmentsData, differentiatorsData, beforeAfterCases, testimonialsData, faqData } from './data/clinicData';
import { ClinicConfig } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { DifferentiatorsSection } from './components/DifferentiatorsSection';
import { ClinicExperience } from './components/ClinicExperience';
import { ReelsCarousel } from './components/ReelsCarousel';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProcessSection } from './components/ProcessSection';
import { CtaFinalSection } from './components/CtaFinalSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BookingModal } from './components/BookingModal';
import { ClinicConfigDrawer } from './components/ClinicConfigDrawer';

export default function App() {
  const [config, setConfig] = useState<ClinicConfig>(defaultConfig);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [configDrawerOpen, setConfigDrawerOpen] = useState(false);
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<string>('avaliacao');

  const handleOpenBookingForTreatment = (treatmentId: string) => {
    setSelectedTreatmentForBooking(treatmentId);
    setBookingOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setSelectedTreatmentForBooking('avaliacao');
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1E293B] font-sans antialiased selection:bg-[#C5A880]/30 selection:text-[#0B192C]">
      {/* Fixed Navigation Bar */}
      <Navbar
        config={config}
        onOpenBooking={handleOpenGeneralBooking}
        onOpenConfig={() => setConfigDrawerOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        {/* 1. Hero Fold */}
        <Hero config={config} onOpenBooking={handleOpenGeneralBooking} />

        {/* 2. Trust Bar */}
        <TrustBar />

        {/* 3. About Dentist */}
        <AboutSection config={config} />

        {/* 5. Differentiators */}
        <DifferentiatorsSection differentiators={differentiatorsData} />

        {/* 6. Clinic Experience / Space */}
        <ClinicExperience config={config} />

        {/* 7. Instagram Reels Carousel */}
        <ReelsCarousel />

        {/* 9. Step-by-Step Process */}
        <ProcessSection />

        {/* 11. Final Conversion CTA */}
        <CtaFinalSection config={config} onOpenBooking={handleOpenGeneralBooking} />
      </main>

      {/* Footer */}
      <Footer config={config} onOpenBooking={handleOpenGeneralBooking} />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppButton config={config} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        config={config}
        treatments={treatmentsData}
        selectedTreatmentId={selectedTreatmentForBooking}
      />

      {/* Personalization Drawer */}
      <ClinicConfigDrawer
        isOpen={configDrawerOpen}
        onClose={() => setConfigDrawerOpen(false)}
        config={config}
        onChangeConfig={setConfig}
      />
    </div>
  );
}
