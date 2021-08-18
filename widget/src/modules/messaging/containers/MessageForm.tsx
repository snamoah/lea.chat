import { h } from 'preact'
import MessageFormComponent from '../components/MessageForm'

const MessageForm = () => {
  const onSubmit = (e: Event) => {
    e.preventDefault()
  }
  return (
    <MessageFormComponent
      // disabled={true}
      onSubmit={onSubmit}
    />
  )
}

export default MessageForm
