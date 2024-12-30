import { Button } from "./ui/button";
import { Crown, Sword, Sparkles } from "lucide-react";

interface ServerCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  playerCount: number;
  color: string;
}

const ServerCard = ({
  title,
  description,
  icon,
  playerCount,
  color,
}: ServerCardProps) => (
  <div
    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-500 hover:border-${color}-500/50 hover:bg-black/60`}
  >
    {/* Background glow effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div
        className={`absolute inset-0 bg-gradient-to-r from-${color}-500/20 to-purple-500/20 blur-2xl`}
      />
    </div>

    <div className="relative p-8 flex flex-col h-full">
      <div
        className={`w-12 h-12 ${color === "yellow" ? "text-yellow-400" : color === "red" ? "text-red-400" : "text-blue-400"} mb-6 transform group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-500 transition-colors duration-300">
        {title}
      </h3>

      <p className="text-white/60 mb-6 flex-grow group-hover:text-white/80 transition-colors duration-300">
        {description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-white/40 text-sm">
          {playerCount} Players Online
        </span>
        <Button
          variant="outline"
          className={`border-${color}-500/50 text-${color}-400 hover:bg-${color}-500/10`}
        >
          Join Server
        </Button>
      </div>
    </div>
  </div>
);

export default function FeaturedServers() {
  const servers = [
    {
      title: "Survival Realm",
      description:
        "Classic minecraft experience with custom enchants, mcMMO, and player-driven economy.",
      icon: <Crown className="w-full h-full" />,
      playerCount: 1250,
      color: "yellow",
    },
    {
      title: "PvP Arena",
      description:
        "Intense combat arenas with custom kits, ranked matches, and seasonal tournaments.",
      icon: <Sword className="w-full h-full" />,
      playerCount: 843,
      color: "red",
    },
    {
      title: "Creative World",
      description:
        "Unlimited building freedom with WorldEdit, custom plots, and build competitions.",
      icon: <Sparkles className="w-full h-full" />,
      playerCount: 621,
      color: "blue",
    },
  ];

  return (
    <div className="w-full py-24 relative overflow-hidden bg-gradient-to-b from-black via-gray-900/80 to-black">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto relative">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Servers
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Choose your adventure across our diverse range of Minecraft servers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servers.map((server, index) => (
            <ServerCard key={index} {...server} />
          ))}
        </div>
      </div>
    </div>
  );
}
