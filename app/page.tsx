import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AdditionalServices from "@/components/AdditionalServices";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-shell-100">
      <Header />
      <Hero />
      <Services />
      <AdditionalServices />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <Footer />
    </main>
  );
}
