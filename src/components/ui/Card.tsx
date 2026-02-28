interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "teal" | "white";
}

export default function Card({
  children,
  className = "",
  variant = "default",
}: CardProps) {
  const variants = {
    default: "bg-white shadow-sm border border-gray-100",
    teal: "bg-light-teal border border-light-teal",
    white: "bg-white shadow-md",
  };

  return (
    <div
      className={`rounded-lg p-6 md:p-8 ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
