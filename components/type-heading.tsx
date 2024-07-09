"use client"
import { FC, useEffect, useState, memo, useMemo } from "react";

interface ThemeToggleProps {
    className?: string,
    stack: string[]
}

const TypeHeading: FC<ThemeToggleProps> = ({className, stack}: ThemeToggleProps) => {
    // the duration in milliseconds
    const duration = 5000;

    // the string that is shared between all the values in the stack
    let sharedText = ""
    const minLength = Math.min(...stack.map(i => i.length))
    for (let x = 0; x < minLength; x++) {
        const stringToCheck = stack[0].substring(0, x)
        if (!stack.some(val => {
            return val.substring(0, x) !== stack[0].substring(0, x)
        })) {
            sharedText = stringToCheck
        }
    }
    // the stack without the shared string
    const newStack = stack.map(val => val.replace(sharedText, ''));
    
    const [heading, setHeading] = useState<string>("")
    const [complete, setComplete] = useState<boolean>(false)
    
    const typeAhead = (index: number, length: number) => ((index % 2 === 0) || (index === length)) ? "|" : ""

    const typeWord = (word: string) => {
        const wordArray = word.split("");
        wordArray.forEach((character, index) => {
            setTimeout(() => { 
                setHeading(`${wordArray.slice(0, index+1).join("")}${typeAhead(index, wordArray.length)}`)
            }, index * 150)
            
            // When you reach the end of the stack, cease typing. 
            if (index === wordArray.length - 1) return;
        })    
    }

    const untypeWord = (word: string) => {
        const wordArray = word.split("");
        wordArray.forEach((character, index) => {
            setTimeout(() => { 
                setHeading(`${wordArray.slice(0, wordArray.length-index-1).join("")}${typeAhead(index, wordArray.length)}`)
            }, index * 150 + (duration/2))
        })    
    }

    const typeEffect = () => {
        if (complete) return

        newStack.forEach((sentence, index) => {
            setTimeout(() => { 
                if (index < newStack.length) typeWord(sentence)
                if (index < newStack.length - 1) untypeWord(sentence)
            }, index * duration)

            // When you reach the end of the stack, cease typing. 
            if (index === newStack.length - 1) return setComplete(true)
        })

    }

    useEffect(typeEffect)

    const typeHeading = useMemo(() => (
        <h1 className={`text-4xl font-serif ${className}`}>
            {sharedText}{heading}
        </h1>
    ), [heading])

    return typeHeading
}

export default memo(TypeHeading);