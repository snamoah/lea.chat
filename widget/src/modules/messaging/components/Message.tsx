import { h, ComponentChildren } from 'preact'

interface MessageProps {
  children: ComponentChildren
}

const Message = ({ children }: MessageProps) => {
  return <div>{children}</div>
}

export default Message
