"use client"

import { memo, useMemo, useCallback, FC, useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes";
import { getDictionary } from '@/dictionaries';
import { Toggle } from "./ui/toggle";

interface ThemeToggleProps {
  className: string;
}

const ThemeToggle: FC<ThemeToggleProps> = ({className}: ThemeToggleProps) => {
  const { setTheme, theme } = useTheme();
  const [isPressed, setIsPressed] = useState<boolean>()
  const $t = getDictionary();

  useEffect(() => {
    setIsPressed(theme === "light")
  })

  const setChangeTheme = useCallback((wasPressed: boolean) => {
    setIsPressed(wasPressed)
    setTheme(wasPressed ? 'light' : 'dark')
  }, [setTheme, setIsPressed, theme]);

  // Memoized button component
  const toggle = useMemo(() => (
    <Toggle className={`aspect-square ${className}`} aria-label={$t.theme.toggle} pressed={isPressed} onPressedChange={setChangeTheme}>
      { isPressed 
        ? <Moon className="h-[1.2rem] w-[1.2rem]" />
        : <Sun className="h-[1.2rem] w-[1.2rem]" />
      }
    </Toggle>
  ), [isPressed, setChangeTheme, className, Toggle]);

  return (toggle);
};

export default memo(ThemeToggle);
