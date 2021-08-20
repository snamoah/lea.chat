import {
  WebSocketServer,
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WsResponse,
} from '@nestjs/websockets'
import { Server } from 'socket.io'

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Server

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: any): WsResponse<unknown> {
    const event = 'message'
    return { event, data }
  }
}
