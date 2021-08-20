import {
  WebSocketServer,
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WsResponse,
  ConnectedSocket,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { AgentJoinDto, ChatMessageDto, MessageRequestDto } from './chat.dto'

let lastRoomNumber: 0
const sessions = {}

@WebSocketGateway({
  cors: true,
})
export class ChatGateway {
  @WebSocketServer()
  server: Server

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: ChatMessageDto) {
    const message = {
      ...data,
      sentAt: new Date().toISOString(),
    }

    sessions[data.requestId].push(message)

    this.server.to(data.requestId).emit('message', message)
  }

  @SubscribeMessage('message-request')
  handleMessageRequest(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: MessageRequestDto,
  ) {
    client.join(data.requestId)

    const message = {
      ...data,
      sentAt: new Date().toISOString(),
    }

    sessions[data.requestId] = [message]

    this.server.emit('agent-message-request', message)

    client.emit('message', message)
  }

  @SubscribeMessage('agent-fetch-user-messages')
  handleAgentFetchUserMessage(@MessageBody() userId: string): WsResponse<unknown> {
    const data = sessions[userId]
    const event = 'agent-fetch-user-messages'
    return {
      event,
      data,
    }
  }

  @SubscribeMessage('agent-join')
  handleAgentJoinChat(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: AgentJoinDto,
  ) {
    const { previousId, currentId } = data

    if (sessions[previousId] && client.rooms.has(previousId)) {
      client.leave(previousId)
    }

    client.join(currentId)
  }
}
