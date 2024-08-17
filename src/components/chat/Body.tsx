import { useTeam } from '@/hooks/useTeam'
import { Flex } from 'antd'
import { Message } from './Message'

export const Body = () => {
  const messages = useTeam((state) => state.messages)
  return (
    <Flex style={{flexGrow: 1, flexDirection: 'column'}}>
      {messages.map((m) => <Message m={m} />)}
    </Flex>
  )
}
