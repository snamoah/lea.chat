import { h, VNode } from 'preact'
import styles from '../styles/MessageList.css'

interface MessageListProps {
  children: VNode | VNode[]
}
const MessageList = ({ children }: MessageListProps) => {
  return <div className={styles.container}>{children}</div>
}

export default MessageList
