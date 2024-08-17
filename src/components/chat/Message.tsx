import { Message as IMessage } from '@/hooks/useTeam'
import { Flex } from 'antd'

interface Props {
  m: IMessage
}

export const Message = ({ m }: Props) => (
  <Flex className={`message ${m.me ? 'message-right' : 'message-left'}`}>
    {m.text}
  </Flex>
)
