import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import AdditionalServices from "@/components/AdditionalServices";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-shell-100 pb-20 sm:pb-0">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Services />
      <AdditionalServices />
      <Process />
      <Gallery />
      <Testimonials />
      <FAQ />
      <BookingForm />
      <Footer />
      <MobileCTA />
    </main>
  );
}
