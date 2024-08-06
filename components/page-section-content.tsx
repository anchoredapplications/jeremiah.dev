import { memo, useMemo, FC, ReactNode } from "react"

export interface PageSectionContentProps {
    children?: ReactNode | ReactNode[]
}

const PageSectionContent: FC<PageSectionContentProps> = ({children}: PageSectionContentProps) => {
    // Memoized component
    const content = useMemo(() => (
        <div className={"w-full h-full flex flex-col justify-center items-center"}>
            {children}
        </div>
    ), [children]);

    return (content);
};

export default memo(PageSectionContent);