interface MarqueeStripProps {
  items: string[];
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function MarqueeStrip({
  items,
  speed = 35,
  direction = "left",
  className = "",
}: MarqueeStripProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap select-none ${className}`}>
      <div
        className="inline-flex"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            {item}
            <span className="mx-6 opacity-25">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
