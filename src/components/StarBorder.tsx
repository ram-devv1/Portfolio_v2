import React from "react";

interface StarBorderProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  color?: string;
  speed?: React.CSSProperties["animationDuration"];
  thickness?: number;
  href?: string;
  target?: string;
  rel?: string;
}

export default function StarBorder({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  style,
  ...rest
}: StarBorderProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = Component as any;
  return (
    <Tag
      className={`star-border-container ${className}`}
      style={{ padding: `${thickness}px 0`, ...style }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="star-inner-content">{children}</div>
    </Tag>
  );
}
