import { memo } from "react"
import {getBreakpointComponent} from "./base"
import { AspectRatio } from "@/globals/aspect-ratio"

const MobileOnly = getBreakpointComponent(AspectRatio.SM, AspectRatio.MD)

export default memo(MobileOnly)