import { h, FunctionComponent } from 'preact'
import CloseIcon from '../icons/CloseIcon'
import ChatBubbleIcon from '../icons/ChatBubbleIon'
import styles from '../styles/FloatingButton.css'

interface FloatingButtonProps {
  onClick(): void
  active: boolean
  position?: 'left' | 'right'
}

const FloatingButton: FunctionComponent<FloatingButtonProps> = ({
  position = 'right',
  onClick,
  active,
}) => {
  return (
    <div
      className={`${styles.container} ${styles.bottom} ${styles[position]}`}
      onClick={onClick}
    >
      {active ? <CloseIcon /> : <ChatBubbleIcon />}
    </div>
  )
}

export default FloatingButton
