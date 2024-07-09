
"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetTitle,
  } from "@/components/ui/sheet"
import { memo, useMemo, FC, ReactNode, useCallback, useState } from "react"
import { getDictionary } from "@/dictionaries";
import { Toggle } from "@radix-ui/react-toggle";
import { Menu as MenuIcon } from "lucide-react"
import Link from "next/link";
import ThemeToggle from "./theme-toggle";


export interface PageSectionHeaderProps {
    children?: ReactNode | ReactNode[]
}

const Menu: FC<PageSectionHeaderProps> = ({children}: PageSectionHeaderProps) => {
    const [isPressed, setIsPressed] = useState<boolean>(false)
    const $t = getDictionary();
  
    const setChangeDrawerOpen = useCallback((isPressed: boolean) => {
      setIsPressed(isPressed)
    }, []);

    const togglePressed = useCallback(() => {
        setIsPressed(i => !i)
    }, [])

    const toggle = useMemo(() =>(
        <Toggle className={`aspect-square p-2`} aria-label={$t.menu.toggle} pressed={isPressed} onPressedChange={setChangeDrawerOpen}>
          <MenuIcon className={`${isPressed ? "rotate-90" : "rotate-0"} transition-all`}/>
        </Toggle>
    ), [isPressed, setChangeDrawerOpen])

    const toggleOption = ({id, heading}: {id: string, heading: string}) => (
        <SheetClose key={id} asChild onClick={togglePressed} className="flex">
            <Link href={`/#${id}`} scroll={true} className="flex flex-row-reverse w-full border-foreground text-2xl font-serif hover:cursor-pointer">{heading}</Link>
        </SheetClose>
    )

    const navigation = useMemo(() => (
        <nav className="flex flex-col gap-4 mx-4 py-4 border-t-2 dark:border-t">
        {
            $t.navigation.map(toggleOption)
        }
        </nav>
    ), [toggleOption])

    // Memoized component
    const menu = useMemo(() => (
        <Sheet open={isPressed}>
            <div className="fixed left-0 top-0" >
                {toggle}
            </div>
            <SheetContent side={"left"}>
                <SheetDescription className="sr-only">
                    {$t.menu.description}
                </SheetDescription>
                <br />
                {navigation}
                <SheetClose asChild className="absolute left-0 right-0 top-0">
                    <SheetTitle className="flex justify-between items-center p-0 pl-4 font-serif text-md font-serif">
                        {$t.menu.heading} 
                        {toggle}
                    </SheetTitle>
                </SheetClose>
                <ThemeToggle className="absolute right-0 bottom-0"/>
            </SheetContent>
        </Sheet>
    ), [children, toggle]);

    return (menu);
};

export default memo(Menu);
