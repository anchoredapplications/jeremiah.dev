import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const getRandomVibrantColor = () => {
  let colors = [256, 256, 0, 0]
  colors.sort(() => Math.random() - 0.5);
  return { 
    start: `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`, 
    end: `rgb(${colors[1]}, ${colors[2]}, ${colors[3]})`, 
    id:[...Array(8)].map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
  };
};

const CircularProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  {
    value: number;
    subtitle: string;
    className?: string;
    strokeWidth?: number;
    size?: 'normal' | 'lg' | 'xl'; // Size prop
  }
>(({ value, subtitle, className, strokeWidth = 16, size = 'normal', ...props }, ref) => {
  const sizes = {
    normal: 130,
    lg: 150,
    xl: 170
  };

  const circleSize = sizes[size];
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const validValue = Math.max(0, Math.min(100, value));
  const offset = circumference - (validValue / 100) * circumference;
  const {start: progressColorStart, end: progressColorEnd, id} = getRandomVibrantColor()

  return (
    <ProgressPrimitive.Root
      ref={ref}
      role="progressbar"
      aria-valuenow={validValue}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("relative", className, "rounded-full")} // Add shadow and rounded corners
      {...props}
      style={{ width: circleSize, height: circleSize }} // Fixed size
    >
      <span className="absolute flex flex-col w-full h-full justify-center items-center font-mono tracking-tight">
        <h1 className="text-2xl md:text-xl">{validValue}%</h1>
        <h2 className="text-md md:text-sm">{subtitle}</h2>
      </span>
      <svg width="100%" height="100%">
        <circle
          stroke="#e1e1e1" // Light gray border color
          fill="transparent"
          strokeWidth={strokeWidth-1} // Bolder border
          r={radius-1} // Adjust radius to fit border
          cx="50%"
          cy="50%"
        />
        <circle
          fill="transparent"
          strokeWidth={strokeWidth+1} // Width for progress stroke
          r={radius-1} // Normal radius
          cx="50%"
          cy="50%"
          strokeDasharray={circumference} // Full circumference
          strokeDashoffset={offset} // Offset based on the value
          stroke={`url(#progress-circle-${id})`} // Reference the gradient
          style={{
            transition: 'stroke-dashoffset 0.5s ease-in-out',
          }}
          className="shadow-xl"
        />
        <defs>
          <linearGradient id={`progress-circle-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
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
