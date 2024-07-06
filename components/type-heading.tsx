"use client"
import { FC, useEffect, useState, memo, useMemo } from "react";

interface ThemeToggleProps {
    stack: string[]
}

const TypeHeading: FC<ThemeToggleProps> = ({stack}: ThemeToggleProps) => {
    // the duration in milliseconds
    const duration = 8000;

    const [heading, setHeading] = useState<string>("")
    const [complete, setComplete] = useState<boolean>(false)
    const typeAhead = (index: number) => (index % 2 === 0) ? "" : "_"

    const typeWord = (word: string) => {
        const wordArray = word.split("");
        wordArray.forEach((character, index) => {
            setTimeout(() => { 
                setHeading(`${wordArray.slice(0, index+1).join("")}${typeAhead(index)}`)
            }, index * (duration/2)/(wordArray.length+1))
            
            // When you reach the end of the stack, cease typing. 
            if (index === wordArray.length - 1) return;
        })    
    }

    const untypeWord = (word: string) => {
        const wordArray = word.split("");
        wordArray.forEach((character, index) => {
            setTimeout(() => { 
                setHeading(`${wordArray.slice(0, wordArray.length-index).join("")}${typeAhead(index)}`)
            }, index * (duration/2)/(wordArray.length+1) + (duration/2))
        })    
    }

    const typeEffect = () => {
        if (complete) return

        stack.forEach((sentence, index) => {
            setTimeout(() => { 
                if (index < stack.length) typeWord(sentence)
                if (index < stack.length - 1) untypeWord(sentence)
            }, index * duration)

            // When you reach the end of the stack, cease typing. 
            if (index === stack.length - 1) return setComplete(true)
        })

    }

    useEffect(typeEffect)

    const typeHeading = useMemo(() => (
        <h1>
            {heading}
        </h1>
    ), [heading])

    return typeHeading
}

export default memo(TypeHeading);