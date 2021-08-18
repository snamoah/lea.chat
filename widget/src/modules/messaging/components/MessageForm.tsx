import { Fragment, h } from 'preact'
import MessageInput from './MessageInput'
import IconButton from '../../../components/IconButton'
import SendIcon from '../../../icons/SendIcon'

import styles from '../styles/MessageForm.css'
import clsx from 'clsx'
import SmileIcon from '../../../icons/SmileIcon'
import ImageIcon from '../../../icons/ImageIcon'
import PaperClipIcon from '../../../icons/PaperClipIcon'
import VerticalThreeDotsIcon from '../../../icons/VerticalThreeDotsIcon'

export interface MessageFormProps {
  onSubmit(e: Event): void
  disabled?: boolean
  onFocus?(): void
}
const MessageForm = ({ onFocus, disabled, onSubmit }: MessageFormProps) => (
  <form className={styles.form} onSubmit={onSubmit}>
    <MessageInput classNames={styles.input} onFocus={onFocus} />

    {disabled && (
      <div className={styles.actions}>
        <SmileIcon size={20} />
        <ImageIcon size={20} />
        <PaperClipIcon size={20} />
        <VerticalThreeDotsIcon size={20} />
      </div>
    )}

    {!disabled && (
      <IconButton
        onClick={onSubmit}
        icon={<SendIcon />}
        classNames={clsx([styles.submitButton, disabled && styles.submitButtonDisabled])}
      />
    )}
  </form>
)

export default MessageForm
