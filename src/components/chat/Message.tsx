import dayjs from 'dayjs'
import { Avatar, Badge, Flex, Typography } from 'antd'
import type { MenuProps } from 'antd'

import { ContextMenu } from '@/components/ContextMenu'
import { Contact } from '@/hooks/useContacts'
import { Message as IMessage } from '@/hooks/useTeam'
import { stringToColor } from '@/utils/stringToColor'

const { Text } = Typography

interface Props {
  message: IMessage
  contact: Contact
  contextMenuItems: MenuProps['items']
}

export const Message = ({ message, contact, contextMenuItems }: Props) => (
  <ContextMenu items={message.me ? contextMenuItems : []}>
    <Flex className={`message ${message.me ? 'message-right' : 'message-left'}`}>
      <Flex className="message__avatar">
        <Badge dot style={{ backgroundColor: contact.online ? 'green' : 'transparent' }}>
          <Avatar src={contact.avatar} style={{ backgroundColor: stringToColor(contact.name) }}>{contact.name[0]}</Avatar>
        </Badge>
      </Flex>
      <Flex className="message__body">
        <Text>
          {message.text}
        </Text>
        <Text className="message__date">
          {dayjs(message.date).format('hh:mm A').toString()}
        </Text>
      </Flex>
    </Flex>
  </ContextMenu>
)
