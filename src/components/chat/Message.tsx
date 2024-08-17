import dayjs from 'dayjs'
import { Avatar, Badge, Flex, Typography } from 'antd'

import type { MenuProps } from 'antd'
import { ContextMenu } from '@/components/ContextMenu'

import { Contact } from '@/hooks/useContacts'
import { Message as IMessage } from '@/hooks/useTeam'
import { stringToColor } from '@/utils/stringToColor'

const items: MenuProps['items'] = [
  {
    label: <span>Edit</span>,
    key: '0',
  },
  {
    label: <span>Delete</span>,
    key: '1',
  }
]

const { Text } = Typography

interface Props {
  m: IMessage
  c: Contact
}

export const Message = ({ m, c }: Props) => (
  <ContextMenu items={m.me ? items : []}>
    <Flex className={`message ${m.me ? 'message-right' : 'message-left'}`}>
      <Flex className="message__avatar">
        <Badge dot style={{ backgroundColor: c.online ? 'green' : 'transparent' }}>
          <Avatar src={c.avatar} style={{ backgroundColor: stringToColor(c.name) }}>{c.name[0]}</Avatar>
        </Badge>
      </Flex>
      <Flex className="message__body">
        <Text>
          {m.text}
        </Text>
        <Text className="message__date">
          {dayjs(m.date).format('hh:mm A').toString()}
        </Text>
      </Flex>
    </Flex>
  </ContextMenu>
)
