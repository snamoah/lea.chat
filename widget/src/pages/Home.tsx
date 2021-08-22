import { FunctionComponent, h } from 'preact'
import { useMemo, useState, useEffect } from 'preact/hooks'
import { io } from 'socket.io-client'
import CompanyTitle from '../components/CompanyTitle'
import Layout from '../layouts/DefaultLayout'
import Message from '../modules/messaging/components/Message'
import MessageAvatar from '../modules/messaging/components/MessageAvatar'
import MessageBubble from '../modules/messaging/components/MessageBubble'
import MessageList from '../modules/messaging/components/MessageList'
import MessageForm from '../modules/messaging/containers/MessageForm'

interface NewMessage {
  isAgent?: boolean
  content: string
  sentAt: string
}
const Home: FunctionComponent = () => {
  const [messages, setMessages] = useState<NewMessage[]>([])
  const socket = useMemo(() => io(process.env.WEBSOCKET_URL), [])

  const requestId = useMemo(() => (Math.random() * 1000000).toString(), [])

  useEffect(() => {
    if (!socket || socket.connected) {
      return
    }

    socket.on('connect', () => {
      console.log('Socket connected')
      socket.on('message', (message: NewMessage) => {
        console.log('===> heya', message)
        setMessages((prevMessages) => [...prevMessages, message])
      })
    })

    return () => {
      if (socket.connected) {
        socket.disconnect()
      }
    }
  }, [socket])

  const onSubmit = (text: string) => {
    if (!messages.length) {
      socket.emit('message-request', {
        requestId,
        content: text,
      })
    } else {
      socket.emit('message', {
        requestId,
        content: text,
      })
    }
  }

  return (
    <Layout
      header={
        <CompanyTitle
          name="Gruut"
          imgSrc="https://github.com/snamoah/gruut/raw/main/public/icons/mstile-150x150.png"
        />
      }
      footer={<MessageForm onSubmit={onSubmit} />}
    >
      <MessageList>
        {messages.map((message, index) => (
          <Message key={index}>
            {message.isAgent && !messages[Math.max(index - 1, 0)].isAgent && (
              <MessageAvatar
                online={true}
                imgSrc="https://github.com/snamoah/snamoah.dev/raw/main/src/images/sam_mobile.png"
                name="Samuel Amoah"
                date={new Date(message.sentAt)}
              />
            )}
            <MessageBubble position={message.isAgent ? 'left' : 'right'}>
              {message.content}
            </MessageBubble>
          </Message>
        ))}
      </MessageList>
    </Layout>
  )
}

export default Home
