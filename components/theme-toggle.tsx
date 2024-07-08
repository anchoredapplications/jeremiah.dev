"use client"

import { memo, useMemo, useCallback, FC, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes";
import { getDictionary } from '@/dictionaries';
import { Toggle } from "./ui/toggle";

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = () => {
  const { setTheme, theme } = useTheme();
  const [isPressed, setIsPressed] = useState<boolean>(theme === 'light')
  const $t = getDictionary();

  const setChangeTheme = useCallback((isPressed: boolean) => {
    setIsPressed(isPressed)
    setTheme(isPressed ? 'light' : 'dark')
  }, [setTheme]);

  // Memoized button component
  const toggle = useMemo(() => (
    <Toggle className="aspect-square" aria-label={$t.theme.toggle} pressed={isPressed} onPressedChange={setChangeTheme}>
      { isPressed 
        ? <Moon className="h-[1.2rem] w-[1.2rem]" />
        : <Sun className="h-[1.2rem] w-[1.2rem]" />
      }
    </Toggle>
  ), [isPressed]);

  return (toggle);
};

export default memo(ThemeToggle);
