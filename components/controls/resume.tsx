"use client"
import { memo, FC } from "react"
import { FileText } from "lucide-react"
import { getDictionary } from '@/dictionaries';
import IconLink from "../shared/icon-link";

interface ResumeProps {
  className?: string;
}

const Resume: FC<ResumeProps> = ({className}: ResumeProps) => {
  const $t = getDictionary();
  return (<IconLink Icon={FileText} tooltip={$t.controls.resume} url={$t.links.resume} className={className} />);
};

export default memo(Resume);