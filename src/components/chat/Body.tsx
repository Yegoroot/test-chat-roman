import { useTeam } from '@/hooks/useTeam'
import { Flex } from 'antd'
import { Message } from './Message'

export const Body = () => {
  const messages = useTeam((state) => state.messages)
  return (
    <Flex>
      {messages.map((m) => <Message message={m} />)}
    </Flex>
  )
}
