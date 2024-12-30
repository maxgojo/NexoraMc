import { useState, useEffect } from "react";

interface ServerStatus {
  status: "Online" | "Offline";
  playerCount: number;
}

export function useDiscordStatus() {
  const [serverStatus, setServerStatus] = useState<ServerStatus>({
    status: "Online",
    playerCount: 0,
  });

  useEffect(() => {
    const DISCORD_CHANNEL_ID = import.meta.env.VITE_DISCORD_CHANNEL_ID;
    const DISCORD_BOT_TOKEN = import.meta.env.VITE_DISCORD_BOT_TOKEN;

    if (!DISCORD_CHANNEL_ID || !DISCORD_BOT_TOKEN) {
      console.warn("Discord credentials not found");
      return;
    }

    const fetchDiscordMessages = async () => {
      try {
        const response = await fetch(
          `https://discord.com/api/v10/channels/${DISCORD_CHANNEL_ID}/messages?limit=1`,
          {
            headers: {
              Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
            },
          },
        );

        if (!response.ok) throw new Error("Failed to fetch Discord messages");

        const [latestMessage] = await response.json();

        // Expecting bot message in format: {"status":"Online","players":123}
        if (latestMessage?.author.bot) {
          try {
            const data = JSON.parse(latestMessage.content);
            setServerStatus({
              status: data.status,
              playerCount: data.players,
            });
          } catch (e) {
            console.error("Failed to parse bot message:", e);
          }
        }
      } catch (error) {
        console.error("Error fetching Discord status:", error);
      }
    };

    // Initial fetch
    fetchDiscordMessages();

    // Poll every 30 seconds
    const interval = setInterval(fetchDiscordMessages, 30000);

    return () => clearInterval(interval);
  }, []);

  return serverStatus;
}
