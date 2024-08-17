import { Flex } from 'antd'
import { RefObject } from 'react'
import type { MenuProps } from 'antd'

import { Message as IMessage, useTeam } from '@/hooks/useTeam'
import { useContacts } from '@/hooks/useContacts'
import { Message } from './Message'

interface Props {
  messagesEndRef: RefObject<HTMLDivElement>
}

export const Body = ({ messagesEndRef }: Props) => {
  const messages = useTeam((s) => s.messages)
  const editMessage = useTeam((s) => s.editMessage)
  const deleteMessage = useTeam((s) => s.deleteMessage)
  const contacts = useContacts((s) => s.contacts)

  const items = (m: IMessage) => ([
    {
      label: <span onClick={() => editMessage(m.id)}>Edit</span>,
      key: '0',
    },
    {
      label: <span onClick={() => deleteMessage(m.id)}>Delete</span>,
      key: '1',
    }
  ]) as MenuProps['items']

  return (
    <Flex style={{ flexGrow: 1, flexDirection: 'column', paddingTop: 30, paddingBottom: 50, overflow: 'auto' }}>
      {messages.map((m) => <Message contact={contacts[m.user]} contextMenuItems={items(m)} message={m} />)}
      <div ref={messagesEndRef} />
    </Flex>
  )
}
