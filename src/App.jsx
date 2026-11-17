import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProceduresSection from './components/ProceduresSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import PoliciesSection from './components/PoliciesSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { studioConfig } from './data/studioData';
import { Calendar, MessageCircle } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProcedure, setSelectedProcedure] = useState(null);

  const handleOpenBooking = (procedure = null) => {
    setSelectedProcedure(procedure);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedProcedure(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F6] font-sans">
      {/* Top Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenBooking={handleOpenBooking} />
        <ProceduresSection onSelectProcedure={handleOpenBooking} />
        <GallerySection onOpenBooking={handleOpenBooking} />
        <PoliciesSection />
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking System Modal (Step-by-step with Calendly & WhatsApp) */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialProcedure={selectedProcedure}
      />

      {/* Floating Action Buttons for Mobile Conversion */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-3 sm:hidden">
        <a
          href={`https://wa.me/${studioConfig.whatsappNumber}?text=${encodeURIComponent("Olá! Vim pelo site e gostaria de tirar uma dúvida.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        <button
          onClick={() => handleOpenBooking(null)}
          className="flex items-center gap-2 bg-brand-800 text-white px-5 py-3 rounded-full text-xs font-semibold shadow-xl border border-brand-700/50 hover:bg-brand-900 transition-all"
        >
          <Calendar className="w-4 h-4" />
          <span>Agendar</span>
        </button>
      </div>
    </div>
  );
}
