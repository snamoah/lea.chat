import { io } from 'socket.io-client'
import React, { FC, FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import MainLayoutComponent from '../components/MainLayout'
import { useScrollToBottom } from '../hooks/useScrollToBottom'

export interface NewMessage {
  isAgent?: boolean
  content: string
}

const MainLayout: FC = () => {
  const [newMessage, setNewMessage] = useState('')
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
      isAgent: true,
      content: newMessage,
    })
    setNewMessage('')
  }

  return (
    <MainLayoutComponent
      newMessage={newMessage}
      messages={messages}
      sendMessage={handleSubmitNewMessage}
      onInputNewMessage={setNewMessage}
      chatAreaRef={chatAreaRef}
    />
  )
}

export default MainLayout
