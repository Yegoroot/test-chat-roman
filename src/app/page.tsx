'use client'

import React from 'react'
import { Header } from '@/components/chat/Header'
import { Body } from '@/components/chat/Body'
import { Controls } from '@/components/chat/Controls'
import { Divider, Flex } from 'antd'

const Home = () => (
  <Flex className="App" style={{ height: '100vh', overflow: 'hidden', flexDirection: 'column' }}>
    <Header />
    <Divider />
    <Body />
    <Divider style={{ margin: 0 }} />
    <Controls />
  </Flex>
)

export default Home
