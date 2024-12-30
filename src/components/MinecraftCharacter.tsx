export default function MinecraftCharacter() {
  return (
    <div className="relative w-full h-full group">
      {/* Particle effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-500 rounded-full animate-ping" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-300" />
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-pink-300 rounded-full animate-ping delay-700" />
      </div>
    </div>
  );
}
