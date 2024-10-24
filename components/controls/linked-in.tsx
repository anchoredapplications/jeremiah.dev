"use client"
import { memo, FC } from "react"
import { Linkedin } from "lucide-react"
import { getDictionary } from '@/dictionaries';
import IconLink from "../shared/icon-link";

interface LinkedInProps {
  className?: string;
}

const LinkedIn: FC<LinkedInProps> = ({className}: LinkedInProps) => {
  const $t = getDictionary();
  return (<IconLink Icon={Linkedin} tooltip={$t.controls.linkedIn} url={$t.links.linkedIn} className={className} />);
};

export default memo(LinkedIn);
