import { Button } from "./ui/button";
import { useState, useEffect, useRef } from "react";
import {
  Gamepad2,
  Server,
  Users,
  MessageCircle,
  ShoppingBag,
  Sword,
  Crown,
  Sparkles,
  Globe2,
  Shield,
  Heart,
  Users2,
  Newspaper,
  ChevronDown,
} from "lucide-react";

interface DropdownProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Dropdown = ({ isOpen, children }: DropdownProps) => (
  <div
    className={`absolute top-[calc(100%+1px)] left-0 w-56 transition-all duration-200 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
  >
    <div className="bg-black/95 backdrop-blur-sm rounded-xl p-4 border border-white/10">
      {children}
    </div>
  </div>
);

interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  desc: string;
  href: string;
  isActive: boolean;
  onClick: () => void;
}

const MenuItem = ({
  icon,
  text,
  desc,
  href,
  isActive,
  onClick,
}: MenuItemProps) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      onClick();
      window.location.href = href;
    }}
    className={`block p-3 rounded-lg transition-all duration-300 cursor-pointer space-y-1 hover:bg-white/5 group ${isActive ? "bg-white/10" : ""}`}
  >
    <div className="flex items-center gap-3">
      <span
        className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${isActive ? "scale-110" : ""}`}
      >
        {icon}
      </span>
      <span
        className={`font-medium text-white transition-colors duration-300 group-hover:text-pink-500 ${isActive ? "text-pink-500" : ""}`}
      >
        {text}
      </span>
    </div>
    <p
      className={`text-xs transition-colors duration-300 pl-8 group-hover:text-white/70 ${isActive ? "text-white/70" : "text-white/50"}`}
    >
      {desc}
    </p>
  </a>
);

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setActiveMenuItem(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10"
      ref={navRef}
    >
      <div className="container mx-auto flex items-center justify-between h-20">
        <div className="text-2xl font-bold text-pink-500 hover:text-pink-400 transition-colors duration-300 cursor-pointer group">
          <span className="inline-block group-hover:scale-110 transition-transform duration-300">
            NexoraMC
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative">
            <button
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "gamemodes" ? null : "gamemodes",
                )
              }
              className="flex items-center gap-2 text-white hover:text-pink-500 transition-all duration-300 cursor-pointer"
            >
              <Gamepad2 className="w-4 h-4 transition-transform" />
              <span>Gamemodes</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "gamemodes" ? "rotate-180" : ""}`}
              />
            </button>
            <Dropdown isOpen={activeDropdown === "gamemodes"}>
              <div className="space-y-2">
                {[
                  {
                    icon: <Sword className="text-red-400" />,
                    text: "PvP Battles",
                    desc: "Intense combat arenas",
                    href: "#pvp",
                  },
                  {
                    icon: <Crown className="text-yellow-400" />,
                    text: "Survival",
                    desc: "Classic minecraft experience",
                    href: "#survival",
                  },
                  {
                    icon: <Sparkles className="text-blue-400" />,
                    text: "Creative",
                    desc: "Unlimited building freedom",
                    href: "#creative",
                  },
                ].map((item) => (
                  <MenuItem
                    key={item.href}
                    {...item}
                    isActive={activeMenuItem === item.href}
                    onClick={() => {
                      setActiveMenuItem(item.href);
                      setActiveDropdown(null);
                    }}
                  />
                ))}
              </div>
            </Dropdown>
          </div>

          <div className="relative">
            <button
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "servers" ? null : "servers",
                )
              }
              className="flex items-center gap-2 text-white hover:text-pink-500 transition-all duration-300 cursor-pointer"
            >
              <Server className="w-4 h-4 transition-transform" />
              <span>Servers</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "servers" ? "rotate-180" : ""}`}
              />
            </button>
            <Dropdown isOpen={activeDropdown === "servers"}>
              <div className="space-y-2">
                {[
                  {
                    icon: <Globe2 className="text-green-400" />,
                    text: "US Servers",
                    desc: "North American region",
                    href: "#us",
                  },
                  {
                    icon: <Globe2 className="text-blue-400" />,
                    text: "EU Servers",
                    desc: "European region",
                    href: "#eu",
                  },
                  {
                    icon: <Shield className="text-purple-400" />,
                    text: "Server Status",
                    desc: "Live performance metrics",
                    href: "#status",
                  },
                ].map((item) => (
                  <MenuItem
                    key={item.href}
                    {...item}
                    isActive={activeMenuItem === item.href}
                    onClick={() => {
                      setActiveMenuItem(item.href);
                      setActiveDropdown(null);
                    }}
                  />
                ))}
              </div>
            </Dropdown>
          </div>

          <div className="relative">
            <button
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "community" ? null : "community",
                )
              }
              className="flex items-center gap-2 text-white hover:text-pink-500 transition-all duration-300 cursor-pointer"
            >
              <Users className="w-4 h-4 transition-transform" />
              <span>Community</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "community" ? "rotate-180" : ""}`}
              />
            </button>
            <Dropdown isOpen={activeDropdown === "community"}>
              <div className="space-y-2">
                {[
                  {
                    icon: <Heart className="text-red-400" />,
                    text: "Forums",
                    desc: "Join the discussion",
                    href: "#forums",
                  },
                  {
                    icon: <Users2 className="text-blue-400" />,
                    text: "Teams",
                    desc: "Find your squad",
                    href: "#teams",
                  },
                  {
                    icon: <Newspaper className="text-yellow-400" />,
                    text: "News",
                    desc: "Latest updates",
                    href: "#news",
                  },
                ].map((item) => (
                  <MenuItem
                    key={item.href}
                    {...item}
                    isActive={activeMenuItem === item.href}
                    onClick={() => {
                      setActiveMenuItem(item.href);
                      setActiveDropdown(null);
                    }}
                  />
                ))}
              </div>
            </Dropdown>
          </div>

          <a
            href="#discord"
            className="flex items-center gap-2 text-white hover:text-pink-500 transition-all duration-300 hover:gap-3 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Discord</span>
          </a>

          <Button
            asChild
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white ml-2"
          >
            <a href="#store" className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 transition-transform hover:rotate-12" />
              <span>Store</span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
