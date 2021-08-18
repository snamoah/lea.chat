import { h } from 'preact'
import formatDistanceFromNow from 'date-fns/formatDistanceToNow'
import styles from '../styles/MessageAvatar.css'

interface MessageAvatarProps {
  imgSrc: string
  name: string
  date: Date
  online?: boolean
}
const MessageAvatar = ({ imgSrc, name, date, online }: MessageAvatarProps) => {
  const timeAgo = formatDistanceFromNow(date, { includeSeconds: false })

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={imgSrc} alt={`${name} profile picture`} height="30" width="30" />
        {online && <span className={styles.onlineStatus} />}
      </div>
      <div className={styles.content}>
        <header>{name}</header>
        <p>{timeAgo} ago</p>
      </div>
    </div>
  )
}

export default MessageAvatar
