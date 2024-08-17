/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTeam } from '@/hooks/useTeam'
import { generateId } from '@/utils/generateId'
import { FrownOutlined, SendOutlined } from '@ant-design/icons'
import { Button, Flex, Input } from 'antd'
import { LegacyRef, useState } from 'react'

interface Props {
  messagesEndRef: LegacyRef<HTMLDivElement>
}

export const Controls = ({ messagesEndRef }: Props) => {
  const [text, setText] = useState('')
  const sendMessage = useTeam((s) => s.sendMessage)
  const onChange = (e: any) => setText(e.target.value)

  const scrollToBottom = () => {
    setTimeout(() => {
      // @ts-ignore
      if (messagesEndRef && messagesEndRef.current) { messagesEndRef.current.scrollIntoView({ behavior: 'smooth' }) }
    }, 100)
  }

  const onSend = () => {
    sendMessage({ id: generateId(), text, user: '001', me: true, date: new Date().toString() })
    scrollToBottom()
    setText('')
  }

  return (
    <Flex style={{ padding: 20, gap: 10, alignItems: 'center' }}>
      <Button style={{ border: 'none' }} shape="circle" icon={<FrownOutlined />} />
      <Input value={text} onPressEnter={onSend} onChange={onChange} style={{ border: 'none' }} placeholder="Start typing..." />
      <Button onClick={onSend} style={{ border: 'none' }} shape="circle" icon={<SendOutlined />} />
    </Flex>
  )
}
