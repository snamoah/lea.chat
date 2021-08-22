export class ChatMessageDto {
  requestId: string
  isAgent?: boolean
  content: string
  sentAt?: string
}

export class MessageRequestDto {
  requestId: string
  content: string
}

export class AgentJoinDto {
  previousId: string
  currentId: string
}
