import { memo } from "react"
import {getBreakpointComponent} from "./base"
import { AspectRatio } from "@/globals/aspect-ratio"

const DesktopOnly = getBreakpointComponent(AspectRatio.LG, AspectRatio.MAX)

export default memo(DesktopOnly)