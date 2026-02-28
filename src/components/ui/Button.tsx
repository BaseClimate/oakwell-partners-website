import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "gold" | "outline" | "white";
  size?: "default" | "large";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 min-h-[44px]";

  const variants = {
    primary: "bg-deep-teal text-white hover:bg-dark-teal",
    gold: "bg-warm-gold text-white hover:bg-[#b8853e] shadow-lg hover:shadow-xl",
    outline: "border-2 border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white",
    white: "bg-white text-deep-teal hover:bg-cream",
  };

  const sizes = {
    default: "px-6 py-2.5 text-base",
    large: "px-8 py-3.5 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
