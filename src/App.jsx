import RotatingAnnouncementBar from './components/RotatingAnnouncementBar';
import MobileAppHeaderBar from './components/MobileAppHeaderBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BrandStory from './components/BrandStory';
import ProductShowcase from './components/ProductShowcase';
import ProductBenefits from './components/ProductBenefits';
import ProductDetailsAccordion from './components/ProductDetailsAccordion';
import HowToEnjoy from './components/HowToEnjoy';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8E9] text-[#3B2418]">
      {/* Fixed/Sticky Top Header Container */}
      <div className="sticky top-0 z-40 w-full shadow-sm">
        {/* LINE 1: Rotating Free Shipping Announcement Bar */}
        <RotatingAnnouncementBar />

        {/* LINE 2: Mobile App Discount Bar (Zero Vertical Gap) */}
        <MobileAppHeaderBar />

        {/* LINE 3: Main Navigation Bar */}
        <Navbar />
      </div>

      {/* Main Single Product Content */}
      <main className="flex-1">
        {/* 3. Hero Section (Most Important Section) */}
        <HeroSection />

        {/* 4. Brand Story Section ("A Little Taste of Gujarat") */}
        <BrandStory />

        {/* 5. Product Showcase Section (Dedicated Presentation & Gallery) */}
        <ProductShowcase />

        {/* 6. Why Choose Bhavnagri Gathiya? (4 Benefits Cards) */}
        <ProductBenefits />

        {/* 7. Product Details Section (Expandable Accordion Panels) */}
        <ProductDetailsAccordion />

        {/* 8. How to Enjoy Section with Official Heritage Banner (4 Lifestyle Cards) */}
        <HowToEnjoy />

        {/* 9. Frequently Asked Questions (FAQ Accordion) */}
        <FAQSection />

        {/* 10. Dedicated Contact Section */}
        <ContactSection />
      </main>

      {/* 12. Professional 4-Column Footer */}
      <Footer />
    </div>
  );
}
