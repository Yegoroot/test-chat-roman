import { Flex } from 'antd'
import { LegacyRef } from 'react'

import { useTeam } from '@/hooks/useTeam'
import { useContacts } from '@/hooks/useContacts'
import { Message } from './Message'

interface Props {
  messagesEndRef: LegacyRef<HTMLDivElement>
}

export const Body = ({ messagesEndRef }: Props) => {
  const messages = useTeam((s) => s.messages)
  const contacts = useContacts((s) => s.contacts)

  return (
    <Flex style={{ flexGrow: 1, flexDirection: 'column', paddingTop: 30, paddingBottom: 50, overflow: 'auto' }}>
      {messages.map((m) => <Message c={contacts[m.user]} m={m} />)}
      <div ref={messagesEndRef} />
    </Flex>
  )
}
