import React, { FC, FormEvent } from 'react'
import styled from '@emotion/styled'

const Input = styled.input`
  flex: 1;
  border-radius: 30px;
  border: none;
  background-color: ${({ theme }) => theme.colors.grey.lighter};
  padding: 0 1em;
  outline: none;
  font-size: 14px;
  font-family: 'VarelaRound';
  color: ${({ theme }) => theme.colors.grey.darker};
`

interface MessageInputProps {
  value: string
  onInput(text: string): void
}
const MessageInput: FC<MessageInputProps> = ({ value, onInput }: MessageInputProps) => {
  const handleInput = (event: FormEvent<HTMLInputElement>) =>
    onInput(event.currentTarget.value)

  return <Input value={value} onInput={handleInput} />
}

export default MessageInput
