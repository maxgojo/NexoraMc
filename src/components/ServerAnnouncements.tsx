import { Clock, ArrowRight, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface AnnouncementCardProps {
  title: string;
  description: string;
  date: string;
  type: "update" | "event" | "news";
  image: string;
  isExpanded: boolean;
  onExpand: () => void;
  onClose: () => void;
}

const AnnouncementCard = ({
  title,
  description,
  date,
  type,
  image,
  isExpanded,
  onExpand,
  onClose,
}: AnnouncementCardProps) => (
  <div
    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-500 ${isExpanded ? "lg:col-span-3 md:col-span-2 col-span-1" : ""} ${!isExpanded ? "hover:border-pink-500/50 hover:bg-black/60" : "border-pink-500/50 bg-black/60"}`}
  >
    {/* Background glow effect */}
    <div
      className={`absolute inset-0 transition-opacity duration-500 ${isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-2xl" />
    </div>

    {/* Content */}
    <div className="relative p-6 flex flex-col h-full">
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-pink-500/80 text-sm font-medium">
            <Clock className="w-4 h-4" />
            <span>{date}</span>
          </div>
          {isExpanded && (
            <Button
              variant="ghost"
              size="icon"
              className="text-white/60 hover:text-pink-500 p-2 hover:bg-white/5"
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>

        <h3
          className={`text-xl font-bold text-white transition-colors duration-300 ${isExpanded ? "text-pink-500" : "group-hover:text-pink-500"}`}
        >
          {title}
        </h3>

        <div
          className={`transition-all duration-500 ${isExpanded ? "h-auto opacity-100" : "h-[2.5em] overflow-hidden"}`}
        >
          <p
            className={`text-white/60 text-sm transition-colors duration-300 ${isExpanded ? "text-white/80" : "line-clamp-2 group-hover:text-white/80"}`}
          >
            {description}
          </p>
          {isExpanded && (
            <div className="mt-6 space-y-4 text-white/80 animate-fadeIn">
              <p>
                Additional details about this announcement can go here. This
                section only appears when expanded.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Important point 1 about the announcement</li>
                <li>Critical information that players should know</li>
                <li>Relevant dates or times for the event</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {!isExpanded && (
        <div className="mt-6 flex items-center justify-between">
          <Button
            variant="ghost"
            className="text-white/60 hover:text-pink-500 p-0 hover:bg-transparent group-hover:translate-x-2 transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              onExpand();
            }}
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  </div>
);

export default function ServerAnnouncements() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const announcements = [
    {
      title: "Открытие сервера SkyLand",
      description:
        "Сервер SkyLand открывает свои двери! Вас ждут уникальные острова, захватывающие квесты и эпические сражения. Присоединяйтесь к нашему комьюнити!",
      date: "2 hours ago",
      type: "news",
      image: "skylands.jpg",
    },
    {
      title: "Вайп сервера TechnoMagic",
      description:
        "Готовьтесь к новому началу! Полный вайп сервера TechnoMagic состоится в эту пятницу. Обновленные механики, новые моды и улучшенный баланс.",
      date: "5 hours ago",
      type: "update",
      image: "technomagic.jpg",
    },
    {
      title: "Открытие сервера SkyLand",
      description:
        "Второй сезон SkyLand начинается! Новые острова, улучшенная система крафта и множество новых возможностей ждут вас.",
      date: "1 day ago",
      type: "event",
      image: "skylands2.jpg",
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

      <div className="container mx-auto relative">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold text-white">
            Server{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Announcements
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Stay updated with the latest news, events, and updates from our
            Minecraft servers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => (
            <AnnouncementCard
              key={index}
              {...announcement}
              isExpanded={expandedId === index}
              onExpand={() => setExpandedId(index)}
              onClose={() => setExpandedId(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
