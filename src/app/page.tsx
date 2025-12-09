import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Tech } from "@/components/sections/Tech";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Products />
      <Tech />
      <Contact />
      <Footer />
    </main>
  );
}
