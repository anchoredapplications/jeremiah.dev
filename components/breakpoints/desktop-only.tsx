import { memo } from "react"
import {getBreakpointComponent} from "./base"
import { AspectRatio } from "@/globals/aspect-ratio"

const MobileTabletOnly = getBreakpointComponent(AspectRatio.SM, AspectRatio.LG)

export default memo(MobileTabletOnly)