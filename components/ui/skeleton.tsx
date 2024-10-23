import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gradient-to-br from-neutral-900 to-black animate-shimmer bg-[length:200%_200%]", className)}
      {...props}
    />
  )
}

export { Skeleton }
