import { Icon } from "./icon"
import { Link } from "./link"

export type Project = {
    name: string,
    description: string,
    summary: string,
    link: Link,
    private: boolean,
    icon?: Icon,
    demo?: Link,
    image?: string,
}
