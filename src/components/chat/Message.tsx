import { Message as IMessage } from '@/hooks/useTeam'
import { Flex } from 'antd'

interface Props {
  message: IMessage
}

export const Message = ({ message }: Props) => {
  console.log('message', message)

  return <Flex>{message.text}</Flex>
}
