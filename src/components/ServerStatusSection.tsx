import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Youtube, MessageSquare, Diamond, Sword, Wand2 } from "lucide-react";

interface ServerCardProps {
  name: string;
  playerCount: number;
  maxPlayers: number;
  icon: React.ReactNode;
  color: string;
}

const ServerCard = ({
  name,
  playerCount,
  maxPlayers,
  icon,
  color,
}: ServerCardProps) => (
  <div
    className={`relative overflow-hidden rounded-lg border border-white/10 bg-black/40 backdrop-blur-md p-4 group hover:border-${color}-500/50 transition-all duration-300 hover:-translate-y-1 animate-scaleIn`}
  >
    <div className="flex items-center gap-3 mb-3">
      <div
        className={`p-2 rounded bg-${color}-500/10 text-${color}-400 group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white group-hover:text-pink-500 transition-colors">
        {name}
      </h3>
    </div>
    <Progress
      value={(playerCount / maxPlayers) * 100}
      className={`h-2 bg-white/5`}
      indicatorClassName={`bg-gradient-to-r from-${color}-500 to-${color}-400`}
    />
    <p className="mt-2 text-sm text-white/60 group-hover:text-white/80 transition-colors">
      {playerCount}/{maxPlayers} Players
    </p>
  </div>
);

export default function ServerStatusSection() {
  const servers = [
    {
      name: "DraconicTechnoMagic",
      playerCount: 156,
      maxPlayers: 200,
      icon: <Wand2 className="w-5 h-5" />,
      color: "purple",
    },
    {
      name: "SkyLand",
      playerCount: 89,
      maxPlayers: 100,
      icon: <Diamond className="w-5 h-5" />,
      color: "blue",
    },
    {
      name: "PvP Legends",
      playerCount: 245,
      maxPlayers: 300,
      icon: <Sword className="w-5 h-5" />,
      color: "red",
    },
  ];

  return (
    <div className="w-full py-24 relative overflow-hidden bg-gradient-to-b from-black/90 via-gray-900/80 to-black">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        {/* Smooth transition overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/4_Pose.png"
          alt="Minecraft Background"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Top Row - Server Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 stagger-animation">
          {servers.map((server, index) => (
            <ServerCard key={index} {...server} />
          ))}
        </div>

        {/* Middle Row - Vote Card */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative overflow-hidden rounded-xl border border-pink-500/20 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-md p-8 text-center animate-fadeIn hover:border-pink-500/40 transition-all duration-300 hover:-translate-y-1">
            {/* Glowing effects */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-pink-500/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 hover:text-pink-500 transition-colors duration-300">
              Support Our Server!
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto hover:text-white/90 transition-colors duration-300">
              Vote for us and get amazing rewards! Every vote helps us grow and
              brings new features to the community.
            </p>

            <div className="flex justify-center gap-4">
              <Button
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 flex items-center gap-2 group hover:scale-105 transition-all duration-300"
                onClick={() => window.open("https://youtube.com", "_blank")}
              >
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
                YouTube
              </Button>
              <Button
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-2 flex items-center gap-2 group hover:scale-105 transition-all duration-300"
                onClick={() => window.open("https://discord.com", "_blank")}
              >
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Discord
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Row - Footer */}
        <div className="text-center animate-fadeIn">
          <p className="text-white/60 mb-4 max-w-2xl mx-auto hover:text-white/80 transition-colors duration-300">
            Join our vibrant community of over 10,000 players! Experience unique
            gameplay, make new friends, and create unforgettable memories in our
            Minecraft servers.
          </p>
          <p className="text-white/30 text-sm hover:text-white/50 transition-colors duration-300">
            © 2024 NexoraMC. All rights reserved. Not affiliated with Mojang.
          </p>
        </div>
      </div>
    </div>
  );
}
