'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CeramicCoating from "@/pages/ServiceLanding/CeramicCoating";

export default function CeramicCoatingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CeramicCoating />
      <Footer />
    </div>
  );
} 