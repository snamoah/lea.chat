import { io } from 'socket.io-client'
import React, { FC, FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import MainLayoutComponent from '../components/MainLayout'
import { useScrollToBottom } from '../hooks/useScrollToBottom'

export interface NewMessage {
  isAgent?: boolean
  content: string
}

export interface MessageRequest extends NewMessage {
  requestId: string
}

const MainLayout: FC = () => {
  const [currentUser, setCurrentUser] = useState('')
  const [newMessage, setNewMessage] = useState('')
  const [requests, setRequests] = useState<MessageRequest[]>([])
  const [messages, setMessages] = useState<NewMessage[]>([])
  const chatAreaRef = useRef(null)
  const socket = useMemo(() => io(process.env.REACT_APP_WEBSOCKET_URL), [])

  useScrollToBottom(chatAreaRef)

  useEffect(() => {
    if (!socket || socket.connected) {
      return
    }

    socket.on('connect', () => {
      console.log('Socket connected')
      socket.on('message', (message: NewMessage) => {
        setMessages((prevMessages) => [...prevMessages, message])
      })

      socket.on('agent-message-request', (newRequest: MessageRequest) => {
        setRequests((prevRequests) => [...prevRequests, newRequest])
      })

      socket.on('agent-fetch-user-messages', (messages: NewMessage[]) => {
        setMessages(messages)
      })
    })

    return () => {
      if (socket.connected) {
        socket.disconnect()
      }
    }
  }, [socket])

  const handleSubmitNewMessage = (event: FormEvent) => {
    event.preventDefault()
    socket.emit('message', {
      requestId: currentUser,
      isAgent: true,
      content: newMessage,
    })
    setNewMessage('')
  }

  const handleSetActiveUser = (id: string) => {
    setCurrentUser(id)
    socket.emit('agent-join', {
      previousId: currentUser,
      currentId: id,
    })
    socket.emit('agent-fetch-user-messages', id)
  }

  return (
    <MainLayoutComponent
      activeUser={currentUser}
      setActiveUser={handleSetActiveUser}
      newMessage={newMessage}
      messages={messages}
      requests={requests}
      sendMessage={handleSubmitNewMessage}
      onInputNewMessage={setNewMessage}
      chatAreaRef={chatAreaRef}
    />
  )
}

export default MainLayout
