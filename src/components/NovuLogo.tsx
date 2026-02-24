const NovuLogo = ({ color = "#262626", size = "1.5rem" }: { color?: string; size?: string }) => (
  <div className="flex items-center gap-2">
    <span className="text-xl">🦜</span>
    <span
      className="font-display font-semibold leading-none relative"
      style={{ fontSize: size, color }}
    >
      n
      <span className="relative">
        o
        <span
          className="absolute bottom-0 left-0 w-full h-[2px] rounded-full"
          style={{ background: "#00DEDE" }}
        />
      </span>
      vu
    </span>
  </div>
);

export default NovuLogo;
