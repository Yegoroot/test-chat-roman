import { Flex } from 'antd'

import { useTeam } from '@/hooks/useTeam'
import { useContacts } from '@/hooks/useContacts'
import { Message } from './Message'

export const Body = () => {
  const messages = useTeam((s) => s.messages)
  const contacts = useContacts((s) => s.contacts)
  return (
    <Flex style={{ flexGrow: 1, flexDirection: 'column', paddingTop: 30, paddingBottom: 50 }}>
      {messages.map((m) => <Message c={contacts[m.user]} m={m} />)}
    </Flex>
  )
}
