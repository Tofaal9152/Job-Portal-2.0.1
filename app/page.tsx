import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { LatestJobs } from "@/components/LatestJobs";
import Navbar from "@/components/Navbar";
// import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    // <WavyBackground className="w-screen h-screen overflow-x-hidden">
      <div className="bg-black">
        <div className="h-screen">
          <Navbar />
          <Hero />
        </div>
        <div>
          <LatestJobs />
        </div>
        <Footer/>
      </div>
    // </WavyBackground> 
  );
}
