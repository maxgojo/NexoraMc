import { Button } from "./ui/button";
import MinecraftCharacter from "./MinecraftCharacter";
import ServerStats from "./ServerStats";
import { PlayCircle, Book } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900/80 to-black/90 flex items-center overflow-hidden pt-32">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        {/* Additional subtle gradients for smoother transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="container mx-auto grid grid-cols-2 gap-8 items-center relative">
        <div className="space-y-8 mt-8">
          <h1 className="text-6xl font-bold text-white leading-tight hover:scale-105 transition-transform duration-300">
            NexoraMC
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 hover:to-pink-500 transition-all duration-500">
              Minecraft Gaming Servers
            </span>
          </h1>

          <p className="text-gray-400 text-xl hover:text-gray-300 transition-colors duration-300">
            Join thousands of players in the most exciting Minecraft gaming
            experience
          </p>

          <div className="flex gap-4">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 flex items-center gap-2 group">
              <PlayCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Play Now
            </Button>
            <Button
              variant="outline"
              className="border-pink-500 text-pink-500 hover:bg-pink-500/10 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 hover:border-purple-500 hover:text-purple-500 flex items-center gap-2 group"
            >
              <Book className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Wiki
            </Button>
          </div>

          <ServerStats />
        </div>

        <div className="relative h-[600px]">
          <MinecraftCharacter />
        </div>
      </div>
    </div>
  );
}
