import { ReactElement, createElement } from "react"

export function componentOf(el: ReactElement, style: string): JSX.Element {
  const hasChildren = el?.props?.children
  const hasChildrenArray = hasChildren && Array.isArray(hasChildren)

  if (!el?.type) return <></>

  const children = hasChildrenArray 
      ? el.props.children.map(componentOf, style) 
      : el.props.children 

  return createElement(el.type, { key:`${el.type}${el.props.children.length}`, className: style }, children)
}
