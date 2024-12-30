import { Users, Wifi } from "lucide-react";
import { useDiscordStatus } from "@/lib/useDiscordStatus";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard = ({ title, value, icon, color }: StatCardProps) => (
  <div className={`relative overflow-hidden group`}>
    {/* Glowing background effect */}
    <div
      className={`absolute inset-0 ${color} opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300`}
    />

    <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/5 group-hover:border-white/10 transition-all duration-300 hover:transform hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <div
          className={`${color} p-3 rounded-lg bg-white/5 group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <div>
          <p className="text-white/60 text-sm font-medium mb-1 group-hover:text-white/80 transition-colors duration-300">
            {title}
          </p>
          <p className="text-white text-2xl font-bold tracking-tight">
            {value}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function ServerStats() {
  const { status, playerCount } = useDiscordStatus();

  return (
    <div className="grid grid-cols-2 gap-6 w-full max-w-2xl">
      <StatCard
        title="Server Status"
        value={status}
        icon={<Wifi className="w-6 h-6" />}
        color={status === "Online" ? "text-emerald-500" : "text-red-500"}
      />
      <StatCard
        title="Players Online"
        value={playerCount.toLocaleString()}
        icon={<Users className="w-6 h-6" />}
        color="text-pink-500"
      />
    </div>
  );
}
