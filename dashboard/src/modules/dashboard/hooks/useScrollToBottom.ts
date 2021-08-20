import { RefObject, useEffect } from 'react'

export const useScrollToBottom = (ref: RefObject<HTMLElement>): void => {
  useEffect(() => {
    const node = ref.current
    if (node) {
      node.scrollTop = Math.max(0, node.scrollHeight - node.clientHeight)
    }
  }, [])
}
