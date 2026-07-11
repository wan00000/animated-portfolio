import Background from "@/components/Background";
import Capabilities from "@/components/Capabilities";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Recognition from "@/components/Recognition";
import SelectedWork from "@/components/SelectedWork";
import { PortfolioNav } from "@/components/navigation/PortfolioNav";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-portfolio-bg pb-24 text-white md:pb-0">
      <PortfolioNav />
      <Hero />
      <SelectedWork />
      <Capabilities />
      <Experience />
      <Recognition />
      <Background />
      <Footer />
    </main>
  );
}
