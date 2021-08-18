import clsx from 'clsx'
import { ComponentChildren, h } from 'preact'
import styles from '../styles/MessageBubble.css'

interface MessageBubbleProps {
  position: 'right' | 'left'
  children: ComponentChildren
}

const MessageBubble = ({ position, children }: MessageBubbleProps) => {
  return (
    <div className={styles.container}>
      <div className={clsx([styles.bubble, styles[position]])}>{children}</div>
    </div>
  )
}

export default MessageBubble
