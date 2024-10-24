import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

// Function to generate a vibrant random color
const getVibrantColor = () => {
  const h = Math.floor(Math.random() * 360);
  const s = 100; // Saturation at 100% for vibrant colors
  const l = Math.floor(Math.random() * 30 + 40); // Lightness between 40% and 70%
  return `hsl(${h}, ${s}%, ${l}%)`;
};

const CircularProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  {
    value: number; // Progress value (0-100)
    subtitle: string;
    className?: string;
    strokeWidth?: number; // Adjust the stroke width
    size?: 'normal' | 'lg' | 'xl'; // Size prop
  }
>(({ value, subtitle, className, strokeWidth = 10, size = 'normal', ...props }, ref) => {
  // Define sizes based on the size prop
  const sizes = {
    normal: 110, // Normal size remains 120px
    lg: 140,     // lg size is now 140px
    xl: 160,     // 180px for xl size
  };

  const circleSize = sizes[size]; // Get the size based on the prop
  const radius = (circleSize - strokeWidth) / 2; // Calculate radius
  const circumference = 2 * Math.PI * radius;

  // Clamp value between 0 and 100
  const validValue = Math.max(0, Math.min(100, value));
  const offset = circumference - (validValue / 100) * circumference;

  // Generate vibrant colors for the gradient
  const progressColorStart = getVibrantColor();
  const progressColorEnd = getVibrantColor();

  return (
    <ProgressPrimitive.Root
      ref={ref}
      role="progressbar"
      aria-valuenow={validValue}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("relative", className, "shadow-lg rounded-full")} // Add shadow and rounded corners
      {...props}
      style={{ width: circleSize, height: circleSize }} // Fixed size
    >
      <span className="absolute flex flex-col w-full h-full justify-center items-center font-mono tracking-tight">
        <h1 className="text-3xl md:text-xl lg:text-2xl xl:text-3xl">{validValue}%</h1>
        <h2 className="text-xl md:text-md lg:text-md xl:text-lg">{subtitle}</h2>
      </span>
      <svg width="100%" height="100%">
        <circle
          stroke="#e6e6e6" // Light gray border color
          fill="transparent"
          strokeWidth={strokeWidth + 2} // Bolder border
          r={radius + 1} // Adjust radius to fit border
          cx="50%"
          cy="50%"
        />
        <circle
          fill="transparent"
          strokeWidth={strokeWidth} // Width for progress stroke
          r={radius} // Normal radius
          cx="50%"
          cy="50%"
          strokeDasharray={circumference} // Full circumference
          strokeDashoffset={offset} // Offset based on the value
          stroke={`url(#gradient)`} // Reference the gradient
          style={{
            transition: 'stroke-dashoffset 0.5s ease-in-out',
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={progressColorStart} />
            <stop offset="100%" stopColor={progressColorEnd} />
          </linearGradient>
        </defs>
      </svg>
    </ProgressPrimitive.Root>
  );
});

CircularProgress.displayName = "CircularProgress";

export { CircularProgress };
