import { Icon } from "./icon"
import { Link } from "./link"

export type Project = {
    name: string,
    description: string,
    summary: string,
    icon: Icon
    link: Link
    demo?: Link
    image?: string
}
