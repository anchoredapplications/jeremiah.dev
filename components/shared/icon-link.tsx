"use client"
import { memo, useMemo, FC, ForwardRefExoticComponent, RefAttributes } from "react"
import { LucideProps } from "lucide-react"
import { HoverTooltip } from "../shared/hover-tooltip";

interface IconLinkProps {
    Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    tooltip: string;
    url: string;
    className?: string;
}

const IconLink: FC<IconLinkProps> = ({Icon, tooltip, url, className}: IconLinkProps) => {
  // Memoized button component
  const toggle = useMemo(() => (
    <HoverTooltip className={`aspect-square ${className} hover:text-muted-foreground`} tooltip={tooltip} aria-label={tooltip}>
      <a target="_blank" href={url}>
        <Icon className="h-[1.4rem] w-[1.4rem]" />
      </a>
    </HoverTooltip>
  ), [Icon, tooltip, url, className]);

  return (toggle);
};

export default memo(IconLink);
