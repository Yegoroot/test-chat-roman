'use client'

import React, { useRef } from 'react'
import { Header } from '@/components/chat/Header'
import { Body } from '@/components/chat/Body'
import { Controls } from '@/components/chat/Controls'
import { Divider, Flex } from 'antd'

const Home = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  return (
    <Flex className="App" style={{ height: '100vh', overflow: 'hidden', flexDirection: 'column' }}>
      <Header />
      <Divider />
      <Body messagesEndRef={messagesEndRef} />
      <Divider style={{ margin: 0 }} />
      <Controls messagesEndRef={messagesEndRef} />
    </Flex>
  )
}

export default Home
