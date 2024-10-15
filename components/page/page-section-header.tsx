import { memo, useMemo, FC, ReactNode } from "react"

export interface PageSectionHeaderProps {
    children?: ReactNode | ReactNode[]
}

const PageSectionHeader: FC<PageSectionHeaderProps> = ({children}: PageSectionHeaderProps) => {
    // Memoized component
    const header = useMemo(() => (
        <h1 className={"p-4 flex flex-col text-3xl w-full font-serif items-center justify-center sm:justify-end sm:align-start sm:px-16"}>
            {children}
        </h1>
    ), [children]);

    return (header);
};

export default memo(PageSectionHeader);