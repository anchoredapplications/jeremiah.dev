import { CircuitBorder } from "@/app/images/SVGs";
import { memo, useMemo, FC, ReactNode } from "react"

export enum PageSectionVariant {
    Primary="PRIMARY",
    Secondary="secondary",
}

export interface PageSectionProps {
    children?: ReactNode | ReactNode[]
    variant: PageSectionVariant
    id: string
    showBorder?: boolean
}

const PageSection: FC<PageSectionProps> = ({children, variant, id, showBorder}: PageSectionProps) => {
    const getCSSForVariant = (variant: PageSectionVariant) => {
        switch(variant) {
            case PageSectionVariant.Primary:
                return "bg-background"
            case PageSectionVariant.Secondary:
                return "bg-background-secondary"
        }
    }

    const border = useMemo(() => (
        <div className="">
            <div className='absolute top-0 left-0 z-0 opacity-20'>
                <CircuitBorder/>
            </div>
            <div className='absolute bottom-0 left-0 z-0 opacity-20 -rotate-90'>
                <CircuitBorder/>
            </div>
        </div>
    ), []);

    // Memoized component
    const section = useMemo(() => (
        <section id={id} className={`relative w-full flex flex-col h-full min-h-screen ${getCSSForVariant(variant)}`}>
            { showBorder && border}
            {children}
        </section>
    ), [children, variant]);

    return (section);
};

export default memo(PageSection);