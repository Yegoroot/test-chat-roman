'use client'

import React from 'react'
import { Header } from '@/components/chat/Header'
import { Body } from '@/components/chat/Body'
import { Controls } from '@/components/chat/Controls'
import { Divider } from 'antd'

const Home = () => (
  <div className="App">
    <Header />
    <Divider />
    <Body />
    <Controls />
  </div>
)

export default Home
