import clsx from 'clsx'
import { h, VNode } from 'preact'
import styles from '../styles/IconButton.css'

interface IconButtonProps {
  classNames?: string
  icon: VNode
  onClick: (e: MouseEvent) => void
}

const IconButton = ({ classNames, icon, onClick }: IconButtonProps) => {
  return (
    <div role="button" className={clsx(styles.wrapper, classNames)} onClick={onClick}>
      {icon}
    </div>
  )
}

export default IconButton
