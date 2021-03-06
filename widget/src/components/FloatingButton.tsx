import { h, FunctionComponent } from 'preact'
import CloseIcon from '../icons/CloseIcon'
import ChatBubbleIcon from '../icons/ChatBubbleIon'
import styles from '../styles/FloatingButton.css'

interface FloatingButtonProps {
  onClick(): void
  active: boolean
}

const FloatingButton: FunctionComponent<FloatingButtonProps> = ({ onClick, active }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      {active ? <CloseIcon size={20} /> : <ChatBubbleIcon size={30} />}
    </div>
  )
}

export default FloatingButton
