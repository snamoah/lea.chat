import clsx from 'clsx'
import { h } from 'preact'
import autosize from 'autosize'
import { useEffect, useMemo, useRef } from 'preact/hooks'
import styles from '../styles/MessageInput.css'

interface MessageInputProps {
  classNames?: string
  onFocus?(): void
  value: string
  onChange(text: string): void
}
const MessageInput = ({ value, classNames, onFocus, onChange }: MessageInputProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const onChangeHandler = (event: Event) =>
    onChange((event.target as HTMLTextAreaElement).value)

  useEffect(() => {
    if (!value) {
      /**
       * hack to return textarea to previous size
       */
      textAreaRef.current!.style.height = 'auto'
    }
  }, [value])

  useEffect(() => {
    autosize(textAreaRef.current!)
    return () => autosize.destroy(textAreaRef.current!)
  }, [textAreaRef])

  return (
    <div className={clsx(styles.container, classNames)}>
      <textarea
        ref={textAreaRef}
        onFocus={onFocus}
        className={styles.textarea}
        placeholder="Write a reply..."
        value={value}
        rows={1}
        onInput={onChangeHandler}
      />
    </div>
  )
}

export default MessageInput
