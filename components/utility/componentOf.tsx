
import { cn } from "@/lib/utils"
import { ReactElement, createElement, JSX, ReactNode } from "react"

export function ComponentOf({jsx, style}: {jsx: any, style?: string}) {
  return componentOfElement(jsx, style)
}

export function componentOfElement(el: ReactElement, style?: string): JSX.Element | ReactNode {
  const hasChildren = el?.props?.children
  const hasChildrenArray = hasChildren && Array.isArray(hasChildren)

  if (!el?.type) return `${el}`

  const children = hasChildrenArray 
      ? el.props.children.map((child: any) => componentOfElement(child, style)) 
      : componentOfElement(el.props.children, style)

  const component = createElement(
    el.type, 
    { ...el.props, key:`${el.type}-${el.key}`, className: cn(el.props.className, style) }, 
    children
  )

  return component
}
