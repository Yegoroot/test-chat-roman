'use client'

import { generateId } from '@/utils/generateId'
import { initialMessages } from '@/utils/initialMessages'
import { imitationOfLoading } from '@/utils/sleep'
import { RefObject } from 'react'
import { create } from 'zustand'

export type Message = {
  id: string,
  text: string,
  me?: boolean,
  date: string
  user: string
}
interface TeamState {
  name: string
  lastseen: string
  participants: string[]
  messages: Message[]
  isTyping: string[]
  activeMessageId: null | string
  sendMessage: (m: Message, bottomRef: RefObject<HTMLDivElement>)=> void
  setActiveMessageId: (id: string)=> void
  editMessage: (text: string) => void
  deleteMessage: (id: string)=> void
}

export const useTeam = create<TeamState>((set) => {
  if (typeof window !== 'undefined' && !localStorage.getItem('messages')) {
    localStorage.setItem('messages', JSON.stringify(initialMessages))
  }

  return {
    name: '🦄 Team Unicorns',
    lastseen: '2024-08-17 19:18:17.040+03:00',
    participants: ['001', '002', '003', '004', '005'],
    isTyping: ['005'],
    activeMessageId: null,
    sendMessage: async (m: Message, bottomRef: RefObject<HTMLDivElement>) => {
      const robotMessage = { date: new Date().toString(), id: generateId('any'), text: 'Hello!', user: '005', }
      set((s) => ({ messages: [...s.messages, m] }))
      setTimeout(() => { if (bottomRef.current) { bottomRef.current.scrollIntoView({ behavior: 'smooth' }) } }, 100)
      await imitationOfLoading()
      set((s) => {
        localStorage.setItem('messages', JSON.stringify(s.messages))
        return { messages: [...s.messages, robotMessage] }
      })
      setTimeout(() => { if (bottomRef.current) { bottomRef.current.scrollIntoView({ behavior: 'smooth' }) } }, 100)
    },
    setActiveMessageId: (id: string) => {
      set({ activeMessageId: id })
    },
    editMessage: (text: string) => {
      set((s) => {
        if (!s.activeMessageId) return {}
        const messages = s.messages.map((m) => (m.id === s.activeMessageId ? { ...m, text } : m))
        localStorage.setItem('messages', JSON.stringify(messages))
        return { messages, activeMessageId: null }
      })
    },
    deleteMessage: (id: string) => {
      set((s) => {
        const messages = s.messages.filter((m) => m.id !== id)
        localStorage.setItem('messages', JSON.stringify(messages))
        return { messages }
      })
    },
    messages: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('messages') || '') : initialMessages
  }
})
