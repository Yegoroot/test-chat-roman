import { Contact } from '@/hooks/useContacts'
import { Message as IMessage } from '@/hooks/useTeam'
import { Avatar, Flex, Typography } from 'antd'
import dayjs from 'dayjs'

const { Text } = Typography

interface Props {
  m: IMessage
  c: Contact
}

export const Message = ({ m, c }: Props) => (
  <Flex className={`message ${m.me ? 'message-right' : 'message-left'}`}>
    <Flex className="message__avatar">
      <Avatar src={c.avatar}>{c.name[0]}</Avatar>
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
)
