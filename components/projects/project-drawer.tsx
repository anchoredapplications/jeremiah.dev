import { getDictionary } from "@/dictionaries";
import { memo, useMemo, FC, ReactNode } from "react"
import {
    Drawer,
    DrawerContent,
} from "@/components/ui/drawer"

interface ProjectDrawerProps {
    openState: boolean;
    setIsOpen: (flag: boolean) => void;
    children: ReactNode | ReactNode[]
}
  
const ProjectDrawer: FC<ProjectDrawerProps> = ({ openState, children, setIsOpen }: ProjectDrawerProps) => {
    const $t = getDictionary();

    // Memoized component
    const content = useMemo(() => (
        <Drawer open={openState} onOpenChange={setIsOpen}>
            <DrawerContent className="h-3/4 p-4">
                {children}
            </DrawerContent>
        </Drawer>
    ), [children, openState, setIsOpen]);

    return (content);
};

export default memo(ProjectDrawer);