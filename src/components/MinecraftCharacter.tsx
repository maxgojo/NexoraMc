export default function MinecraftCharacter() {
  return (
    <div className="relative w-full h-full group animate-scaleIn">
      {/* Glow effects - positioned below */}
      <div className="absolute inset-0">
        {/* Glowing orbs */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500" />

        {/* Hover effect glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl" />
        </div>
      </div>

      {/* Main character image - positioned above glow */}
      <div className="absolute inset-0 flex items-center justify-center animate-float z-10">
        <img
          src="/4_Pose.png"
          alt="Minecraft Character"
          className="w-96 h-96 object-contain transform group-hover:scale-110 transition-all duration-500 hover:brightness-110"
        />
      </div>

      {/* Particle effects - on top */}
      <div className="absolute inset-0 z-20">
        {/* Pink particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-500 rounded-full animate-ping" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-300" />
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-pink-300 rounded-full animate-ping delay-700" />
      </div>
    </div>
  );
}
