import { memo, useMemo, FC, ReactNode } from "react"

export enum PageSectionVariant {
    Primary="PRIMARY",
    Secondary="secondary",
}

export interface PageSectionProps {
    children?: ReactNode | ReactNode[]
    variant: PageSectionVariant
    id: string
}

const PageSection: FC<PageSectionProps> = ({children, variant, id}: PageSectionProps) => {
    const getCSSForVariant = (variant: PageSectionVariant) => {
        switch(variant) {
            case PageSectionVariant.Primary:
                return "backdrop-brightness-100"
            case PageSectionVariant.Secondary:
                return "backdrop-brightness-95 dark:backdrop-brightness-90"
        }
    }
    // Memoized component
    const section = useMemo(() => (
        <section id={id} className={`w-full h-screen ${getCSSForVariant(variant)}`}>
            {children}
        </section>
    ), [children, variant]);

    return (section);
};

export default memo(PageSection);