import { h } from 'preact'
import { useState } from 'preact/hooks'
import MessageFormComponent from '../components/MessageForm'

interface MessageFormContainerProps {
  onSubmit(message: string): void
}

const MessageForm = ({ onSubmit: submitForm }: MessageFormContainerProps) => {
  const [message, setMessage] = useState('')

  const onSubmit = (e: Event) => {
    e.preventDefault()
    submitForm(message)
    setMessage('')
  }

  return (
    <MessageFormComponent
      disabled={!message}
      message={message}
      onTextChange={setMessage}
      onSubmit={onSubmit}
    />
  )
}

export default MessageForm
