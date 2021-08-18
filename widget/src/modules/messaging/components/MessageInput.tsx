import clsx from 'clsx'
import { h } from 'preact'
import styles from '../styles/MessageInput.css'

interface MessageInputProps {
  classNames?: string
  onFocus?(): void
}
const MessageInput = ({ classNames, onFocus }: MessageInputProps) => {
  return (
    <textarea
      onFocus={onFocus}
      className={clsx(styles.textarea, classNames)}
      placeholder="Write a reply..."
    />
  )
}

export default MessageInput
