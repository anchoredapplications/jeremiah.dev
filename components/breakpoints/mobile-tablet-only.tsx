import { memo } from "react"
import {getBreakpointComponent} from "./base"
import { AspectRatio } from "@/globals/aspect-ratio"

const MobileTabletOnly = getBreakpointComponent(AspectRatio.MIN, AspectRatio.MD)

export default memo(MobileTabletOnly)