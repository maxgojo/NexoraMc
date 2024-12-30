import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ServerAnnouncements from "./ServerAnnouncements";
import FeaturedServers from "./FeaturedServers";

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <ServerAnnouncements />
      <FeaturedServers />
    </div>
  );
}
